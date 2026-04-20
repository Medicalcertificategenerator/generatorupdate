"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { LazyMotion, domAnimation } from "framer-motion";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollToTop />
          {children}
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </LazyMotion>
  );
}
