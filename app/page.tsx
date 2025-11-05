"use client";

import { useState } from "react";
import { Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="w-full">
      {/* <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#003d99] via-[#5577aa] to-[#ff7744]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0055bb] via-[#7788bb]/50 to-[#ff8855]/70" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="flex items-center justify-between px-8 py-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-5 bg-[#ff8c42] rounded-t-full" />
              <span className="text-xl font-bold tracking-wider text-white">
                JUNE
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-white hover:opacity-80 transition-opacity">
                <Mail className="h-6 w-6" />
              </button>
              <button className="text-white hover:opacity-80 transition-opacity">
                <img 
                  src="/x.png" 
                  alt="X" 
                  className="h-6 w-6 object-contain"
                />
              </button>
            </div>
          </header>

          <div className="flex flex-1 items-center px-8 lg:px-16">
            <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col justify-center">
                <h1 className="mb-8 text-[80px] font-satoshi leading-tight text-white lg:text-7xl">
                  Moneys new
                  <br />
                  Season
                </h1>
                <div className="mb-8 h-px w-full max-w-md bg-white/40" />
                <p className="mb-4 text-lg font-satoshi text-bold tracking-wide text-white lg:text-xl">
                  JUNE STANDS FOR A NEW KIND OF MONEY — OPEN,
                  <br />
                  SOVEREIGN, AND HUMAN.
                </p>
                <p className="text-lg font-satoshi text-bold tracking-wide text-white lg:text-xl">
                  STEP INTO THE LIGHT — SIGN UP FOR EARLY ACCESS.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative h-[600px] w-[300px]">
                  <div className="absolute inset-0 rounded-[50px] border-[14px] border-black bg-gradient-to-br from-[#ff8c42] via-[#ff6b4a] to-[#ff6b4a] shadow-2xl">
                    <div className="absolute left-1/2 top-4 h-6 w-32 -translate-x-1/2 rounded-full bg-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="relative min-h-screen overflow-hidden bg-[#0015cc]">
        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="flex items-center justify-between px-8 py-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-5 bg-[#ff8c42] rounded-t-full" />
              <span className="text-xl font-bold tracking-wider text-white">
                JUNE
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-white hover:opacity-80 transition-opacity">
                <Mail className="h-6 w-6" />
              </button>
              <button className="text-white hover:opacity-80 transition-opacity">
                <X className="h-6 w-6" />
              </button>
            </div>
          </header>

          <div className="flex flex-1 items-center px-8 lg:px-16">
            <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col justify-center">
                <h1 className="mb-8 text-6xl font-satoshi leading-tight text-white lg:text-7xl">
                  Moneys new
                  <br />
                  Season
                </h1>
                <div className="mb-8 h-px w-full max-w-md bg-white/40" />
                <p className="mb-4 text-lg font-satoshi tracking-wide text-white lg:text-xl">
                  JUNE STANDS FOR A NEW KIND OF MONEY — OPEN,
                  <br />
                  SOVEREIGN, AND HUMAN.
                </p>
                <p className="text-lg font-satoshi tracking-wide text-white lg:text-xl">
                  STEP INTO THE LIGHT — SIGN UP FOR EARLY ACCESS.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative h-[600px] w-[300px]">
                  <div className="absolute inset-0 rounded-[50px] border-[14px] border-black bg-gradient-to-br from-[#ff8c42] via-[#ff5533] to-[#cc0066] shadow-2xl">
                    <div className="absolute left-1/2 top-4 h-6 w-32 -translate-x-1/2 rounded-full bg-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#004499] via-[#5588aa] to-[#ff7733]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066bb]/80 via-[#7799bb]/50 to-[#ff8844]/80" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="flex items-center justify-between px-8 py-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-5 bg-[#ff8c42] rounded-t-full" />
              <span className="text-xl font-bold tracking-wider text-white">
                JUNE
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-white hover:opacity-80 transition-opacity">
                <Mail className="h-6 w-6" />
              </button>
              <button className="text-white hover:opacity-80 transition-opacity">
                <img 
                  src="/x.png" 
                  alt="X" 
                  className="h-6 w-6 object-contain"
                />
              </button>
            </div>
          </header>

          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <h1 className="mb-12 text-5xl font-satoshi leading-tight text-white lg:text-6xl">
              Where your money grows.
            </h1>

            <form
              onSubmit={handleSubmit}
              className="mb-12 flex w-full max-w-xl gap-4"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-1 rounded-full border-none bg-white/90 px-6 text-base text-gray-800 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
              <Button
                type="submit"
                className="h-12 rounded-full bg-white px-8 text-base font-medium text-gray-800 hover:bg-white/90"
              >
                Join Waitlist
              </Button>
            </form>

            <div className="mb-12 h-px w-full max-w-md bg-white/40" />

            <div className="max-w-2xl space-y-4">
              <p className="text-lg font-satoshi tracking-wide text-white lg:text-xl">
                JUNE STANDS FOR A NEW KIND OF MONEY — ONE WHERE
                <br />
                YOU'RE IN CONTROL.
              </p>
              <p className="text-lg font-satoshi tracking-wide text-white lg:text-xl">
                STEP INTO THE LIGHT — SIGN UP FOR EARLY ACCESS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
