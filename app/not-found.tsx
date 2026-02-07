"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Ghost } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {

  const router = useRouter();
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-6 text-white overflow-hidden">
      {/* Floating blurred blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center max-w-xl"
      >
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
          <Ghost size={40} className="text-purple-400" />
        </div>

        {/* 404 text */}
        <h1 className="text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          404
        </h1>

        <p className="mt-4 text-xl font-semibold">Page Not Found</p>

        <p className="mt-2 text-sm text-gray-400">
          Looks like you followed a broken link or entered a URL that doesn’t
          exist.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:scale-105"
          >
            <ArrowLeft size={16} />
            Go back home
          </Link>

          <button
            onClick={() => router.push(!document.referrer || document.referrer===window.location.href?"/":document.referrer)}
            className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 cursor-pointer"
          >
            Previous page
          </button>
        </div>
      </motion.div>
    </div>
  );
}
