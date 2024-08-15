import React from 'react';

interface ChainProps {
  title: string;
  icon: React.ReactNode;
  dateOfActivity: string;
}

const Chain: React.FC<ChainProps> = ({ title, icon, dateOfActivity }) => {
  return (
    <div className="flex items-center p-4 mb-4 bg-white rounded-lg shadow-md">
      <div className="mr-4">
        {icon}
      </div>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">Last activity: {dateOfActivity}</p>
      </div>
    </div>
  );
};

export default Chain;
