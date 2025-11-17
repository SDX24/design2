"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Card, InputField, AccentButton } from "@/components/ui";

interface BudgetData {
  income: number;
  fixedExpenses: {
    rent: number;
    utilities: number;
    phone: number;
    insurance: number;
    transit: number;
    other: number;
  };
  flexibleExpenses: {
    groceries: number;
    diningOut: number;
    entertainment: number;
    shopping: number;
    other: number;
  };
}

export default function BudgetPlannerPage() {
  const [budget, setBudget] = useState<BudgetData>({
    income: 0,
    fixedExpenses: {
      rent: 0,
      utilities: 0,
      phone: 0,
      insurance: 0,
      transit: 0,
      other: 0,
    },
    flexibleExpenses: {
      groceries: 0,
      diningOut: 0,
      entertainment: 0,
      shopping: 0,
      other: 0,
    },
  });

  useEffect(() => {
    const saved = localStorage.getItem("budget");
    if (saved) {
      setBudget(JSON.parse(saved));
    }
  }, []);

  const saveBudget = (newBudget: BudgetData) => {
    setBudget(newBudget);
    localStorage.setItem("budget", JSON.stringify(newBudget));
  };

  const totalFixed = Object.values(budget.fixedExpenses).reduce(
    (sum, val) => sum + val,
    0
  );
  const totalFlexible = Object.values(budget.flexibleExpenses).reduce(
    (sum, val) => sum + val,
    0
  );
  const totalExpenses = totalFixed + totalFlexible;
  const remaining = budget.income - totalExpenses;

  return (
    <AppShell 
      title="Budget Planner"
      headerAction={
        <Link href="/tools" className="text-sm font-medium" style={{ color: '#3A7BD5' }}>
          ← Tools
        </Link>
      }
    >
      <section className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-1" style={{ color: '#222831', fontFamily: 'JetBrains Mono, monospace' }}>
            Budget Planner
          </h1>
          <p style={{ color: '#393E46', fontFamily: 'IBM Plex Sans, sans-serif' }}>
            Track your monthly income and expenses
          </p>
        </div>

        {/* Income */}
        <Card>
          <h2 className="font-semibold text-neutral-900 mb-3">
            Monthly Income
          </h2>
          <InputField
            label="Total Income"
            type="number"
            value={budget.income || ""}
            onChange={(e) =>
              saveBudget({ ...budget, income: Number(e.target.value) })
            }
            placeholder="0"
          />
        </Card>

        {/* Fixed Expenses */}
        <Card>
          <h2 className="font-semibold text-neutral-900 mb-3">
            Fixed Expenses
          </h2>
          <div className="space-y-3">
            <InputField
              label="Rent"
              type="number"
              value={budget.fixedExpenses.rent || ""}
              onChange={(e) =>
                saveBudget({
                  ...budget,
                  fixedExpenses: {
                    ...budget.fixedExpenses,
                    rent: Number(e.target.value),
                  },
                })
              }
              placeholder="0"
            />
            <InputField
              label="Utilities"
              type="number"
              value={budget.fixedExpenses.utilities || ""}
              onChange={(e) =>
                saveBudget({
                  ...budget,
                  fixedExpenses: {
                    ...budget.fixedExpenses,
                    utilities: Number(e.target.value),
                  },
                })
              }
              placeholder="0"
            />
            <InputField
              label="Phone"
              type="number"
              value={budget.fixedExpenses.phone || ""}
              onChange={(e) =>
                saveBudget({
                  ...budget,
                  fixedExpenses: {
                    ...budget.fixedExpenses,
                    phone: Number(e.target.value),
                  },
                })
              }
              placeholder="0"
            />
            <InputField
              label="Insurance"
              type="number"
              value={budget.fixedExpenses.insurance || ""}
              onChange={(e) =>
                saveBudget({
                  ...budget,
                  fixedExpenses: {
                    ...budget.fixedExpenses,
                    insurance: Number(e.target.value),
                  },
                })
              }
              placeholder="0"
            />
            <InputField
              label="Transit"
              type="number"
              value={budget.fixedExpenses.transit || ""}
              onChange={(e) =>
                saveBudget({
                  ...budget,
                  fixedExpenses: {
                    ...budget.fixedExpenses,
                    transit: Number(e.target.value),
                  },
                })
              }
              placeholder="0"
            />
            <InputField
              label="Other Fixed"
              type="number"
              value={budget.fixedExpenses.other || ""}
              onChange={(e) =>
                saveBudget({
                  ...budget,
                  fixedExpenses: {
                    ...budget.fixedExpenses,
                    other: Number(e.target.value),
                  },
                })
              }
              placeholder="0"
            />
          </div>
          <div className="mt-4 pt-4 border-t border-neutral-200">
            <div className="flex justify-between">
              <span className="font-medium text-neutral-900">
                Total Fixed
              </span>
              <span className="font-semibold text-neutral-900">
                ${totalFixed.toFixed(2)}
              </span>
            </div>
          </div>
        </Card>

        {/* Flexible Expenses */}
        <Card>
          <h2 className="font-semibold text-neutral-900 mb-3">
            Flexible Expenses
          </h2>
          <div className="space-y-3">
            <InputField
              label="Groceries"
              type="number"
              value={budget.flexibleExpenses.groceries || ""}
              onChange={(e) =>
                saveBudget({
                  ...budget,
                  flexibleExpenses: {
                    ...budget.flexibleExpenses,
                    groceries: Number(e.target.value),
                  },
                })
              }
              placeholder="0"
            />
            <InputField
              label="Dining Out"
              type="number"
              value={budget.flexibleExpenses.diningOut || ""}
              onChange={(e) =>
                saveBudget({
                  ...budget,
                  flexibleExpenses: {
                    ...budget.flexibleExpenses,
                    diningOut: Number(e.target.value),
                  },
                })
              }
              placeholder="0"
            />
            <InputField
              label="Entertainment"
              type="number"
              value={budget.flexibleExpenses.entertainment || ""}
              onChange={(e) =>
                saveBudget({
                  ...budget,
                  flexibleExpenses: {
                    ...budget.flexibleExpenses,
                    entertainment: Number(e.target.value),
                  },
                })
              }
              placeholder="0"
            />
            <InputField
              label="Shopping"
              type="number"
              value={budget.flexibleExpenses.shopping || ""}
              onChange={(e) =>
                saveBudget({
                  ...budget,
                  flexibleExpenses: {
                    ...budget.flexibleExpenses,
                    shopping: Number(e.target.value),
                  },
                })
              }
              placeholder="0"
            />
            <InputField
              label="Other Flexible"
              type="number"
              value={budget.flexibleExpenses.other || ""}
              onChange={(e) =>
                saveBudget({
                  ...budget,
                  flexibleExpenses: {
                    ...budget.flexibleExpenses,
                    other: Number(e.target.value),
                  },
                })
              }
              placeholder="0"
            />
          </div>
          <div className="mt-4 pt-4 border-t border-neutral-200">
            <div className="flex justify-between">
              <span className="font-medium text-neutral-900">
                Total Flexible
              </span>
              <span className="font-semibold text-neutral-900">
                ${totalFlexible.toFixed(2)}
              </span>
            </div>
          </div>
        </Card>

        {/* Summary */}
        <Card variant={remaining >= 0 ? "default" : "premium"}>
          <h2 className="font-semibold text-neutral-900 mb-4">Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Monthly Income</span>
              <span className="font-medium text-neutral-900">
                ${budget.income.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Total Expenses</span>
              <span className="font-medium text-neutral-900">
                ${totalExpenses.toFixed(2)}
              </span>
            </div>
            <div className="pt-3 border-t border-neutral-200">
              <div className="flex justify-between">
                <span className="font-semibold text-neutral-900">
                  {remaining >= 0 ? "Remaining" : "Over Budget"}
                </span>
                <span
                  className={`font-bold text-lg ${
                    remaining >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ${Math.abs(remaining).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {remaining < 0 && (
            <div className="mt-4 p-3 bg-red-50 rounded-lg">
              <p className="text-sm text-red-800">
                You're spending more than you earn. Try reducing flexible
                expenses or finding ways to increase income.
              </p>
            </div>
          )}

          {remaining > 0 && (
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                Great job! Consider putting your extra ${remaining.toFixed(2)}{" "}
                toward savings or paying down debt.
              </p>
            </div>
          )}
        </Card>
      </section>
    </AppShell>
  );
}
