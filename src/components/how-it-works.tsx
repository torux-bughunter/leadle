"use client";

import { motion } from "framer-motion";
import { UserSearch, PenTool, Send, MessageSquareText, Search, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const unifiedSteps = [
    {
        number: "1",
        title: "Define Target & Agentic Research",
        description: "Scout identifies high-intent decision makers, verifies contact info, and enriches profiles with deep context based on your exact targeting parameters.",
        agent: "Scout: The Researcher",
        icon: UserSearch,
    },
    {
        number: "2",
        title: "Generate Hyper-Personalized Copy",
        description: "Using Scout's deep web research, Writer drafts a unique, hyper-personalized message for each lead. Real text, not templates.",
        agent: "Writer: The Copywriter",
        icon: PenTool,
    },
    {
        number: "3",
        title: "Review, Automate & Reactivate",
        description: "Approve the drafts with a single click. Sender manages deliverability and sequences, while the SMS module re-engages dormant leads in your system.",
        agent: "Sender & SMS Reactivation",
        icon: Send,
    }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        An entire growth team.<br />Built for home services.
                    </h2>
                    <p className="text-xl text-muted font-medium">
                        From cold list to booked estimate in three simple, transparent steps—powered by AI agents trained on trades data.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Soft Connecting Line */}
                    <div className="absolute top-12 left-8 md:left-1/2 md:-translate-x-1/2 w-[2px] h-[calc(100%-3rem)] bg-gradient-to-b from-primary/20 via-primary/10 to-transparent hidden md:block" />

                    <div className="flex flex-col gap-16 md:gap-24">
                        {unifiedSteps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Agent Card / Visual */}
                                <div className="w-full md:w-1/2 relative">
                                    <div className="bg-white p-8 rounded-3xl border border-border shadow-soft hover:shadow-soft-hover transition-shadow overflow-hidden group">
                                        <div className="mb-6 inline-flex p-3 rounded-2xl bg-accent-stone/50 text-primary">
                                            <step.icon className="w-6 h-6" strokeWidth={2} />
                                        </div>
                                        <h4 className="text-2xl font-bold font-serif text-foreground mb-2">
                                            {step.agent}
                                        </h4>
                                        <div className="h-32 mt-6 rounded-xl bg-accent-stone/20 overflow-hidden relative flex items-center justify-center border border-border/50">
                                            {/* Abstract visual representation based on step */}
                                            {i === 0 && <Search className="w-12 h-12 text-muted opacity-50" />}
                                            {i === 1 && <MessageSquareText className="w-12 h-12 text-muted opacity-50" />}
                                            {i === 2 && <PlayCircle className="w-12 h-12 text-muted opacity-50" />}
                                        </div>
                                    </div>
                                </div>

                                {/* Number Badge (Mobile: Top Left, Desktop: Center) */}
                                <div className="absolute left-6 -top-5 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-soft">
                                    <span className="font-bold text-lg">{step.number}</span>
                                </div>

                                {/* Text Content */}
                                <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-0">
                                    <h3 className="text-3xl font-bold font-serif text-foreground mb-4 mt-6 md:mt-0">{step.title}</h3>
                                    <p className="text-lg text-muted leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
