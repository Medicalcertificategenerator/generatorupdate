"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { format } from "date-fns";
import Link from "next/link";
import {
  Heart,
  Sparkles,
  Activity,
  FileText,
  CheckCircle,
  Download,
  FileImage,
  PenLine,
  RotateCcw,
  Eye,
  Shield,
  Loader2,
  Settings,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { CertificateData } from "@/types/certificate";

// ─── Types ──────────────────────────────────────────────────────────────────

type ExemptionType = "general" | "travel" | "work" | "condition";

interface ExemptionFormData {
  patientName: string;
  age: string;
  gender: string;
  medicalCondition: string;
  customCondition: string;
  reasonForExemption: string;
  duration: string;
  doctorName: string;
  hospitalName: string;
  hospitalAddress: string;
  registrationNumber: string;
  dateOfIssue: string;
  notes: string;
}

interface HistoryItem {
  id: string;
  patientName: string;
  condition: string;
  date: string;
  type: ExemptionType;
  createdAt: number;
  data: ExemptionFormData;
}

// ─── Constants ──────────────────────────────────────────────────────────────

const EXEMPTION_TYPES: {
  id: ExemptionType;
  label: string;
  icon: typeof Heart;
  desc: string;
}[] = [
  {
    id: "general",
    label: "General Exemption",
    icon: FileText,
    desc: "Create a general medical exemption certificate for any health-related exemption from duties, activities, or requirements. Ideal for standard exemption requests.",
  },
  {
    id: "travel",
    label: "Travel Exemption",
    icon: Activity,
    desc: "Generate a medical exemption certificate for travel restrictions, journey advisories, or vaccination exemptions. Suitable for airline and border requirements.",
  },
  {
    id: "work",
    label: "Work / Office Exemption",
    icon: Settings,
    desc: "Create a workplace medical exemption certificate for specific duties, PPE requirements, or physically demanding tasks. Covers office and factory settings.",
  },
  {
    id: "condition",
    label: "Medical Condition",
    icon: Heart,
    desc: "Generate a condition-specific exemption certificate for chronic illnesses like diabetes, heart disease, or autoimmune disorders. Includes detailed clinical wording.",
  },
];

const CONDITIONS = [
  "Diabetes Mellitus (Type 1)",
  "Diabetes Mellitus (Type 2)",
  "Hypertension",
  "Coronary Heart Disease",
  "Chronic Asthma",
  "Rheumatoid Arthritis",
  "Epilepsy",
  "Thyroid Disorder",
  "Chronic Kidney Disease",
  "Congestive Heart Failure",
  "COPD",
  "Autoimmune Disorder",
  "Severe Allergies / Anaphylaxis",
  "Other (specify below)",
];

const DEFAULT_FORM: ExemptionFormData = {
  patientName: "",
  age: "",
  gender: "Male",
  medicalCondition: "Diabetes Mellitus (Type 2)",
  customCondition: "",
  reasonForExemption: "",
  duration: "",
  doctorName: "",
  hospitalName: "",
  hospitalAddress: "",
  registrationNumber: "MCI/HR/2026/81321",
  dateOfIssue: format(new Date(), "yyyy-MM-dd"),
  notes: "",
};

const EXEMPTION_TYPE_LABELS: Record<ExemptionType, string> = {
  general: "General Exemption",
  travel: "Travel Exemption",
  work: "Work / Office Exemption",
  condition: "Medical Condition Exemption",
};

// ─── Helpers ────────────────────────────────────────────────────────────────

function fmtDate(dateStr: string): string {
  if (!dateStr) return "—";
  try {
    return format(new Date(dateStr), "dd MMMM yyyy");
  } catch {
    return dateStr;
  }
}

// ─── Certificate Preview ───────────────────────────────────────────────────

const HW: React.CSSProperties = {
  fontFamily: '"Kalam", cursive',
  color: "#1a3a6b",
};

function ExemptionPreview({
  data,
  exemptionType,
}: {
  data: ExemptionFormData;
  exemptionType: ExemptionType;
}) {
  const doctor = data.doctorName || "Doctor Name";
  const patient = data.patientName || "Patient Name";
  const age = data.age || "__";
  const gender = data.gender || "Male";
  const clinic = data.hospitalName || "City Clinic";
  const addr =
    data.hospitalAddress ||
    "123, Medical Complex, Main Road\nMumbai, Maharashtra – 400001";
  const regNo = data.registrationNumber || "MCI/HR/2026/81321";
  const condition =
    data.medicalCondition === "Other (specify below)" && data.customCondition
      ? data.customCondition
      : data.medicalCondition || "Medical Condition";
  const reason =
    data.reasonForExemption || "medical condition requiring exemption";
  const duration = data.duration || "as clinically necessary";
  const date = fmtDate(data.dateOfIssue);
  const notes = data.notes || "";

  const Header = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 10,
      }}
    >
      <div>
        <div style={{ ...HW, fontSize: 16, fontWeight: 700 }}>
          Dr. {doctor}
        </div>
        <div style={{ fontSize: 8, color: "#444", marginTop: 1 }}>
          M.B.B.S., M.D. (General Medicine)
        </div>
        <div style={{ fontSize: 7.5, color: "#0d9488", marginTop: 1 }}>
          Reg. No.: {regNo}
        </div>
        <div style={{ fontSize: 7, color: "#888", marginTop: 1 }}>
          Consulting Hours: 10AM-8PM
        </div>
      </div>
      <div style={{ textAlign: "right", maxWidth: "45%" }}>
        <div style={{ ...HW, fontSize: 14, color: "#0d9488", fontWeight: 600 }}>
          {clinic}
        </div>
        {addr.split("\n").map((line, i) => (
          <div key={i} style={{ fontSize: 7.5, color: "#666", marginTop: 1 }}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );

  const PatientRow = (
    <div style={{ margin: "8px 0", fontSize: 9 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        <span>
          <span
            style={{
              fontSize: 7,
              letterSpacing: 1,
              color: "#888",
              textTransform: "uppercase",
            }}
          >
            Patient{" "}
          </span>
          <span style={{ ...HW, fontSize: 12, fontStyle: "italic" }}>
            {patient}
          </span>
        </span>
        <span>
          <span
            style={{
              fontSize: 7,
              letterSpacing: 1,
              color: "#888",
              textTransform: "uppercase",
            }}
          >
            Age{" "}
          </span>
          <span style={{ ...HW, fontSize: 12, fontStyle: "italic" }}>
            {age}
          </span>
          <span style={{ fontSize: 8, color: "#888" }}> yrs</span>
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>
          <span
            style={{
              fontSize: 7,
              letterSpacing: 1,
              color: "#888",
              textTransform: "uppercase",
            }}
          >
            Sex{" "}
          </span>
          <span style={{ ...HW, fontSize: 12, fontStyle: "italic" }}>
            {gender}
          </span>
        </span>
        <span>
          <span
            style={{
              fontSize: 7,
              letterSpacing: 1,
              color: "#888",
              textTransform: "uppercase",
            }}
          >
            Date{" "}
          </span>
          <span style={{ ...HW, fontSize: 12, fontStyle: "italic" }}>
            {date}
          </span>
        </span>
      </div>
    </div>
  );

  const Footer = (
    <div style={{ marginTop: "auto", paddingTop: 12 }}>
      <div
        style={{
          textAlign: "right",
          fontSize: 8,
          color: "#0d9488",
          marginBottom: 8,
        }}
      >
        Date: {date}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ ...HW, fontSize: 14, marginBottom: 2 }}>{patient}</div>
          <div style={{ width: 120, borderTop: "1px solid #ccc" }} />
          <div
            style={{
              fontSize: 6.5,
              letterSpacing: 1,
              color: "#888",
              textTransform: "uppercase",
              marginTop: 2,
            }}
          >
            Patient Signature
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: '"Dancing Script", cursive',
              fontSize: 18,
              color: "#1a3a6b",
              opacity: 0.8,
              marginBottom: 2,
            }}
          >
            {doctor}
          </div>
          <div style={{ width: 140, borderTop: "1px solid #333" }} />
          <div
            style={{
              fontSize: 6.5,
              letterSpacing: 1,
              color: "#888",
              textTransform: "uppercase",
              marginTop: 2,
            }}
          >
            Doctor&apos;s Signature
          </div>
        </div>
      </div>
    </div>
  );

  // ── Type-specific body ─────────────────────────────────────────────────

  const titleMap: Record<ExemptionType, string> = {
    general: "Medical Exemption Certificate",
    travel: "Medical Exemption Certificate (Travel)",
    work: "Medical Exemption Certificate (Workplace)",
    condition: "Medical Exemption Certificate (Chronic Condition)",
  };

  const GeneralBody = (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ ...HW, fontSize: 11, lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 8px" }}>
          This is to certify that{" "}
          <b style={{ fontStyle: "italic" }}>{patient}</b>, Age:{" "}
          <b style={{ fontStyle: "italic" }}>{age}</b> yrs, Gender:{" "}
          <b style={{ fontStyle: "italic" }}>{gender}</b>, has been examined by
          me on <b style={{ fontStyle: "italic" }}>{date}</b>.
        </p>
        <p style={{ margin: "0 0 8px" }}>
          The patient has been diagnosed with{" "}
          <b
            style={{
              fontStyle: "italic",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            {condition}
          </b>{" "}
          and is hereby granted medical exemption from{" "}
          <b style={{ fontStyle: "italic" }}>{reason}</b>.
        </p>
        <p style={{ margin: "0 0 8px" }}>
          Duration of exemption:{" "}
          <b style={{ fontStyle: "italic" }}>{duration}</b>.
        </p>
        <p style={{ margin: 0 }}>
          This certificate is issued on the patient&apos;s request for
          submission to the concerned authority.
        </p>
        {notes && (
          <p style={{ margin: "8px 0 0", fontStyle: "italic", color: "#0d9488" }}>
            Note: {notes}
          </p>
        )}
      </div>
    </div>
  );

  const TravelBody = (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ ...HW, fontSize: 11, lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 8px" }}>
          This is to certify that{" "}
          <b style={{ fontStyle: "italic" }}>{patient}</b>, Age:{" "}
          <b style={{ fontStyle: "italic" }}>{age}</b> yrs, Gender:{" "}
          <b style={{ fontStyle: "italic" }}>{gender}</b>, is a registered
          patient under my care and has been diagnosed with{" "}
          <b
            style={{
              fontStyle: "italic",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            {condition}
          </b>
          .
        </p>
        <p style={{ margin: "0 0 8px" }}>
          Due to the above medical condition, the patient is{" "}
          <span
            style={{
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            exempt from standard travel restrictions
          </span>{" "}
          and may require special accommodations including but not limited to:{" "}
          <b style={{ fontStyle: "italic" }}>{reason || "modified travel arrangements, medical equipment carriage, or vaccination exemption"}</b>.
        </p>
        <p style={{ margin: "0 0 8px" }}>
          This exemption is valid for{" "}
          <b style={{ fontStyle: "italic" }}>{duration}</b> from the date of
          issue.
        </p>
        <p style={{ margin: 0 }}>
          This certificate is issued for travel authorities, airlines, and
          border control as requested by the patient.
        </p>
        {notes && (
          <p style={{ margin: "8px 0 0", fontStyle: "italic", color: "#0d9488" }}>
            Note: {notes}
          </p>
        )}
      </div>
    </div>
  );

  const WorkBody = (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ ...HW, fontSize: 11, lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 8px" }}>
          This is to certify that{" "}
          <b style={{ fontStyle: "italic" }}>{patient}</b>, Age:{" "}
          <b style={{ fontStyle: "italic" }}>{age}</b> yrs, Gender:{" "}
          <b style={{ fontStyle: "italic" }}>{gender}</b>, has been examined at
          this clinic on <b style={{ fontStyle: "italic" }}>{date}</b>.
        </p>
        <p style={{ margin: "0 0 8px" }}>
          The patient has been diagnosed with{" "}
          <b
            style={{
              fontStyle: "italic",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            {condition}
          </b>{" "}
          and is hereby{" "}
          <span
            style={{
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            medically exempt from the following workplace duties / requirements
          </span>
          : <b style={{ fontStyle: "italic" }}>{reason || "physically strenuous tasks, prolonged standing, or specific PPE requirements"}</b>.
        </p>
        <p style={{ margin: "0 0 8px" }}>
          This exemption is applicable for a period of{" "}
          <b style={{ fontStyle: "italic" }}>{duration}</b> and may be reviewed
          upon follow-up examination.
        </p>
        <p style={{ margin: 0 }}>
          This certificate is issued for submission to the employer / HR
          department as requested.
        </p>
        {notes && (
          <p style={{ margin: "8px 0 0", fontStyle: "italic", color: "#0d9488" }}>
            Note: {notes}
          </p>
        )}
      </div>
    </div>
  );

  const ConditionBody = (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ ...HW, fontSize: 11, lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 8px" }}>
          This is to certify that{" "}
          <b style={{ fontStyle: "italic" }}>{patient}</b>, Age:{" "}
          <b style={{ fontStyle: "italic" }}>{age}</b> yrs, Gender:{" "}
          <b style={{ fontStyle: "italic" }}>{gender}</b>, is a patient under my
          ongoing clinical care for the management of{" "}
          <b
            style={{
              fontStyle: "italic",
              textDecoration: "underline",
              textUnderlineOffset: 3,
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            {condition}
          </b>
          .
        </p>
        <p style={{ margin: "0 0 8px" }}>
          The above chronic medical condition requires continuous treatment and
          monitoring. Due to the nature of this condition, the patient is granted
          medical exemption from{" "}
          <b style={{ fontStyle: "italic" }}>{reason || "certain physical activities, dietary restrictions, and specific regulatory requirements"}</b>{" "}
          that may exacerbate or complicate their health status.
        </p>
        <p style={{ margin: "0 0 8px" }}>
          The patient may also require special accommodations including regular
          medication intake, dietary considerations, and periodic medical
          check-ups.
        </p>
        <p style={{ margin: 0 }}>
          This certificate is issued for{" "}
          <b style={{ fontStyle: "italic" }}>{duration}</b> and is valid for
          official, employment, academic, or insurance purposes as requested.
        </p>
        {notes && (
          <p style={{ margin: "8px 0 0", fontStyle: "italic", color: "#0d9488" }}>
            Note: {notes}
          </p>
        )}
      </div>
    </div>
  );

  const bodyMap: Record<ExemptionType, React.ReactNode> = {
    general: GeneralBody,
    travel: TravelBody,
    work: WorkBody,
    condition: ConditionBody,
  };

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "1 / 1.414",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
        border: "1px solid #e5e7eb",
        borderRadius: 6,
        padding: "5% 6%",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* DEMO watermark */}
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
            fontSize: 72,
            fontWeight: 900,
            color: "rgba(200,0,0,0.04)",
            transform: "rotate(-40deg)",
            letterSpacing: 8,
            fontFamily: "Arial Black, sans-serif",
            userSelect: "none",
          }}
        >
          DEMO
        </span>
      </div>

      {Header}
      <div style={{ height: 2, background: "#0d9488", marginBottom: 6 }} />

      <div
        style={{
          textAlign: "center",
          margin: "4px 0 6px",
          ...HW,
          fontSize: 13,
          fontStyle: "italic",
          fontWeight: 600,
          textDecoration: "underline",
          textUnderlineOffset: 4,
        }}
      >
        {titleMap[exemptionType]}
      </div>

      {PatientRow}
      <div style={{ height: 1, background: "#e5e7eb", margin: "4px 0 8px" }} />

      {bodyMap[exemptionType]}
      {Footer}
    </div>
  );
}

// ─── SEO Content Data ───────────────────────────────────────────────────────

const FAQS = [
  {
    q: "How can I get a medical exemption certificate quickly?",
    a: "Visit a registered medical practitioner (MBBS or higher) and explain your medical condition. The doctor will examine you and, if appropriate, issue a medical exemption certificate on the same day. For sample or demo purposes, you can use our free online generator above to instantly create a realistic medical exemption certificate template.",
  },
  {
    q: "Is an online medical exemption certificate valid?",
    a: "No. Only a certificate issued by a registered, licensed doctor after a clinical examination is legally valid. Our generator creates realistic sample documents strictly for educational use, UI/UX testing, and demonstration purposes — never for official submission.",
  },
  {
    q: "Can I use a medical exemption certificate for travel restrictions?",
    a: "Yes, a valid medical exemption certificate issued by a registered doctor can be used to request exemption from specific travel restrictions, vaccination requirements, or airline policies. Airlines and border authorities typically require the certificate to mention the specific condition and reason for exemption.",
  },
  {
    q: "Who can issue a medical exemption certificate?",
    a: "Any registered medical practitioner — including MBBS general physicians, specialists (MD, MS), and in some cases government medical officers — can issue a medical exemption certificate. For chronic conditions, specialists (cardiologists, endocrinologists) carry more weight.",
  },
  {
    q: "Does the NHS provide medical exemption certificates?",
    a: "Yes, in the UK, the NHS issues medical exemption certificates (MedEx) primarily for prescription charge exemptions. These are issued through your GP surgery and cover conditions like diabetes, hypothyroidism, and epilepsy. In India, equivalent exemptions are handled through government hospital CMOs.",
  },
  {
    q: "What conditions qualify for a medical exemption?",
    a: "Common qualifying conditions include: Diabetes Mellitus (Type 1 & 2), coronary heart disease, epilepsy, chronic asthma, thyroid disorders, autoimmune conditions, severe allergies, COPD, and chronic kidney disease. The specific exemption depends on the institutional policy and the nature of the activity being exempted.",
  },
  {
    q: "Can I get exemption from workplace duties due to a medical condition?",
    a: "Yes. Under Indian labour laws, employees with documented chronic conditions can request reasonable accommodations and exemptions from specific physically demanding tasks. This requires a medical exemption certificate from a registered practitioner detailing the condition and the specific duties to be exempted.",
  },
  {
    q: "How long is a medical exemption certificate valid?",
    a: "Validity depends on the condition and issuing authority. Temporary conditions may get 2-4 week exemptions, while chronic conditions like diabetes or heart disease may warrant certificates valid for 6-12 months, subject to periodic review by the treating physician.",
  },
];

// ─── Main Component ─────────────────────────────────────────────────────────

export function MedicalExemptionView() {
  const [exemptionType, setExemptionType] = useState<ExemptionType>("general");
  const [form, setForm] = useState<ExemptionFormData>(DEFAULT_FORM);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [isDownloadingImg, setIsDownloadingImg] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("exemption_history");
      if (stored) setHistory(JSON.parse(stored).slice(0, 5));
    } catch {}
  }, []);

  const handleChange = useCallback(
    (field: keyof ExemptionFormData, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleSave = useCallback(() => {
    const condition =
      form.medicalCondition === "Other (specify below)" && form.customCondition
        ? form.customCondition
        : form.medicalCondition;
    const item: HistoryItem = {
      id: crypto.randomUUID(),
      patientName: form.patientName || "Patient Name",
      condition,
      date: form.dateOfIssue,
      type: exemptionType,
      createdAt: Date.now(),
      data: { ...form },
    };
    const newHistory = [item, ...history].slice(0, 5);
    setHistory(newHistory);
    try {
      localStorage.setItem("exemption_history", JSON.stringify(newHistory));
    } catch {}
    toast({
      title: "Exemption Certificate Saved",
      description: "Saved to your local history.",
    });
  }, [form, exemptionType, history, toast]);

  const handleLoadHistory = useCallback(
    (item: HistoryItem) => {
      setForm(item.data);
      setExemptionType(item.type);
      toast({
        title: "Certificate Loaded",
        description: `Loaded "${item.patientName}" exemption certificate.`,
      });
    },
    [toast]
  );

  const handleClearHistory = useCallback(() => {
    setHistory([]);
    try {
      localStorage.removeItem("exemption_history");
    } catch {}
    toast({
      title: "History Cleared",
      description: "All saved exemption certificates removed.",
    });
  }, [toast]);

  const handleDownloadImage = useCallback(async () => {
    if (!previewRef.current) return;
    try {
      setIsDownloadingImg(true);
      const { toPng } = await import("html-to-image");
      await new Promise((r) => setTimeout(r, 100));
      const dataUrl = await toPng(previewRef.current, {
        quality: 1.0,
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `exemption-certificate-${(form.patientName || "patient").replace(/\s+/g, "-").toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
      handleSave();
      toast({
        title: "Image Downloaded",
        description: "High-resolution PNG saved.",
      });
    } catch (err) {
      console.error(err);
      toast({ title: "Download Failed", variant: "destructive" });
    } finally {
      setIsDownloadingImg(false);
    }
  }, [form.patientName, handleSave, toast]);

  const handleDownloadPdf = useCallback(async () => {
    if (!previewRef.current) return;
    try {
      setIsDownloadingPdf(true);
      const { toPng } = await import("html-to-image");
      await new Promise((r) => setTimeout(r, 100));
      const dataUrl = await toPng(previewRef.current, {
        quality: 1.0,
        pixelRatio: 2,
        cacheBust: true,
      });
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const imgW = pageW - margin * 2;
      const imgH = Math.min(imgW * 1.414, pageH - margin * 2);
      pdf.addImage(dataUrl, "PNG", margin, margin, imgW, imgH);
      pdf.save(
        `exemption-certificate-${(form.patientName || "patient").replace(/\s+/g, "-").toLowerCase()}.pdf`
      );
      handleSave();
      toast({
        title: "PDF Downloaded",
        description: "Certificate saved as A4 PDF.",
      });
    } catch (err) {
      console.error(err);
      toast({ title: "PDF Download Failed", variant: "destructive" });
    } finally {
      setIsDownloadingPdf(false);
    }
  }, [form.patientName, handleSave, toast]);

  const handleEditFull = useCallback(() => {
    const certData: Partial<CertificateData> = {
      patientName: form.patientName || "Patient Name",
      age: form.age || "25",
      gender: form.gender || "Male",
      date: form.dateOfIssue || format(new Date(), "yyyy-MM-dd"),
      diagnosis: form.medicalCondition || "Medical Exemption",
      notes: form.notes || "",
      restDays: form.duration || "As required",
      doctorName: form.doctorName
        ? `Dr. ${form.doctorName.replace(/^Dr\.?\s*/i, "")}`
        : "Dr. Doctor Name",
      hospitalName: form.hospitalName || "City Clinic",
      doctorDegree: "MBBS, MD (General Medicine)",
      phone: "07624-292263",
      address:
        form.hospitalAddress || "123, Medical Complex, Main Road",
      font: "kalam",
      color: "blue",
      watermark: true,
      textSize: 22,
    };
    try {
      localStorage.setItem("certificate_draft", JSON.stringify(certData));
    } catch {}
  }, [form]);

  const currentDesc =
    EXEMPTION_TYPES.find((t) => t.id === exemptionType)?.desc || "";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative px-4 pt-20 pb-10 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-500/5 via-background to-background" />
        <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 text-sm font-semibold gap-1.5"
          >
            <Shield className="w-3.5 h-3.5" /> Free Tool · Instant Download
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Medical Exemption Certificate Generator
            <br />
            <span className="text-teal-600">(Free PDF Download)</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Create a medical exemption certificate instantly for travel, work,
            school, or health conditions like diabetes or heart issues.
            Download as PDF or PNG — 100% free.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3 text-sm text-muted-foreground">
            {[
              "Travel & Work Exemptions",
              "Chronic Condition Support",
              "Instant PDF Download",
              "100% Private",
            ].map((pt) => (
              <span
                key={pt}
                className="flex items-center gap-1.5 bg-muted/60 rounded-full px-3 py-1"
              >
                <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                {pt}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground max-w-lg mx-auto">
            ⚠️ For sample &amp; educational purposes only. Not a legally valid
            document.{" "}
            <Link
              href="/disclaimer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Read disclaimer
            </Link>
          </p>
        </div>
      </section>

      {/* ── INTERACTIVE GENERATOR ─────────────────────────────── */}
      <section className="px-4 pb-16" id="generator">
        <div className="w-full">
          {/* Heading */}
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-[3px] text-teal-600 mb-2">
              Choose Exemption Type
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
              Medical Exemption Certificate Generator
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              Select your exemption type, fill in the details, and preview your
              certificate in real time.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {EXEMPTION_TYPES.map((type) => {
              const Icon = type.icon;
              const active = exemptionType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setExemptionType(type.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold
                    transition-all duration-200 border
                    ${
                      active
                        ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white border-teal-500 shadow-lg shadow-teal-500/25"
                        : "bg-white text-gray-600 border-gray-200 hover:border-teal-300 hover:shadow-sm"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {type.label}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            {currentDesc}
          </p>

          {/* 2-col layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-start">
            {/* LEFT — Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-4">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Patient & Exemption Details
                </h3>
                <p className="text-teal-100 text-xs mt-1">
                  Fill in all fields. Preview updates live.
                </p>
              </div>

              <div className="p-6 space-y-4">
                {/* Patient Name + Age */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-1.5">
                    <Label className="text-xs font-semibold">
                      Patient Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="e.g. Rajesh Kumar"
                      value={form.patientName}
                      onChange={(e) =>
                        handleChange("patientName", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">Age</Label>
                    <Input
                      placeholder="e.g. 45"
                      value={form.age}
                      onChange={(e) => handleChange("age", e.target.value)}
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">Gender</Label>
                  <Select
                    value={form.gender}
                    onValueChange={(val) => handleChange("gender", val)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Medical Condition */}
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">
                    Medical Condition <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={form.medicalCondition}
                    onValueChange={(val) =>
                      handleChange("medicalCondition", val)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CONDITIONS.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {form.medicalCondition === "Other (specify below)" && (
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">
                      Specify Condition
                    </Label>
                    <Input
                      placeholder="e.g. Lupus, Crohn's Disease"
                      value={form.customCondition}
                      onChange={(e) =>
                        handleChange("customCondition", e.target.value)
                      }
                    />
                  </div>
                )}

                {/* Reason + Duration */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">
                      Reason for Exemption
                    </Label>
                    <Input
                      placeholder="e.g. physical activities"
                      value={form.reasonForExemption}
                      onChange={(e) =>
                        handleChange("reasonForExemption", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">Duration</Label>
                    <Input
                      placeholder="e.g. 6 months"
                      value={form.duration}
                      onChange={(e) =>
                        handleChange("duration", e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* Doctor + Hospital */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">
                      Doctor Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="e.g. Dr. Priya Sharma"
                      value={form.doctorName}
                      onChange={(e) =>
                        handleChange("doctorName", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">
                      Hospital / Clinic <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="e.g. City Medical Centre"
                      value={form.hospitalName}
                      onChange={(e) =>
                        handleChange("hospitalName", e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* Address + Reg */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">
                      Hospital Address
                    </Label>
                    <Input
                      placeholder="e.g. 123, Main Road, Mumbai"
                      value={form.hospitalAddress}
                      onChange={(e) =>
                        handleChange("hospitalAddress", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">
                      Registration Number
                    </Label>
                    <Input
                      value={form.registrationNumber}
                      onChange={(e) =>
                        handleChange("registrationNumber", e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* Date + Notes */}
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">Date of Issue</Label>
                  <Input
                    type="date"
                    value={form.dateOfIssue}
                    onChange={(e) =>
                      handleChange("dateOfIssue", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">
                    Additional Notes
                  </Label>
                  <Textarea
                    className="resize-none"
                    rows={3}
                    placeholder="e.g. Patient requires regular insulin administration..."
                    value={form.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <Button
                    onClick={handleSave}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold gap-1.5 shadow-md"
                  >
                    <CheckCircle className="w-4 h-4" /> Save Certificate
                  </Button>
                  <Button
                    onClick={handleDownloadPdf}
                    disabled={isDownloadingPdf}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold gap-1.5 shadow-md"
                  >
                    {isDownloadingPdf ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Download className="w-4 h-4" />
                    )}
                    Download PDF
                  </Button>
                  <Button
                    onClick={handleDownloadImage}
                    disabled={isDownloadingImg}
                    variant="outline"
                    className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-semibold gap-1.5"
                  >
                    {isDownloadingImg ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <FileImage className="w-4 h-4" />
                    )}
                    Download Image
                  </Button>
                </div>

                <Link
                  href="/generator/formal-cert"
                  onClick={handleEditFull}
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="w-full gap-2 font-semibold h-11"
                  >
                    <PenLine className="w-4 h-4" /> Edit Certificate
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT — Preview */}
            <div className="sticky top-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm flex items-center gap-2 text-gray-700">
                  <FileText className="w-4 h-4" /> Live Certificate Preview
                </h3>
                <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>
              <div
                ref={previewRef}
                className="shadow-xl rounded-lg overflow-hidden"
              >
                <ExemptionPreview
                  data={form}
                  exemptionType={exemptionType}
                />
              </div>
            </div>
          </div>

          {/* History */}
          <div className="max-w-6xl mx-auto mt-12 bg-teal-50/50 border border-teal-100 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-base flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-600" />
                Exemption History
                <Badge
                  variant="secondary"
                  className="ml-1 text-xs bg-teal-100 text-teal-700"
                >
                  {history.length}
                </Badge>
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" /> Saved locally
                </span>
                {history.length > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleClearHistory}
                    className="text-xs gap-1 h-8"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Clear All
                  </Button>
                )}
              </div>
            </div>

            {history.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <Eye className="w-10 h-10 text-teal-300 mb-3" />
                <p className="font-medium text-sm text-gray-500">
                  No saved exemption certificates yet.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Fill in the form and click{" "}
                  <strong className="text-teal-600">Save Certificate</strong>.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {history.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLoadHistory(item)}
                    className="bg-white border border-gray-100 rounded-xl p-4 text-left hover:shadow-md hover:border-teal-300 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm truncate group-hover:text-teal-600 transition-colors">
                          {item.patientName}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5 truncate">
                          {item.condition}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-[10px] px-1.5 py-0.5 shrink-0 ml-2"
                      >
                        {EXEMPTION_TYPE_LABELS[item.type]}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-[11px] text-muted-foreground">
                      <Eye className="w-3 h-3" />
                      {fmtDate(item.date)}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
           SEO CONTENT SECTIONS
         ══════════════════════════════════════════════════════════ */}

      {/* What is a Medical Exemption Certificate? */}
      <section className="px-4 py-16 bg-muted/20 border-y border-border">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What is a Medical Exemption Certificate?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A <strong>medical exemption certificate</strong> is a formal document issued by a registered medical practitioner that grants an individual exemption from specific duties, activities, or regulatory requirements due to a diagnosed health condition. Unlike a standard sick leave certificate (which declares you temporarily unfit), an exemption certificate focuses on <em>ongoing accommodations</em> — acknowledging that a patient&apos;s medical condition prevents them from meeting certain standard requirements.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Medical exemption certificates are commonly used across travel, workplace, educational, and regulatory contexts. For example, a patient with <strong>Type 1 Diabetes</strong> may need an exemption to carry insulin syringes through airport security, while someone with <strong>chronic heart disease</strong> may require exemption from strenuous workplace duties. In the UK, the NHS issues a specific &quot;Medical Exemption Certificate&quot; (MedEx) for prescription charge exemptions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Only a <strong>licensed, registered doctor</strong> (MBBS or higher) can legally issue a valid medical exemption certificate after a proper clinical assessment. Our generator above creates realistic sample templates for educational, demonstration, and UI testing purposes only.
          </p>
        </div>
      </section>

      {/* When Do You Need One? */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            When Do You Need a Medical Exemption Certificate?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Travel Restrictions & Security",
                desc: "Airlines, airports, and border authorities may require medical exemption certificates for carrying medical equipment (insulin pumps, oxygen), exemption from body scanners, or vaccination requirement waivers.",
              },
              {
                title: "Workplace & Office Duties",
                desc: "Employees with chronic conditions may need exemption from physically demanding tasks, specific PPE requirements, mandatory fitness tests, or certain shift patterns that aggravate their condition.",
              },
              {
                title: "School & College Requirements",
                desc: "Students with medical conditions may need exemption from physical education, mandatory vaccination programmes, examination sitting requirements, or specific attendance policies.",
              },
              {
                title: "Chronic Illness Documentation",
                desc: "Patients with diabetes, heart conditions, epilepsy, or autoimmune disorders often require ongoing exemption documentation for insurance claims, government benefits, or regulatory compliance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="px-4 py-16 bg-muted/20 border-y border-border">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How to Apply for a Medical Exemption Certificate?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To <strong>apply for a medical exemption certificate</strong>, follow these steps:
          </p>
          <ol className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="bg-teal-100 text-teal-700 font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span><strong>Visit a Registered Practitioner:</strong> Schedule an appointment with an MBBS or specialist doctor. For chronic conditions, consulting a relevant specialist (cardiologist for heart issues, endocrinologist for diabetes) carries more weight.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-teal-100 text-teal-700 font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span><strong>Clinical Examination & Diagnosis:</strong> The doctor will perform a thorough examination, review your medical history, and confirm the diagnosis that necessitates exemption.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-teal-100 text-teal-700 font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span><strong>Certificate Issuance:</strong> Request the doctor to issue a medical exemption certificate specifying the condition, the exact exemption required, and the duration of validity. Ensure it includes the doctor&apos;s registration number and clinic stamp.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-teal-100 text-teal-700 font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">4</span>
              <span><strong>Submit to Relevant Authority:</strong> Present the certificate to your employer, school, airline, or regulatory body as required.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Can You Download Online? */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Can You Download a Medical Exemption Certificate Online?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You can use our free <strong>medical exemption certificate download</strong> tool above to generate a realistic sample certificate instantly — perfect for UI/UX testing, educational demonstrations, healthcare app prototyping, or understanding the correct format before visiting your doctor.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            However, it&apos;s critical to understand: a <em>legally valid</em> medical exemption certificate can only be issued by a licensed, registered medical practitioner after a proper clinical assessment. Online generators (including ours) produce sample documents only. Using a generated certificate to deceive any authority is illegal and unethical.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our tool helps you visualize the standard format so you know exactly what to expect from your doctor&apos;s certificate — ensuring you receive a complete, properly formatted document.
          </p>
        </div>
      </section>

      {/* What Does It Look Like? */}
      <section className="px-4 py-16 bg-muted/20 border-y border-border">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What Does a Medical Exemption Certificate Look Like?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A properly formatted <strong>medical exemption certificate image</strong> typically contains the following elements:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            {[
              "Doctor's full name, qualifications, and NMC/State Medical Council registration number",
              "Hospital or clinic letterhead with verifiable contact details and address",
              "Patient's personal identifiers — full name, age, and gender",
              "Clear medical diagnosis and the specific condition requiring exemption",
              "Explicit statement of the exemption being granted",
              "Duration of validity — start date and end date or 'ongoing' for chronic conditions",
              "Doctor's signature with official clinic stamp or seal",
            ].map((el) => (
              <li key={el} className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <span>{el}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Use the live preview in our generator above to see exactly how each
            element is positioned on a real medical exemption certificate format.
          </p>
        </div>
      </section>

      {/* Condition-Based Content */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Condition-Specific Medical Exemptions
          </h2>

          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" /> Medical Exemption for Diabetes
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Diabetes (Type 1 and Type 2) is one of the most common conditions requiring medical exemption certificates. Patients with diabetes often need exemptions for:
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" /> Carrying insulin, syringes, and glucose monitors through airport security</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" /> Flexible work schedules to accommodate insulin injections and meals</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" /> Exemption from fasting requirements during certain workplace or religious activities</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" /> NHS prescription charge exemption (UK) for all medications and supplies</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" /> Medical Exemption for Heart Condition
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Heart conditions — including coronary artery disease, congestive heart failure, and arrhythmias — frequently require medical exemption from activities that could trigger cardiac events:
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" /> Exemption from strenuous physical duties at work or school</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" /> Travel restrictions for long-haul flights or high-altitude destinations</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" /> Special workspace accommodations (ergonomic setup, restricted hours)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" /> Carry-on allowance for cardiac medications and monitoring devices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 bg-muted/20 border-y border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group border border-border rounded-xl bg-card overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer font-semibold text-sm list-none select-none">
                  {faq.q}
                  <span className="text-teal-600 text-lg group-open:rotate-45 transition-transform flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-lg font-bold mb-5">
              Related Certificate Pages
            </h2>
            <ul className="space-y-3">
              {[
                { title: "Sick Leave Medical Certificate", href: "/medical-certificate-for-leave" },
                { title: "Fitness Medical Certificate", href: "/fitness-medical-certificate" },
                { title: "Medical Certificate for Leave", href: "/medical-certificate-for-leave" },
                { title: "Student Medical Certificate Format", href: "/student-medical-certificate-format" },
                { title: "Medical Certificate for Office Leave", href: "/medical-certificate-for-leave" },
              ].map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                    {p.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/generator"
                  className="flex items-center gap-2 text-sm text-primary hover:underline font-semibold"
                >
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                  Browse All Generator Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-5">Blog Resources</h2>
            <ul className="space-y-3">
              {[
                { title: "Who Can Issue a Medical Certificate in India?", href: "/blog/who-can-issue-medical-certificate-india" },
                { title: "Medical Certificate vs Fitness Certificate", href: "/blog/medical-certificate-vs-fitness-certificate" },
                { title: "Legal Consequences of Fake Certificates", href: "/blog/fake-medical-certificate-consequences" },
              ].map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-4 py-12 bg-destructive/5 border-y border-destructive/15">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-10 h-10 text-destructive mx-auto mb-4 opacity-80" />
          <h3 className="text-xl font-extrabold text-destructive mb-4">
            Important: For Sample & Educational Purposes Only
          </h3>
          <p className="text-sm text-foreground/80 leading-relaxed mb-3">
            Only a <strong>licensed, registered doctor</strong> can issue a
            legally valid medical exemption certificate. Certificates generated
            by this tool are{" "}
            <strong>sample documents only</strong> — for educational use,
            UI/UX testing, and demonstrations.
          </p>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Using a generated certificate to deceive any authority is a serious
            criminal offence and is strictly prohibited. If you need a real
            medical exemption, please visit a registered doctor.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <Link
              href="/disclaimer"
              className="text-xs font-semibold text-destructive/80 hover:text-destructive underline underline-offset-2 transition-colors"
            >
              Read Full Disclaimer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
