"use client";
import { useEffect } from "react";
import { auth } from "@/firebaseClient";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

export default function VerifyPage() {
  useEffect(() => {
    const completeSignIn = async () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          email = window.prompt("Please provide your email for confirmation");
        }

        try {
          // ✅ Step 1: Verify with Firebase
          const result = await signInWithEmailLink(auth, email, window.location.href);
          console.log("✅ Firebase verified:", result.user.email);
          alert("Email verified successfully!");

          // ✅ Step 2: Send verified email to backend (Express)
          console.log("➡️ Sending verified email to backend...");
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

          window.localStorage.removeItem("emailForSignIn");
        } catch (error) {
          console.error("Verification error:", error);
        }
      }
    };

    completeSignIn();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center text-white">
      <p>Verifying your email...</p>
    </div>
  );
}
