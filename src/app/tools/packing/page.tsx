"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card } from "@/components/ui";

interface PackingList {
  id: string;
  name: string;
  items: { id: string; name: string; category: string; checked: boolean }[];
}

const packingLists: PackingList[] = [
  {
    id: "travel",
    name: "Travel Essentials",
    items: [
      { id: "t1", name: "Passport / ID", category: "Documents", checked: false },
      { id: "t2", name: "Boarding passes / tickets", category: "Documents", checked: false },
      { id: "t3", name: "Travel insurance info", category: "Documents", checked: false },
      { id: "t4", name: "Credit cards / cash", category: "Documents", checked: false },
      { id: "t5", name: "Shirts / tops", category: "Clothing", checked: false },
      { id: "t6", name: "Pants / shorts", category: "Clothing", checked: false },
      { id: "t7", name: "Underwear / socks", category: "Clothing", checked: false },
      { id: "t8", name: "Jacket / sweater", category: "Clothing", checked: false },
      { id: "t9", name: "Shoes / sandals", category: "Clothing", checked: false },
      { id: "t10", name: "Toothbrush / toothpaste", category: "Toiletries", checked: false },
      { id: "t11", name: "Shampoo / soap", category: "Toiletries", checked: false },
      { id: "t12", name: "Medications", category: "Toiletries", checked: false },
      { id: "t13", name: "Phone charger", category: "Electronics", checked: false },
      { id: "t14", name: "Headphones", category: "Electronics", checked: false },
      { id: "t15", name: "Camera", category: "Electronics", checked: false },
    ],
  },
  {
    id: "moving",
    name: "Moving Checklist",
    items: [
      { id: "m1", name: "Boxes & packing tape", category: "Supplies", checked: false },
      { id: "m2", name: "Bubble wrap / newspaper", category: "Supplies", checked: false },
      { id: "m3", name: "Markers for labeling", category: "Supplies", checked: false },
      { id: "m4", name: "Plates / bowls / utensils", category: "Kitchen", checked: false },
      { id: "m5", name: "Pots / pans", category: "Kitchen", checked: false },
      { id: "m6", name: "Glasses / mugs", category: "Kitchen", checked: false },
      { id: "m7", name: "Towels", category: "Bathroom", checked: false },
      { id: "m8", name: "Shower curtain", category: "Bathroom", checked: false },
      { id: "m9", name: "Toilet paper", category: "Bathroom", checked: false },
      { id: "m10", name: "Cleaning supplies", category: "Bathroom", checked: false },
      { id: "m11", name: "Bed sheets / blankets", category: "Bedroom", checked: false },
      { id: "m12", name: "Pillows", category: "Bedroom", checked: false },
      { id: "m13", name: "Alarm clock", category: "Bedroom", checked: false },
      { id: "m14", name: "Lamps", category: "Bedroom", checked: false },
    ],
  },
  {
    id: "campus",
    name: "Campus Packing",
    items: [
      { id: "c1", name: "Student ID", category: "Documents", checked: false },
      { id: "c2", name: "Health insurance card", category: "Documents", checked: false },
      { id: "c3", name: "Important documents copies", category: "Documents", checked: false },
      { id: "c4", name: "Laptop / tablet", category: "Study", checked: false },
      { id: "c5", name: "Chargers & adapters", category: "Study", checked: false },
      { id: "c6", name: "Notebooks / binders", category: "Study", checked: false },
      { id: "c7", name: "Pens / pencils / highlighters", category: "Study", checked: false },
      { id: "c8", name: "Backpack", category: "Study", checked: false },
      { id: "c9", name: "Bedding (sheets, pillow, blanket)", category: "Personal", checked: false },
      { id: "c10", name: "Clothes & hangers", category: "Personal", checked: false },
      { id: "c11", name: "Toiletries", category: "Personal", checked: false },
      { id: "c12", name: "Laundry basket & detergent", category: "Personal", checked: false },
      { id: "c13", name: "Snacks & water bottle", category: "Personal", checked: false },
      { id: "c14", name: "Photos / decorations", category: "Personal", checked: false },
    ],
  },
];

export default function PackingPage() {
  const [selectedList, setSelectedList] = useState<string>("travel");
  const [listStates, setListStates] = useState<Record<string, PackingList>>({});

  useEffect(() => {
    const saved = localStorage.getItem("packingLists");
    if (saved) {
      setListStates(JSON.parse(saved));
    } else {
      const initial: Record<string, PackingList> = {};
      packingLists.forEach((list) => {
        initial[list.id] = list;
      });
      setListStates(initial);
    }
  }, []);

  const currentList = listStates[selectedList] || packingLists.find((l) => l.id === selectedList);

  const toggleItem = (itemId: string) => {
    if (!currentList) return;

    const updated = {
      ...currentList,
      items: currentList.items.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      ),
    };

    const newState = { ...listStates, [selectedList]: updated };
    setListStates(newState);
    localStorage.setItem("packingLists", JSON.stringify(newState));
  };

  const categories = currentList
    ? Array.from(new Set(currentList.items.map((item) => item.category)))
    : [];

  const getProgress = () => {
    if (!currentList) return 0;
    const checked = currentList.items.filter((i) => i.checked).length;
    return Math.round((checked / currentList.items.length) * 100);
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="p-6 space-y-6">
        <div>
          <Link href="/tools" className="text-sm text-accent-600 mb-2 inline-block">
            ← Back to Tools
          </Link>
          <h1 className="text-2xl font-bold text-neutral-900 mb-1">
            Packing Lists
          </h1>
          <p className="text-neutral-600">Never forget essentials again</p>
        </div>

        {/* List Selector */}
        <div className="flex gap-2 overflow-x-auto">
          {packingLists.map((list) => (
            <button
              key={list.id}
              onClick={() => setSelectedList(list.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                selectedList === list.id
                  ? "bg-accent-500 text-white"
                  : "bg-white text-neutral-700 border border-neutral-300"
              }`}
            >
              {list.name}
            </button>
          ))}
        </div>

        {/* Progress */}
        {currentList && (
          <Card>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Progress</span>
                <span className="text-lg font-bold text-accent-600">
                  {getProgress()}%
                </span>
              </div>
              <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent-500 rounded-full transition-all duration-300"
                  style={{ width: `${getProgress()}%` }}
                />
              </div>
            </div>
          </Card>
        )}

        {/* Items by Category */}
        {currentList &&
          categories.map((category) => (
            <div key={category}>
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                {category}
              </h2>
              <Card>
                <div className="space-y-3">
                  {currentList.items
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={() => toggleItem(item.id)}
                          className="w-5 h-5 rounded border-2 border-neutral-300 text-accent-500 focus:ring-accent-500 focus:ring-2"
                        />
                        <span
                          className={`text-sm ${
                            item.checked
                              ? "line-through text-neutral-500"
                              : "text-neutral-900"
                          }`}
                        >
                          {item.name}
                        </span>
                      </label>
                    ))}
                </div>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
