"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Card, InputField, AccentButton } from "@/components/ui";

interface Subscription {
  id: string;
  name: string;
  cost: number;
  billingCycle: "monthly" | "yearly";
  category: string;
}

export default function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    billingCycle: "monthly" as "monthly" | "yearly",
    category: "Entertainment",
  });

  useEffect(() => {
    const saved = localStorage.getItem("subscriptions");
    if (saved) {
      setSubscriptions(JSON.parse(saved));
    }
  }, []);

  const saveSubscriptions = (subs: Subscription[]) => {
    setSubscriptions(subs);
    localStorage.setItem("subscriptions", JSON.stringify(subs));
  };

  const addSubscription = () => {
    if (!formData.name || !formData.cost) return;

    const newSub: Subscription = {
      id: Date.now().toString(),
      name: formData.name,
      cost: parseFloat(formData.cost),
      billingCycle: formData.billingCycle,
      category: formData.category,
    };

    saveSubscriptions([...subscriptions, newSub]);
    setFormData({
      name: "",
      cost: "",
      billingCycle: "monthly",
      category: "Entertainment",
    });
    setShowForm(false);
  };

  const deleteSubscription = (id: string) => {
    saveSubscriptions(subscriptions.filter((s) => s.id !== id));
  };

  const monthlyTotal = subscriptions.reduce((sum, sub) => {
    return sum + (sub.billingCycle === "monthly" ? sub.cost : sub.cost / 12);
  }, 0);

  const yearlyTotal = monthlyTotal * 12;

  return (
    <AppShell 
      title="Subscriptions Tracker"
      headerAction={
        <Link href="/tools" className="text-sm font-medium" style={{ color: '#3A7BD5' }}>
          ← Tools
        </Link>
      }
    >
      <section className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-1" style={{ color: '#222831', fontFamily: 'JetBrains Mono, monospace' }}>
            Subscriptions Tracker
          </h1>
          <p style={{ color: '#393E46', fontFamily: 'IBM Plex Sans, sans-serif' }}>
            Keep track of all your recurring costs
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <p className="text-sm text-neutral-600 mb-1">Monthly</p>
            <p className="text-2xl font-bold text-neutral-900">
              ${monthlyTotal.toFixed(2)}
            </p>
          </Card>
          <Card>
            <p className="text-sm text-neutral-600 mb-1">Yearly</p>
            <p className="text-2xl font-bold text-accent-600">
              ${yearlyTotal.toFixed(2)}
            </p>
          </Card>
        </div>

        {/* Add Button */}
        {!showForm && (
          <AccentButton onClick={() => setShowForm(true)} size="lg">
            + Add Subscription
          </AccentButton>
        )}

        {/* Add Form */}
        {showForm && (
          <Card>
            <h3 className="font-semibold text-neutral-900 mb-4">
              New Subscription
            </h3>
            <div className="space-y-3">
              <InputField
                label="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Netflix, Spotify, etc."
              />
              <InputField
                label="Cost"
                type="number"
                value={formData.cost}
                onChange={(e) =>
                  setFormData({ ...formData, cost: e.target.value })
                }
                placeholder="0.00"
              />
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Billing Cycle
                </label>
                <select
                  value={formData.billingCycle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      billingCycle: e.target.value as "monthly" | "yearly",
                    })
                  }
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                >
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                >
                  <option value="Entertainment">Entertainment</option>
                  <option value="Productivity">Productivity</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Food">Food</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <AccentButton onClick={addSubscription} size="md">
                Save
              </AccentButton>
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-neutral-600 hover:text-neutral-900"
              >
                Cancel
              </button>
            </div>
          </Card>
        )}

        {/* Subscriptions List */}
        {subscriptions.length > 0 ? (
          <div className="space-y-3">
            {subscriptions.map((sub) => (
              <Card key={sub.id}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900">
                      {sub.name}
                    </h3>
                    <p className="text-sm text-neutral-600 mt-1">
                      ${sub.cost.toFixed(2)} / {sub.billingCycle}
                    </p>
                    <span className="inline-block mt-2 text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full">
                      {sub.category}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteSubscription(sub.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          !showForm && (
            <Card>
              <div className="text-center py-8">
                <p className="text-5xl mb-4">📱</p>
                <p className="text-neutral-600 mb-2">
                  No subscriptions tracked yet
                </p>
                <p className="text-sm text-neutral-500">
                  Add your first subscription to see your total monthly cost
                </p>
              </div>
            </Card>
          )
        )}
      </section>
    </AppShell>
  );
}
