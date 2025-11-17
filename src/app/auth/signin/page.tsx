"use client";

import { AccentButton } from "@/components/ui";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (provider: string) => {
    setIsLoading(true);
    // In production, this would redirect to NextAuth sign-in
    // For demo, we'll just show a message
    setTimeout(() => {
      alert(`In production, this would sign in with ${provider}`);
      setIsLoading(false);
      router.push("/");
    }, 1000);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center px-5">
      {/* Vibrant gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neutral-50)] via-[var(--color-neutral-100)] to-[var(--color-neutral-200)]" />
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[var(--color-primary)]/15 via-[var(--color-accent)]/8 to-transparent" />
        <div className="absolute top-20 right-0 h-[300px] w-[300px] rounded-full bg-[var(--color-accent)]/15 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 left-0 h-[350px] w-[350px] rounded-full bg-[var(--color-primary)]/15 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      <div className="w-full max-w-md animate-slideUp">
        {/* Logo / Hero */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-5xl shadow-glow-primary animate-float">
            🎯
          </div>
          <h1 className="text-4xl font-bold text-gradient-primary">Welcome to Adult</h1>
          <p className="mt-3 text-lg text-[var(--color-text-muted)]">
            Your guide to adulting with confidence
          </p>
        </div>

        {/* Sign In Card */}
        <div className="card-premium animate-scaleIn space-y-4 p-8" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">
              Sign in to continue
            </h2>
            <p className="text-sm text-[var(--color-text-muted)]">
              Save your progress, bookmark guides, and connect with the community
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <AccentButton
              onClick={() => handleSignIn("Google")}
              disabled={isLoading}
              variant="primary"
              size="lg"
              className="w-full"
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-2xl">🔵</span>
                Continue with Google
              </span>
            </AccentButton>

            <AccentButton
              onClick={() => handleSignIn("GitHub")}
              disabled={isLoading}
              variant="outline"
              size="lg"
              className="w-full"
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-2xl">⚫</span>
                Continue with GitHub
              </span>
            </AccentButton>
          </div>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--color-border)]" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-[var(--color-text-muted)]">
                OR
              </span>
            </div>
          </div>

          <AccentButton
            onClick={() => router.push("/")}
            variant="outline"
            size="lg"
            className="w-full border-[var(--color-text-muted)] text-[var(--color-text-muted)]"
          >
            Continue as guest
          </AccentButton>

          <p className="pt-4 text-center text-xs text-[var(--color-text-subtle)]">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-8 space-y-3 animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xl">
              ✨
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">
              Save and track your progress through guides
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xl">
              💬
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">
              Join the community and share experiences
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xl">
              🎯
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">
              Get personalized guide recommendations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
