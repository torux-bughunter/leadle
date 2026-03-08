"use client";

import { Check, ArrowRight } from "lucide-react";

const features = [
    "Early access to the full AI agent pipeline",
    "Priority onboarding and dedicated support",
    "Influence our product roadmap",
    "Grandfathered early-adopter pricing",
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-center">

                <div className="w-full max-w-lg bg-white rounded-3xl border border-black/5 shadow-soft hover:shadow-soft-hover p-10 md:p-14 relative transition-all duration-300">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-serif font-bold text-foreground mb-3">Join the Private Beta</h3>
                        <p className="text-muted font-medium">Secure your spot on the waitlist.</p>
                    </div>

                    <ul className="space-y-5 mb-12">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-4 text-left">
                                <div className="mt-1 min-w-6 flex justify-center">
                                    <div className="p-1 rounded-full bg-accent-stone/50 text-primary">
                                        <Check className="w-4 h-4 stroke-[3]" />
                                    </div>
                                </div>
                                <span className="text-foreground font-medium leading-relaxed">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            required
                            className="w-full px-6 py-4 bg-background border border-black/5 rounded-full text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                        <button
                            type="submit"
                            className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all hover:bg-primary/95 shadow-sm hover:shadow-soft flex-shrink-0"
                        >
                            <span>Request Access</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
