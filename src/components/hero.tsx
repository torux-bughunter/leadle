"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">

            {/* Soft Background Blobs/Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-accent-stone blur-[100px] rounded-full mix-blend-multiply" />
            </div>
            <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-accent-yellow blur-[80px] rounded-full mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">

                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm text-sm font-medium text-foreground shadow-sm"
                >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>The next generation of outbound</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.1] mb-6 max-w-4xl tracking-tight"
                >
                    Customer outreach <br />
                    <span className="italic text-muted/80">reimagined.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-2xl text-muted font-medium mb-12 max-w-2xl leading-relaxed"
                >
                    Leadle deploys specialized AI agents that route leads, write bespoke copy, and book meetings on autopilot. Join the waitlist for early access.
                </motion.p>

                {/* Waitlist Capture */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-full max-w-md"
                >
                    <form className="relative flex items-center w-full bg-white rounded-full p-2 shadow-soft hover:shadow-soft-hover transition-shadow border border-black/5" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            required
                            className="w-full pl-6 pr-4 py-3 bg-transparent text-foreground placeholder-muted focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full transition-all hover:bg-primary/95 flex-shrink-0"
                        >
                            <span>Join Waitlist</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </form>
                    <p className="text-xs text-muted font-medium mt-4">
                        Limited spots available for our private beta.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
