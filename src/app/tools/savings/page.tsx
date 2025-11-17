"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Card, InputField, AccentButton } from "@/components/ui";

interface SavingsGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
}

export default function SavingsPage() {
  const [goals, setGoals] = useState<SavingsGoal[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    currentAmount: "",
    deadline: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("savingsGoals");
    if (saved) {
      setGoals(JSON.parse(saved));
    }
  }, []);

  const saveGoals = (newGoals: SavingsGoal[]) => {
    setGoals(newGoals);
    localStorage.setItem("savingsGoals", JSON.stringify(newGoals));
  };

  const addGoal = () => {
    if (!formData.name || !formData.targetAmount) return;

    const newGoal: SavingsGoal = {
      id: Date.now().toString(),
      name: formData.name,
      targetAmount: parseFloat(formData.targetAmount),
      currentAmount: parseFloat(formData.currentAmount) || 0,
      deadline: formData.deadline,
    };

    saveGoals([...goals, newGoal]);
    setFormData({
      name: "",
      targetAmount: "",
      currentAmount: "",
      deadline: "",
    });
    setShowForm(false);
  };

  const updateGoal = (id: string, currentAmount: number) => {
    saveGoals(
      goals.map((g) => (g.id === id ? { ...g, currentAmount } : g))
    );
  };

  const deleteGoal = (id: string) => {
    saveGoals(goals.filter((g) => g.id !== id));
  };

  return (
    <AppShell 
      title="Savings Goal Tracker"
      headerAction={
        <Link href="/tools" className="text-sm font-medium" style={{ color: '#3A7BD5' }}>
          ← Tools
        </Link>
      }
    >
      <section className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-1" style={{ color: '#222831', fontFamily: 'JetBrains Mono, monospace' }}>
            Savings Goal Tracker
          </h1>
          <p style={{ color: '#393E46', fontFamily: 'IBM Plex Sans, sans-serif' }}>Set goals and track your progress</p>
        </div>

        {/* Add Button */}
        {!showForm && (
          <AccentButton onClick={() => setShowForm(true)} size="lg">
            + Add Savings Goal
          </AccentButton>
        )}

        {/* Add Form */}
        {showForm && (
          <Card>
            <h3 className="font-semibold text-neutral-900 mb-4">
              New Savings Goal
            </h3>
            <div className="space-y-3">
              <InputField
                label="Goal Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Emergency fund, vacation, etc."
              />
              <InputField
                label="Target Amount"
                type="number"
                value={formData.targetAmount}
                onChange={(e) =>
                  setFormData({ ...formData, targetAmount: e.target.value })
                }
                placeholder="0.00"
              />
              <InputField
                label="Current Amount (optional)"
                type="number"
                value={formData.currentAmount}
                onChange={(e) =>
                  setFormData({ ...formData, currentAmount: e.target.value })
                }
                placeholder="0.00"
              />
              <InputField
                label="Deadline (optional)"
                type="date"
                value={formData.deadline}
                onChange={(e) =>
                  setFormData({ ...formData, deadline: e.target.value })
                }
              />
            </div>
            <div className="flex gap-3 mt-4">
              <AccentButton onClick={addGoal} size="md">
                Save Goal
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

        {/* Goals List */}
        {goals.length > 0 ? (
          <div className="space-y-4">
            {goals.map((goal) => {
              const progress = (goal.currentAmount / goal.targetAmount) * 100;
              const remaining = goal.targetAmount - goal.currentAmount;
              const isComplete = progress >= 100;

              return (
                <Card key={goal.id} variant={isComplete ? "premium" : "default"}>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-neutral-900">
                          {goal.name}
                        </h3>
                        {goal.deadline && (
                          <p className="text-sm text-neutral-600 mt-1">
                            Target: {new Date(goal.deadline).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => deleteGoal(goal.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Delete
                      </button>
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-neutral-600">
                          ${goal.currentAmount.toFixed(0)} of $
                          {goal.targetAmount.toFixed(0)}
                        </span>
                        <span className="font-semibold text-accent-600">
                          {Math.min(progress, 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            isComplete ? "bg-green-500" : "bg-accent-500"
                          }`}
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                      </div>
                    </div>

                    {!isComplete ? (
                      <div>
                        <p className="text-sm text-neutral-600 mb-2">
                          ${remaining.toFixed(0)} remaining
                        </p>
                        <InputField
                          label="Update Current Amount"
                          type="number"
                          value={goal.currentAmount}
                          onChange={(e) =>
                            updateGoal(goal.id, parseFloat(e.target.value) || 0)
                          }
                          placeholder="0.00"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                        <span className="text-2xl">🎉</span>
                        <p className="text-sm text-green-800 font-medium">
                          Goal complete! You did it!
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          !showForm && (
            <Card>
              <div className="text-center py-8">
                <p className="text-5xl mb-4">🎯</p>
                <p className="text-neutral-600 mb-2">No savings goals yet</p>
                <p className="text-sm text-neutral-500">
                  Create your first goal to start tracking your progress
                </p>
              </div>
            </Card>
          )
        )}
      </section>
    </AppShell>
  );
}
