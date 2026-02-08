"use client";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function signinPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-[37rem] mx-auto mt-[7rem]">
      <h1 className="text-[2.8rem] font-bold text-center">SupportIQ</h1>
      <p className="text-center text-lg mt-[38px] mb-[21px] font-semibold font-sans">
        Welcome back!
      </p>
      <form
        onSubmit={handleSubmit}
        className="justify-self-center space-y-4 relative select-none mb-8"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="outline outline-foreground/20 w-80 py-[0.65rem] rounded-xl pl-[1rem] pr-[1rem] focus:outline-primary focus:outline-2 placeholder:text-foreground/70"
        />
        <br />
        <input
          type={showPassword ? "text" : "password"}
          required
          placeholder="Enter your password"
          className="outline outline-foreground/20 w-80 py-[0.65rem] rounded-xl pl-[1rem] pr-[2rem] focus:outline-primary focus:outline-2 placeholder:text-foreground/70"
        />
        <div
          className="absolute right-3 top-18 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <Eye className="w-5 h-5 text-primary/80" />
          ) : (
            <EyeOff className="w-5 h-5 text-primary/50" />
          )}
        </div>
        <br />
        <div className="w-full text-center mt-5">
          <button className="text-background text-[0.9rem] px-8 py-2.5 bg-primary cursor-pointer rounded-full font-sans font-semibold">
            Log in to SupportIQ
          </button>
        </div>
      </form>
      <p className="text-center text-sm text-foreground/60 mb-2 font-sans">
        Not a member? <Link href="/signup" className="text-primary/80 underline">Sign up</Link>
      </p>
      <p className="text-center text-sm font-sans">
        <Link href="/forgot-password" className="text-primary/80 underline">Forgot your password?</Link>
      </p>
      <div className="text-center mt-7 mb-14">
        <p className="text-sm text-foreground/60">
          By continuing, you agree to SupportIQ's <Link href="" className="underline">terms</Link>
        </p>
        <p className="text-sm text-foreground/60">
          and acknowledge you've read our <Link href="" className="underline">privacy policy</Link>
        </p>
      </div>
    </div>
  );
}
