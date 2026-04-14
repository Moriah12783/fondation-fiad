"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  const toggleLanguage = () => {
    const newLocale = locale === "fr" ? "en" : "fr";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  const localePath = (href: string) => `/${locale}${href}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHome
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={localePath("/")} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-fiad-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm font-display">F</span>
            </div>
            <div>
              <div
                className={cn(
                  "font-display font-bold text-base leading-tight transition-colors",
                  isScrolled || !isHome ? "text-fiad-navy" : "text-white"
                )}
              >
                FIAD
              </div>
              <div
                className={cn(
                  "text-xs leading-tight transition-colors hidden sm:block",
                  isScrolled || !isHome ? "text-fiad-gray-light" : "text-white/80"
                )}
              >
                Fondation Impact Afrique Durable
              </div>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={localePath(item.href)}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isScrolled || !isHome
                      ? "text-fiad-gray hover:text-fiad-green hover:bg-fiad-cream"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {locale === "fr" ? item.label : item.labelEn}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={localePath(child.href)}
                        className="block px-4 py-3 text-sm text-fiad-gray hover:bg-fiad-cream hover:text-fiad-green transition-colors"
                      >
                        {locale === "fr" ? child.label : child.labelEn}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions droite */}
          <div className="flex items-center gap-2">
            {/* Switcher langue */}
            <button
              onClick={toggleLanguage}
              className={cn(
                "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isScrolled || !isHome
                  ? "text-fiad-gray hover:text-fiad-green hover:bg-fiad-cream"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{locale === "fr" ? "EN" : "FR"}</span>
            </button>

            {/* CTA Contact */}
            <Link
              href={localePath("/contact")}
              className="hidden sm:flex items-center px-4 py-2 bg-fiad-gold text-white rounded-lg text-sm font-semibold hover:bg-fiad-gold-dark transition-colors"
            >
              {locale === "fr" ? "Contact" : "Contact"}
            </Link>

            {/* Burger mobile */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled || !isHome
                  ? "text-fiad-gray hover:bg-fiad-cream"
                  : "text-white hover:bg-white/10"
              )}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                <Link
                  href={localePath(item.href)}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-fiad-gray hover:bg-fiad-cream hover:text-fiad-green rounded-lg transition-colors"
                >
                  {locale === "fr" ? item.label : item.labelEn}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={localePath(child.href)}
                        onClick={() => setIsMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-fiad-gray-light hover:text-fiad-green transition-colors"
                      >
                        {locale === "fr" ? child.label : child.labelEn}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 flex gap-2">
              <button
                onClick={toggleLanguage}
                className="flex-1 py-2 text-center text-sm font-medium text-fiad-gray border border-gray-200 rounded-lg hover:bg-fiad-cream transition-colors"
              >
                {locale === "fr" ? "English" : "Français"}
              </button>
              <Link
                href={localePath("/contact")}
                onClick={() => setIsMobileOpen(false)}
                className="flex-1 py-2 text-center text-sm font-semibold text-white bg-fiad-green rounded-lg hover:bg-fiad-green-dark transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
