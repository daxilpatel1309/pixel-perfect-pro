import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "Services", href: "#services", hasDropdown: false },
  { label: "Pricing", href: "#pricing", hasDropdown: false },
  { 
    label: "Pages", 
    href: "#", 
    hasDropdown: true,
    dropdownItems: [
      { label: "About Us", href: "/about" },
      { label: "Our Projects", href: "/projects" },
      { label: "Our Team", href: "/team" },
      { label: "Blog", href: "/blog" },
    ]
  },
  { label: "Contacts", href: "/contact", hasDropdown: false },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setIsScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    if (item.hasDropdown) {
      e.preventDefault();
      setOpenDropdown(openDropdown === item.label ? null : item.label);
    } else if (item.href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isHidden ? -100 : 0, 
        opacity: isHidden ? 0 : 1 
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.div
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
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          ref={dropdownRef}
          className={`hidden lg:flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/90 backdrop-blur-md shadow-card"
              : "bg-white/70 backdrop-blur-sm"
          }`}
        >
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.hasDropdown ? (
                <button
                  onClick={(e) => handleNavClick(item, e)}
                  className={`flex items-center gap-1 px-5 py-2.5 text-sm font-medium transition-colors rounded-full hover:bg-secondary/50 ${
                    openDropdown === item.label ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
              ) : item.href.startsWith("/") ? (
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-5 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className="flex items-center gap-1 px-5 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
                >
                  {item.label}
                </a>
              )}
              
              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.hasDropdown && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-elevated border border-border py-2 z-50"
                  >
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.href}
                        className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <button className="p-2.5 text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-secondary/50">
            <Search className="w-5 h-5" />
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <Button variant="nav" size="default">
              <ArrowRight className="w-4 h-4" />
              Get Started
            </Button>
          </Link>
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
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-foreground hover:bg-secondary rounded-xl transition-colors"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 overflow-hidden"
                          >
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.label}
                                to={dropdownItem.href}
                                className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : item.href.startsWith("/") ? (
                    <Link
                      to={item.href}
                      className="flex items-center justify-between px-4 py-3 text-foreground hover:bg-secondary rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 text-foreground hover:bg-secondary rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="hero" className="mt-4 w-full">
                  <ArrowRight className="w-4 h-4" />
                  Get Started
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
