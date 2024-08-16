import React from 'react';
import Image from 'next/image';

interface ChainProps {
  title: string;
  icon: string; // The path to the icon image
  dateOfActivity: string;
}

const Chain: React.FC<ChainProps> = ({ title, icon, dateOfActivity }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md mb-4">
      {/* Icon */}
      <div className="flex-shrink-0">
        <Image
          src={icon} // Path to the image
          alt={title} // Alt text for the image
          width={40} // Width of the icon
          height={40} // Height of the icon
          className="rounded-full" // To make the icon circular
        />
      </div>
      {/* Content */}
      <div className="ml-4">
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-sm text-gray-500">Last activity: {dateOfActivity}</p>
      </div>
    </div>
  );
};

export default Chain;
