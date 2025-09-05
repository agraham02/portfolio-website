"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Mail,
    MapPin,
    Phone,
    Send,
    Calendar,
    Clock,
    Globe,
    Github,
    Linkedin,
    Twitter,
    CheckCircle,
    AlertCircle,
    Sparkles,
    MessageCircle,
    Heart,
    Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Form validation schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    company: z.string().optional(),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    budget: z.string().optional(),
    timeline: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onChange",
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Here you would typically send the data to your backend
            console.log("Form submitted:", data);

            setSubmitStatus("success");
            reset();
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            value: "hello@agraham.dev",
            description: "Drop me a line anytime",
            action: "mailto:hello@agraham.dev",
            color: "from-blue-500 to-cyan-500",
            delay: 0.1,
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+1 (555) 123-4567",
            description: "Mon-Fri from 9am to 6pm",
            action: "tel:+15551234567",
            color: "from-green-500 to-emerald-500",
            delay: 0.2,
        },
        {
            icon: MapPin,
            title: "Location",
            value: "San Francisco, CA",
            description: "Available for remote work",
            action: null,
            color: "from-purple-500 to-pink-500",
            delay: 0.3,
        },
        {
            icon: Calendar,
            title: "Schedule",
            value: "Book a Call",
            description: "Let&apos;s discuss your project",
            action: "https://calendly.com/agraham",
            color: "from-orange-500 to-red-500",
            delay: 0.4,
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            name: "GitHub",
            url: "https://github.com/agraham02",
            color: "hover:text-gray-900 dark:hover:text-white",
        },
        {
            icon: Linkedin,
            name: "LinkedIn",
            url: "https://linkedin.com/in/agraham02",
            color: "hover:text-blue-600",
        },
        {
            icon: Twitter,
            name: "Twitter",
            url: "https://twitter.com/agraham02",
            color: "hover:text-blue-400",
        },
        {
            icon: Globe,
            name: "Website",
            url: "https://agraham.dev",
            color: "hover:text-green-500",
        },
    ];

    const stats = [
        { label: "Response Time", value: "< 24h", icon: Clock },
        { label: "Projects Delivered", value: "50+", icon: CheckCircle },
        { label: "Happy Clients", value: "100%", icon: Heart },
        { label: "Coffee Consumed", value: "∞", icon: Zap },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Floating geometric shapes */}
                {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute opacity-10 dark:opacity-5"
                        style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            width: `${20 + Math.random() * 40}px`,
                            height: `${20 + Math.random() * 40}px`,
                        }}
                        animate={{
                            x: [0, 30, -30, 0],
                            y: [0, -30, 30, 0],
                            rotate: [0, 180, 360],
                            scale: [1, 1.2, 0.8, 1],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    >
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-sm" />
                    </motion.div>
                ))}

                {/* Gradient orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <motion.section
                    className="pt-32 pb-20 px-4"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div variants={itemVariants} className="mb-6">
                            <Badge
                                variant="outline"
                                className="mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm border-primary/20"
                            >
                                <motion.div
                                    className="w-2 h-2 bg-green-500 rounded-full mr-2"
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                />
                                Available for Projects
                            </Badge>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent"
                        >
                            Let&apos;s Create Something
                            <motion.span
                                className="inline-block ml-4"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Sparkles className="inline h-12 w-12 md:h-16 md:w-16 text-yellow-500" />
                            </motion.span>
                            <br />
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Amazing
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
                        >
                            Ready to bring your vision to life? I&apos;m here to
                            help you build exceptional digital experiences that
                            make a lasting impact.
                        </motion.p>

                        {/* Quick stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
                        >
                            {stats.map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center p-4 bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-slate-700/30"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                                    <div className="text-lg font-bold text-foreground">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* Contact Methods */}
                <motion.section
                    className="py-20 px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            variants={itemVariants}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Get in Touch
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Choose your preferred way to connect. I&apos;m
                                always excited to discuss new projects and
                                opportunities.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                            {contactMethods.map((method) => (
                                <motion.div
                                    key={method.title}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="p-6 h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                        {/* Gradient background on hover */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                        />

                                        <div className="relative z-10">
                                            <div
                                                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.color} text-white mb-4 shadow-lg`}
                                            >
                                                <method.icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="font-semibold text-lg mb-2">
                                                {method.title}
                                            </h3>
                                            <p className="text-foreground font-medium mb-1">
                                                {method.value}
                                            </p>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                {method.description}
                                            </p>

                                            {method.action && (
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="w-full group-hover:bg-primary/10 transition-colors"
                                                    onClick={() =>
                                                        window.open(
                                                            method.action!,
                                                            "_blank"
                                                        )
                                                    }
                                                >
                                                    {method.title === "Email"
                                                        ? "Send Email"
                                                        : method.title ===
                                                          "Phone"
                                                        ? "Call Now"
                                                        : method.title ===
                                                          "Schedule"
                                                        ? "Book Call"
                                                        : "Contact"}
                                                </Button>
                                            )}
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Contact Form */}
                <motion.section
                    className="py-20 px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            variants={itemVariants}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Start Your Project
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Tell me about your vision, and let&apos;s
                                discuss how we can bring it to life together.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Card className="p-8 md:p-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-2xl">
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-8"
                                >
                                    {/* Personal Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <motion.div
                                            className="space-y-2"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Label
                                                htmlFor="name"
                                                className="text-sm font-medium"
                                            >
                                                Name *
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="name"
                                                    {...register("name")}
                                                    className={`transition-all duration-300 ${
                                                        focusedField === "name"
                                                            ? "ring-2 ring-primary/50 border-primary"
                                                            : ""
                                                    } ${
                                                        errors.name
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                    placeholder="Your full name"
                                                    onFocus={() =>
                                                        setFocusedField("name")
                                                    }
                                                    onBlur={() =>
                                                        setFocusedField(null)
                                                    }
                                                />
                                                <AnimatePresence>
                                                    {focusedField ===
                                                        "name" && (
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                scale: 0.8,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                scale: 1,
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                                scale: 0.8,
                                                            }}
                                                            className="absolute -top-1 -right-1"
                                                        >
                                                            <Sparkles className="h-4 w-4 text-primary" />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <AnimatePresence>
                                                {errors.name && (
                                                    <motion.p
                                                        initial={{
                                                            opacity: 0,
                                                            y: -10,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            y: -10,
                                                        }}
                                                        className="text-sm text-red-500 flex items-center gap-1"
                                                    >
                                                        <AlertCircle className="h-3 w-3" />
                                                        {errors.name.message}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>

                                        <motion.div
                                            className="space-y-2"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Label
                                                htmlFor="email"
                                                className="text-sm font-medium"
                                            >
                                                Email *
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    {...register("email")}
                                                    className={`transition-all duration-300 ${
                                                        focusedField === "email"
                                                            ? "ring-2 ring-primary/50 border-primary"
                                                            : ""
                                                    } ${
                                                        errors.email
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                    placeholder="your.email@example.com"
                                                    onFocus={() =>
                                                        setFocusedField("email")
                                                    }
                                                    onBlur={() =>
                                                        setFocusedField(null)
                                                    }
                                                />
                                                <AnimatePresence>
                                                    {focusedField ===
                                                        "email" && (
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                scale: 0.8,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                scale: 1,
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                                scale: 0.8,
                                                            }}
                                                            className="absolute -top-1 -right-1"
                                                        >
                                                            <Mail className="h-4 w-4 text-primary" />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <AnimatePresence>
                                                {errors.email && (
                                                    <motion.p
                                                        initial={{
                                                            opacity: 0,
                                                            y: -10,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            y: -10,
                                                        }}
                                                        className="text-sm text-red-500 flex items-center gap-1"
                                                    >
                                                        <AlertCircle className="h-3 w-3" />
                                                        {errors.email.message}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </div>

                                    {/* Company and Subject */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <motion.div
                                            className="space-y-2"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Label
                                                htmlFor="company"
                                                className="text-sm font-medium"
                                            >
                                                Company
                                            </Label>
                                            <Input
                                                id="company"
                                                {...register("company")}
                                                className={`transition-all duration-300 ${
                                                    focusedField === "company"
                                                        ? "ring-2 ring-primary/50 border-primary"
                                                        : ""
                                                }`}
                                                placeholder="Your company (optional)"
                                                onFocus={() =>
                                                    setFocusedField("company")
                                                }
                                                onBlur={() =>
                                                    setFocusedField(null)
                                                }
                                            />
                                        </motion.div>

                                        <motion.div
                                            className="space-y-2"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Label
                                                htmlFor="subject"
                                                className="text-sm font-medium"
                                            >
                                                Subject *
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="subject"
                                                    {...register("subject")}
                                                    className={`transition-all duration-300 ${
                                                        focusedField ===
                                                        "subject"
                                                            ? "ring-2 ring-primary/50 border-primary"
                                                            : ""
                                                    } ${
                                                        errors.subject
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                    placeholder="What's your project about?"
                                                    onFocus={() =>
                                                        setFocusedField(
                                                            "subject"
                                                        )
                                                    }
                                                    onBlur={() =>
                                                        setFocusedField(null)
                                                    }
                                                />
                                                <AnimatePresence>
                                                    {focusedField ===
                                                        "subject" && (
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                scale: 0.8,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                scale: 1,
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                                scale: 0.8,
                                                            }}
                                                            className="absolute -top-1 -right-1"
                                                        >
                                                            <MessageCircle className="h-4 w-4 text-primary" />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <AnimatePresence>
                                                {errors.subject && (
                                                    <motion.p
                                                        initial={{
                                                            opacity: 0,
                                                            y: -10,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            y: -10,
                                                        }}
                                                        className="text-sm text-red-500 flex items-center gap-1"
                                                    >
                                                        <AlertCircle className="h-3 w-3" />
                                                        {errors.subject.message}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </div>

                                    {/* Project Details */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <motion.div
                                            className="space-y-2"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Label
                                                htmlFor="budget"
                                                className="text-sm font-medium"
                                            >
                                                Budget Range
                                            </Label>
                                            <select
                                                id="budget"
                                                {...register("budget")}
                                                className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                                                    focusedField === "budget"
                                                        ? "ring-2 ring-primary/50 border-primary"
                                                        : ""
                                                }`}
                                                onFocus={() =>
                                                    setFocusedField("budget")
                                                }
                                                onBlur={() =>
                                                    setFocusedField(null)
                                                }
                                            >
                                                <option value="">
                                                    Select budget range
                                                </option>
                                                <option value="under-5k">
                                                    Under $5,000
                                                </option>
                                                <option value="5k-15k">
                                                    $5,000 - $15,000
                                                </option>
                                                <option value="15k-50k">
                                                    $15,000 - $50,000
                                                </option>
                                                <option value="50k-plus">
                                                    $50,000+
                                                </option>
                                                <option value="discuss">
                                                    Let&apos;s discuss
                                                </option>
                                            </select>
                                        </motion.div>

                                        <motion.div
                                            className="space-y-2"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Label
                                                htmlFor="timeline"
                                                className="text-sm font-medium"
                                            >
                                                Timeline
                                            </Label>
                                            <select
                                                id="timeline"
                                                {...register("timeline")}
                                                className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                                                    focusedField === "timeline"
                                                        ? "ring-2 ring-primary/50 border-primary"
                                                        : ""
                                                }`}
                                                onFocus={() =>
                                                    setFocusedField("timeline")
                                                }
                                                onBlur={() =>
                                                    setFocusedField(null)
                                                }
                                            >
                                                <option value="">
                                                    Select timeline
                                                </option>
                                                <option value="asap">
                                                    ASAP
                                                </option>
                                                <option value="1-month">
                                                    Within 1 month
                                                </option>
                                                <option value="2-3-months">
                                                    2-3 months
                                                </option>
                                                <option value="6-months">
                                                    6+ months
                                                </option>
                                                <option value="flexible">
                                                    Flexible
                                                </option>
                                            </select>
                                        </motion.div>
                                    </div>

                                    {/* Message */}
                                    <motion.div
                                        className="space-y-2"
                                        whileHover={{ scale: 1.01 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Label
                                            htmlFor="message"
                                            className="text-sm font-medium"
                                        >
                                            Message *
                                        </Label>
                                        <div className="relative">
                                            <Textarea
                                                id="message"
                                                {...register("message")}
                                                className={`min-h-[150px] transition-all duration-300 ${
                                                    focusedField === "message"
                                                        ? "ring-2 ring-primary/50 border-primary"
                                                        : ""
                                                } ${
                                                    errors.message
                                                        ? "border-red-500"
                                                        : ""
                                                }`}
                                                placeholder="Tell me about your project, goals, and what you're hoping to achieve..."
                                                onFocus={() =>
                                                    setFocusedField("message")
                                                }
                                                onBlur={() =>
                                                    setFocusedField(null)
                                                }
                                            />
                                            <AnimatePresence>
                                                {focusedField === "message" && (
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            scale: 0.8,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            scale: 1,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            scale: 0.8,
                                                        }}
                                                        className="absolute -top-1 -right-1"
                                                    >
                                                        <MessageCircle className="h-4 w-4 text-primary" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <AnimatePresence>
                                            {errors.message && (
                                                <motion.p
                                                    initial={{
                                                        opacity: 0,
                                                        y: -10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: -10,
                                                    }}
                                                    className="text-sm text-red-500 flex items-center gap-1"
                                                >
                                                    <AlertCircle className="h-3 w-3" />
                                                    {errors.message.message}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    {/* Submit Button */}
                                    <motion.div
                                        className="text-center"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={isSubmitting || !isValid}
                                            className="w-full md:w-auto px-12 py-6 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
                                        >
                                            {isSubmitting ? (
                                                <motion.div
                                                    className="flex items-center gap-2"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                >
                                                    <motion.div
                                                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                                        animate={{
                                                            rotate: 360,
                                                        }}
                                                        transition={{
                                                            duration: 1,
                                                            repeat: Infinity,
                                                            ease: "linear",
                                                        }}
                                                    />
                                                    Sending...
                                                </motion.div>
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    Send Message
                                                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                                </span>
                                            )}
                                        </Button>
                                    </motion.div>

                                    {/* Status Messages */}
                                    <AnimatePresence>
                                        {submitStatus === "success" && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                className="text-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                                            >
                                                <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                                <p className="text-green-800 dark:text-green-200 font-medium">
                                                    Thank you! Your message has
                                                    been sent successfully.
                                                </p>
                                                <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                                                    I&apos;ll get back to you
                                                    within 24 hours.
                                                </p>
                                            </motion.div>
                                        )}

                                        {submitStatus === "error" && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                className="text-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                                            >
                                                <AlertCircle className="h-6 w-6 text-red-600 mx-auto mb-2" />
                                                <p className="text-red-800 dark:text-red-200 font-medium">
                                                    Oops! Something went wrong.
                                                </p>
                                                <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                                                    Please try again or email me
                                                    directly.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </form>
                            </Card>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Social Links & Footer */}
                <motion.section
                    className="py-20 px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div variants={itemVariants} className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">
                                Let&apos;s Connect
                            </h3>
                            <p className="text-muted-foreground mb-8">
                                Follow me on social media or check out my work
                            </p>

                            <div className="flex justify-center gap-6">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 rounded-full bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/20 dark:border-slate-700/30 text-muted-foreground transition-all duration-300 ${social.color}`}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        variants={itemVariants}
                                    >
                                        <social.icon className="h-6 w-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="text-center"
                        >
                            <p className="text-muted-foreground">
                                © 2025 Andrew Graham. Made with{" "}
                                <motion.span
                                    className="inline-block text-red-500"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    ❤️
                                </motion.span>{" "}
                                and lots of coffee ☕
                            </p>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
