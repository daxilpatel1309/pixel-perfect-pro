import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#", hasDropdown: true },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Pricing", href: "#pricing", hasDropdown: false },
  { label: "Pages", href: "#", hasDropdown: true },
  { label: "Contacts", href: "#contact", hasDropdown: false },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2 text-foreground"
          whileHover={{ scale: 1.02 }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm0 28c-6.627 0-12-5.373-12-12S13.373 8 20 8s12 5.373 12 12-5.373 12-12 12z"
              fill="currentColor"
            />
            <path
              d="M20 12c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 12c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
          <span className="font-serif text-xl font-bold">
            Softy
            <br />
            <span className="text-sm font-sans font-medium text-muted-foreground">Solutions</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav
          className={`hidden lg:flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/90 backdrop-blur-md shadow-card"
              : "bg-white/70 backdrop-blur-sm"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 px-5 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
          <button className="p-2.5 text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-secondary/50">
            <Search className="w-5 h-5" />
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button variant="nav" size="default">
            <ArrowRight className="w-4 h-4" />
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-full bg-white/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md mt-4 mx-4 rounded-2xl shadow-elevated overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-foreground hover:bg-secondary rounded-xl transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
              <Button variant="hero" className="mt-4">
                <ArrowRight className="w-4 h-4" />
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
