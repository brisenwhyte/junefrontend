"use client";
import { useEffect, useState } from "react";
import { auth } from "@/firebaseClient";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

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
          }, 5000);

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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#004499] via-[#5588aa] to-[#ff7733]">
      <div className="rounded-lg bg-white/10 p-8 backdrop-blur-sm max-w-md w-full text-center">
        <p className="text-xl text-white mb-6">{status}</p>
        
        {referralCode && (
          <div className="bg-white/20 rounded-lg p-6 mt-6">
            <p className="text-white/80 text-sm mb-2">Your referral code:</p>
            <p className="text-3xl font-bold text-white tracking-wider mb-4">{referralCode}</p>
            <p className="text-white/80 text-sm">Share this with friends! 🚀</p>
            <p className="text-white/60 text-xs mt-4">Check your email for more details</p>
          </div>
        )}
        
        {referralCode && (
          <p className="text-white/60 text-sm mt-6">Redirecting to home page...</p>
        )}
      </div>
    </div>
  );
}