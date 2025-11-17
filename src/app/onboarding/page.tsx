"use client";

import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { Logo } from "@/components/Logo";
import { useState } from "react";

export default function OnboardingPage() {
  const router = useRouter();
  const [country, setCountry] = useState("Canada");
  const [age, setAge] = useState<number | "">("");
  const [step, setStep] = useState(1);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Smooth transition animation
    setStep(3);
    setTimeout(() => {
      router.push("/");
    }, 800);
  }

  return (
    <AppShell title="Starter Guide">
      <div className="space-y-6 py-4">
        {/* Hero Section */}
        <div className="space-y-3 text-center">
          <div className="mx-auto flex items-center justify-center">
            <Logo size={96} showText={false} />
          </div>
          <h2 
            className="font-bold"
            style={{ 
              fontSize: '40px',
              color: '#222831',
              fontFamily: 'JetBrains Mono, monospace'
            }}
          >
            Let's personalize your roadmap
          </h2>
          <p 
            className="text-base"
            style={{ 
              color: '#393E46',
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '16px'
            }}
          >
            Tell us about you so we can show the most relevant guides for your situation
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-2">
          {[1, 2].map((s) => (
            <div
              key={s}
              className={`h-2 w-16 rounded-full transition-all duration-300 ${
                s <= step
                  ? "bg-[var(--color-primary)]"
                  : "bg-[var(--color-border)]"
              }`}
            />
          ))}
        </div>

        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6 animate-fadeIn">
            <div className="space-y-3">
              <label className="text-base font-semibold text-[var(--color-text)]">
                🌍 Where are you located?
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-border)] bg-white px-4 py-4 text-base shadow-sm transition-all focus:border-[var(--color-primary)] focus:shadow-md focus:outline-none"
              >
                <option>🇨🇦 Canada</option>
                <option>🇺🇸 United States</option>
                <option>🇬🇧 United Kingdom</option>
                <option>🌎 Other</option>
              </select>
              <p className="caption">
                We'll show guides specific to your region's rules and processes
              </p>
            </div>

            <button
              type="submit"
              className="w-full rounded-[var(--radius-md)] bg-gradient-to-r from-[var(--color-primary)] to-blue-500 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Continue →
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
            <div className="space-y-3">
              <label className="text-base font-semibold text-[var(--color-text)]">
                🎂 How old are you?
              </label>
              <input
                type="number"
                min={15}
                max={99}
                value={age}
                onChange={(e) => setAge(e.target.value ? Number(e.target.value) : "")}
                className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-border)] bg-white px-4 py-4 text-base shadow-sm transition-all focus:border-[var(--color-primary)] focus:shadow-md focus:outline-none"
                placeholder="Enter your age (e.g., 18)"
                autoFocus
                required
              />
              <p className="caption">
                Your roadmap will focus on key milestones at 16, 18, and 19+
              </p>
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                className="w-full rounded-[var(--radius-md)] bg-gradient-to-r from-[var(--color-primary)] to-blue-500 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                See my roadmap 🚀
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-border)] bg-white px-6 py-3 text-base font-medium text-[var(--color-text)] transition-all hover:border-[var(--color-primary)] hover:shadow-sm"
              >
                ← Back
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="space-y-4 text-center animate-fadeIn">
            <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-[var(--color-border)] border-t-[var(--color-primary)]"></div>
            <p className="text-base font-medium text-[var(--color-text)]">
              Personalizing your experience...
            </p>
          </div>
        )}
      </div>
    </AppShell>
  );
}