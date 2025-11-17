"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, InputField } from "@/components/ui";

export default function RentCalculatorPage() {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(0);
  const [proposedRent, setProposedRent] = useState<number>(0);

  const recommendedRent = monthlyIncome * 0.3;
  const rentPercentage = monthlyIncome > 0 ? (proposedRent / monthlyIncome) * 100 : 0;
  const isAffordable = rentPercentage <= 30;

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="p-6 space-y-6">
        <div>
          <Link href="/tools" className="text-sm text-accent-600 mb-2 inline-block">
            ← Back to Tools
          </Link>
          <h1 className="text-2xl font-bold text-neutral-900 mb-1">
            Rent Affordability Calculator
          </h1>
          <p className="text-neutral-600">
            Calculate how much rent you can afford using the 30% rule
          </p>
        </div>

        <Card>
          <h2 className="font-semibold text-neutral-900 mb-3">Your Income</h2>
          <InputField
            label="Monthly Income (after tax)"
            type="number"
            value={monthlyIncome || ""}
            onChange={(e) => setMonthlyIncome(Number(e.target.value))}
            placeholder="0"
          />
        </Card>

        {monthlyIncome > 0 && (
          <>
            <Card variant="premium">
              <div className="text-center space-y-2">
                <p className="text-sm text-neutral-600">
                  Recommended Maximum Rent
                </p>
                <p className="text-4xl font-bold text-accent-600">
                  ${recommendedRent.toFixed(0)}
                </p>
                <p className="text-xs text-neutral-500">per month</p>
              </div>
            </Card>

            <Card>
              <h2 className="font-semibold text-neutral-900 mb-3">
                Check a Specific Rent Amount
              </h2>
              <InputField
                label="Proposed Rent"
                type="number"
                value={proposedRent || ""}
                onChange={(e) => setProposedRent(Number(e.target.value))}
                placeholder="0"
              />

              {proposedRent > 0 && (
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <span className="text-sm text-neutral-600">
                      Percentage of Income
                    </span>
                    <span
                      className={`font-bold text-lg ${
                        isAffordable ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {rentPercentage.toFixed(1)}%
                    </span>
                  </div>

                  <div
                    className={`p-4 rounded-lg ${
                      isAffordable ? "bg-green-50" : "bg-red-50"
                    }`}
                  >
                    {isAffordable ? (
                      <div className="flex gap-3">
                        <span className="text-2xl">✅</span>
                        <div>
                          <p className="font-semibold text-green-900 mb-1">
                            This rent is affordable!
                          </p>
                          <p className="text-sm text-green-800">
                            You'll have $
                            {(monthlyIncome - proposedRent).toFixed(0)} left
                            for other expenses, savings, and emergencies.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                          <p className="font-semibold text-red-900 mb-1">
                            This rent may be too high
                          </p>
                          <p className="text-sm text-red-800">
                            You'll only have $
                            {(monthlyIncome - proposedRent).toFixed(0)} left
                            for everything else. Consider finding a cheaper
                            place or getting a roommate.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Card>

            <Card>
              <h3 className="font-semibold text-neutral-900 mb-3">
                Budget Breakdown
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Monthly Income</span>
                  <span className="font-medium text-neutral-900">
                    ${monthlyIncome.toFixed(0)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">
                    Recommended Rent (30%)
                  </span>
                  <span className="font-medium text-neutral-900">
                    ${recommendedRent.toFixed(0)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">
                    Remaining for Other Expenses
                  </span>
                  <span className="font-medium text-neutral-900">
                    ${(monthlyIncome - recommendedRent).toFixed(0)}
                  </span>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="font-semibold text-neutral-900 mb-2">
                💡 Tips for Affordable Housing
              </h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Consider getting a roommate to split costs</li>
                <li>• Look for places that include utilities</li>
                <li>• Check areas with good transit to save on car costs</li>
                <li>
                  • Negotiate rent with landlords, especially if signing a
                  longer lease
                </li>
                <li>• Don't forget to budget for renters insurance ($15-30/mo)</li>
              </ul>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
