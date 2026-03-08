import { Navbar } from "@/components/navbar";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";
import { DashboardMockup } from "@/components/ui/dashboard-mockup";
import { Hero } from "@/components/ui/hero";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col">
        <Hero
          className="pt-32 pb-24 md:pt-48 md:pb-32 bg-transparent"
          eyebrow="AI FOR HOME SERVICES"
          title={
            <>
              <div className="md:whitespace-nowrap leading-tight">
                <span className="font-serif font-normal">Customer outreach, </span>
                <span className="font-serif font-normal italic">reimagined </span>
              </div>
              <div className="font-serif font-normal leading-tight">
                for home services
              </div>
            </>
          }
          subtitle="Stop burning leads. Our AI agents automate cold outreach, qualify responses, and reactivate dormant customers for HVAC, plumbing, and roofing businesses."
          ctaText="Join Waitlist"
          ctaLink="#waitlist"
          mockupNode={<DashboardMockup />}
        />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
