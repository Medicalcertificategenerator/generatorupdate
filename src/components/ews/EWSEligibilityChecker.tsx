"use client";

import { useState } from "react";
import { CheckCircle, XCircle, AlertCircle, ChevronRight, ChevronLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EWSEligibilityChecker() {
  const [step, setStep] = useState(0); // 0 = start, 1-5 = questions, 6 = result
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<"eligible" | "not-eligible" | null>(null);
  const [failedCriterion, setFailedCriterion] = useState("");

  const totalSteps = 5;

  const handleSelect = (questionIndex: number, optionValue: string) => {
    setAnswers({ ...answers, [questionIndex]: optionValue });
  };

  const handleNext = () => {
    if (step === 0) {
      setStep(1);
      return;
    }

    // Validation
    if (!answers[step]) {
      return; // Must select an option
    }

    // Logic Tree checks
    if (step === 1) {
      const cat = answers[1];
      if (cat !== "general") {
        setResult("not-eligible");
        setFailedCriterion(
          "EWS reservation is strictly exclusive to candidates from the General (Unreserved) category. Candidates belonging to SC, ST, or OBC are not eligible, as they are already entitled to separate constitutional reservation benefits."
        );
        setStep(6);
        return;
      }
    }

    if (step === 2) {
      const inc = answers[2];
      if (inc === "above-8l") {
        setResult("not-eligible");
        setFailedCriterion(
          "Your family's gross annual income from all sources exceeds the maximum threshold of ₹8 Lakh. For EWS classification, combining all salaries, agricultural returns, business profits, and professional income must stay below the ₹8,00,000 threshold."
        );
        setStep(6);
        return;
      }
    }

    if (step === 3) {
      const land = answers[3];
      if (land === "above-5a") {
        setResult("not-eligible");
        setFailedCriterion(
          "Your family owns 5 acres or more of agricultural land. The combined holding of all dependent family members must remain below 5 acres to satisfy EWS property regulations."
        );
        setStep(6);
        return;
      }
    }

    if (step === 4) {
      const flat = answers[4];
      if (flat === "above-1000") {
        setResult("not-eligible");
        setFailedCriterion(
          "Your family owns a residential flat/apartment of 1000 square feet or more, which disqualifies you from EWS eligibility under the central government parameters."
        );
        setStep(6);
        return;
      }
    }

    if (step === 5) {
      const plot = answers[5];
      if (plot === "notified-above" || plot === "rural-above") {
        setResult("not-eligible");
        setFailedCriterion(
          "Your family owns a residential plot that exceeds EWS ceiling limits (which restrict plots to under 100 sq yards in notified municipalities, and under 200 sq yards in non-notified rural areas)."
        );
        setStep(6);
        return;
      } else {
        setResult("eligible");
        setStep(6);
        return;
      }
    }

    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
    setFailedCriterion("");
  };

  const scrollToDocs = () => {
    const el = document.getElementById("ews-documents");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-card border border-primary/20 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-lg hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
      {/* Background glow element */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

      {/* STEP 0: START SCREEN */}
      {step === 0 && (
        <div className="space-y-6 text-center py-4">
          <div className="mx-auto w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2">
            <CheckCircle className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              Do You Qualify for the 10% EWS Reservation?
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Answer 5 simple questions to instantly check if your family satisfies the income and property limits for the Economically Weaker Section certificate.
            </p>
          </div>
          
          <Button 
            onClick={handleNext}
            className="px-8 py-6 text-sm font-bold flex items-center gap-2 mx-auto rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            Start Check
            <ChevronRight className="w-4 h-4" />
          </Button>

          <p className="text-[10px] text-muted-foreground italic">
            This tool is for general guidance only. Official determinations are made by your local Tehsildar or SDM office based on verified documentation.
          </p>
        </div>
      )}

      {/* QUESTIONS (STEPS 1 - 5) */}
      {step >= 1 && step <= 5 && (
        <div className="space-y-6">
          {/* Header & Progress Indicator */}
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Step {step} of {totalSteps}
            </span>
            {/* Progress Dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalSteps }).map((_, i) => {
                const stepNum = i + 1;
                return (
                  <div
                    key={stepNum}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      stepNum < step
                        ? "bg-primary"
                        : stepNum === step
                        ? "bg-primary ring-4 ring-primary/20 scale-110"
                        : "border border-muted-foreground/40 bg-transparent"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Question Render */}
          <div className="space-y-4">
            {step === 1 && (
              <>
                <h4 className="text-base md:text-lg font-bold text-foreground">
                  1. What is your social category?
                </h4>
                <p className="text-xs text-muted-foreground -mt-2">
                  EWS quotas are reserved for General category candidates not covered by SC, ST, or OBC reserves.
                </p>
                <div className="grid gap-3">
                  {[
                    { value: "general", label: "General / Unreserved (I am not SC, ST, or OBC)" },
                    { value: "obc", label: "OBC (Other Backward Class)" },
                    { value: "sc", label: "SC (Scheduled Caste)" },
                    { value: "st", label: "ST (Scheduled Tribe)" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      onClick={() => handleSelect(1, opt.value)}
                      className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer hover:border-primary/50 transition-all ${
                        answers[1] === opt.value
                          ? "border-primary bg-primary/5 font-semibold text-foreground"
                          : "border-border text-foreground/80"
                      }`}
                    >
                      <span className="text-xs md:text-sm">{opt.label}</span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        answers[1] === opt.value ? "border-primary" : "border-muted-foreground/60"
                      }`}>
                        {answers[1] === opt.value && <div className="w-2 h-2 rounded-full bg-primary" />}
                      </div>
                    </label>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h4 className="text-base md:text-lg font-bold text-foreground">
                  2. What is your family's total gross annual income?
                </h4>
                <p className="text-xs text-muted-foreground -mt-2">
                  Combine gross incomes from all dependent family members (salary, business, farming, rentals, etc.) for the preceding financial year.
                </p>
                <div className="grid gap-3">
                  {[
                    { value: "below-5l", label: "Below ₹5 Lakh per year" },
                    { value: "5l-8l", label: "₹5 Lakh – ₹8 Lakh per year" },
                    { value: "above-8l", label: "Above ₹8 Lakh per year" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      onClick={() => handleSelect(2, opt.value)}
                      className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer hover:border-primary/50 transition-all ${
                        answers[2] === opt.value
                          ? "border-primary bg-primary/5 font-semibold text-foreground"
                          : "border-border text-foreground/80"
                      }`}
                    >
                      <span className="text-xs md:text-sm">{opt.label}</span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        answers[2] === opt.value ? "border-primary" : "border-muted-foreground/60"
                      }`}>
                        {answers[2] === opt.value && <div className="w-2 h-2 rounded-full bg-primary" />}
                      </div>
                    </label>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h4 className="text-base md:text-lg font-bold text-foreground">
                  3. Does your family own agricultural land?
                </h4>
                <p className="text-xs text-muted-foreground -mt-2">
                  Combined agricultural holdings belonging to parents, spouse, or siblings under 18 years of age.
                </p>
                <div className="grid gap-3">
                  {[
                    { value: "none", label: "No agricultural land holdings" },
                    { value: "below-5a", label: "Yes, but less than 5 Acres" },
                    { value: "above-5a", label: "Yes, 5 Acres or more" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      onClick={() => handleSelect(3, opt.value)}
                      className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer hover:border-primary/50 transition-all ${
                        answers[3] === opt.value
                          ? "border-primary bg-primary/5 font-semibold text-foreground"
                          : "border-border text-foreground/80"
                      }`}
                    >
                      <span className="text-xs md:text-sm">{opt.label}</span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        answers[3] === opt.value ? "border-primary" : "border-muted-foreground/60"
                      }`}>
                        {answers[3] === opt.value && <div className="w-2 h-2 rounded-full bg-primary" />}
                      </div>
                    </label>
                  ))}
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h4 className="text-base md:text-lg font-bold text-foreground">
                  4. Does your family own a residential flat or apartment?
                </h4>
                <p className="text-xs text-muted-foreground -mt-2">
                  Includes residential apartments in any city/state owned by dependent family members.
                </p>
                <div className="grid gap-3">
                  {[
                    { value: "none", label: "No residential flat/apartment" },
                    { value: "below-1000", label: "Yes, but less than 1,000 square feet" },
                    { value: "above-1000", label: "Yes, 1,000 square feet or more" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      onClick={() => handleSelect(4, opt.value)}
                      className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer hover:border-primary/50 transition-all ${
                        answers[4] === opt.value
                          ? "border-primary bg-primary/5 font-semibold text-foreground"
                          : "border-border text-foreground/80"
                      }`}
                    >
                      <span className="text-xs md:text-sm">{opt.label}</span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        answers[4] === opt.value ? "border-primary" : "border-muted-foreground/60"
                      }`}>
                        {answers[4] === opt.value && <div className="w-2 h-2 rounded-full bg-primary" />}
                      </div>
                    </label>
                  ))}
                </div>
              </>
            )}

            {step === 5 && (
              <>
                <h4 className="text-base md:text-lg font-bold text-foreground">
                  5. Does your family own any residential plots?
                </h4>
                <p className="text-xs text-muted-foreground -mt-2">
                  Consider plots located in notified municipalities or non-notified rural areas.
                </p>
                <div className="grid gap-3">
                  {[
                    { value: "none", label: "No residential plot holdings" },
                    { value: "notified-below", label: "Plot in notified municipality — less than 100 sq yards" },
                    { value: "notified-above", label: "Plot in notified municipality — 100 sq yards or more" },
                    { value: "rural-below", label: "Plot in non-notified rural area — less than 200 sq yards" },
                    { value: "rural-above", label: "Plot in non-notified rural area — 200 sq yards or more" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      onClick={() => handleSelect(5, opt.value)}
                      className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer hover:border-primary/50 transition-all ${
                        answers[5] === opt.value
                          ? "border-primary bg-primary/5 font-semibold text-foreground"
                          : "border-border text-foreground/80"
                      }`}
                    >
                      <span className="text-xs md:text-sm">{opt.label}</span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        answers[5] === opt.value ? "border-primary" : "border-muted-foreground/60"
                      }`}>
                        {answers[5] === opt.value && <div className="w-2 h-2 rounded-full bg-primary" />}
                      </div>
                    </label>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-border/60">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
              className="flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold rounded-xl"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={!answers[step]}
              className="flex items-center gap-1.5 px-5 py-2 text-xs md:text-sm font-bold rounded-xl"
            >
              {step === totalSteps ? "Check Eligibility" : "Next"}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* STEP 6: RESULT SCREEN */}
      {step === 6 && (
        <div className="space-y-6">
          {result === "eligible" ? (
            <div className="space-y-6">
              {/* Eligible success banner */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 flex gap-4 text-emerald-800 dark:text-emerald-300">
                <CheckCircle className="w-8 h-8 shrink-0 text-emerald-500 mt-1" />
                <div className="space-y-2">
                  <h4 className="text-base md:text-lg font-bold">You Likely Qualify for EWS Certificate!</h4>
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                    Based on your answers, your household satisfies the central government's EWS parameters: General Category, gross family income under ₹8 lakh, and all property parameters are well within the permissible limits.
                  </p>
                </div>
              </div>

              {/* Recommended Next steps */}
              <div className="space-y-3 bg-muted/40 p-5 rounded-xl border border-border">
                <h5 className="font-bold text-xs md:text-sm text-foreground">Recommended Next Steps:</h5>
                <ol className="text-xs text-foreground/80 space-y-2.5 list-decimal list-inside leading-relaxed">
                  <li>Gather all critical documentation (income statements, ITR, property declarations, address, and ID proofs).</li>
                  <li>Download or obtain the physical EWS Application Form from your regional revenue counter.</li>
                  <li>Visit your local Sub-Divisional Magistrate (SDM), Tehsildar, or Circle Office (or apply online via state portals).</li>
                  <li>Submit your application and collect the acknowledgement receipt. The certificate is typically issued in 15–30 days.</li>
                </ol>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button 
                  onClick={scrollToDocs}
                  className="flex-1 py-3 text-xs md:text-sm font-bold rounded-xl"
                >
                  See Required Documents
                </Button>
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="flex items-center justify-center gap-1.5 py-3 text-xs md:text-sm font-semibold rounded-xl"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Restart Checker
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Not eligible error banner */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5 flex gap-4 text-destructive">
                <XCircle className="w-8 h-8 shrink-0 text-destructive mt-1" />
                <div className="space-y-2">
                  <h4 className="text-base md:text-lg font-bold">You May Not Qualify for EWS Category</h4>
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed text-destructive-foreground">
                    {failedCriterion}
                  </p>
                </div>
              </div>

              {/* Specific dynamic suggestions */}
              {answers[1] && answers[1] !== "general" && (
                <div className="bg-muted/40 p-5 rounded-xl border border-border space-y-3 text-xs md:text-sm text-foreground/80 leading-relaxed">
                  <p className="font-bold text-foreground">Alternative Options:</p>
                  <p>
                    Since you belong to the {answers[1].toUpperCase()} social category, you are eligible for reservation benefits under SC, ST, or OBC-NCL brackets depending on community listings.
                  </p>
                  {answers[1] === "obc" && (
                    <a 
                      href="/obc-non-creamy-layer-certificate" 
                      className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
                    >
                      Check your OBC Non-Creamy Layer eligibility <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}

              {/* Reset button */}
              <div className="pt-2">
                <Button
                  onClick={handleReset}
                  className="w-full py-3 text-xs md:text-sm font-bold flex items-center justify-center gap-1.5 rounded-xl"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Restart Eligibility Checker
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
