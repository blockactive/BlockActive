"use client"; // This directive tells Next.js that this is a Client Component

import React, { useState } from 'react';
import Chain from './Chain';

interface CardProps {
  chains: Array<{ title: string; iconSrc: string; dateOfActivity: string }>;
}

const Card: React.FC<CardProps> = ({ chains }) => {
  const [visibleChains, setVisibleChains] = useState(3);

  const loadMore = () => {
    setVisibleChains(prev => prev + 3);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      {chains.slice(0, visibleChains).map((chain, index) => (
        <Chain key={index} title={chain.title} iconSrc={chain.iconSrc} dateOfActivity={chain.dateOfActivity} />
      ))}
      {visibleChains < chains.length && (
        <button
          onClick={loadMore}
          className="mt-4 text-blue-500 hover:underline focus:outline-none"
        >
          See more
        </button>
      )}
    </div>
  );
};

export default Card;