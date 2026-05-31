"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight,
  ChevronDown,
  ArrowUp,
  ShoppingBag,
  Info,
  HelpCircle,
  FileText,
  ExternalLink,
  Leaf
} from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
}

interface FooterSection {
  title: string;
  icon: React.ReactNode;
  links: FooterLink[];
}

const footerLinks: Record<string, FooterSection> = {
  shop: {
    title: "Shop",
    icon: <ShoppingBag className="w-4 h-4" />,
    links: [
      { label: "Browse All Products", href: "/products", icon: <ChevronRight className="w-3 h-3" /> },
      { label: "Handpicked Deals for You", href: "/deals", icon: <ChevronRight className="w-3 h-3" />, badge: "Hot" },
      { label: "Trending Products", href: "/trending", icon: <ChevronRight className="w-3 h-3" />, badge: "New" },
    ],
  },
  company: {
    title: "About Us",
    icon: <Info className="w-4 h-4" />,
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  brands: {
    title: "Our Brands",
    icon: <Leaf className="w-4 h-4" />,
    links: [
      { label: "MAKIL", href: "/brands/makil" },
      { label: "RAMCARE", href: "/brands/ramcare" },
      { label: "DIVYAM", href: "/brands/divyam" },
      { label: "VANA ARASI", href: "/brands/vana-arasi" },
      { label: "VEDAN AMUTHU", href: "/brands/vedan-amuthu" },
      { label: "VEDAN", href: "/brands/vedan" },
    ],
  },
  support: {
    title: "Support",
    icon: <HelpCircle className="w-4 h-4" />,
    links: [
      { label: "My Account", href: "/account" },
      { label: "Order Tracking", href: "/track-order" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  policies: {
    title: "Policies",
    icon: <FileText className="w-4 h-4" />,
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Shipping Policy", href: "/shipping-policy" },
    ],
  },
};

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="relative bg-white border-t-2 border-green-100">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Company Info - Left Column */}
            <div className="lg:col-span-4">
              {/* Logo & Brand */}
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center shadow-lg shadow-green-200">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900">Dharani</h3>
                    <p className="text-xs text-green-600 tracking-wider">Herbals</p>
                  </div>
                </motion.div>
                <p className="text-sm text-green-700 leading-relaxed">
                  Natural herbal products rooted in Ayurvedic wisdom for your complete wellness journey.
                </p>
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4 mb-8"
              >
                <a 
                  href="tel:+919788122001" 
                  className="flex items-center gap-3 text-green-700 hover:text-green-600 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm">+91 97881 22001</span>
                </a>

                <a 
                  href="mailto:info@dharaniherbbals.in" 
                  className="flex items-center gap-3 text-green-700 hover:text-green-600 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <Mail className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm">info@dharaniherbbals.in</span>
                </a>

                <a 
                  href="mailto:salesdharani@gmail.com" 
                  className="flex items-center gap-3 text-green-700 hover:text-green-600 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <Mail className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm">salesdharani@gmail.com</span>
                </a>

                <div className="flex items-start gap-3 text-green-700">
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm leading-relaxed">
                    7/470-1, Chemparuthi Street,<br />
                    West Nehru Nagar, Punjai Puliampatti,<br />
                    Sathyamangalam (Taluk),<br />
                    Erode – 638 459,<br />
                    Tamil Nadu, India.
                  </span>
                </div>

                <div className="flex items-center gap-3 text-green-700">
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </motion.div>

              {/* App Download */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h4 className="text-sm font-semibold text-green-900 mb-3">Available on</h4>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-green-50 border-2 border-green-200 hover:border-green-400 hover:bg-green-100 transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                  </svg>
                  <div>
                    <p className="text-xs text-green-600">Get it on</p>
                    <p className="text-sm font-semibold text-green-900">Google Play</p>
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Quick Links - Desktop */}
            <div className="hidden lg:grid lg:col-span-8 grid-cols-5 gap-6">
              {/* Shop */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-sm font-semibold text-green-900 mb-4 flex items-center gap-2">
                  {footerLinks.shop.icon}
                  {footerLinks.shop.title}
                </h4>
                <ul className="space-y-3">
                  {footerLinks.shop.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-green-700 hover:text-green-600 transition-colors group"
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                          {link.icon}
                        </span>
                        {link.label}
                        {link.badge && (
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                            link.badge === "Hot" 
                              ? "bg-red-100 text-red-600" 
                              : "bg-green-100 text-green-600"
                          }`}>
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <h4 className="text-sm font-semibold text-green-900 mb-4 flex items-center gap-2">
                  {footerLinks.company.icon}
                  {footerLinks.company.title}
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-green-700 hover:text-green-600 transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Policies under About Us */}
                <h4 className="text-sm font-semibold text-green-900 mt-6 mb-4 flex items-center gap-2">
                  {footerLinks.policies.icon}
                  {footerLinks.policies.title}
                </h4>
                <ul className="space-y-3">
                  {footerLinks.policies.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-green-700 hover:text-green-600 transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Brands */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="col-span-2"
              >
                <h4 className="text-sm font-semibold text-green-900 mb-4 flex items-center gap-2">
                  {footerLinks.brands.icon}
                  {footerLinks.brands.title}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {footerLinks.brands.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-green-700 hover:text-green-600 transition-colors px-3 py-2 rounded-lg bg-green-50 border border-green-100 hover:border-green-300 hover:bg-green-100 transition-all duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <h4 className="text-sm font-semibold text-green-900 mb-4 flex items-center gap-2">
                  {footerLinks.support.icon}
                  {footerLinks.support.title}
                </h4>
                <ul className="space-y-3">
                  {footerLinks.support.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-green-700 hover:text-green-600 transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Quick Links - Mobile Accordion */}
            <div className="lg:hidden space-y-2">
              {Object.entries(footerLinks).map(([key, section]) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-2 border-green-100 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(key)}
                    className="w-full flex items-center justify-between p-4 text-sm font-semibold text-green-900 hover:bg-green-50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      {section.icon}
                      {section.title}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedSection === key ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4 text-green-600" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSection === key ? "auto" : 0,
                      opacity: expandedSection === key ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-2">
                      {section.title === "Our Brands" ? (
                        <div className="grid grid-cols-2 gap-2">
                          {section.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              className="text-sm text-green-700 hover:text-green-600 transition-colors px-3 py-2 rounded-lg bg-green-50 border border-green-100"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ) : (
                        section.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="flex items-center gap-2 text-sm text-green-700 hover:text-green-600 transition-colors py-1"
                          >
                            {link.label}
                            {link.badge && (
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                                link.badge === "Hot" 
                                  ? "bg-red-100 text-red-600" 
                                  : "bg-green-100 text-green-600"
                              }`}>
                                {link.badge}
                              </span>
                            )}
                          </a>
                        ))
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-green-100">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-green-600 text-center md:text-left"
              >
                © 2026 Dharani Herbals. All rights reserved.
              </motion.p>

              {/* Managed by */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-sm text-green-600 text-center"
              >
                Dharani Herbals managed by{" "}
                <span className="text-green-800 font-medium">ARUMUGAM POONKODI</span>
              </motion.p>

              {/* Developed by */}
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                href="#"
                className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 transition-colors"
              >
                Developed by{" "}
                <span className="text-green-800 font-medium">ThinkAside</span>
                <ExternalLink className="w-3 h-3" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-200 flex items-center justify-center transition-colors z-50"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export { Footer };