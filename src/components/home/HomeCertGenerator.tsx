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
import type { CertificateData } from "@/types/certificate";

// ─── Types ──────────────────────────────────────────────────────────────────

type CertType = "prescription" | "sick-leave" | "fitness" | "general";

interface HomeFormData {
  patientName: string;
  age: string;
  gender: string;
  leaveFrom: string;
  leaveTo: string;
  doctorName: string;
  diagnosis: string;
  hospitalName: string;
  hospitalAddress: string;
  registrationNumber: string;
  dateOfIssue: string;
  notes: string;
}

interface HistoryItem {
  id: string;
  patientName: string;
  diagnosis: string;
  date: string;
  type: CertType;
  createdAt: number;
  data: HomeFormData;
}

// ─── Constants ──────────────────────────────────────────────────────────────

const CERT_TYPES: {
  id: CertType;
  label: string;
  icon: typeof Heart;
  desc: string;
}[] = [
  {
    id: "prescription",
    label: "Doctor Prescription",
    icon: Settings,
    desc: "Create an authentic doctor prescription with our prescription generator—design handwritten prescriptions with diagnosis and medicines easily. Perfect as a prescription maker or for generating a fake doctor prescription report for demo and educational use.",
  },
  {
    id: "sick-leave",
    label: "Sick Leave Certificate",
    icon: Sparkles,
    desc: "Generate a handwritten sick leave certificate with auto-signatures—create a realistic medical leave certificate, doctor leave certificate, or medical sick leave certificate instantly.",
  },
  {
    id: "fitness",
    label: "Fitness Certificate",
    icon: Activity,
    desc: "Get a handwritten fitness certificate with doctor-signed clearance for official use. Easily create and download a physical fitness certificate or medical fitness certificate PDF in minutes. Ideal for jobs, school, and general verification needs.",
  },
  {
    id: "general",
    label: "General Medical Certificate",
    icon: FileText,
    desc: "Get a handwritten general medical certificate in a realistic doctor writing style. Create a professional general medical certificate for leave quickly with an authentic look and feel.",
  },
];

const DIAGNOSES = [
  "Fever (Pyrexia)",
  "Viral Infection",
  "Upper Respiratory Infection",
  "Gastroenteritis",
  "Migraine",
  "Lower Back Pain",
  "Dengue Fever",
  "Typhoid Fever",
  "COVID-19",
  "Influenza (Flu)",
  "Food Poisoning",
  "Urinary Tract Infection",
  "Bronchitis",
  "Sinusitis",
  "General Weakness / Fatigue",
];

const DEFAULT_FORM: HomeFormData = {
  patientName: "",
  age: "",
  gender: "Male",
  leaveFrom: "",
  leaveTo: "",
  doctorName: "",
  diagnosis: "Fever (Pyrexia)",
  hospitalName: "",
  hospitalAddress: "",
  registrationNumber: "MCI/HR/2026/81321",
  dateOfIssue: format(new Date(), "yyyy-MM-dd"),
  notes: "",
};

const CERT_TYPE_LABELS: Record<CertType, string> = {
  prescription: "Doctor Prescription",
  "sick-leave": "Sick Leave Certificate",
  fitness: "Fitness Certificate",
  general: "General Medical Certificate",
};

// ─── Helper: format date for display ────────────────────────────────────────

function fmtDate(dateStr: string): string {
  if (!dateStr) return "—";
  try {
    return format(new Date(dateStr), "dd MMMM yyyy");
  } catch {
    return dateStr;
  }
}

// ─── Certificate Preview ───────────────────────────────────────────────────
// Defined OUTSIDE the main component to avoid re-creation on every render.

const HW: React.CSSProperties = {
  fontFamily: '"Kalam", cursive',
  color: "#1a3a6b",
};

function CertPreview({
  data,
  certType,
}: {
  data: HomeFormData;
  certType: CertType;
}) {
  const doctor = data.doctorName || "Doctor Name";
  const patient = data.patientName || "Patient Name";
  const age = data.age || "__";
  const gender = data.gender || "Male";
  const clinic = data.hospitalName || "City Clinic";
  const addr = data.hospitalAddress || "123, Medical Complex, Main Road\nMumbai, Maharashtra – 400001";
  const regNo = data.registrationNumber || "MCI/HR/2026/81321";
  const diag = data.diagnosis || "Fever (Pyrexia)";
  const date = fmtDate(data.dateOfIssue);
  const leaveFrom = data.leaveFrom ? fmtDate(data.leaveFrom) : "______";
  const leaveTo = data.leaveTo ? fmtDate(data.leaveTo) : "______";
  const notes = data.notes || "Complete bed rest advised. Take medicines as prescribed. Do not skip doses.";

  // Shared certificate header
  const Header = (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
      <div>
        <div style={{ ...HW, fontSize: 16, fontWeight: 700 }}>Dr. {doctor}</div>
        <div style={{ fontSize: 8, color: "#444", marginTop: 1 }}>M.B.B.S., M.D. (General Medicine)</div>
        <div style={{ fontSize: 7.5, color: "#0d9488", marginTop: 1 }}>Reg. No.: {regNo}</div>
        <div style={{ fontSize: 7, color: "#888", marginTop: 1 }}>Consulting Hours: 10AM-8PM</div>
      </div>
      <div style={{ textAlign: "right", maxWidth: "45%" }}>
        <div style={{ ...HW, fontSize: 14, color: "#0d9488", fontWeight: 600 }}>{clinic}</div>
        {addr.split("\n").map((line, i) => (
          <div key={i} style={{ fontSize: 7.5, color: "#666", marginTop: 1 }}>{line}</div>
        ))}
      </div>
    </div>
  );

  // Patient info row
  const PatientRow = (
    <div style={{ margin: "8px 0", fontSize: 9 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
        <span>
          <span style={{ fontSize: 7, letterSpacing: 1, color: "#888", textTransform: "uppercase" }}>Patient </span>
          <span style={{ ...HW, fontSize: 12, fontStyle: "italic" }}>{patient}</span>
        </span>
        <span>
          <span style={{ fontSize: 7, letterSpacing: 1, color: "#888", textTransform: "uppercase" }}>Age </span>
          <span style={{ ...HW, fontSize: 12, fontStyle: "italic", borderBottom: "1px solid #ccc", paddingBottom: 1 }}>{age}</span>
          <span style={{ fontSize: 8, color: "#888" }}> yrs</span>
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>
          <span style={{ fontSize: 7, letterSpacing: 1, color: "#888", textTransform: "uppercase" }}>Sex </span>
          <span style={{ ...HW, fontSize: 12, fontStyle: "italic" }}>{gender}</span>
        </span>
        <span>
          <span style={{ fontSize: 7, letterSpacing: 1, color: "#888", textTransform: "uppercase" }}>Date </span>
          <span style={{ ...HW, fontSize: 12, fontStyle: "italic" }}>{date}</span>
        </span>
      </div>
    </div>
  );

  // Signature footer
  const Footer = (
    <div style={{ marginTop: "auto", paddingTop: 12 }}>
      <div style={{ textAlign: "right", fontSize: 8, color: "#0d9488", marginBottom: 8 }}>Date: {date}</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ ...HW, fontSize: 14, marginBottom: 2 }}>{patient}</div>
          <div style={{ width: 120, borderTop: "1px solid #ccc" }} />
          <div style={{ fontSize: 6.5, letterSpacing: 1, color: "#888", textTransform: "uppercase", marginTop: 2 }}>Patient Signature</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: '"Dancing Script", cursive', fontSize: 18, color: "#1a3a6b", opacity: 0.8, marginBottom: 2 }}>
            {doctor}
          </div>
          <div style={{ width: 140, borderTop: "1px solid #333" }} />
          <div style={{ fontSize: 6.5, letterSpacing: 1, color: "#888", textTransform: "uppercase", marginTop: 2 }}>Doctor&apos;s Signature</div>
        </div>
      </div>
    </div>
  );

  // ── Type-specific body ─────────────────────────────────────────────────────

  const PrescriptionBody = (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", gap: 12 }}>
        {/* Rx + left border */}
        <div style={{ borderLeft: "2px solid #0d9488", paddingLeft: 10, flex: 1 }}>
          <div style={{ fontSize: 7, letterSpacing: 1.5, color: "#0d9488", textTransform: "uppercase", marginBottom: 2 }}>Diagnosis</div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 8 }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: 22, fontStyle: "italic", color: "#0d9488", lineHeight: 1 }}>Rx</span>
            <span style={{ ...HW, fontSize: 13, fontStyle: "italic" }}>{diag}</span>
          </div>
          <div style={{ fontSize: 7, letterSpacing: 1.5, color: "#0d9488", textTransform: "uppercase", marginBottom: 4 }}>Medicines</div>
          {[
            `Tab. Paracetamol 500mg — 1 tab TDS x 5 days`,
            `Syp. Sinarest 10ml BD x 5 days`,
            `Tab. Ascorbic Acid 500mg OD x 7 days`,
          ].map((med, i) => (
            <div key={i} style={{ ...HW, fontSize: 11, marginBottom: 3, paddingLeft: 4 }}>
              {i + 1}. {med}
            </div>
          ))}
          <div style={{ fontSize: 7, letterSpacing: 1.5, color: "#0d9488", textTransform: "uppercase", marginTop: 8, marginBottom: 4 }}>Advice & Instructions</div>
          <div style={{ ...HW, fontSize: 11, fontStyle: "italic", lineHeight: 1.5 }}>{notes}</div>
          {notes && (
            <div style={{ ...HW, fontSize: 10, fontStyle: "italic", color: "#0d9488", marginTop: 4 }}>
              → Follow up after 5-7 days or earlier if symptoms worsen.
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const SickLeaveBody = (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ ...HW, fontSize: 11, lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 8px" }}>
          This is to certify that <b style={{ fontStyle: "italic" }}>{patient}</b>, Age: <b style={{ fontStyle: "italic" }}>{age}</b> yrs, Gender: <b style={{ fontStyle: "italic" }}>{gender}</b>, attended this clinic and was examined by me on <b style={{ fontStyle: "italic" }}>{date}</b>.
        </p>
        <p style={{ margin: "0 0 8px" }}>
          On examination, the patient was found suffering from <b style={{ fontStyle: "italic", textDecoration: "underline", textUnderlineOffset: 3 }}>{diag}</b>.
        </p>
        <p style={{ margin: "0 0 8px" }}>
          The patient is advised complete rest and is <span style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>unfit for duty / work / school</span> from <b>{leaveFrom}</b> to <b>{leaveTo}</b>.
        </p>
        <p style={{ margin: 0 }}>
          This certificate is issued on the patient&apos;s request for submission to the concerned authority.
        </p>
      </div>
    </div>
  );

  const FitnessBody = (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ ...HW, fontSize: 11, lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 8px" }}>
          This is to certify that <b style={{ fontStyle: "italic" }}>{patient}</b>, Age: <b style={{ fontStyle: "italic" }}>{age}</b> yrs, Gender: <b style={{ fontStyle: "italic" }}>{gender}</b>, has been examined by me on <b style={{ fontStyle: "italic" }}>{date}</b>.
        </p>
        <p style={{ margin: "0 0 8px" }}>
          After thorough clinical examination, the above-named individual is found to be <b style={{ textTransform: "uppercase", letterSpacing: 1 }}>Medically Fit</b> and in good physical and mental health, with no significant pathology detected.
        </p>
        <p style={{ margin: "0 0 8px" }}>
          The person is declared medically fit for normal duties / the purpose as required.
        </p>
        <p style={{ margin: 0 }}>
          This certificate is issued on request for official / employment / academic purposes.
        </p>
      </div>
    </div>
  );

  const GeneralBody = (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ ...HW, fontSize: 11, lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 8px" }}>
          This is to certify that <b style={{ fontStyle: "italic" }}>{patient}</b>, Age: <b style={{ fontStyle: "italic" }}>{age}</b> yrs, Gender: <b style={{ fontStyle: "italic" }}>{gender}</b>, visited this clinic and was examined on <b style={{ fontStyle: "italic" }}>{date}</b>.
        </p>
        <p style={{ margin: "0 0 8px" }}>
          Diagnosis: <b style={{ fontStyle: "italic", textDecoration: "underline", textUnderlineOffset: 3 }}>{diag}</b>
        </p>
        <p style={{ margin: 0 }}>
          This certificate is issued for official purposes as requested by the patient.
        </p>
      </div>
    </div>
  );

  const bodyMap: Record<CertType, React.ReactNode> = {
    prescription: PrescriptionBody,
    "sick-leave": SickLeaveBody,
    fitness: FitnessBody,
    general: GeneralBody,
  };

  const titleMap: Record<CertType, string | null> = {
    prescription: null,
    "sick-leave": "Medical Certificate (Sick Leave)",
    fitness: "Certificate of Medical Fitness",
    general: "Medical Certificate",
  };

  const title = titleMap[certType];

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

      {/* Header */}
      {Header}

      {/* Teal separator */}
      <div style={{ height: 2, background: "#0d9488", marginBottom: 6 }} />

      {/* Title (non-prescription) */}
      {title && (
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
          {title}
        </div>
      )}

      {/* Patient info */}
      {PatientRow}

      {/* Thin separator */}
      <div style={{ height: 1, background: "#e5e7eb", margin: "4px 0 8px" }} />

      {/* Body */}
      {bodyMap[certType]}

      {/* Footer */}
      {Footer}
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export function HomeCertGenerator() {
  const [certType, setCertType] = useState<CertType>("prescription");
  const [form, setForm] = useState<HomeFormData>(DEFAULT_FORM);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [isDownloadingImg, setIsDownloadingImg] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Load history on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("certificate_history");
      if (stored) setHistory(JSON.parse(stored).slice(0, 5));
    } catch {
      // Ignored
    }
  }, []);

  const handleChange = useCallback(
    (field: keyof HomeFormData, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleSave = useCallback(() => {
    const item: HistoryItem = {
      id: crypto.randomUUID(),
      patientName: form.patientName || "Patient Name",
      diagnosis: form.diagnosis,
      date: form.dateOfIssue,
      type: certType,
      createdAt: Date.now(),
      data: { ...form },
    };
    const newHistory = [item, ...history].slice(0, 5);
    setHistory(newHistory);
    try {
      localStorage.setItem("certificate_history", JSON.stringify(newHistory));
    } catch {}
    toast({ title: "Certificate Saved", description: "Saved to your local certificate history." });
  }, [form, certType, history, toast]);

  const handleLoadHistory = useCallback((item: HistoryItem) => {
    setForm(item.data);
    setCertType(item.type);
    toast({ title: "Certificate Loaded", description: `Loaded "${item.patientName}" certificate.` });
  }, [toast]);

  const handleClearHistory = useCallback(() => {
    setHistory([]);
    try {
      localStorage.removeItem("certificate_history");
    } catch {}
    toast({ title: "History Cleared", description: "All saved certificates have been removed." });
  }, [toast]);

  // Download as image
  const handleDownloadImage = useCallback(async () => {
    if (!previewRef.current) return;
    try {
      setIsDownloadingImg(true);
      const { toPng } = await import("html-to-image");
      await new Promise((r) => setTimeout(r, 100));
      const dataUrl = await toPng(previewRef.current, { quality: 1.0, pixelRatio: 2, cacheBust: true });
      const link = document.createElement("a");
      link.download = `certificate-${(form.patientName || "patient").replace(/\s+/g, "-").toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
      // Also save to history
      handleSave();
      toast({ title: "Image Downloaded", description: "High-resolution PNG saved." });
    } catch (err) {
      console.error(err);
      toast({ title: "Download Failed", variant: "destructive" });
    } finally {
      setIsDownloadingImg(false);
    }
  }, [form.patientName, handleSave, toast]);

  // Download as PDF
  const handleDownloadPdf = useCallback(async () => {
    if (!previewRef.current) return;
    try {
      setIsDownloadingPdf(true);
      const { toPng } = await import("html-to-image");
      await new Promise((r) => setTimeout(r, 100));
      const dataUrl = await toPng(previewRef.current, { quality: 1.0, pixelRatio: 2, cacheBust: true });
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const imgW = pageW - margin * 2;
      const imgH = Math.min(imgW * 1.414, pageH - margin * 2);
      pdf.addImage(dataUrl, "PNG", margin, margin, imgW, imgH);
      pdf.save(`certificate-${(form.patientName || "patient").replace(/\s+/g, "-").toLowerCase()}.pdf`);
      handleSave();
      toast({ title: "PDF Downloaded", description: "Certificate saved as A4 PDF." });
    } catch (err) {
      console.error(err);
      toast({ title: "PDF Download Failed", variant: "destructive" });
    } finally {
      setIsDownloadingPdf(false);
    }
  }, [form.patientName, handleSave, toast]);

  // Navigate to full editor with draft data
  const handleEditFull = useCallback(() => {
    const certData: Partial<CertificateData> = {
      patientName: form.patientName || "Patient Name",
      age: form.age || "25",
      gender: form.gender || "Male",
      date: form.dateOfIssue || format(new Date(), "yyyy-MM-dd"),
      diagnosis: form.diagnosis || "Fever (Pyrexia)",
      notes: form.notes || "",
      restDays: "5",
      doctorName: form.doctorName ? `Dr. ${form.doctorName.replace(/^Dr\.?\s*/i, "")}` : "Dr. Doctor Name",
      hospitalName: form.hospitalName || "City Clinic",
      doctorDegree: "MBBS, MD (General Medicine)",
      phone: "07624-292263",
      address: form.hospitalAddress || "123, Medical Complex, Main Road",
      font: "kalam",
      color: "blue",
      watermark: true,
      textSize: 22,
    };
    try {
      localStorage.setItem("certificate_draft", JSON.stringify(certData));
    } catch {}
  }, [form]);

  const currentDesc = CERT_TYPES.find((t) => t.id === certType)?.desc || "";

  return (
    <section className="w-full" id="generator">
      {/* ── Heading ──────────────────────────────────────────── */}
      <div className="text-center mb-6">
        <p className="text-xs font-bold uppercase tracking-[3px] text-teal-600 mb-2">Choose Template</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Medical Certificate Generator</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
          Select a template, fill in the details, and get a real-time preview of your
          medical certificate or medical certificate general format instantly.
        </p>
      </div>

      {/* ── Certificate Type Tabs ────────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {CERT_TYPES.map((type) => {
          const Icon = type.icon;
          const active = certType === type.id;
          return (
            <button
              key={type.id}
              onClick={() => setCertType(type.id)}
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

      {/* ── Type Description ─────────────────────────────────── */}
      <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto mb-8 leading-relaxed">
        {currentDesc}
      </p>

      {/* ── 2-Column Layout ──────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-start">
        {/* ── LEFT: Form Panel ──────────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Teal header */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-4">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Patient & Doctor Details
            </h3>
            <p className="text-teal-100 text-xs mt-1">Fill in all required fields. Preview updates automatically.</p>
          </div>

          {/* Form body */}
          <div className="p-6 space-y-4">
            {/* Row 1: Patient Name + Age */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-1.5">
                <Label className="text-xs font-semibold">
                  Patient Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="e.g. Rajesh Kumar"
                  value={form.patientName}
                  onChange={(e) => handleChange("patientName", e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">Age</Label>
                <Input
                  placeholder="e.g. 28"
                  value={form.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                />
              </div>
            </div>

            {/* Row 2: Gender */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">Gender</Label>
              <Select value={form.gender} onValueChange={(val) => handleChange("gender", val)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Row 3: Leave From + Leave To */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">Leave From</Label>
                <Input type="date" value={form.leaveFrom} onChange={(e) => handleChange("leaveFrom", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">Leave To</Label>
                <Input type="date" value={form.leaveTo} onChange={(e) => handleChange("leaveTo", e.target.value)} />
              </div>
            </div>

            {/* Row 4: Doctor Name + Diagnosis */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">
                  Doctor Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="e.g. Dr. Priya Sharma"
                  value={form.doctorName}
                  onChange={(e) => handleChange("doctorName", e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">
                  Diagnosis <span className="text-red-500">*</span>
                </Label>
                <Select value={form.diagnosis} onValueChange={(val) => handleChange("diagnosis", val)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {DIAGNOSES.map((d) => (
                      <SelectItem key={d} value={d}>{d}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 5: Hospital + Address */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">
                  Hospital / Clinic Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="e.g. City Medical Centre"
                  value={form.hospitalName}
                  onChange={(e) => handleChange("hospitalName", e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">Hospital Address</Label>
                <Input
                  placeholder="e.g. 123, Main Road, Mumbai"
                  value={form.hospitalAddress}
                  onChange={(e) => handleChange("hospitalAddress", e.target.value)}
                />
              </div>
            </div>

            {/* Row 6: Reg Number + Date of Issue */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">Registration Number</Label>
                <Input
                  value={form.registrationNumber}
                  onChange={(e) => handleChange("registrationNumber", e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">Date of Issue</Label>
                <Input type="date" value={form.dateOfIssue} onChange={(e) => handleChange("dateOfIssue", e.target.value)} />
              </div>
            </div>

            {/* Row 7: Notes */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">Optional Notes / Instructions</Label>
              <Textarea
                className="resize-none"
                rows={3}
                placeholder="e.g. Patient advised to take prescribed medication and follow up in 5 days..."
                value={form.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
              />
            </div>

            {/* ── Action Buttons ──────────────────────────────── */}
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
                {isDownloadingPdf ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                Download PDF
              </Button>
              <Button
                onClick={handleDownloadImage}
                disabled={isDownloadingImg}
                variant="outline"
                className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-semibold gap-1.5"
              >
                {isDownloadingImg ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileImage className="w-4 h-4" />}
                Download Image
              </Button>
            </div>

            <Link href="/generator/formal-cert" onClick={handleEditFull} className="block">
              <Button variant="outline" className="w-full gap-2 font-semibold h-11">
                <PenLine className="w-4 h-4" /> Edit Certificate
              </Button>
            </Link>
          </div>
        </div>

        {/* ── RIGHT: Live Preview ───────────────────────────── */}
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
          <div ref={previewRef} className="shadow-xl rounded-lg overflow-hidden">
            <CertPreview data={form} certType={certType} />
          </div>
        </div>
      </div>

      {/* ── Certificate History ──────────────────────────────── */}
      <div className="max-w-6xl mx-auto mt-12 bg-teal-50/50 border border-teal-100 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-base flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-600" />
            Certificate History
            <Badge variant="secondary" className="ml-1 text-xs bg-teal-100 text-teal-700">
              {history.length}
            </Badge>
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> Saved locally on this device
            </span>
            {history.length > 0 && (
              <Button variant="outline" size="sm" onClick={handleClearHistory} className="text-xs gap-1 h-8">
                <RotateCcw className="w-3.5 h-3.5" /> Clear All
              </Button>
            )}
          </div>
        </div>

        {history.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-10">
            <Eye className="w-10 h-10 text-teal-300 mb-3" />
            <p className="font-medium text-sm text-gray-500">No saved certificates yet.</p>
            <p className="text-xs text-muted-foreground mt-1">
              Fill in the form above and click <strong className="text-teal-600">Save Certificate</strong> to get started.
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
                      {item.diagnosis}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 shrink-0 ml-2">
                    {CERT_TYPE_LABELS[item.type]}
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
    </section>
  );
}
