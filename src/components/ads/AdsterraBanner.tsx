"use client";

import { useEffect, useState } from "react";

export type AdsterraUnit = "300x250" | "728x90" | "320x50" | "responsive-hero";

interface AdsterraConfig {
  key: string;
  width: number;
  height: number;
  script: string;
  disabled?: boolean;
}

const ADSTERRA_UNITS: Record<string, AdsterraConfig> = {
  "300x250": {
    key: "b0b2f89a7b0da352e3baf03a91c88c36",
    width: 300,
    height: 250,
    script: "https://www.highperformanceformat.com/b0b2f89a7b0da352e3baf03a91c88c36/invoke.js",
  },
  "728x90": {
    key: "a9f016a22525e17d5f76713d4ecfd495",
    width: 728,
    height: 90,
    script: "https://www.highperformanceformat.com/a9f016a22525e17d5f76713d4ecfd495/invoke.js",
  },
  "320x50": {
    key: "15b22b28473689d7c83e120aae3c02e6",
    width: 320,
    height: 50,
    script: "https://www.highperformanceformat.com/15b22b28473689d7c83e120aae3c02e6/invoke.js",
    disabled: true, // Disabled per specification for initial release
  },
};

export interface AdsterraBannerProps {
  unit?: AdsterraUnit;
  label?: string;
  className?: string;
  showLabel?: boolean;
  placementId?: string;
}

export function AdsterraBanner({
  unit = "300x250",
  label = "ADVERTISEMENT",
  className = "",
  showLabel = true,
  placementId,
}: AdsterraBannerProps) {
  const [mounted, setMounted] = useState(false);
  const [activeUnit, setActiveUnit] = useState<"300x250" | "728x90" | "320x50">("300x250");

  useEffect(() => {
    setMounted(true);
    if (unit === "responsive-hero") {
      const isDesktop = window.innerWidth >= 768;
      setActiveUnit(isDesktop ? "728x90" : "300x250");
    } else if (unit === "300x250" || unit === "728x90" || unit === "320x50") {
      setActiveUnit(unit);
    }
  }, [unit]);

  const config = ADSTERRA_UNITS[activeUnit];

  if (!mounted || !config || config.disabled) {
    // Reserve vertical space before mounting to prevent CLS
    const height = config ? config.height : 250;
    const width = config ? config.width : 300;
    return (
      <div
        data-placement-id={placementId}
        className={`my-6 flex flex-col items-center justify-center w-full overflow-hidden transition-all duration-300 ${className}`}
        style={{ minHeight: `${height + (showLabel ? 20 : 0)}px` }}
      >
        <div
          style={{ width: `${width}px`, height: `${height}px`, maxWidth: "100%" }}
          className="bg-muted/10 rounded border border-border/20"
        />
      </div>
    );
  }

  const { key, width, height, script } = config;

  const srcDoc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
    }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : '${key}',
      'format' : 'iframe',
      'height' : ${height},
      'width' : ${width},
      'params' : {}
    };
  </script>
  <script type="text/javascript" src="${script}"></script>
</body>
</html>`;

  return (
    <div
      data-placement-id={placementId}
      className={`my-6 md:my-8 flex flex-col items-center justify-center w-full overflow-hidden transition-all duration-300 ${className}`}
    >
      {showLabel && label && (
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/40 mb-1 font-mono select-none">
          {label}
        </span>
      )}
      <div
        className="flex items-center justify-center max-w-full overflow-hidden"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          maxWidth: "100%",
        }}
      >
        <iframe
          title={`Adsterra Ad ${width}x${height}`}
          srcDoc={srcDoc}
          width={width}
          height={height}
          style={{
            border: "none",
            overflow: "hidden",
            maxWidth: "100%",
            height: `${height}px`,
            width: `${width}px`,
          }}
          scrolling="no"
        />
      </div>
    </div>
  );
}
