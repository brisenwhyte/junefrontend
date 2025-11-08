"use client";
import { useEffect, useState } from "react";
import { auth } from "@/firebaseClient";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

export default function VerifyPage() {
  const [status, setStatus] = useState("Verifying your email...");

  useEffect(() => {
    const completeSignIn = async () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");
        
        if (!email) {
          // Only prompt if email is missing
          email = window.prompt("Please provide your email for confirmation");
          if (!email) {
            setStatus("❌ Email is required to complete verification");
            return;
          }
        }

        try {
          setStatus("🔐 Verifying with Firebase...");
          
          // ✅ Step 1: Verify with Firebase
          const result = await signInWithEmailLink(auth, email, window.location.href);
          console.log("✅ Firebase verified:", result.user.email);

          setStatus("📧 Saving your information...");

          // ✅ Step 2: Send verified email to backend
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

          setStatus("✅ Email verified successfully! Welcome to JUNE 🌞");
          
          // Clean up localStorage
          window.localStorage.removeItem("emailForSignIn");

          // Redirect to home after 2 seconds
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);

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
      <div className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
        <p className="text-xl text-white">{status}</p>
      </div>
    </div>
  );
}