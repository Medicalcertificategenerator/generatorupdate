const fs = require('fs');
const path = require('path');

const files = [
  'src/data/blogPosts.tsx',
  'src/data/blogPostsPart2.tsx',
  'src/data/blogPostsPart3.tsx',
  'src/data/blogPostsPart4.tsx',
  'src/data/blogPostsPart5.tsx'
];

const results = [];

files.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Let's use simple regex matching to find all posts in the file.
  // Each post typically starts with { and has a slug.
  // We'll search for 'slug: "[a-zA-Z0-9-]"'
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let match;
  
  while ((match = slugRegex.exec(content)) !== null) {
    const slug = match[1];
    const startIndex = match.index;
    
    // Let's find the closing brace or the next slug/post start to search within its context
    // For simplicity, we search the next 1500 characters after the slug
    const context = content.substring(startIndex, startIndex + 1500);
    
    const hasFeatured = context.includes('featuredImage:');
    const hasImages = context.includes('images:');
    
    results.push({
      file,
      slug,
      hasFeatured,
      hasImages
    });
  }
});

console.log('--- BLOG POSTS IMAGE AUDIT ---');
console.log(`Total posts found: ${results.length}`);
const missingFeatured = results.filter(r => !r.hasFeatured);
const missingImages = results.filter(r => !r.hasImages);

console.log(`\nMissing featuredImage (${missingFeatured.length}):`);
missingFeatured.forEach(r => console.log(`- [${r.file}] ${r.slug}`));

console.log(`\nMissing images (${missingImages.length}):`);
missingImages.forEach(r => console.log(`- [${r.file}] ${r.slug}`));
