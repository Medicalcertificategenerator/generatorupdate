import re

with open("src/views/Generator.tsx", "r") as f:
    content = f.read()

# 1. Add debounced data
imports_pattern = r'import { useState, useRef, useEffect } from "react";'
new_imports = 'import { useState, useRef, useEffect, useMemo } from "react";'
content = content.replace(imports_pattern, new_imports)

state_pattern = r'const \[data, setData\] = useState<CertificateData>\(DEFAULT_DATA\);'
new_state = """const [data, setData] = useState<CertificateData>(DEFAULT_DATA);
  const [debouncedData, setDebouncedData] = useState<CertificateData>(DEFAULT_DATA);"""
content = content.replace(state_pattern, new_state)

effect_pattern = r'useEffect\(\(\) => \{\n    setData\(\(prev\) => \(\{ \.\.\.prev, date: format\(new Date\(\), "yyyy-MM-dd"\) \}\)\);\n    setShareUrl\(window\.location\.href\);\n    setCanNativeShare\(\!\!navigator\.share\);\n  \}, \[\]\);'
new_effect = """useEffect(() => {
    const today = format(new Date(), "yyyy-MM-dd");
    setData((prev) => ({ ...prev, date: today }));
    setDebouncedData((prev) => ({ ...prev, date: today }));
    setShareUrl(window.location.href);
    setCanNativeShare(!!navigator.share);
  }, []);

  // Debounce the preview to prevent input lag and flickering
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedData(data);
    }, 300);
    return () => clearTimeout(timeout);
  }, [data]);"""
content = content.replace(effect_pattern, new_effect)

# Update CertificatePreview usage to use debouncedData
preview_pattern = r'<CertificatePreview ref=\{certificateRef\} data=\{data\} templateId=\{templateId\} hideWatermark=\{false\} />'
new_preview = '<CertificatePreview ref={certificateRef} data={debouncedData} templateId={templateId} hideWatermark={false} />'
content = content.replace(preview_pattern, new_preview)

# Add hybrid generator for Homepage!
# The task also asks for TASK 1: HOMEPAGE GENERATOR (LIGHT VERSION) and TASK 4: CERTIFICATE HISTORY.
# We will do those in Home.tsx. But wait! I should write that separately.

with open("src/views/Generator.tsx", "w") as f:
    f.write(content)
print("patched generator")
