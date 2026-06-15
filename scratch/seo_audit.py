# -*- coding: utf-8 -*-
import os
import re
import json

# Define paths
WORKSPACE_ROOT = "/Users/riponchakma/Desktop/medicalgenerator/generator"
LANDING_PAGES_FILE = os.path.join(WORKSPACE_ROOT, "src/data/landingPages.ts")
CERTIFICATE_FILE = os.path.join(WORKSPACE_ROOT, "src/types/certificate.ts")
BLOG_FILES = [
    os.path.join(WORKSPACE_ROOT, "src/data/blogPosts.tsx"),
    os.path.join(WORKSPACE_ROOT, "src/data/blogPostsPart2.tsx"),
    os.path.join(WORKSPACE_ROOT, "src/data/blogPostsPart3.tsx"),
    os.path.join(WORKSPACE_ROOT, "src/data/blogPostsPart4.tsx"),
    os.path.join(WORKSPACE_ROOT, "src/data/blogPostsPart5.tsx")
]
APP_DIR = os.path.join(WORKSPACE_ROOT, "app")

# Helper to normalize URLs
def normalize_path(path):
    if not path:
        return ""
    # Strip protocol and domain if absolute
    path = re.sub(r"^https?://(www\.)?(medicalcertificategenerator\.co\.in|medicalgenerator\.com)", "", path)
    # Ensure it starts with /
    if not path.startswith("/") and not path.startswith("http"):
        path = "/" + path
    # Remove trailing slash for uniformity (except for root /)
    if path != "/" and path.endswith("/"):
        path = path[:-1]
    # Remove hash/query parameters
    path = path.split("#")[0].split("?")[0]
    return path

# 1. Gather all valid paths on the website
valid_paths = set()

# Static pages
static_paths = [
    "/",
    "/generator",
    "/medical-exemption-certificate",
    "/obc-non-creamy-layer-certificate",
    "/ews-certificate",
    "/ayushman-bharat-eligibility-checker",
    "/blog",
    "/about",
    "/author",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/dmca",
    "/editorial-guidelines",
    "/search"
]
for p in static_paths:
    valid_paths.add(p)

# Extract landing page slugs
landing_page_slugs = []
noindex_landing_pages = []
if os.path.exists(LANDING_PAGES_FILE):
    with open(LANDING_PAGES_FILE, "r", encoding="utf-8") as f:
        lp_content = f.read()
    # Simple regex to find slug: "..." or slug: '...'
    slugs = re.findall(r"slug:\s*[\"']([^\"']+)[\"']", lp_content)
    landing_page_slugs = list(set(slugs))
    for s in landing_page_slugs:
        valid_paths.add("/" + s)
    
    # Check noindex in landingPages.ts
    # Let's find each landing page object and see if noindex: true is there
    # We can split by page comments or similar, or just parse line-by-line
    # But let's check for noindex matches:
    noindexes = re.findall(r"slug:\s*[\"']([^\"']+)[\"'].*?noindex:\s*true", lp_content, re.DOTALL)
    for n in noindexes:
        noindex_landing_pages.append(n)

# Extract blog slugs
blog_slugs = []
for bf in BLOG_FILES:
    if os.path.exists(bf):
        with open(bf, "r", encoding="utf-8") as f:
            b_content = f.read()
        slugs = re.findall(r"slug:\s*[\"']([^\"']+)[\"']", b_content)
        blog_slugs.extend(slugs)
blog_slugs = list(set(blog_slugs))
for s in blog_slugs:
    valid_paths.add("/blog/" + s)

# Extract template IDs
template_ids = []
if os.path.exists(CERTIFICATE_FILE):
    with open(CERTIFICATE_FILE, "r", encoding="utf-8") as f:
        cert_content = f.read()
    t_ids = re.findall(r"id:\s*[\"']([^\"']+)[\"']", cert_content)
    template_ids = list(set(t_ids))
    for t in template_ids:
        valid_paths.add("/generator/" + t)

print(f"Total valid paths collected: {len(valid_paths)}")

# 2. Track all links in the application
# We want to find: source -> target
internal_links = [] # list of dicts: {"source": str, "target": str, "context": str}
external_links = [] # list of dicts: {"source": str, "target": str, "anchor": str}
noindex_pages = []

# Analyze static page files
for root, dirs, files in os.walk(APP_DIR):
    for file in files:
        if file == "page.tsx" or file == "page.ts":
            full_path = os.path.join(root, file)
            rel_dir = os.path.relpath(root, APP_DIR)
            if rel_dir == ".":
                source_route = "/"
            else:
                source_route = "/" + rel_dir.replace("\\", "/")
                # Replace dynamic parameters e.g., [landingSlug] or [templateId]
                if "[landingSlug]" in source_route:
                    continue # handled by landing pages config
                if "[templateId]" in source_route:
                    continue # handled by templates
            
            with open(full_path, "r", encoding="utf-8") as f:
                p_content = f.read()
            
            # Check for noindex in page files
            if "index: false" in p_content or "noindex" in p_content:
                noindex_pages.append(source_route)
            
            # Find links in static pages
            # We look for Link href or a href
            hrefs = re.findall(r"href=[\"']([^\"']+)[\"']", p_content)
            for h in hrefs:
                norm_h = normalize_path(h)
                if h.startswith("http") and not norm_h.startswith("/"):
                    # External link
                    # Simple regex to find anchor text surrounding this href can be complicated, let's keep it simple
                    external_links.append({"source": source_route, "target": h, "anchor": "Static page link"})
                else:
                    if norm_h and not norm_h.startswith("mailto:") and not norm_h.startswith("tel:"):
                        internal_links.append({"source": source_route, "target": norm_h, "context": f"Static page {source_route}"})

# Analyze landing pages in landingPages.ts
if os.path.exists(LANDING_PAGES_FILE):
    with open(LANDING_PAGES_FILE, "r", encoding="utf-8") as f:
        lp_content = f.read()
    
    # We can split the landing pages array by pages
    pages_raw = re.split(r"//\s*PAGE\s+\d+:", lp_content)
    # The first element is the interface, discard it
    for praw in pages_raw[1:]:
        slug_match = re.search(r"slug:\s*[\"']([^\"']+)[\"']", praw)
        if not slug_match:
            continue
        slug = slug_match.group(1)
        source_route = "/" + slug
        
        # Parse noindex
        noindex_match = re.search(r"noindex:\s*true", praw)
        if noindex_match:
            noindex_pages.append(source_route)
        
        # Extract relatedPages: { title: "...", href: "..." }
        related_section = re.search(r"relatedPages:\s*\[(.*?)\]", praw, re.DOTALL)
        if related_section:
            related_content = related_section.group(1)
            hrefs = re.findall(r"href:\s*[\"']([^\"']+)[\"']", related_content)
            for h in hrefs:
                norm_h = normalize_path(h)
                internal_links.append({"source": source_route, "target": norm_h, "context": "relatedPages"})
        
        # Extract externalLinks: { label: "...", href: "..." }
        ext_section = re.search(r"externalLinks:\s*\[(.*?)\]", praw, re.DOTALL)
        if ext_section:
            ext_content = ext_section.group(1)
            links_list = re.findall(r"\{\s*label:\s*[\"']([^\"']+)[\"'],\s*href:\s*[\"']([^\"']+)[\"']", ext_content)
            for label, href in links_list:
                external_links.append({"source": source_route, "target": href, "anchor": label})
        
        # Extract standard text fields (which might contain markdown or raw links)
        # Search for markdown links [text](url) or HTML links
        all_text = praw
        md_links = re.findall(r"\[([^\]]+)\]\(([^)]+)\)", all_text)
        for text, url in md_links:
            norm_url = normalize_path(url)
            if url.startswith("http") and not norm_url.startswith("/"):
                external_links.append({"source": source_route, "target": url, "anchor": text})
            else:
                internal_links.append({"source": source_route, "target": norm_url, "context": f"Markdown link in {source_route}"})
        
        html_links = re.findall(r"href=[\"']([^\"']+)[\"']", all_text)
        for url in html_links:
            # Skip if it is part of relatedPages or externalLinks parsed above
            norm_url = normalize_path(url)
            if url.startswith("http") and not norm_url.startswith("/"):
                # Avoid duplicates
                if not any(el["source"] == source_route and el["target"] == url for el in external_links):
                    external_links.append({"source": source_route, "target": url, "anchor": "HTML anchor link"})
            else:
                if not any(il["source"] == source_route and il["target"] == norm_url and il["context"] == "relatedPages" for il in internal_links):
                    internal_links.append({"source": source_route, "target": norm_url, "context": f"HTML link in {source_route}"})

# Analyze blog posts
for bf in BLOG_FILES:
    if os.path.exists(bf):
        with open(bf, "r", encoding="utf-8") as f:
            b_content = f.read()
        
        # Let's split by individual blog post objects
        posts_raw = re.split(r"slug:\s*[\"']", b_content)
        for praw in posts_raw[1:]:
            slug = praw.split("[']")[0].split('"')[0]
            source_route = "/blog/" + slug
            
            # Extract internal links via InternalLink href="..." or Link href="..." or a href="..."
            il_matches = re.findall(r"<(InternalLink|Link)\s+href=[\"']([^\"']+)[\"']([^>]*)>(.*?)</\1>", praw, re.DOTALL)
            for tag, href, attrs, text in il_matches:
                norm_href = normalize_path(href)
                # Strip JSX tags or curly braces from text if any
                clean_text = re.sub(r"<[^>]+>", "", text).strip()
                internal_links.append({"source": source_route, "target": norm_href, "context": f"<{tag}> anchor: '{clean_text}'"})
            
            # Extract standard a href tags (usually external links, but could be internal too)
            a_matches = re.findall(r"<a\s+[^>]*href=[\"']([^\"']+)[\"']([^>]*)>(.*?)</a>", praw, re.DOTALL)
            for href, attrs, text in a_matches:
                norm_href = normalize_path(href)
                clean_text = re.sub(r"<[^>]+>", "", text).strip()
                if href.startswith("http") and not norm_href.startswith("/"):
                    external_links.append({"source": source_route, "target": href, "anchor": clean_text})
                else:
                    if norm_href and not norm_href.startswith("mailto:") and not norm_href.startswith("tel:"):
                        internal_links.append({"source": source_route, "target": norm_href, "context": f"<a> anchor: '{clean_text}'"})

# 3. Analyze Broken Links
broken_links = []
for il in internal_links:
    target = il["target"]
    if target not in valid_paths and target != "":
        # Ignore external links or empty/hash-only
        broken_links.append(il)

# 4. Analyze Orphan Pages
# Any valid path that has zero incoming internal links
incoming_counts = {p: 0 for p in valid_paths}
for il in internal_links:
    target = il["target"]
    if target in incoming_counts:
        incoming_counts[target] += 1

orphan_pages = [p for p, count in incoming_counts.items() if count == 0 and p != "/"]

# 5. Analyze External Links Requirements
# Verify that every page has 1-3 external links to high-authority domains (.gov, .edu, or .org)
external_by_page = {}
# Initialize for all pages
for p in valid_paths:
    external_by_page[p] = []

for el in external_links:
    src = el["source"]
    if src in external_by_page:
        external_by_page[src].append(el)

external_link_issues = []
for page, el_list in external_by_page.items():
    # Ignore admin/search if applicable, but check regular pages
    if page in ["/search", "/privacy-policy", "/terms", "/dmca"]:
        continue
    
    count = len(el_list)
    
    # Check domains
    invalid_domain_links = []
    for el in el_list:
        target_url = el["target"]
        domain_match = re.search(r"https?://([^/]+)", target_url)
        if domain_match:
            domain = domain_match.group(1).lower()
            # Check if domain ends with high-authority suffixes
            is_valid = False
            valid_suffixes = [".gov", ".gov.in", ".nic.in", ".edu", ".edu.in", ".org", ".org.in", ".int"]
            for suffix in valid_suffixes:
                if domain.endswith(suffix):
                    is_valid = True
                    break
            if not is_valid:
                invalid_domain_links.append(el)
    
    # Exclude boilerplate/utility routes from counts
    utility_routes = [
        "/privacy-policy", "/terms", "/dmca", "/about", "/author", "/contact",
        "/editorial-guidelines", "/search", "/generator"
    ]
    if page in utility_routes or page.startswith("/generator/"):
        continue
        
    if count < 1 or count > 3 or len(invalid_domain_links) > 0:
        external_link_issues.append({
            "page": page,
            "count": count,
            "links": [{"target": el["target"], "anchor": el["anchor"]} for el in el_list],
            "invalid_links": [{"target": el["target"], "anchor": el["anchor"]} for el in invalid_domain_links]
        })

# 6. Report Findings
print("\n=== SEO AUDIT FINDINGS ===")
print(f"Total Valid Paths: {len(valid_paths)}")
print(f"Total Internal Links scanned: {len(internal_links)}")
print(f"Total External Links scanned: {len(external_links)}")

print(f"\n--- Broken Internal Links ({len(broken_links)}) ---")
for bl in broken_links[:20]:
    print(f"Source: {bl['source']} -> Target: {bl['target']} (Context: {bl['context']})")

print(f"\n--- Orphan Pages ({len(orphan_pages)}) ---")
for op in orphan_pages:
    print(f"Orphan Page: {op}")

print(f"\n--- Noindex Pages ({len(noindex_pages)}) ---")
for nip in noindex_pages:
    print(f"Noindex Page: {nip}")

print(f"\n--- External Link Issues ({len(external_link_issues)}) ---")
for issue in external_link_issues[:10]:
    print(f"Page: {issue['page']} has {issue['count']} ext links. Invalid: {len(issue['invalid_links'])}")
    if issue['invalid_links']:
        print(f"  Invalid Links: {issue['invalid_links']}")
