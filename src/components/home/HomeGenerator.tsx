"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, FileText, History, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import type { CertificateData } from "@/types/certificate";

const DEFAULT_HOME_DATA = {
  patientName: "",
  date: format(new Date(), "yyyy-MM-dd"),
  diagnosis: "",
  doctorName: "",
};

export function HomeGenerator() {
  const [formData, setFormData] = useState(DEFAULT_HOME_DATA);
  const [history, setHistory] = useState<CertificateData[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("certificate_history");
      if (stored) {
        setHistory(JSON.parse(stored).slice(0, 5));
      }
    } catch {
      // Ignored
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCreate = () => {
    // Generate a default CertificateData object mixed with user input
    const fullData: Partial<CertificateData> = {
      patientName: formData.patientName || "John Doe",
      date: formData.date || format(new Date(), "yyyy-MM-dd"),
      diagnosis: formData.diagnosis || "Viral Fever & Fatigue",
      doctorName: formData.doctorName || "Dr. Sarah",
      age: "25",
      gender: "Male",
      restDays: "3",
      hospitalName: "City General Hospital",
      doctorDegree: "MBBS, MD",
      phone: "07624-292263",
      address: "123 Clinic Ave, Delhi",
      font: "caveat",
      color: "blue",
      watermark: true,
      textSize: 22,
    };

    try {
      const newHistory = [fullData, ...history].slice(0, 5);
      localStorage.setItem("certificate_history", JSON.stringify(newHistory));
      localStorage.setItem("certificate_draft", JSON.stringify(fullData));
      setHistory(newHistory as CertificateData[]);
    } catch {}
  };

  const handleDraftClick = (cert: CertificateData) => {
    localStorage.setItem("certificate_draft", JSON.stringify(cert));
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto w-full">
      {/* Tiny Generator Form */}
      <Card className="shadow-lg border-2 border-primary/10">
        <CardContent className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" /> Quick Start
            </h3>
            <p className="text-sm text-muted-foreground mt-1">Start drafting your certificate right here.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Patient Name</Label>
              <Input
                name="patientName"
                placeholder="e.g. Raj Kumar"
                value={formData.patientName}
                onChange={handleChange}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Date</Label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1.5">
                <Label>Doctor Name</Label>
                <Input
                  name="doctorName"
                  placeholder="e.g. Dr. Sarah"
                  value={formData.doctorName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Diagnosis</Label>
              <Input
                name="diagnosis"
                placeholder="e.g. Viral Fever & Body Ache"
                value={formData.diagnosis}
                onChange={handleChange}
              />
            </div>

            <div className="pt-4">
              <Link href="/generator/formal-cert" onClick={handleCreate}>
                <Button className="w-full h-12 text-base font-semibold shadow-md gap-2">
                  Open Full Editor <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* History panel */}
      <div className="flex flex-col h-full space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2 px-1">
          <History className="w-5 h-5 text-muted-foreground" /> Recent Drafts
        </h3>
        
        {history.length === 0 ? (
          <div className="flex-1 bg-muted/40 rounded-xl border border-dashed border-border/60 flex flex-col items-center justify-center text-center p-8 min-h-[250px]">
            <Clock className="w-8 h-8 text-muted-foreground/40 mb-3" />
            <p className="text-sm font-medium text-foreground/70">No recent drafts</p>
            <p className="text-xs text-muted-foreground mt-1">Your recent certificates will appear here automatically.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map((cert, i) => (
              <Link href="/generator/formal-cert" key={i} onClick={() => handleDraftClick(cert)}>
                <div className="bg-card border border-border p-4 rounded-xl shadow-sm hover:shadow-md hover:border-primary/40 transition-all group flex items-center justify-between cursor-pointer">
                  <div>
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {cert.patientName}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                      {cert.diagnosis} • {cert.date}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
