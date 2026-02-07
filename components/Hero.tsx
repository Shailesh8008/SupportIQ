import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-foreground/50">
            Triage Support Tickets
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            at AI Speed
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Stop drowning in emails and tickets. SupportIQ automatically
          classifies, tags, and prioritizes your support inbox so you can focus
          on solving problems.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={"/"} className="h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 group cursor-pointer">
            Start Free Trial
            <ArrowRight className="w-5 h-5 sm:group-hover:translate-x-1 group-active:translate-x-1 transition-transform" />
          </Link>
          <Link href={"/"} className="h-12 px-8 rounded-full bg-white/5 border border-border hover:bg-border text-foreground items-center flex font-medium transition-all backdrop-blur-sm cursor-pointer">
            View Live Demo
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-500" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-500" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
}
