"use client";

import { useState, useEffect } from "react";
import { Link2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside or resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex flex-col items-center py-4 px-4 transition-all duration-300 pointer-events-none",
                scrolled ? "py-2" : "py-4 md:py-6"
            )}
        >
            <div
                className={cn(
                    "flex items-center justify-between w-full max-w-5xl px-4 md:px-6 py-3 rounded-full transition-all duration-300 pointer-events-auto",
                    scrolled || mobileMenuOpen
                        ? "bg-white/90 backdrop-blur-xl shadow-soft border border-black/5"
                        : "bg-transparent"
                )}
            >
                <div className="flex items-center gap-2">
                    <Link2 className="w-5 h-5 md:w-6 md:h-6 text-foreground" strokeWidth={2} />
                    <span className="font-bold text-xl md:text-2xl tracking-tight text-foreground font-serif">Leadle</span>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#how-it-works" className="text-muted hover:text-foreground transition-colors">How it Works</a>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <a href="#waitlist" className="bg-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors shadow-sm hover:shadow-soft">
                        Join Waitlist
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 -mr-2 text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-4 right-4 mt-2 max-w-5xl mx-auto bg-white rounded-2xl shadow-soft-hover border border-black/5 p-4 flex flex-col gap-4 pointer-events-auto md:hidden"
                    >
                        <nav className="flex flex-col gap-2">
                            <a
                                href="#how-it-works"
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent-stone/50 rounded-xl transition-colors"
                            >
                                How it Works
                            </a>
                        </nav>
                        <div className="pt-2 border-t border-black/5">
                            <a
                                href="#waitlist"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex justify-center w-full bg-primary text-primary-foreground text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
                            >
                                Join Waitlist
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
