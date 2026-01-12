import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  services: [
    { label: "AI Development", href: "#" },
    { label: "App Development", href: "#" },
    { label: "UX Design", href: "#" },
    { label: "Consulting", href: "#" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/projects" },
    { label: "Documentation", href: "#" },
    { label: "Support", href: "#" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      {/* CTA Section */}
      <div className="container relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
            Let's Work Together
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to Build<br />Something Amazing?
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto mb-10">
            Let's turn your vision into reality. Start your project today and see results in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                variant="hero"
                size="xl"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <ArrowRight className="w-5 h-5" />
                Start Your Project
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="hero-outline"
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowRight className="w-5 h-5" />
                Learn More About Us
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent mb-16" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="50%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm0 28c-6.627 0-12-5.373-12-12S13.373 8 20 8s12 5.373 12 12-5.373 12-12 12z"
                  fill="url(#footer-logo-gradient)"
                />
                <path
                  d="M20 12c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 12c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"
                  fill="url(#footer-logo-gradient)"
                  opacity="0.5"
                />
              </svg>
              <span className="font-serif text-2xl font-bold">Softy Solutions</span>
            </Link>
            <p className="text-primary-foreground/60 text-base leading-relaxed mb-8 max-w-sm">
              We combine AI technology with expert developers to turn your idea into a market-ready product — in record time.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300" />
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300" />
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300" />
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300" />
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-primary-foreground/60">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>14960 Florence Trail<br />Apple Valley, MN 55124</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@softy.solutions</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+ 0800 2336 7811</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="h-px bg-primary-foreground/10 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© 2026 Softy Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
