import Link from "next/link";
import { Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/layout/SearchBar";
import { NavDropdown } from "@/components/layout/NavDropdown";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80 flex-shrink-0" aria-label="Medical Certificate Generator home">
          <div className="bg-primary/10 p-2 rounded-lg text-primary">
            <Activity className="w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:inline-block">
            Medical <span className="text-primary">Certificate Generator</span>
          </span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4 flex-1 justify-end" aria-label="Main navigation">
          <Link href="/#templates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Templates
          </Link>
          <Link href="/generator" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Generators
          </Link>
          <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Blog
          </Link>
          <NavDropdown />
          <SearchBar />
          <Link href="/generator/formal-cert">
            <Button size="sm" className="font-semibold shadow-md shadow-primary/20 hover:-translate-y-0.5 transition-transform duration-200">
              Create New
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
