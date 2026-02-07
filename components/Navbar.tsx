"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Home, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Currency from "@/components/pricing/Currency";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={"/"} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">SupportIQ</span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 items-center">
              <Link
                href="/"
                className={`text-sm font-medium ${pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"} transition-colors flex items-center gap-1`}
              >
                <Home className="w-4 h-4" /> Home
              </Link>
              <Link
                href="#features"
                className={`text-sm font-medium ${pathname === "/features" ? "text-foreground" : "text-muted-foreground hover:text-foreground"} transition-colors`}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className={`text-sm font-medium ${pathname === "/pricing" ? "text-foreground" : "text-muted-foreground hover:text-foreground"} transition-colors flex items-center gap-1`}
              >
                <Currency locale={navigator.language} width={16} height={16} />
                Pricing
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium ${pathname === "/about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"} transition-colors`}
              >
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Link
              href={"/"}
              className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 group cursor-pointer"
            >
              Get Started{" "}
              <ArrowRight className="w-4 h-4 sm:group-hover:translate-x-0.5 group-active:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <Link
                href="/"
                className={`text-base font-medium ${pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"} transition-colors flex items-center gap-1`}
                onClick={() => setIsOpen(false)}
              >
                <Home className="w-4 h-4" /> Home
              </Link>
              <Link
                href="#features"
                className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className={`text-base font-medium ${pathname === "/pricing" ? "text-foreground" : "text-muted-foreground hover:text-foreground"} transition-colors flex items-center gap-1`}
                onClick={() => setIsOpen(false)}
              >
                <Currency locale={navigator.language} width={16} height={16} />
                Pricing
              </Link>
              <Link
                href="/about"
                className={`text-base font-medium ${pathname === "/about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"} transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 flex flex-col gap-4 border-t border-border">
                <Link
                  href="/login"
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Button className="w-full rounded-full bg-primary text-primary-foreground">
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
