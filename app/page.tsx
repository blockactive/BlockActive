"use client";

import React, { useState } from "react";
import SearchBox from "@/app/components/SearchBox";
import Card from "@/app/components/Card";

export default function Home() {
  const [showCard, setShowCard] = useState(false);

  // Sample data for the Card component
  const chains = [
    { title: "Chain 1", icon: "/assets/base logo-Photoroom.png", dateOfActivity: "2024-08-01" },
    { title: "Chain 2", icon: "/assets/Binance logo-Photoroom.png", dateOfActivity: "2024-08-02" },
    { title: "Chain 3", icon: "/assets/ethereum logo.png", dateOfActivity: "2024-08-03" },
    { title: "Chain 1", icon: "/assets/base logo-Photoroom.png", dateOfActivity: "2024-08-01" },
    { title: "Chain 2", icon: "/assets/Binance logo-Photoroom.png", dateOfActivity: "2024-08-02" }
  ];

  const handleSearchClick = () => {
    setShowCard(true); // Show the Card component when the search button is clicked
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <SearchBox onSearchClick={handleSearchClick} />
      </div>

      {showCard && <Card chains={chains} />}
    </main>
  );
}
