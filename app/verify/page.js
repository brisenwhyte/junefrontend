"use client";
import { useEffect, useState } from "react";
import { auth } from "@/firebaseClient";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

export const dynamic = 'force-dynamic'; // ✅ ADD THIS LINE

export default function VerifyPage() {
  const [status, setStatus] = useState("Verifying your email...");
  const [referralCode, setReferralCode] = useState(null);

  useEffect(() => {
    const completeSignIn = async () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");
        
        if (!email) {
          email = window.prompt("Please provide your email for confirmation");
          if (!email) {
            setStatus("❌ Email is required to complete verification");
            return;
          }
        }

        try {
          setStatus("🔐 Verifying with Firebase...");
          
          const result = await signInWithEmailLink(auth, email, window.location.href);
          console.log("✅ Firebase verified:", result.user.email);

          setStatus("📧 Saving your information...");

          const response = await fetch("https://junebackend.onrender.com/api/verify-success", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          });

          if (!response.ok) {
            throw new Error(`Backend error: ${response.status}`);
          }

          const data = await response.json();
          console.log("⬅️ Backend responded:", data);

          if (data.referralCode) {
            setReferralCode(data.referralCode);
            setStatus("✅ Email verified successfully!");
          } else {
            setStatus("✅ Email verified successfully! Welcome to JUNE 🌞");
          }
          
          window.localStorage.removeItem("emailForSignIn");

          // Redirect after showing referral code
          setTimeout(() => {
            window.location.href = "/";
          }, 40000);

        } catch (error) {
          console.error("Verification error:", error);
          setStatus("❌ Verification failed. Please try again.");
        }
      } else {
        setStatus("❌ Invalid verification link");
      }
    };

    completeSignIn();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#004499] via-[#5588aa] to-[#ff7733] p-4 relative">
      {/* Aesthetic Timer */}
      {referralCode && (
        <div className="fixed top-6 right-6 flex flex-col items-center gap-2">
          <div className="relative w-20 h-20">
            {/* Background circle */}
            <svg className="w-20 h-20 transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="6"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="white"
                strokeWidth="6"
                fill="none"
                strokeDasharray={226}
                strokeDashoffset={226 - (226 * timeLeft) / 40}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-linear"
              />
            </svg>
            {/* Timer number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{timeLeft}</span>
            </div>
          </div>
          <span className="text-white/70 text-xs font-medium">seconds</span>
        </div>
      )}
      
      <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm max-w-lg w-full text-center">
        {!referralCode ? (
          <p className="text-xl text-white mb-6">{status}</p>
        ) : (
          <>
            {/* Header */}
            <h1 className="text-3xl font-bold text-white mb-2">
              You're in early — welcome to June 🌞
            </h1>
            
            {/* Body */}
            <div className="mt-6 space-y-4">
              <p className="text-white/90 text-base leading-relaxed">
                As one of the first members, you now have <span className="font-semibold text-yellow-300">5 exclusive invites</span> to share with people you care about — parents, friends, or anyone who wants a simpler way to save.
              </p>
              
              <p className="text-white/90 text-base leading-relaxed">
                Each person who joins with your link moves you closer to priority early access when June launches.
              </p>
              
              {/* Invite Link Display */}
              <div className="bg-white/20 rounded-lg p-6 mt-6">
                <p className="text-white/80 text-sm mb-2">Your invite link:</p>
                <p className="text-lg font-mono text-white break-all mb-3">
                  june.money/invite/{referralCode}
                </p>
                <p className="text-yellow-300 font-semibold text-sm">
                  You have 5 invites left. Use them wisely 🌱
                </p>
              </div>
              
              {/* Buttons */}
              <div className="space-y-3 mt-8">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`june.money/invite/${referralCode}`);
                    alert("Invite link copied!");
                  }}
                  className="w-full bg-white text-[#004499] font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition-colors"
                >
                  Copy My Invite Link
                </button>
                
                <button
                  onClick={() => {
                    window.location.href = `mailto:?subject=Join me on June&body=I'm inviting you to join June, a new way to save. Use my link: june.money/invite/${referralCode}`;
                  }}
                  className="w-full bg-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
                >
                  Invite Someone You Love
                </button>
                
                <button
                  className="text-white/70 text-sm hover:text-white/90 transition-colors underline mt-2"
                >
                  Need more invites? We'll email you when new spots open.
                </button>
              </div>
            </div>
            
            {/* Redirect Notice */}
            <p className="text-white/50 text-xs mt-8">
              {timeLeft > 0 ? `Redirecting to home page in ${timeLeft} seconds...` : 'Redirecting now...'}
            </p>
          </>
        )}
      </div>
    </div>
  );
}