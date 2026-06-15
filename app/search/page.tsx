import { Metadata } from "next";
import { Suspense } from "react";
import SearchView from "@/views/Search";

export const metadata: Metadata = {
  title: "Search",
  description: "Search medical certificate templates and blog articles on Medical Certificate Generator.",
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <Suspense>
      <SearchView />
    </Suspense>
  );
}
