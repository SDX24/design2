"use client";

import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { useState } from "react";

export default function OnboardingPage() {
  const router = useRouter();
  const [country, setCountry] = useState("Canada");
  const [age, setAge] = useState<number | "">("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // you could store to localStorage here later
    router.push("/");
  }

  return (
    <AppShell title="Starter Guide">
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-sm text-slate-600">
          Tell us a bit about you so we can tailor your roadmap.
        </p>

        <div className="space-y-2">
          <label className="text-sm font-medium">Country / Region</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          >
            <option>Canada</option>
            <option>United States</option>
            <option>Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Age</label>
          <input
            type="number"
            min={15}
            max={99}
            value={age}
            onChange={(e) => setAge(e.target.value ? Number(e.target.value) : "")}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
            placeholder="18"
          />
          <p className="text-xs text-slate-500">
            Roadmap focuses on key ages like 16, 18, 19+.
          </p>
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-[var(--color-primary)] px-3 py-2 text-sm font-medium text-white hover:bg-blue-600"
        >
          Continue to roadmap
        </button>
      </form>
    </AppShell>
  );
}