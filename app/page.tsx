import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Hero />
      <Features />
      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to revolutionize your support?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of fast-growing startups using SupportIQ to delight
            customers.
          </p>
          <Link
            href={"/"}
            className="py-[13.25px] px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  );
}
