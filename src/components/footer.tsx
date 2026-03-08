import { Link2 } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white py-16 border-t border-black/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2 md:col-span-1 pr-6">
                        <div className="flex items-center gap-2 mb-6">
                            <Link2 className="w-6 h-6 text-primary" strokeWidth={2.5} />
                            <span className="font-bold text-2xl font-serif text-foreground">Leadle</span>
                        </div>
                        <p className="text-muted text-sm font-medium leading-relaxed max-w-xs">
                            Next-generation AI outbound infrastructure for modern teams. Customer outreach reimagined.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-6">Product</h4>
                        <ul className="space-y-4 text-sm font-medium text-muted">
                            <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                            <li><a href="#workflow" className="hover:text-primary transition-colors">How it Works</a></li>
                            <li><a href="#pricing" className="hover:text-primary transition-colors">Waitlist</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm font-medium text-muted">
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-6">Connect</h4>
                        <ul className="space-y-4 text-sm font-medium text-muted">
                            <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-muted">
                    <p>© {new Date().getFullYear()} Leadle. All rights reserved.</p>
                    <div className="flex gap-4">
                        <span>Crafted with care.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
