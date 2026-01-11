"use client";

import { useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
  Send,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Building2,
  Briefcase,
  Calendar,
  DollarSign,
  User,
  ChevronDown,
} from "lucide-react";
import { SiApple, SiLinux } from "react-icons/si";
import { FaWindows } from "react-icons/fa";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProjectTypeOpen, setIsProjectTypeOpen] = useState(false);
  const projectTypeRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        projectTypeRef.current &&
        !projectTypeRef.current.contains(event.target as Node)
      ) {
        setIsProjectTypeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const projectTypeOptions = [
    { value: "", label: "Select project type" },
    { value: "website", label: "Website" },
    { value: "web-app", label: "Web App" },
    { value: "admin-panel", label: "Admin Panel" },
    {
      value: "system-app",
      label: "System App",
      icons: true,
    },
    { value: "other", label: "Other" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (
      formData.phoneNumber &&
      !/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/.test(
        formData.phoneNumber
      )
    ) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          contactNumber: formData.phoneNumber,
          company: formData.company,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        });
        setErrors({});
      } else {
        console.error("API Error:", responseData.error);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0a0a0a] dark:via-[#050505] dark:to-[#0a0a0a] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-green-100/40 to-blue-100/40 dark:from-green-900/10 dark:to-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* CONTACT Title */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-30"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg shadow-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
                CONTACT
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto text-base sm:text-lg md:text-xl mb-4">
            Ready to start your next project? Fill out the form below and let's
            discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Custom Solutions</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/50 dark:bg-[#1a1a1a]/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 dark:border-gray-800 shadow-xl">
            <div className="space-y-6 sm:space-y-8">
              {/* Personal Information Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    Personal Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 1, x: 0 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
                    }
                    transition={{ delay: 0.4 }}
                  >
                    <label
                      htmlFor="name"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-white dark:bg-[#0a0a0a] border-2 rounded-xl px-4 py-3 text-gray-700 dark:text-gray-300 text-sm transition-all duration-300 ${
                        errors.name
                          ? "border-red-500 dark:border-red-400"
                          : focusedField === "name"
                          ? "border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/20"
                          : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                      } focus:outline-none`}
                      placeholder="John Doe"
                      suppressHydrationWarning
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 1, x: 0 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
                    }
                    transition={{ delay: 0.5 }}
                  >
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-white dark:bg-[#0a0a0a] border-2 rounded-xl px-4 py-3 text-gray-700 dark:text-gray-300 text-sm transition-all duration-300 ${
                        errors.email
                          ? "border-red-500 dark:border-red-400"
                          : focusedField === "email"
                          ? "border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/20"
                          : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                      } focus:outline-none`}
                      placeholder="john@example.com"
                      suppressHydrationWarning
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Field */}
                  <motion.div
                    initial={{ opacity: 1, x: 0 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
                    }
                    transition={{ delay: 0.6 }}
                  >
                    <label
                      htmlFor="phoneNumber"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phoneNumber")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-white dark:bg-[#0a0a0a] border-2 rounded-xl px-4 py-3 text-gray-700 dark:text-gray-300 text-sm transition-all duration-300 ${
                        errors.phoneNumber
                          ? "border-red-500 dark:border-red-400"
                          : focusedField === "phoneNumber"
                          ? "border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/20"
                          : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                      } focus:outline-none`}
                      placeholder="+1 (555) 123-4567"
                      suppressHydrationWarning
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phoneNumber}
                      </p>
                    )}
                  </motion.div>

                  {/* Company Field */}
                  <motion.div
                    initial={{ opacity: 1, x: 0 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
                    }
                    transition={{ delay: 0.7 }}
                  >
                    <label
                      htmlFor="company"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-white dark:bg-[#0a0a0a] border-2 rounded-xl px-4 py-3 text-gray-700 dark:text-gray-300 text-sm transition-all duration-300 ${
                        focusedField === "company"
                          ? "border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/20"
                          : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                      } focus:outline-none`}
                      placeholder="Acme Inc."
                      suppressHydrationWarning
                    />
                  </motion.div>
                </div>
              </div>

              {/* Project Details Section */}
              <div className="space-y-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    Project Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Project Type */}
                  <motion.div
                    initial={{ opacity: 1, x: 0 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
                    }
                    transition={{ delay: 0.8 }}
                  >
                    <label
                      htmlFor="projectType"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Project Type
                    </label>
                    <div className="relative" ref={projectTypeRef}>
                      <button
                        type="button"
                        onClick={() => setIsProjectTypeOpen(!isProjectTypeOpen)}
                        onFocus={() => setFocusedField("projectType")}
                        onBlur={() => {
                          setFocusedField(null);
                          // Delay closing to allow option click
                          setTimeout(() => setIsProjectTypeOpen(false), 200);
                        }}
                        className={`w-full bg-white dark:bg-[#0a0a0a] border-2 rounded-xl px-4 py-3  text-left text-gray-700 dark:text-gray-300 text-sm transition-all duration-300 flex items-center justify-between ${
                          focusedField === "projectType"
                            ? "border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/20"
                            : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                        } focus:outline-none`}
                        suppressHydrationWarning
                      >
                        <span className="flex items-center gap-2">
                          {formData.projectType === "system-app" ? (
                            <>
                              <span>System App</span>
                              <div className="flex items-center gap-2 ml-2">
                                <FaWindows className="w-5 h-5 text-[#0078D4]" />
                                <SiApple className="w-5 h-5 text-gray-900 dark:text-gray-100" />
                                <SiLinux className="w-5 h-5 text-[#FCC624]" />
                              </div>
                            </>
                          ) : (
                            projectTypeOptions.find(
                              (opt) => opt.value === formData.projectType
                            )?.label || "Select project type"
                          )}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                            isProjectTypeOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Custom Dropdown */}
                      <AnimatePresence>
                        {isProjectTypeOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-50 w-full mt-2 bg-white dark:bg-[#0a0a0a] border-2 border-gray-300 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden"
                          >
                            {projectTypeOptions.map((option) => (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                  setFormData({
                                    ...formData,
                                    projectType: option.value,
                                  });
                                  setIsProjectTypeOpen(false);
                                  if (errors.projectType) {
                                    setErrors({
                                      ...errors,
                                      projectType: "",
                                    });
                                  }
                                }}
                                className={`w-full px-4 py-3 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-[#1a1a1a] transition-colors flex items-center justify-between ${
                                  formData.projectType === option.value
                                    ? "bg-blue-50 dark:bg-[#1a1a1a]"
                                    : ""
                                } ${
                                  option.value === ""
                                    ? "text-gray-400 dark:text-gray-500"
                                    : ""
                                }`}
                                suppressHydrationWarning
                              >
                                <span className="flex items-center gap-2">
                                  {option.label}
                                  {option.icons && (
                                    <div className="flex items-center gap-2 ml-2">
                                      <FaWindows className="w-6 h-6 text-[#0078D4]" />
                                      <SiApple className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                                      <SiLinux className="w-6 h-6 text-[#FCC624]" />
                                    </div>
                                  )}
                                </span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Budget */}
                  <motion.div
                    initial={{ opacity: 1, x: 0 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
                    }
                    transition={{ delay: 0.9 }}
                  >
                    <label
                      htmlFor="budget"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      <DollarSign className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("budget")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-white dark:bg-[#0a0a0a] border-2 rounded-xl px-4 py-3 text-gray-700 dark:text-gray-300 text-sm transition-all duration-300 ${
                        focusedField === "budget"
                          ? "border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/20"
                          : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                      } focus:outline-none`}
                      suppressHydrationWarning
                    >
                      <option value="">Select budget</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                      <option value="hourly-rate">Hourly Rate</option>
                      <option value="discuss">Let's Discuss</option>
                    </select>
                  </motion.div>

                  {/* Timeline */}
                  <motion.div
                    initial={{ opacity: 1, x: 0 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
                    }
                    transition={{ delay: 1.0 }}
                  >
                    <label
                      htmlFor="timeline"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("timeline")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-white dark:bg-[#0a0a0a] border-2 rounded-xl px-4 py-3 text-gray-700 dark:text-gray-300 text-sm transition-all duration-300 ${
                        focusedField === "timeline"
                          ? "border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/20"
                          : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                      } focus:outline-none`}
                      suppressHydrationWarning
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP / Urgent</option>
                      <option value="1-month">Within 1 Month</option>
                      <option value="2-3-months">2-3 Months</option>
                      <option value="3-6-months">3-6 Months</option>
                      <option value="6-plus-months">6+ Months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </motion.div>
                </div>
              </div>

              {/* Message Field */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <motion.div
                  initial={{ opacity: 1, x: 0 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
                  }
                  transition={{ delay: 1.0 }}
                >
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Project Details & Requirements{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    maxLength={2000}
                    className={`w-full bg-white dark:bg-[#0a0a0a] border-2 rounded-xl px-4 py-3 text-gray-700 dark:text-gray-300 resize-none text-sm transition-all duration-300 ${
                      errors.message
                        ? "border-red-500 dark:border-red-400"
                        : focusedField === "message"
                        ? "border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/20"
                        : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                    } focus:outline-none`}
                    placeholder="Please describe your project, requirements, goals, and any specific features or technologies you have in mind..."
                    suppressHydrationWarning
                  />
                  <div className="flex items-center justify-between mt-2">
                    {errors.message && (
                      <p className="text-red-500 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                      {formData.message.length}/2000 characters
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-400"
                  >
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold mb-1">
                        Message sent successfully! 🎉
                      </p>
                      <p className="text-xs">
                        Thank you for reaching out. I'll get back to you within
                        24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400"
                  >
                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold mb-1">
                        Oops! Something went wrong
                      </p>
                      <p className="text-xs">
                        {Object.keys(errors).length > 0
                          ? "Please check the highlighted fields and try again."
                          : "Please check all required fields and try again. If the problem persists, please contact me directly."}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="pt-6"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
                    <span className="text-red-500">*</span> Required fields
                  </p>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-base sm:text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
                    suppressHydrationWarning
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
