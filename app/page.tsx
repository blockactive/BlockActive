"use client";

import React, { useState } from "react";
import SearchBox from "@/app/components/SearchBox";
import Card from "@/app/components/Card";
import LogoAnimation from "@/app/components/LogoAnimation";

export default function Home() {
  const [showCard, setShowCard] = useState(false);
  const [showLogoAnimation, setShowLogoAnimation] = useState(true);

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
  const handleAnimationComplete = () => {
    setShowLogoAnimation(false); // Hide the logo animation after it completes
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {showLogoAnimation && <LogoAnimation onAnimationComplete={handleAnimationComplete} />}

    {!showLogoAnimation && (
      <>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <SearchBox onSearchClick={handleSearchClick} />
        </div>

        {showCard && <Card chains={chains} />}
      </>
    )}
  </main>
  );
}
