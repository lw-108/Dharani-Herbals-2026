"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Leaf, 
  Sparkles,
  Bell,
  ShieldCheck,
  Users,
  Gift,
  XCircle,
  Phone
} from "lucide-react";

const benefits = [
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Herbal Tips",
    description: "Weekly Ayurvedic wisdom",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "New Launches",
    description: "Be first to know",
  },
  {
    icon: <Gift className="w-5 h-5" />,
    title: "Exclusive Offers",
    description: "Subscriber-only deals",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "No Spam",
    description: "Only valuable updates",
  },
];

const WhatsAppCTA = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validatePhone = (number: string) => {
    const cleaned = number.replace(/[\s\-\(\)]/g, "");
    return /^\+?[1-9]\d{9,14}$/.test(cleaned) || /^[6-9]\d{9}$/.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!phoneNumber.trim()) {
      setError("Please enter your WhatsApp number");
      return;
    }

    if (!validatePhone(phoneNumber)) {
      setError("Please enter a valid phone number");
      return;
    }

    if (!isAgreed) {
      setError("Please agree to receive WhatsApp updates");
      return;
    }

    // Format phone number for WhatsApp link
    const cleaned = phoneNumber.replace(/[\s\-\(\)]/g, "");
    const formattedNumber = cleaned.startsWith("+") ? cleaned : `+91${cleaned}`;
    const message = encodeURIComponent("Hi Dharani Herbals! I'd like to receive herbal tips, product updates, and exclusive offers on WhatsApp. 🌿");
    
    // Open WhatsApp
    window.open(`https://wa.me/${formattedNumber.replace("+", "")}?text=${message}`, "_blank");
    
    setIsSubmitted(true);
    setPhoneNumber("");
    setIsAgreed(false);

    // Reset success message
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient blurs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-green-50 to-transparent rounded-full blur-3xl" />
        
        {/* WhatsApp pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(34,197,94,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-6 px-4 py-2 rounded-full bg-green-100 text-green-700 border border-green-200"
            >
              <MessageCircle className="w-4 h-4" />
              Stay Connected
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mb-6 leading-tight"
            >
              <span>🌿</span> Stay Connected With{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  Natural Wellness
                </span>
                <div className="absolute bottom-1 left-0 right-0 h-2 bg-green-200 rounded-full" />
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-green-700 leading-relaxed mb-8"
            >
              Receive herbal tips, product updates, and exclusive offers directly on WhatsApp
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border-2 border-green-100 hover:border-green-300 transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-900">{benefit.title}</h4>
                    <p className="text-xs text-green-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-4 text-sm text-green-700"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-600" />
                <span>Join <span className="text-green-900 font-semibold">5,000+</span> subscribers</span>
              </div>
              <div className="w-px h-4 bg-green-200" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>100% private & secure</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Card glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-200 to-green-100 rounded-3xl blur-xl opacity-50" />
            
            <div className="relative bg-white border-2 border-green-200 rounded-3xl p-8 md:p-10 shadow-xl">
              {/* WhatsApp Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-green-100">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center shadow-lg shadow-green-200">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-900">Join on WhatsApp</h3>
                  <p className="text-sm text-green-600">Get updates directly on your phone</p>
                </div>
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-green-50 border border-green-200 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-green-700">WhatsApp opened!</p>
                      <p className="text-xs text-green-600">Send the message to complete your subscription</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Phone Input */}
                <div>
                  <label className="block text-sm font-medium text-green-800 mb-2">
                    Enter your WhatsApp number
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600">+91</span>
                    </div>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        setError("");
                      }}
                      placeholder="98765 43210"
                      className="w-full pl-24 pr-4 py-3.5 bg-green-50 border-2 border-green-200 rounded-2xl text-green-900 placeholder-green-400 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300"
                    />
                  </div>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500 mt-1.5 ml-1"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                {/* Agreement Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      checked={isAgreed}
                      onChange={(e) => {
                        setIsAgreed(e.target.checked);
                        setError("");
                      }}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                      isAgreed
                        ? "bg-green-600 border-green-600"
                        : "border-green-300 group-hover:border-green-400"
                    }`}>
                      {isAgreed && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </div>
                  </div>
                  <span className="text-sm text-green-700 group-hover:text-green-800 transition-colors">
                    I agree to receive WhatsApp updates about herbal tips, product launches, and exclusive offers
                  </span>
                </label>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold hover:shadow-lg hover:shadow-green-200 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Join Now on WhatsApp
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-green-100">
                <div className="flex items-center justify-center gap-6 text-xs text-green-600">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                    Secure
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bell className="w-3.5 h-3.5 text-green-500" />
                    Weekly updates
                  </div>
                  <div className="flex items-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-green-500" />
                    Easy opt-out
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-12 h-12 rounded-2xl bg-green-100 border-2 border-green-200 flex items-center justify-center hidden lg:flex shadow-md"
            >
              <Leaf className="w-6 h-6 text-green-600" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-10 h-10 rounded-xl bg-green-50 border-2 border-green-200 flex items-center justify-center hidden lg:flex shadow-md"
            >
              <Sparkles className="w-5 h-5 text-green-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { WhatsAppCTA };