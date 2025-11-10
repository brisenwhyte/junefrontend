"use client";

import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LeaderboardUser {
  rank: number;
  email: string;
  referralCode: string;
  referralCount: number;
  maskedEmail: string;
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(false);

  // Check for referral code in URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const refCode = params.get('ref');
    if (refCode) {
      setReferralCode(refCode);
    }

    // Fetch leaderboard
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await fetch("https://junebackend.onrender.com/api/leaderboard?limit=10");
      const data = await response.json();
      setLeaderboard(data.leaderboard || []);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if user already exists
      const checkResponse = await fetch("https://junebackend.onrender.com/api/check-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const checkData = await checkResponse.json();

      if (checkData.exists) {
        alert("⚠️ This email is already registered!");
        setLoading(false);
        return;
      }

      // Validate referral code if provided
      if (referralCode) {
        const validateResponse = await fetch("https://junebackend.onrender.com/api/validate-referral", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: referralCode }),
        });

        const validateData = await validateResponse.json();
        if (!validateData.valid) {
          alert("⚠️ Invalid referral code. Please check and try again.");
          setLoading(false);
          return;
        }
      }

      // Store email in localStorage
      window.localStorage.setItem("emailForSignIn", email);

      // Send sign-in email
      const response = await fetch("https://junebackend.onrender.com/api/send-signin-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, referralCode }),
      });

      if (!response.ok) {
        throw new Error("Failed to send sign-in email");
      }

      const data = await response.json();
      console.log("✅ Backend response:", data);
      alert("✨ Check your inbox for a sign-in link from JUNE!");
      
      // Clear form
      setEmail("");
      setReferralCode("");
    } catch (error) {
      console.error("❌ Error sending email:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
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
              className="mb-8 w-full max-w-xl space-y-4"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full rounded-full border-none bg-white/90 px-6 text-base text-gray-800 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
              
              <Input
                type="text"
                placeholder="Referral code (optional)"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                className="h-12 w-full rounded-full border-none bg-white/90 px-6 text-base text-gray-800 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
              />

              <Button
                type="submit"
                disabled={loading}
                className="h-12 w-full rounded-full bg-white px-8 text-base font-medium text-gray-800 hover:bg-white/90 disabled:opacity-50"
              >
                {loading ? "Processing..." : "Join Waitlist"}
              </Button>
            </form>

            <div className="mb-12 h-px w-full max-w-md bg-white/40" />

            <div className="max-w-2xl space-y-4 mb-12">
              <p className="text-lg font-satoshi tracking-wide text-white lg:text-xl">
                JUNE STANDS FOR A NEW KIND OF MONEY — ONE WHERE
                <br />
                YOU'RE IN CONTROL.
              </p>
              <p className="text-lg font-satoshi tracking-wide text-white lg:text-xl">
                STEP INTO THE LIGHT — SIGN UP FOR EARLY ACCESS.
              </p>
            </div>

            {/* Leaderboard */}
            {leaderboard.length > 0 && (
              <div className="w-full max-w-2xl mt-8">
                <h2 className="text-3xl font-satoshi text-white mb-6">🏆 Leaderboard</h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-3">
                  {leaderboard.map((user) => (
                    <div 
                      key={user.email}
                      className="flex items-center justify-between bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-white w-8">
                          {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : `#${user.rank}`}
                        </span>
                        <div className="text-left">
                          <p className="text-white font-medium">{user.maskedEmail}</p>
                          <p className="text-white/60 text-sm">{user.referralCode}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-xl font-bold">{user.referralCount}</p>
                        <p className="text-white/60 text-xs">referrals</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}