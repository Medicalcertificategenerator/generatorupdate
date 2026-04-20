"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { m } from "framer-motion";
import {
  Download,
  RotateCcw,
  Settings,
  Palette,
  Eye,
  ChevronLeft,
  Loader2,
  Activity,
  Building,
  Share2,
  FileImage,
  FileText,
} from "lucide-react";
import {
  FaWhatsapp,
  FaFacebook,
  FaXTwitter,
  FaTelegram,
} from "react-icons/fa6";

import { Navbar } from "@/components/layout/Navbar";
import type { CertificateData } from "@/types/certificate";
import dynamic from "next/dynamic";
import Image from "next/image";

const CertificatePreview = dynamic(
  () => import('@/components/certificate/Preview').then(mod => mod.CertificatePreview),
  { 
    ssr: false, 
    loading: () => <div className="w-full aspect-[1/1.414] bg-muted animate-pulse rounded-md flex items-center justify-center text-muted-foreground text-sm">Loading Preview...</div> 
  }
);
import { TEMPLATES } from "@/types/certificate";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const DEFAULT_DATA: CertificateData = {
  patientName: "Raj Chourasiya",
  age: "25",
  gender: "Male",
  date: "2026-03-26",
  diagnosis: "Febrile Illness & Viral Pyrexia, High Grade Fever 101°C",
  notes: "Body aches and fatigue, Headache and chills, Nausea, Mild Dehydration",
  restDays: "4",
  doctorName: "Dr. Sarah Johnson",
  hospitalName: "City General Hospital",
  doctorDegree: "MBBS, MD",
  phone: "07624-292263",
  address: "SEC 14, Vasanth MG, Vijay Nagar, Delhi",
  font: "kalam",
  color: "blue",
  watermark: true,
  textSize: 22,
};

export default function Generator() {
  const params = useParams<{ templateId: string }>();
  const templateId = params?.templateId || "formal-cert";
  const templateInfo = TEMPLATES.find((t) => t.id === templateId);
  const otherTemplates = TEMPLATES.filter((t) => t.id !== templateId).slice(0, 6);

  const [data, setData] = useState<CertificateData>(DEFAULT_DATA);
  const [isDownloadingPng, setIsDownloadingPng] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [canNativeShare, setCanNativeShare] = useState(false);

  const certificateRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    let initialData = { ...DEFAULT_DATA };
    const today = format(new Date(), "yyyy-MM-dd");
    try {
      const draft = localStorage.getItem("certificate_draft");
      if (draft) {
        initialData = { ...initialData, ...JSON.parse(draft) };
        localStorage.removeItem("certificate_draft");
      } else {
        initialData.date = today;
      }
    } catch {
      initialData.date = today;
    }
    
    setData(initialData);
    setShareUrl(window.location.href);
    setCanNativeShare(!!navigator.share);
  }, []);

  const handleInputChange = useCallback(
    (field: keyof CertificateData, value: string | boolean | number) => {
      setData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleReset = () => {
    setData(DEFAULT_DATA);
    toast({ title: "Reset Successful", description: "Form restored to default values." });
  };

  const getImageDataUrl = async (): Promise<string> => {
    if (!certificateRef.current) throw new Error("No ref");
    const { toPng } = await import("html-to-image");
    await new Promise((r) => setTimeout(r, 120));
    return toPng(certificateRef.current, { quality: 1.0, pixelRatio: 2, cacheBust: true });
  };

  // PNG download
  const handleDownloadPng = async () => {
    try {
      setIsDownloadingPng(true);
      const dataUrl = await getImageDataUrl();
      const link = document.createElement("a");
      link.download = `medical-certificate-${data.patientName.replace(/\s+/g, "-").toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
      toast({ title: "PNG Downloaded", description: "High-resolution certificate saved." });
    } catch (err) {
      console.error(err);
      toast({ title: "Download Failed", variant: "destructive" });
    } finally {
      setIsDownloadingPng(false);
    }
  };

  // PDF download
  const handleDownloadPdf = async () => {
    try {
      setIsDownloadingPdf(true);
      const dataUrl = await getImageDataUrl();
      // A4 dimensions in mm: 210 × 297
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const imgW = pageW - margin * 2;
      // Keep A4 aspect ratio inside page with a safety max height
      const imgH = Math.min(imgW * 1.414, pageH - margin * 2);
      pdf.addImage(dataUrl, "PNG", margin, margin, imgW, imgH);
      pdf.save(`medical-certificate-${data.patientName.replace(/\s+/g, "-").toLowerCase()}.pdf`);
      toast({ title: "PDF Downloaded", description: "Certificate saved as A4 PDF." });
    } catch (err) {
      console.error(err);
      toast({ title: "PDF Download Failed", variant: "destructive" });
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  // Web Share / Social
  const shareText = `Generate realistic medical certificates instantly — free tool with 15+ Indian clinic templates!`;

  const handleNativeShare = async () => {
    try {
      setIsSharing(true);
      if (navigator.share) {
        await navigator.share({ title: "Medical Certificate Generator", text: shareText, url: shareUrl });
      }
    } catch {
      // cancelled
    } finally {
      setIsSharing(false);
    }
  };

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden h-[calc(100vh-64px)]">

        {/* ── LEFT PANEL – CONTROLS ──────────────────────────── */}
        <div className="w-full md:w-[450px] lg:w-[500px] border-r border-border bg-card flex flex-col z-10 shadow-xl shadow-black/5 shrink-0">
          <div className="p-4 border-b border-border flex items-center justify-between bg-muted/30">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
              </Link>
              <div>
                <h2 className="font-semibold">Editor</h2>
                <p className="text-xs text-muted-foreground">{templateInfo?.name || templateId}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={handleReset} title="Reset Form">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          <ScrollArea className="flex-1 p-6">
            <div className="space-y-8 pb-10">

              {/* Patient Details */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Settings className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Patient Details</h3>
                </div>
                <div className="space-y-3">
                  <div className="grid gap-2">
                    <Label htmlFor="patientName">Patient Name</Label>
                    <Input id="patientName" value={data.patientName} onChange={e => handleInputChange("patientName", e.target.value)} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" value={data.age} onChange={e => handleInputChange("age", e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select value={data.gender} onValueChange={val => handleInputChange("gender", val)}>
                        <SelectTrigger id="gender"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </section>

              {/* Medical Info */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Activity className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Medical Info</h3>
                </div>
                <div className="space-y-3">
                  <div className="grid gap-2">
                    <Label htmlFor="date">Examination Date</Label>
                    <Input id="date" type="date" value={data.date} onChange={e => handleInputChange("date", e.target.value)} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="diagnosis">Diagnosis</Label>
                    <Input id="diagnosis" value={data.diagnosis} onChange={e => handleInputChange("diagnosis", e.target.value)} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="notes">Recommendations / Notes</Label>
                    <Textarea id="notes" className="resize-none" rows={3} value={data.notes} onChange={e => handleInputChange("notes", e.target.value)} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="restDays">Recommended Rest (Days)</Label>
                    <Input id="restDays" type="number" value={data.restDays} onChange={e => handleInputChange("restDays", e.target.value)} />
                  </div>
                </div>
              </section>

              {/* Provider */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Building className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Provider</h3>
                </div>
                <div className="space-y-3">
                  <div className="grid gap-2">
                    <Label htmlFor="hospitalName">Hospital / Clinic Name</Label>
                    <Input id="hospitalName" value={data.hospitalName} onChange={e => handleInputChange("hospitalName", e.target.value)} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="doctorName">Doctor Name</Label>
                    <Input id="doctorName" value={data.doctorName} onChange={e => handleInputChange("doctorName", e.target.value)} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="doctorDegree">Doctor Degree / Qualifications</Label>
                    <Input id="doctorDegree" placeholder="e.g. MBBS, MD" value={data.doctorDegree} onChange={e => handleInputChange("doctorDegree", e.target.value)} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" value={data.phone} onChange={e => handleInputChange("phone", e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="address">Address / City</Label>
                      <Input id="address" value={data.address} onChange={e => handleInputChange("address", e.target.value)} />
                    </div>
                  </div>
                </div>
              </section>

              {/* Styling */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Palette className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Styling</h3>
                </div>
                <div className="space-y-5">
                  <div className="grid gap-3">
                    <Label>Handwriting Font</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "caveat", name: "Caveat", cls: "font-caveat" },
                        { id: "dancing", name: "Dancing", cls: "font-dancing" },
                        { id: "kalam", name: "Kalam", cls: "font-kalam" },
                      ].map(f => (
                        <div key={f.id} onClick={() => handleInputChange("font", f.id)}
                          className={`border rounded-md p-3 text-center cursor-pointer transition-all ${data.font === f.id ? "border-primary bg-primary/5 shadow-sm" : "border-border hover:bg-muted/50"}`}>
                          <span className={`${f.cls} text-xl block leading-none mb-1`}>Abc</span>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{f.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Label>Ink Color</Label>
                    <div className="flex gap-3">
                      {[
                        { id: "blue", color: "bg-blue-700", name: "Standard Blue" },
                        { id: "black", color: "bg-slate-800", name: "Black" },
                        { id: "lightblue", color: "bg-cyan-600", name: "Light Blue" },
                      ].map(c => (
                        <button key={c.id} onClick={() => handleInputChange("color", c.id)}
                          className={`w-10 h-10 rounded-full border-2 transition-all ${data.color === c.id ? "border-primary shadow-md scale-110" : "border-transparent hover:scale-105"} ${c.color}`}
                          title={c.name} />
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-3 pt-2">
                    <div className="flex justify-between">
                      <Label>Text Size</Label>
                      <span className="text-xs text-muted-foreground">{data.textSize}px</span>
                    </div>
                    <Slider value={[data.textSize]} min={16} max={36} step={1}
                      onValueChange={vals => handleInputChange("textSize", vals[0])} />
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t mt-4">
                    <div className="space-y-0.5">
                      <Label>Show &quot;DEMO&quot; Watermark</Label>
                      <p className="text-xs text-muted-foreground">Disable for clean export</p>
                    </div>
                    <Switch checked={data.watermark} onCheckedChange={c => handleInputChange("watermark", c)} />
                  </div>
                </div>
              </section>

            </div>
          </ScrollArea>

          {/* Download + Share footer */}
          <div className="p-4 border-t border-border bg-card space-y-2">
            {/* Download row */}
            <div className="flex gap-2">
              <Button className="flex-1 h-11 font-semibold shadow-lg shadow-primary/20" onClick={handleDownloadPng} disabled={isDownloadingPng || isDownloadingPdf}>
                {isDownloadingPng ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileImage className="mr-2 h-4 w-4" />}
                {isDownloadingPng ? "Generating…" : "Download PNG"}
              </Button>
              <Button variant="outline" className="flex-1 h-11 font-semibold" onClick={handleDownloadPdf} disabled={isDownloadingPng || isDownloadingPdf}>
                {isDownloadingPdf ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileText className="mr-2 h-4 w-4" />}
                {isDownloadingPdf ? "Generating…" : "Download PDF"}
              </Button>
            </div>

            {/* Share row */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-muted-foreground mr-1">Share:</span>
              {canNativeShare && (
                <button onClick={handleNativeShare} disabled={isSharing}
                  className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-md bg-muted hover:bg-muted/80 text-foreground font-medium transition-colors">
                  <Share2 className="w-3.5 h-3.5" />
                  Share
                </button>
              )}
              <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-md bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] transition-colors" title="Share on WhatsApp">
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-md bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors" title="Share on X">
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-md bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] transition-colors" title="Share on Facebook">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-md bg-[#26A5E4]/10 hover:bg-[#26A5E4]/20 text-[#26A5E4] transition-colors" title="Share on Telegram">
                <FaTelegram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL – PREVIEW + RELATED ──────────────────── */}
        <div className="flex-1 bg-muted/30 overflow-y-auto relative">
          <div className="p-4 md:p-8 lg:p-12 flex items-start justify-center">
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border shadow-sm">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">Live Preview</span>
            </div>

            <m.div 
              initial={{ opacity: 0, y: 12 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }} 
              className="w-full max-w-[680px] mx-auto flex-shrink-0"
            >
              <CertificatePreview ref={certificateRef} data={data} templateId={templateId} hideWatermark={false} />
            </m.div>
          </div>

          {/* Related Templates */}
          <div className="px-4 md:px-8 lg:px-12 pb-12">
            <div className="max-w-[800px] mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Try Other Templates</h2>
                <Link href="/#templates">
                  <span className="text-sm text-primary hover:underline font-medium">View all →</span>
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {otherTemplates.map(t => (
                  <Link key={t.id} href={`/generator/${t.id}`}>
                    <div className="group cursor-pointer rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                      <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                        <Image src={t.previewImage} alt={t.name} fill sizes="(min-width: 1024px) 16vw, 33vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          loading="lazy" />
                      </div>
                      <div className="p-2">
                        <p className="text-[10px] font-semibold leading-tight line-clamp-2 text-foreground">{t.name}</p>
                        <Badge variant="secondary" className="text-[8px] px-1 py-0 mt-1">{t.category}</Badge>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
