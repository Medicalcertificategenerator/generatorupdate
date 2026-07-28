import Link from "next/link";
import { Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/layout/SearchBar";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { GuidesDropdown } from "@/components/layout/GuidesDropdown";
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-2 sm:gap-3">
        {/* Left Section: Mobile Hamburger + Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <MobileNavDrawer />

          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80 flex-shrink-0" aria-label="Medical Certificate Generator home">
            <div className="bg-primary/10 p-1.5 sm:p-2 rounded-lg text-primary">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="font-display font-bold text-base sm:text-xl tracking-tight">
              Medical <span className="text-primary hidden xs:inline">Certificate</span> <span className="text-primary sm:hidden">Gen</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation + Mobile Quick Actions */}
        <nav className="flex items-center gap-1.5 sm:gap-4 flex-1 justify-end" aria-label="Main navigation">
          {/* Desktop Navigation Links */}
          <Link href="/#templates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block">
            Templates
          </Link>
          <Link href="/generator" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block">
            Generators
          </Link>
          <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block">
            Blog
          </Link>
          <NavDropdown />
          <GuidesDropdown />
          
          <SearchBar />
          
          <Link href="/generator/formal-cert">
            <Button size="sm" className="font-semibold text-xs sm:text-sm px-2.5 sm:px-4 shadow-md shadow-primary/20 hover:-translate-y-0.5 transition-transform duration-200">
              Create New
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

