"use client";

import { useEffect } from "react";

declare global {
  interface Navigator {
    modelContext?: {
      provideContext?: (context: {
        tools: Array<{
          name: string;
          description: string;
          inputSchema?: Record<string, unknown>;
          execute?: (args: Record<string, unknown>) => Promise<unknown> | unknown;
        }>;
      }) => void;
    };
  }
}

export function WebMcpProvider() {
  useEffect(() => {
    if (typeof window !== "undefined" && navigator.modelContext?.provideContext) {
      try {
        navigator.modelContext.provideContext({
          tools: [
            {
              name: "search_medical_templates",
              description: "Search medical certificate templates and formats available on Medical Certificate Generator",
              inputSchema: {
                type: "object",
                properties: {
                  query: { type: "string", description: "Format name or type (e.g. sick leave, fitness, referral)" }
                },
                required: ["query"]
              },
              execute: async (args: Record<string, unknown>) => {
                const query = String(args.query || "");
                return {
                  url: `https://medicalcertificategenerator.co.in/search?q=${encodeURIComponent(query)}`,
                  message: `Search initiated for ${query}`
                };
              }
            },
            {
              name: "open_generator_template",
              description: "Navigate directly to a specific medical certificate generator template",
              inputSchema: {
                type: "object",
                properties: {
                  templateId: { type: "string", description: "Template identifier (e.g. formal-cert, pandey-homyo, janya-rx)" }
                },
                required: ["templateId"]
              },
              execute: async (args: Record<string, unknown>) => {
                const templateId = String(args.templateId || "formal-cert");
                return {
                  url: `https://medicalcertificategenerator.co.in/generator/${encodeURIComponent(templateId)}`
                };
              }
            }
          ]
        });
      } catch (err) {
        console.debug("WebMCP context registration non-fatal notice:", err);
      }
    }
  }, []);

  return null;
}
