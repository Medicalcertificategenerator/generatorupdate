import re

with open("src/views/Generator.tsx", "r") as f:
    content = f.read()

# Add scale state
state_pattern = r'const \[debouncedData, setDebouncedData\] = useState<CertificateData>\(DEFAULT_DATA\);'
new_state = """const [debouncedData, setDebouncedData] = useState<CertificateData>(DEFAULT_DATA);
  const [previewScale, setPreviewScale] = useState(1);
  const previewWrapperRef = useRef<HTMLDivElement>(null);"""
content = content.replace(state_pattern, new_state)

# Add ResizeObserver effect
effect_pattern = r'return \(\) => clearTimeout\(timeout\);\n  \}, \[data\]\);'
new_effect = """return () => clearTimeout(timeout);
  }, [data]);

  // Handle responsive preview scaling
  useEffect(() => {
    if (!previewWrapperRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        // The base design and html-to-image export works best at 680px width
        setPreviewScale(Math.min(1, width / 680));
      }
    });
    observer.observe(previewWrapperRef.current);
    return () => observer.disconnect();
  }, []);"""
content = content.replace(effect_pattern, new_effect)

# Update Preview render
render_pattern = r'<m\.div initial=\{\{ opacity: 0, scale: 0\.95 \}\} animate=\{\{ opacity: 1, scale: 1 \}\}\n\s*transition=\{\{ duration: 0\.4 \}\} className="w-full max-w-\[800px\] flex-shrink-0">\n\s*<CertificatePreview ref=\{certificateRef\} data=\{debouncedData\} templateId=\{templateId\} hideWatermark=\{false\} />\n\s*</m\.div>'

new_render = """<m.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }} 
              className="w-full max-w-[680px] mx-auto bg-transparent relative flex-shrink-0"
              ref={previewWrapperRef}
              style={{ aspectRatio: '1 / 1.414' }}
            >
              <div style={{ width: 680, transform: `scale(${previewScale})`, transformOrigin: "top left", position: "absolute", top: 0, left: 0 }}>
                <CertificatePreview ref={certificateRef} data={debouncedData} templateId={templateId} hideWatermark={false} />
              </div>
            </m.div>"""
content = re.sub(render_pattern, new_render, content, flags=re.DOTALL)

with open("src/views/Generator.tsx", "w") as f:
    f.write(content)
print("patched wrapper")
