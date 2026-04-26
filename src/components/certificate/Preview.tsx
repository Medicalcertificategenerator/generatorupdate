import { forwardRef } from "react";
import { format } from "date-fns";
import type { CertificateData } from "@/types/certificate";

interface PreviewProps {
  data: CertificateData;
  templateId: string;
  hideWatermark?: boolean;
}

// ─── Per-character handwriting renderer ──────────────────────────────────────
// Uses a deterministic "pseudo-random" based on char code + position so output
// is stable between renders but still looks like real pen-on-paper variation.
function hwRand(charCode: number, index: number, salt: number) {
  return ((charCode * 1000003 + index * 999983 + salt * 998981) % 10000) / 10000;
}

function HWText({
  text,
  fontFamily,
  inkColor,
  fontSize,
  baseRot = 0,
  style = {},
  className = "",
}: {
  text: string;
  fontFamily: string;
  inkColor: string;
  fontSize: number | string;
  baseRot?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  if (!text) return <span>&nbsp;</span>;

  const chars = text.split("");

  return (
    <span
      className={className}
      style={{
        fontFamily,
        color: inkColor,
        display: "inline-block",
        fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
        lineHeight: 1.35,
        filter: "url(#hw-ink)",
        ...style,
      }}
    >
      {chars.map((ch, i) => {
        if (ch === " ") {
          return (
            <span key={i} style={{ display: "inline-block", width: "0.32em" }}>
              &nbsp;
            </span>
          );
        }
        const cc = ch.charCodeAt(0);
        const rot = baseRot + (hwRand(cc, i, 1) - 0.5) * 5.5; // ±2.75°
        const dy = (hwRand(cc, i, 2) - 0.5) * 3.4; // ±1.7px baseline wobble
        const sx = 0.88 + hwRand(cc, i, 3) * 0.28; // 0.88–1.16 width squeeze
        const op = 0.78 + hwRand(cc, i, 4) * 0.22; // 0.78–1.0 ink pressure
        const letterSpacing = (hwRand(cc, i, 5) - 0.5) * 1.6; // ±0.8px kerning drift
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              transform: `rotate(${rot.toFixed(2)}deg) translateY(${dy.toFixed(2)}px) scaleX(${sx.toFixed(3)})`,
              transformOrigin: "bottom center",
              opacity: op,
              marginRight: `${letterSpacing.toFixed(2)}px`,
              textShadow: `0.4px 0.5px 0.6px ${inkColor}33, 0px 0px 1px ${inkColor}18`,
            }}
          >
            {ch}
          </span>
        );
      })}
    </span>
  );
}

// ─── SVG ink filter – inject once per certificate container ──────────────────
function InkFilter() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute", overflow: "hidden" }}
      aria-hidden="true"
    >
      <defs>
        <filter id="hw-ink" x="-5%" y="-5%" width="110%" height="110%">
          {/* Subtle displacement to simulate wobbly pen strokes */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.028 0.055"
            numOctaves="4"
            seed="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="1.2"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          {/* Ink bleed: slight blur + darken composite */}
          <feGaussianBlur in="displaced" stdDeviation="0.18" result="blurred" />
          <feComposite in="displaced" in2="blurred" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

// ─── Stable Watermark element (not a component, just conditional JSX) ────────
function WatermarkOverlay({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 5,
      }}
    >
      <span
        style={{
          fontSize: 120,
          fontWeight: 900,
          color: "rgba(200,0,0,0.055)",
          transform: "rotate(-40deg)",
          letterSpacing: 8,
          fontFamily: "Arial Black, sans-serif",
          userSelect: "none",
          filter: "url(#hw-ink)",
        }}
      >
        DEMO
      </span>
    </div>
  );
}

export const CertificatePreview = forwardRef<HTMLDivElement, PreviewProps>(
  ({ data, templateId, hideWatermark = false }, ref) => {
    const fontFamily =
      data.font === "caveat"
        ? '"Caveat", cursive'
        : data.font === "dancing"
        ? '"Dancing Script", cursive'
        : '"Kalam", cursive';

    const inkColor =
      data.color === "blue"
        ? "#1a3a8f"
        : data.color === "black"
        ? "#1a1a1a"
        : "#1976b8";

    const fs = data.textSize;

    const formattedDate = data.date
      ? format(new Date(data.date), "dd / MM / yy")
      : "";
    const formattedDateLong = data.date
      ? format(new Date(data.date), "dd MMMM yyyy")
      : "";

    // Shorthand helper – NOT a component, just a function that returns JSX.
    // This avoids React treating it as a new component type on every render.
    const hw = (
      text: string,
      deg = 0,
      size?: number,
      bold = false,
    ) => (
      <HWText
        text={text}
        fontFamily={fontFamily}
        inkColor={inkColor}
        fontSize={size ?? fs}
        baseRot={deg}
        style={{ fontWeight: bold ? 700 : 400 }}
      />
    );

    const showWatermark = data.watermark && !hideWatermark;

    // ─────────────────────────────────────────────
    // Template 1: Formal Medical Certificate
    // ─────────────────────────────────────────────
    if (templateId === "formal-cert") {
      return (
        <div
          ref={ref}
          style={{
            width: "100%",
            maxWidth: 680,
            margin: "0 auto",
            aspectRatio: "1 / 1.414",
            background: "#f7f5ef",
            border: "2px solid #c9c4b8",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 4px 30px rgba(0,0,0,0.15)",
            fontFamily: "Georgia, serif",
            padding: "6% 7%",
            boxSizing: "border-box",
          }}
        >
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          {/* Paper grain overlay */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")", pointerEvents: "none", zIndex: 1 }} />
          <div style={{ position: "absolute", inset: 10, border: "1px solid #c9c4b8", pointerEvents: "none", zIndex: 3 }} />
          <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ textAlign: "center", borderBottom: "3px solid #1a2040", paddingBottom: 14, marginBottom: 18 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                <span style={{ color: "#c0392b", fontSize: 32, fontWeight: 900 }}>+</span>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#1a2040", letterSpacing: 1, margin: 0, textTransform: "uppercase" }}>
                  {data.hospitalName || "City General Hospital"}
                </div>
              </div>
              <p style={{ margin: "4px 0 0", fontSize: 10, letterSpacing: 3, color: "#555", textTransform: "uppercase" }}>Official Medical Documentation</p>
            </div>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <h2 style={{ fontSize: 17, fontWeight: 800, color: "#1a2040", letterSpacing: 4, textDecoration: "underline", textUnderlineOffset: 6, margin: 0, textTransform: "uppercase" }}>Medical Certificate</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 14, fontSize: 14, color: "#333" }}>
              <span>Date:&nbsp;</span>
              <span style={{ borderBottom: "1px dashed #999", minWidth: 160, paddingLeft: 8 }}>
                {hw(formattedDateLong, -0.4, 14)}
              </span>
            </div>
            <p style={{ fontSize: 14, marginBottom: 12, color: "#333" }}>This is to certify that I have examined patient</p>
            <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
              <div style={{ display: "flex", flex: 1 }}>
                <span style={{ fontSize: 14, color: "#333", whiteSpace: "nowrap" }}>Name:&nbsp;</span>
                <span style={{ borderBottom: "1px dashed #999", flex: 1, paddingLeft: 4 }}>
                  {hw(data.patientName, 0.6, fs)}
                </span>
              </div>
              <div style={{ display: "flex", width: 110 }}>
                <span style={{ fontSize: 14, color: "#333", whiteSpace: "nowrap" }}>Age:&nbsp;</span>
                <span style={{ borderBottom: "1px dashed #999", flex: 1, paddingLeft: 4 }}>
                  {hw(data.age, -0.8, fs)}
                </span>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: 10 }}>
              <span style={{ fontSize: 14, color: "#333", whiteSpace: "nowrap" }}>Gender:&nbsp;</span>
              <span style={{ borderBottom: "1px dashed #999", width: 140, paddingLeft: 4 }}>
                {hw(data.gender, 0.3, fs)}
              </span>
            </div>
            <div style={{ display: "flex", marginBottom: 10 }}>
              <span style={{ fontSize: 14, color: "#333", whiteSpace: "nowrap" }}>Diagnosis:&nbsp;</span>
              <span style={{ borderBottom: "1px dashed #999", flex: 1, paddingLeft: 4 }}>
                {hw(data.diagnosis, -0.3, fs)}
              </span>
            </div>
            <div style={{ display: "flex", marginBottom: 14 }}>
              <span style={{ fontSize: 14, color: "#333", whiteSpace: "nowrap" }}>Recommendations:&nbsp;</span>
              <span style={{ borderBottom: "1px dashed #999", flex: 1, paddingLeft: 4 }}>
                {hw(data.notes, 0.4, fs)}
              </span>
            </div>
            <div style={{ fontSize: 14, color: "#333", marginBottom: 20, display: "flex", flexWrap: "wrap", gap: 4, alignItems: "flex-end" }}>
              <span>The patient is advised to rest for&nbsp;</span>
              <span style={{ borderBottom: "1px dashed #999", minWidth: 50, display: "inline-block", textAlign: "center" }}>
                {hw(data.restDays, -0.6, fs)}
              </span>
              <span>&nbsp;days, starting from the date above.</span>
            </div>
            <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ width: 130, borderBottom: "1px solid #999", marginBottom: 4 }} />
                <p style={{ fontSize: 11, color: "#666", margin: 0 }}>Patient Signature</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontFamily: '"Dancing Script", cursive', fontSize: 38, color: inkColor, opacity: 0.75, display: "block", transform: "rotate(-8deg)", marginBottom: -8, filter: "url(#hw-ink)" }}>
                  {data.doctorName.replace("Dr. ", "").split(" ").slice(-1)[0] || "Sig"}
                </span>
                <div style={{ width: 200, borderBottom: "2px solid #1a2040", marginBottom: 4 }} />
                <p style={{ fontSize: 12, fontWeight: 800, color: "#1a2040", margin: 0, textTransform: "uppercase", fontFamily: "Georgia, serif" }}>
                  {data.doctorName || "Dr. Sarah Johnson"}
                </p>
                <p style={{ fontSize: 10, color: "#555", margin: "2px 0 0", fontFamily: "Arial, sans-serif" }}>
                  {data.doctorDegree || "MBBS, MD"} — Attending Physician
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────────
    // Template 2: Pandey Homyo Dawakhana
    // ─────────────────────────────────────────────
    if (templateId === "pandey-homyo" || templateId === "pandey-homyo-2") {
      return (
        <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1 / 1.414", background: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.15)", fontFamily: "Arial, sans-serif", boxSizing: "border-box" }}>
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          <div style={{ background: "#fff", borderBottom: "2px solid #8b1a1a", textAlign: "center", padding: "10px 16px 8px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <span style={{ color: "#8b1a1a", fontSize: 20, fontWeight: 900 }}>+</span>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#8b1a1a", margin: 0 }}>{data.hospitalName || "पाण्डेय होम्यो दवाखाना"}</div>
              <span style={{ color: "#8b1a1a", fontSize: 20, fontWeight: 900 }}>+</span>
            </div>
            <div style={{ fontSize: 10, color: "#8b1a1a", marginTop: 4 }}>☤ डॉ. {data.doctorName || "हर्षित पाण्डेय"} — {data.doctorDegree || "BHMS, M.D."}</div>
            <div style={{ fontSize: 9, color: "#666", marginTop: 2 }}>समय: सुबह 9 से 3 बजे तक | शाम - 5 से 9 बजे तक</div>
          </div>
          <div style={{ display: "flex", height: "calc(100% - 80px)" }}>
            <div style={{ width: 130, borderRight: "1px solid #8b1a1a", padding: "10px 6px", fontSize: 9, color: "#333", flexShrink: 0 }}>
              {[{ title: "बच्चों के रोग", items: ["दांत निकलते समय", "दस्त/पीलिया", "खांसी (निमानिया)", "सर्दी (साइनस)", "टान्सिलाइटिस", "पेट के कीड़े", "माईग्रेन", "एलर्जी"] }, { title: "पेट के रोग", items: ["पाचन संबंधी तकलीफ", "पाईल्स/फीशर"] }, { title: "चर्मरोग", items: ["पिम्पल्स/मस्से", "एक्जिमा", "सोरियासिस", "ल्यूकोडर्मा", "बाल झड़ना"] }, { title: "जोड़ संबंधी", items: ["वात/अर्थराईटिस", "स्पोन्डिलाईटिस"] }].map((sec) => (
                <div key={sec.title} style={{ marginBottom: 8 }}>
                  <div style={{ background: "#8b1a1a", color: "#fff", padding: "2px 5px", borderRadius: 3, fontSize: 8, fontWeight: 700, marginBottom: 3 }}>{sec.title}</div>
                  {sec.items.map((item) => <div key={item} style={{ display: "flex", gap: 2, marginBottom: 1 }}><span>•</span><span>{item}</span></div>)}
                </div>
              ))}
            </div>
            <div style={{ flex: 1, padding: "16px 20px", position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ fontFamily: "Georgia, serif", fontSize: 22, fontStyle: "italic", fontWeight: 900 }}>Rx</span>
                {hw(formattedDate, -0.4, 14)}
              </div>
              <div style={{ marginBottom: 8 }}>{hw(data.patientName, 0.5, fs + 2)}</div>
              <div style={{ marginBottom: 12 }}>{hw(`Age - ${data.age} / ${data.gender === "Male" ? "M" : "F"}`, 0.3, fs)}</div>
              {data.diagnosis.split(/[,\n]/).filter(Boolean).map((line, i) => (
                <div key={i} style={{ marginBottom: 6, paddingLeft: i > 0 ? 8 : 0 }}>
                  {hw(line.trim(), i % 2 === 0 ? 0.4 : -0.5, fs)}
                </div>
              ))}
              {data.notes && <div style={{ marginTop: 6, marginBottom: 6 }}>{hw(data.notes, 0.3, fs)}</div>}
              <div style={{ marginTop: 16, paddingLeft: 30 }}>{hw(`advice - Rest for ${data.restDays} days`, -0.4, fs)}</div>
              <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, borderTop: "1px solid #8b1a1a", padding: "5px 10px", textAlign: "center", fontSize: 8, color: "#8b1a1a", fontWeight: 600 }}>
                परहेज :- दवा खाने के 10 मिनट पहले/बाद में कुछ नहीं खाना पीना है।
              </div>
            </div>
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────────
    // Template 3: Janya Hospital
    // ─────────────────────────────────────────────
    if (templateId === "janya-rx") {
      return (
        <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1 / 1.414", background: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.15)", fontFamily: "Arial, sans-serif", padding: "5% 7%", boxSizing: "border-box" }}>
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ textAlign: "center", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #c0392b" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <span style={{ color: "#c0392b", fontSize: 22, fontWeight: 900 }}>+</span>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#333", margin: 0 }}>{data.hospitalName || "जन्या हास्पिटल"}</div>
                <span style={{ color: "#c0392b", fontSize: 22, fontWeight: 900 }}>+</span>
              </div>
              <div style={{ fontSize: 10, color: "#555" }}>{data.address || "Vijay Nagar, Delhi"} | Tel: {data.phone || "07624-292263"}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ fontFamily: "Georgia, serif", fontSize: 20, fontStyle: "italic", fontWeight: 900 }}>Rx</span>
              <span style={{ fontSize: 13, color: "#555" }}>Date : {hw(formattedDate, -0.4, 13)}</span>
            </div>
            <div style={{ marginBottom: 6 }}>{hw(data.patientName, 0.5, fs + 2)}</div>
            <div style={{ marginBottom: 14 }}>{hw(`Age - ${data.age} / ${data.gender === "Male" ? "M" : "F"}`, 0.3, fs)}</div>
            {[data.diagnosis, ...data.notes.split("\n")].filter(Boolean).map((line, i) => (
              <div key={i} style={{ marginBottom: 10, paddingLeft: i > 0 ? 12 : 0 }}>
                {hw(line.trim(), i % 2 === 0 ? 0.4 : -0.4, fs)}
              </div>
            ))}
            <div style={{ marginTop: 18, paddingLeft: 20 }}>{hw(`R/d - ${data.restDays} Days`, -0.5, fs, true)}</div>
            <div style={{ marginTop: 12, paddingLeft: 20 }}>{hw(`Rest for ${data.restDays} Days`, 0.3, fs)}</div>
            <div style={{ marginTop: "auto", borderTop: "1px solid #ddd", paddingTop: 8 }}>
              <div style={{ background: "#8b1a1a", color: "#fff", padding: "4px 10px", borderRadius: 3, fontSize: 9, textAlign: "center" }}>
                उपलब्ध सुविधायें | सभी प्रकार आपातकालीन सेवा 24 घंटे उपलब्ध है
              </div>
            </div>
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────────
    // Template 4: P.G. Multispeciality
    // ─────────────────────────────────────────────
    if (templateId === "pg-compact") {
      return (
        <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1 / 1.414", background: "#fffef8", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.15)", fontFamily: "Georgia, serif", padding: "7%", boxSizing: "border-box" }}>
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          <div style={{ border: "2px solid #8b1a1a", borderRadius: 4, padding: "5% 6%", height: "100%", boxSizing: "border-box", position: "relative", zIndex: 2 }}>
            <div style={{ textAlign: "center", marginBottom: 14 }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#8b1a1a", margin: 0, letterSpacing: 1 }}>{data.hospitalName || "P.G. Multispeciality Hospital"}</div>
            </div>
            <div style={{ border: "1px solid #8b1a1a", padding: "4px 12px", textAlign: "center", marginBottom: 14, display: "inline-block", width: "100%", boxSizing: "border-box" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#8b1a1a", letterSpacing: 2 }}>MEDICAL CERTIFICATE</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.9, color: "#222" }}>
              This is certify that Mr./Mrs./Ku.{" "}
              {hw(data.patientName, 0.4, 14)} is/was advised rest from{" "}
              {hw(formattedDate, -0.4, 13)} to{" "}
              {hw(`${data.restDays} Days`, 0.5, 13)}. As he/she is/was suffering form.
            </p>
            <div style={{ marginTop: 14, marginBottom: 14 }}>
              {data.diagnosis.split(/[,\n]/).filter(Boolean).map((line, i) => (
                <div key={i} style={{ marginBottom: 10 }}>
                  {hw(line.trim(), i % 2 === 0 ? 0.4 : -0.4, fs)}
                </div>
              ))}
              <div style={{ marginTop: 8 }}>{hw(`Rest for ${data.restDays} Days`, -0.5, fs)}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", paddingTop: 20 }}>
              <div>
                <span style={{ fontSize: 12, color: "#555" }}>DATE : </span>
                {hw(formattedDate, -0.3, 12)}
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ width: 160, borderBottom: "1px solid #555", marginBottom: 3 }} />
                <p style={{ fontSize: 11, margin: 0, color: "#555" }}>Signature &amp; Stamp</p>
                <p style={{ fontSize: 11, margin: 0, color: "#333", fontWeight: 700 }}>{data.doctorName || "Dr. Vikram Sharma"}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────────
    // Template 5: Ishnavi Clinic
    // ─────────────────────────────────────────────
    if (templateId === "ishnavi-clinic") {
      return (
        <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1 / 1.414", background: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.15)", fontFamily: "Arial, sans-serif", boxSizing: "border-box" }}>
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          <div style={{ padding: "12px 20px 10px", borderBottom: "2px solid #eee" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#1a1a5e", margin: 0 }}>{data.hospitalName || "Ishnavi Clinic"}</div>
                <p style={{ fontSize: 9, color: "#666", margin: "3px 0 0" }}>Timings Morning: 9:30 am to 2:00 pm | Evening: 5:00 pm to 9:30 pm</p>
              </div>
              <div style={{ textAlign: "right", fontSize: 10, color: "#555" }}>
                <div style={{ fontWeight: 700 }}>{data.doctorName || "Dr. ISNAVI PATEL"}</div>
                <div>{data.doctorDegree || "MBBS, MD"}</div>
                <div>{data.phone || "07624-292263"}</div>
              </div>
            </div>
          </div>
          <div style={{ padding: "16px 24px", position: "relative", zIndex: 2 }}>
            <div style={{ marginBottom: 8 }}>{hw(data.patientName, 0.5, fs + 2)}</div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
              {hw(`Age - ${data.age} Years`, 0.3, fs)}
              {hw(formattedDate, -0.4, fs)}
            </div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 20, fontStyle: "italic", fontWeight: 900, marginBottom: 10 }}>Rx</div>
            <div style={{ marginBottom: 8 }}>{hw(`c/o ${data.diagnosis}`, 0.3, fs)}</div>
            <div style={{ marginBottom: 8, paddingLeft: 12 }}>{hw(data.notes, -0.4, fs)}</div>
            <div style={{ marginTop: 16 }}>
              {[`Tab ${data.doctorName.split(" ").pop() || "Lofat"} + BP`, `Tab Arowell – A2+BP`, `Tab Oroxan SM`, `Tab Servio. OO.B.`].map((med, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  {hw(med, i % 2 === 0 ? 0.4 : -0.5, fs - 1)}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>{hw(`${data.restDays} Days Rest`, -0.4, fs, true)}</div>
            <div style={{ position: "absolute", bottom: 40, right: 24, textAlign: "right" }}>
              <span style={{ fontFamily: '"Dancing Script", cursive', fontSize: 36, color: inkColor, opacity: 0.75, filter: "url(#hw-ink)" }}>
                {data.doctorName.split(" ").pop()}
              </span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid #ddd", padding: "6px 20px", fontSize: 9, color: "#444" }}>
            Please Bring This Prescription for Next Visit. | {data.address || "SEC 14, VASANTH MG, VIJAY NAGAR, DELHI."}
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────────
    // Template 6: Muskan Maternity
    // ─────────────────────────────────────────────
    if (templateId === "muskan-maternity") {
      return (
        <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1 / 1.414", background: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.15)", fontFamily: "Arial, sans-serif", boxSizing: "border-box" }}>
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          <div style={{ background: "linear-gradient(135deg, #e91e8c, #d81b60)", padding: "10px 20px" }}>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#fff", margin: 0 }}>{data.hospitalName || "Muskan Maternity & Children Hospital"}</div>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.85)", margin: "3px 0 0" }}>Pediatrician, Gynecologist And Obstetrician</p>
          </div>
          <div style={{ padding: "14px 22px", position: "relative", zIndex: 2 }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 8, fontSize: 13, alignItems: "center", flexWrap: "wrap" }}>
              <span style={{ color: "#555" }}>Name:</span>
              <span style={{ borderBottom: "1px solid #ddd", flex: 1 }}>{hw(data.patientName, 0.4, fs)}</span>
              <span style={{ color: "#555" }}>Age:</span>
              {hw(data.age, -0.4, fs)}
              <span style={{ color: "#555" }}>Sex:</span>
              {hw(data.gender === "Male" ? "M" : "F", 0.3, fs)}
              <span style={{ color: "#555" }}>Date:</span>
              {hw(formattedDate, -0.3, fs)}
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: 8, marginBottom: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: "50%", border: "2px solid #e91e8c", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "Georgia", fontSize: 14, fontStyle: "italic", color: "#e91e8c" }}>Rx</span>
              </div>
            </div>
            {[data.diagnosis, ...data.notes.split(/[\n,]/).filter(Boolean)].map((line, i) => (
              <div key={i} style={{ marginBottom: 10, paddingLeft: 10 }}>
                {hw(line.trim(), i % 2 === 0 ? 0.4 : -0.5, fs)}
              </div>
            ))}
            <div style={{ marginTop: 16, paddingLeft: 10 }}>
              {hw(`Prescribed ${data.restDays} days of strict recumbence`, -0.3, fs)}
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(135deg, #e91e8c, #d81b60)", padding: "8px 20px" }}>
            <p style={{ margin: 0, color: "#fff", fontSize: 11, fontWeight: 700 }}>{data.hospitalName || "Muskan Maternity & Children Hospital"}</p>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.85)", fontSize: 9 }}>Telephone No: {data.phone || "07624-292263"}</p>
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────────
    // Template 7: Palak Maternity
    // ─────────────────────────────────────────────
    if (templateId === "palak-maternity") {
      return (
        <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1 / 1.414", background: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.15)", fontFamily: "Arial, sans-serif", padding: "5% 7%", boxSizing: "border-box" }}>
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid #ddd" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: "#444", marginBottom: 2 }}>{data.doctorName || "Dr. Palak Patel"}</div>
              <div style={{ fontSize: 9, color: "#666" }}>Gynecologist And Obstetrician</div>
            </div>
            <div style={{ flex: 2, textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#e91e8c", margin: 0, letterSpacing: 1 }}>{data.hospitalName || "Palak Maternity Hospital"}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, marginBottom: 6, fontSize: 13, alignItems: "flex-end" }}>
            <span style={{ color: "#555" }}>Name:</span>
            <span style={{ borderBottom: "1px solid #ccc", flex: 1 }}>{hw(data.patientName, 0.5, fs)}</span>
            <span style={{ color: "#555" }}>Age:</span>
            {hw(data.age, -0.4, fs)}
            <span style={{ color: "#555" }}>Sex:</span>
            {hw(data.gender === "Male" ? "M" : "F", 0.3, fs)}
            <span style={{ color: "#555" }}>Date:</span>
            {hw(formattedDate, -0.3, fs)}
          </div>
          <div style={{ fontFamily: "Georgia", fontSize: 16, fontStyle: "italic", fontWeight: 900, margin: "12px 0" }}>Rx</div>
          {[data.diagnosis, ...data.notes.split(/[\n,]/).filter(Boolean)].map((line, i) => (
            <div key={i} style={{ marginBottom: 10, paddingLeft: 8 }}>
              {hw(line.trim(), i % 2 === 0 ? 0.4 : -0.5, fs)}
            </div>
          ))}
          <div style={{ marginTop: 20, paddingLeft: 8 }}>
            {hw(`Prescribed ${data.restDays} days of strict recumbence`, -0.3, fs)}
          </div>
          <div style={{ position: "absolute", bottom: 16, left: 0, right: 0, textAlign: "center", fontSize: 9, color: "#666", borderTop: "1px solid #ddd", paddingTop: 6 }}>
            Telephone No: {data.phone || "07624-292263"}
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────────
    // Template 8: A.N.K Multispeciality
    // ─────────────────────────────────────────────
    if (templateId === "ank-multi") {
      return (
        <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1 / 1.414", background: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.15)", fontFamily: "Arial, sans-serif", padding: "5% 7%", boxSizing: "border-box" }}>
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          <div style={{ textAlign: "center", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #8b1a1a" }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#1a1a1a", margin: 0, letterSpacing: 1 }}>{data.hospitalName || "A.N.K MULTISPECIALITY HOSPITAL"}</div>
          </div>
          <div style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 13, alignItems: "flex-end", borderBottom: "1px solid #ddd", paddingBottom: 8 }}>
            <span style={{ color: "#555" }}>Name:</span>
            <span style={{ flex: 1 }}>{hw(data.patientName, 0.5, fs)}</span>
          </div>
          <div style={{ display: "flex", gap: 12, marginBottom: 14, fontSize: 13, alignItems: "center" }}>
            <span style={{ color: "#555" }}>Age:</span>{hw(data.age, -0.4, fs)}
            <span style={{ color: "#555" }}>Sex:</span>{hw(data.gender === "Male" ? "M" : "F", 0.3, fs)}
            <span style={{ color: "#555" }}>Date:</span>{hw(formattedDate, -0.3, fs)}
          </div>
          <div style={{ display: "flex", gap: 14, marginBottom: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid #8b1a1a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "Georgia", fontSize: 18, fontStyle: "italic", color: "#8b1a1a", fontWeight: 900 }}>Rx</span>
            </div>
          </div>
          {[data.diagnosis, ...data.notes.split(/[\n,]/).filter(Boolean)].map((line, i) => (
            <div key={i} style={{ marginBottom: 10, paddingLeft: 14 }}>
              {hw(line.trim(), i % 2 === 0 ? 0.4 : -0.5, fs)}
            </div>
          ))}
          <div style={{ marginTop: 20, paddingLeft: 14 }}>{hw(`Rest for ${data.restDays} days | avoid activities`, -0.4, fs)}</div>
          <div style={{ position: "absolute", bottom: 16, left: "7%", right: "7%", borderTop: "1px solid #ddd", paddingTop: 6, fontSize: 9, color: "#555" }}>
            {data.address || "Wright Town"} | Telephone No: {data.phone || "07624-292263"}
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────────
    // Template 9: Aditya Multispeciality
    // ─────────────────────────────────────────────
    if (templateId === "aditya-multi") {
      return (
        <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1 / 1.414", background: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.15)", fontFamily: "Arial, sans-serif", boxSizing: "border-box" }}>
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          <div style={{ background: "#f5c518", padding: "10px 20px", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 22 }}>☤</span>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#1a1a1a", margin: 0, textTransform: "uppercase", letterSpacing: 1 }}>{data.hospitalName || "Aditya Multispeciality Hospital"}</div>
          </div>
          <div style={{ height: 4, background: "#c8a200" }} />
          <div style={{ padding: "16px 22px", position: "relative", zIndex: 2 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 6, fontSize: 13, alignItems: "flex-end" }}>
              <span style={{ color: "#555" }}>Name:</span>
              <span style={{ borderBottom: "1px solid #ccc", flex: 1, paddingLeft: 4 }}>{hw(data.patientName, 0.5, fs)}</span>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16, fontSize: 13, alignItems: "center" }}>
              <span style={{ color: "#555" }}>Age:</span>{hw(data.age, -0.4, fs)}
              <span style={{ color: "#555" }}>Sex:</span>{hw(data.gender === "Male" ? "M" : "F", 0.3, fs)}
              <span style={{ color: "#555" }}>Date:</span>{hw(formattedDate, -0.3, fs)}
            </div>
            <div style={{ fontFamily: "Georgia", fontSize: 18, fontStyle: "italic", fontWeight: 900, marginBottom: 14 }}>Rx</div>
            {[data.diagnosis, ...data.notes.split(/[\n,]/).filter(Boolean)].map((line, i) => (
              <div key={i} style={{ marginBottom: 10, paddingLeft: i > 0 ? 14 : 0 }}>
                {hw(line.trim(), i % 2 === 0 ? 0.4 : -0.5, fs)}
              </div>
            ))}
            <div style={{ marginTop: 18 }}>{hw(`advice - Rest for ${data.restDays} days`, -0.4, fs)}</div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid #ddd", padding: "6px 22px", fontSize: 9, color: "#444" }}>
            {data.address || "Sno. 45, 450 Vijay Nagar Road, Delhi"} | Telephone No: {data.phone || "07624-292263"}
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────────
    // Template 10: D.P.K Hospital
    // ─────────────────────────────────────────────
    if (templateId === "dpk-hospital") {
      return (
        <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1 / 1.414", background: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.15)", fontFamily: "Arial, sans-serif", boxSizing: "border-box" }}>
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          <div style={{ padding: "10px 20px", borderBottom: "2px solid #1a3a6b" }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#1a3a6b", margin: 0 }}>{data.hospitalName || "D.P.K Hospital"}</div>
            <p style={{ fontSize: 9, color: "#555", margin: "2px 0 0" }}>{data.address || "11 CHORD RD. OPP. VASANTH, VIJAY NAGAR"} | {data.phone || "07624-292263"}</p>
          </div>
          <div style={{ display: "flex", height: "calc(100% - 60px)" }}>
            <div style={{ flex: 1, padding: "14px 18px", position: "relative", zIndex: 2 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <div style={{ fontSize: 13 }}>Name: {hw(data.patientName, 0.5, fs)}</div>
                {hw(formattedDate, -0.3, 13)}
              </div>
              <div style={{ fontFamily: "Georgia", fontSize: 18, fontStyle: "italic", fontWeight: 900, margin: "8px 0 10px" }}>Rx</div>
              {[data.diagnosis, ...data.notes.split(/[\n,]/).filter(Boolean)].map((line, i) => (
                <div key={i} style={{ marginBottom: 10, paddingLeft: i > 0 ? 12 : 0 }}>
                  {hw(line.trim(), i % 2 === 0 ? 0.4 : -0.5, fs)}
                </div>
              ))}
              <div style={{ marginTop: 16 }}>{hw(`advice - Rest for ${data.restDays} days`, -0.4, fs)}</div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "2px solid #1a3a6b", padding: "6px 18px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#1a3a6b" }}>{data.hospitalName || "D.P.K Hospital"}</div>
                <div style={{ fontSize: 9, color: "#555" }}>{data.doctorName || "DR. VIJAY KUMAR"} | {data.address || "CHORD RD. OPP. VASANTH, VIJAY NAGAR"}</div>
              </div>
            </div>
            <div style={{ width: 130, borderLeft: "1px solid #ddd", padding: "10px 8px", fontSize: 9, color: "#333" }}>
              <div style={{ fontWeight: 700, marginBottom: 6, fontSize: 10, color: "#1a3a6b" }}>Dosage :</div>
              {["सुबह-सुबह, शाम", "20 दें, सुबह, सारे पानी में घोल है"].map((row, i) => (
                <div key={i} style={{ marginBottom: 4, lineHeight: 1.5 }}>{row}</div>
              ))}
              <div style={{ marginTop: 10, fontWeight: 700 }}>दवाखाना बंद रहेगा :</div>
              <div style={{ marginTop: 3, lineHeight: 1.6, color: "#555" }}>21 फरवरी, 15 अगस्त, 23 नवम्बर</div>
            </div>
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────────
    // Template 11: Mishra Dental Clinic
    // ─────────────────────────────────────────────
    if (templateId === "mishra-dental") {
      return (
        <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1 / 1.414", background: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.15)", fontFamily: "Arial, sans-serif", padding: "5% 7%", boxSizing: "border-box" }}>
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid #1a1a1a" }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#1a1a1a", margin: 0 }}>{data.hospitalName || "Mishra Dental Clinic"}</div>
              <p style={{ fontSize: 9, color: "#555", margin: "3px 0 0" }}>Smile Designing | Teeth Whitening | Dental Implants | General Dentistry</p>
            </div>
            <div style={{ textAlign: "right", fontSize: 9, color: "#444" }}>
              <div style={{ fontWeight: 700 }}>{data.doctorName || "Dr. AshuTosh Mishra"}</div>
              <div>B.D.S DENTAL &amp; ORAL SURGEON</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            {hw(formattedDate, -0.4, 13)}
            {hw(data.patientName, 0.5, 14)}
          </div>
          <div style={{ fontFamily: "Georgia", fontSize: 16, fontStyle: "italic", marginBottom: 14 }}>Rx,</div>
          {[
            { label: "after meals", meds: [`Tab. Augmentin 625mg — 1 - 0 - 1 x ${data.restDays || 5}days`, `Tab. Enaflam — 1 - 0 - 1 x ${data.restDays || 5}days`] },
            { label: "before meals", meds: [`Tab. PanD 40mg — 1 - 0 - 0 x ${data.restDays || 5}days`] },
          ].map((group, gi) => (
            <div key={gi} style={{ display: "flex", gap: 12, marginBottom: 10 }}>
              <div style={{ fontSize: 9, color: "#555", width: 60, textAlign: "right", paddingTop: 2, fontStyle: "italic" }}>{group.label} {"{"}</div>
              <div>
                {group.meds.map((med, mi) => (
                  <div key={mi} style={{ marginBottom: 6 }}>
                    {hw(med, mi % 2 === 0 ? 0.4 : -0.4, fs - 1)}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ marginTop: 14 }}>{hw(data.diagnosis, 0.3, fs)}</div>
          <div style={{ marginTop: 10 }}>{hw(`Rest for ${data.restDays} days`, -0.4, fs)}</div>
          <div style={{ position: "absolute", bottom: 40, right: "7%", textAlign: "right" }}>
            <span style={{ fontFamily: '"Dancing Script", cursive', fontSize: 38, color: inkColor, opacity: 0.75, filter: "url(#hw-ink)" }}>
              {data.doctorName.split(" ").pop()}
            </span>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid #ddd", padding: "5px 7%", fontSize: 9, color: "#444" }}>
            {data.phone || "07624292263"} | {data.doctorName || "DR. ASHUTOSH MISHRA"} | {data.address || "SEC 24, OPP. VASANTH MG, VIJAY NAGAR"}
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────────
    // Template 12: Health First Clinic
    // ─────────────────────────────────────────────
    if (templateId === "health-first") {
      return (
        <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1 / 1.414", background: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.15)", fontFamily: "Arial, sans-serif", boxSizing: "border-box" }}>
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 18px", borderBottom: "2px solid #c0392b" }}>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#c0392b", margin: 0 }}>{data.hospitalName || "Health First Clinic"}</div>
            <span style={{ fontSize: 22 }}>☤</span>
            <div style={{ textAlign: "right", fontSize: 9, color: "#444" }}>
              <div>{data.doctorName || "Dr. Manoj Verma"} (MBBS, MD)</div>
              <div>{data.address || "Timing: 6:00 pm to 10:00 pm (Sunday Holiday)"}</div>
            </div>
          </div>
          <div style={{ display: "flex", height: "calc(100% - 62px)" }}>
            <div style={{ width: 110, borderRight: "1px solid #eee", padding: "10px 6px", fontSize: 8.5, color: "#333" }}>
              {["• शुगर/डायबिटीज", "• हृदय रोग", "• ब्लड प्रेशर", "• दमा", "• टी.बी. फेफड़े के रोग", "• पेट के रोग", "• सिर रोग", "• मानसिक रोग", "• एलर्जी एवं चर्म रोग", "• गुदा रोग", "• पुरुष असाध्य रोग"].map((item) => (
                <div key={item} style={{ marginBottom: 3 }}>{item}</div>
              ))}
            </div>
            <div style={{ flex: 1, padding: "14px 16px", position: "relative", zIndex: 2 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 13, alignItems: "flex-end", flexWrap: "wrap" }}>
                <span style={{ color: "#555" }}>Name</span>
                <span style={{ borderBottom: "1px solid #ccc", flex: 1, minWidth: 80 }}>{hw(data.patientName, 0.5, fs)}</span>
                <span style={{ color: "#555" }}>Age</span>{hw(data.age, -0.4, fs)}
                <span style={{ color: "#555" }}>Sex</span>{hw(data.gender === "Male" ? "M" : "F", 0.3, fs)}
                <span style={{ color: "#555" }}>Date</span>{hw(formattedDate, -0.3, fs)}
              </div>
              <div style={{ fontFamily: "Georgia", fontSize: 16, fontStyle: "italic", fontWeight: 900, margin: "10px 0 8px" }}>Rx</div>
              <div style={{ marginBottom: 8 }}>{hw(`c/o ${data.diagnosis}`, 0.3, fs)}</div>
              <div style={{ paddingLeft: 10, marginBottom: 8 }}>{hw(`• ${data.notes}`, -0.4, fs)}</div>
              <div style={{ marginTop: 14 }}>
                {[`Tab ${data.doctorName.split(" ").pop() || "Lofat"} + BP`, `Tab Arowell – A2+BP`, `Tab Oroxan SM`, `Tab Servio. OO.B.`].map((med, i) => (
                  <div key={i} style={{ marginBottom: 8, paddingLeft: 10 }}>
                    {hw(med, i % 2 === 0 ? 0.4 : -0.5, fs - 1)}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 12 }}>{hw(`${data.restDays} Days Rest`, -0.4, fs)}</div>
              <div style={{ position: "absolute", bottom: 16, right: 16 }}>
                <span style={{ fontFamily: '"Dancing Script", cursive', fontSize: 34, color: inkColor, opacity: 0.75, filter: "url(#hw-ink)" }}>
                  {data.doctorName.split(" ").pop()}
                </span>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid #ddd", padding: "4px 16px", fontSize: 8.5, color: "#444" }}>
            {data.phone || "07624292263"} | {data.doctorName || "DR. MANOJ VERMA"} | {data.address || "SEC 14, VASANTH MG, VIJAY NAGAR, DELHI."}
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────────
    // Template 13: Narayan Care Clinic
    // ─────────────────────────────────────────────
    if (templateId === "narayan-care") {
      return (
        <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1 / 1.414", background: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.15)", fontFamily: "Arial, sans-serif", boxSizing: "border-box" }}>
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          <div style={{ padding: "10px 18px", borderBottom: "2px solid #1a3a8f", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#1a3a8f", margin: 0 }}>{data.hospitalName || "NARAYAN CARE CLINIC"}</div>
              <p style={{ fontSize: 10, fontWeight: 700, color: "#333", margin: "2px 0 0" }}>{data.doctorName || "Dr. Arvind Mehra"}</p>
              <p style={{ fontSize: 9, color: "#555", margin: "1px 0 0" }}>{data.doctorDegree || "MBBS, D.N.B (General Medicine)"}</p>
            </div>
            <div style={{ fontSize: 8.5, color: "#444", textAlign: "right", lineHeight: 1.5 }}>
              <div>Critical Care Physician (AFICC)</div>
              <div>Cert in Diabetes Care (CCEBDM)</div>
              <div>Cert in Palliative Care (CCEPC)</div>
              <div>Cert in Geriatric Care</div>
            </div>
          </div>
          <div style={{ padding: "10px 18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 12 }}>
              <span style={{ color: "#555" }}>{data.patientName} ({data.age}y, {data.gender === "Male" ? "M" : "F"})</span>
              <div style={{ color: "#555" }}>Date &amp; Time: {hw(formattedDate, -0.3, 12)}</div>
            </div>
            <div style={{ marginBottom: 8, background: "#f8f9fa", padding: "6px 10px", borderRadius: 4, fontSize: 11 }}>
              <strong>Complaints:</strong> {hw(data.diagnosis, 0.3, 11)}
            </div>
            <div style={{ marginBottom: 8, fontSize: 11 }}>
              <strong>Diagnosis:</strong> <span style={{ color: "#c0392b", fontWeight: 700 }}>{data.diagnosis.split(",")[0]}</span>
            </div>
            <div style={{ marginBottom: 12, fontSize: 11 }}>
              <strong>Rest:</strong> {hw(`${data.restDays} Days`, -0.4, 11)}
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10, marginBottom: 14 }}>
              <thead>
                <tr style={{ background: "#1a3a8f", color: "#fff" }}>
                  <th style={{ padding: "4px 6px", textAlign: "left" }}>Medicine</th>
                  <th style={{ padding: "4px 6px" }}>Dosage</th>
                  <th style={{ padding: "4px 6px" }}>Timing-Freq-Duration</th>
                </tr>
              </thead>
              <tbody>
                {[["CAP. RABEMAC DSR", "1-0-0", "Before breakfast - Daily - 5 Days"], ["TAB. ONDEM MD 4MG", "1-1-1", "Before Food - Daily - 2 Days"], ["CAP. GUT+KRYPT", "1-0-1", "After Food - Daily - 5 Days"], ["TAB. LEVOCET M", "0-0-1", "After dinner - Daily - 5 Days"]].map(([med, dose, timing], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f5f8ff", borderBottom: "1px solid #e0e0e0" }}>
                    <td style={{ padding: "5px 6px" }}>{hw(med, 0.3, 9.5)}</td>
                    <td style={{ padding: "5px 6px", textAlign: "center" }}>{dose}</td>
                    <td style={{ padding: "5px 6px" }}>{timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ fontSize: 10, color: "#555", marginBottom: 6 }}><strong>Advice:</strong> {data.notes}</div>
            <div style={{ position: "absolute", bottom: 40, right: 18, textAlign: "right" }}>
              <span style={{ fontFamily: '"Dancing Script", cursive', fontSize: 32, color: inkColor, opacity: 0.75, display: "block", filter: "url(#hw-ink)" }}>
                {data.doctorName.split(" ").pop()}
              </span>
              <div style={{ fontSize: 9, color: "#444", borderTop: "1px solid #aaa", paddingTop: 2 }}>{data.doctorName}</div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 14, left: 0, right: 0, textAlign: "center", fontSize: 9, color: "#1a3a8f", fontWeight: 700 }}>Your Health Our Priority</div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, textAlign: "center", padding: "0 18px 4px", fontSize: 8.5, color: "#555" }}>
            {data.phone || "07624292263"} | {data.address || "SEC 14, VASANTH MG, VIJAY NAGAR, DELHI."}
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────────
    // Template 14: Sanjivini Multi Speciality
    // ─────────────────────────────────────────────
    if (templateId === "sanjivini-multi") {
      return (
        <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1 / 1.414", background: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.15)", fontFamily: "Arial, sans-serif", boxSizing: "border-box" }}>
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          <div style={{ padding: "10px 20px", borderBottom: "3px solid #c0392b" }}>
            <div style={{ fontSize: 26, fontWeight: 900, color: "#c0392b", margin: 0, letterSpacing: 1 }}>{data.hospitalName || "SANJIVINI"}</div>
            <p style={{ fontSize: 11, color: "#555", margin: "2px 0 0" }}>Multi Speciality Hospital</p>
          </div>
          <div style={{ display: "flex", gap: 16, padding: "12px 20px", borderBottom: "1px solid #eee" }}>
            <div style={{ flex: 1, fontSize: 10, lineHeight: 1.6 }}>
              <div>Patient Name: <strong>{data.patientName}</strong></div>
              <div>Age/Sex: {data.age}y, {data.gender === "Male" ? "M" : "F"}</div>
              <div>Rest: {data.restDays} Days</div>
            </div>
            <div style={{ flex: 1, fontSize: 10, lineHeight: 1.6 }}>
              <div>{data.doctorName || "Dr. Vikram Chaudhary"}</div>
              <div>{data.doctorDegree || "MBBS D.ORTHO"}</div>
              <div>Date: {formattedDate}</div>
            </div>
          </div>
          <div style={{ padding: "10px 20px" }}>
            <div style={{ marginBottom: 8 }}>
              <strong style={{ fontSize: 11 }}>Complaints:</strong>
              <div style={{ paddingLeft: 14, marginTop: 4 }}>{hw(data.diagnosis, 0.4, fs)}</div>
            </div>
            <div style={{ marginBottom: 8 }}>
              <strong style={{ fontSize: 11 }}>History: Clinical Evaluation —</strong>
              <div style={{ paddingLeft: 14, marginTop: 4 }}>{hw(`Diagnosis: ${data.diagnosis.split(",")[0]}`, -0.3, fs - 1)}</div>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 9.5, marginBottom: 12 }}>
              <thead>
                <tr style={{ background: "#1a3a8f", color: "#fff" }}>
                  <th style={{ padding: "3px 6px", textAlign: "left" }}>Medicine</th>
                  <th style={{ padding: "3px 6px" }}>Dose</th>
                  <th style={{ padding: "3px 6px" }}>Route</th>
                  <th style={{ padding: "3px 6px" }}>Duration</th>
                </tr>
              </thead>
              <tbody>
                {[["Tablet XTRAMOL 1000 mg", "TWICE", "Oral", "15 Days"], ["PANTODAC 40", "PANTOPRAZOLA", "Oral", "15 Days"], ["CALCIBICK PLUS", "1 TAB", "Oral", "30 Days"], ["IBUGESIC PLUS SYP", "10ML", "Oral", "10 Days"]].map(([med, dose, route, dur], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f5f8ff", borderBottom: "1px solid #e0e0e0" }}>
                    <td style={{ padding: "4px 6px", fontSize: 9 }}>{med}</td>
                    <td style={{ padding: "4px 6px", textAlign: "center" }}>{dose}</td>
                    <td style={{ padding: "4px 6px", textAlign: "center" }}>{route}</td>
                    <td style={{ padding: "4px 6px", textAlign: "center" }}>{dur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 4 }}>Additional Advice:</div>
            <ul style={{ fontSize: 9.5, color: "#444", paddingLeft: 16, margin: 0, lineHeight: 1.6 }}>
              <li>{data.notes}</li>
              <li>Rest for {data.restDays} days</li>
            </ul>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 14 }}>
              <div style={{ fontSize: 10 }}>{hw("Follow Up Advice: 1m 2d", 0.4, 10)}</div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontFamily: '"Dancing Script", cursive', fontSize: 34, color: inkColor, opacity: 0.75, display: "block", filter: "url(#hw-ink)" }}>
                  {data.doctorName.split(" ").pop()}
                </span>
                <div style={{ fontSize: 9, color: "#555", borderTop: "1px solid #aaa", paddingTop: 2 }}>{data.doctorName}</div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid #ddd", padding: "4px 18px", fontSize: 8.5, color: "#555" }}>
            {data.phone || "07624292263"} | {data.doctorName} | {data.address || "SEC 14, VASANTH MG, VIJAY NAGAR, DELHI."}
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────────
    // Template 15: Astha Clinic
    // ─────────────────────────────────────────────
    if (templateId === "astha-clinic") {
      return (
        <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1 / 1.414", background: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.15)", fontFamily: "Arial, sans-serif", padding: "5% 8%", boxSizing: "border-box" }}>
          <InkFilter />
          <WatermarkOverlay show={showWatermark} />
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#1a1a1a", margin: 0 }}>{data.hospitalName || "ASTHA CLINIC"}</div>
            <p style={{ fontSize: 10, color: "#555", margin: "2px 0 0" }}>{data.doctorName || "Dr. Arvind Kumar Sharma"} ({data.doctorDegree || "MBBS, MD"})</p>
            <div style={{ width: "100%", height: 2, background: "#1a1a1a", marginTop: 10 }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, fontSize: 13 }}>
            <div>Patient Name: {hw(data.patientName, 0.5, fs)}</div>
            <div>{data.age}y, {data.gender === "Male" ? "M" : "F"}</div>
          </div>
          <div style={{ marginBottom: 10, display: "flex", gap: 6 }}>
            <span style={{ fontFamily: "Georgia", fontStyle: "italic", fontSize: 18, lineHeight: 1 }}>△</span>
            {hw(data.diagnosis, 0.4, fs + 1)}
          </div>
          {data.notes.split(/[\n,]/).filter(Boolean).map((line, i) => (
            <div key={i} style={{ marginBottom: 8, paddingLeft: 18 }}>
              {hw(line.trim(), i % 2 === 0 ? 0.4 : -0.5, fs)}
            </div>
          ))}
          <div style={{ marginTop: 16, paddingLeft: 18 }}>{hw(`${data.restDays} Days rest`, -0.4, fs)}</div>
          <div style={{ position: "absolute", bottom: 50, right: "8%" }}>
            <span style={{ fontFamily: '"Dancing Script", cursive', fontSize: 40, color: inkColor, opacity: 0.75, filter: "url(#hw-ink)" }}>
              {data.doctorName.split(" ").pop()}
            </span>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid #ddd", padding: "5px 8%", fontSize: 8.5, color: "#555" }}>
            {data.phone || "07624292263"} | {data.doctorName} | {data.address || "SEC 14, VASANTH MG, VIJAY NAGAR, DELHI."}
          </div>
        </div>
      );
    }

    return (
      <div ref={ref} style={{ width: "100%", maxWidth: 680, margin: "0 auto", aspectRatio: "1/1.414", background: "#f7f5ef", border: "2px solid #c9c4b8", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#999" }}>Template not found</p>
      </div>
    );
  }
);

CertificatePreview.displayName = "CertificatePreview";
