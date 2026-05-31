import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Send, Mail, User, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setToastType("error");
      setToastMessage("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    
    // Simulate API call - replace with actual API endpoint
    try {
      // const response = await fetch('/api/contact/', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulated success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setToastType("success");
      setToastMessage("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setToastType("error");
      setToastMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <section className="min-h-[85vh] bg-white flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="max-w-5xl w-full bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col-reverse md:flex-row min-h-[600px]">
        
        {/* LEFT SIDE - Contact Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white/[0.01]">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-3xl font-extrabold text-[green] mb-2">
              Send Message
            </h1>

            <p className="text-gray-400 text-sm mb-6">
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            {/* SUCCESS MESSAGE */}
            <AnimatePresence>
              {toastMessage && toastType === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{toastMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ERROR MESSAGE */}
            <AnimatePresence>
              {toastMessage && toastType === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{toastMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* NAME */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-emerald-500 rounded-2xl pl-11 pr-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-emerald-500 rounded-2xl pl-11 pr-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Subject
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-emerald-500 rounded-2xl pl-11 pr-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-emerald-500 rounded-2xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors resize-none"
                  required
                />
              </div>

              {/* SUBMIT BUTTON */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl py-3 font-semibold text-sm transition-colors shadow-lg shadow-emerald-500/10 disabled:opacity-60"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE - Image/Branding */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full overflow-hidden bg-emerald-950">
          <img
            src="/TabView.png"
            alt="Dharani Herbbals"
            className="w-full h-full object-cover opacity-80"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=60";
            }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f09] via-transparent to-transparent flex flex-col justify-end p-8 text-white">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              Get In Touch
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight mb-2">
              Contact Us
            </h2>

            <p className="text-gray-300 text-sm max-w-sm">
              Have questions about our herbal products? We'd love to hear from you. Reach out and we'll respond as soon as possible.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>support@dharanisherbbals.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;