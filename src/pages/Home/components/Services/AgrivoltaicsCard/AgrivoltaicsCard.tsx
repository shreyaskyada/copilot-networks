import React from "react";

interface AgrivoltaicsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AgrivoltaicsCard: React.FC<AgrivoltaicsCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
      <div className="flex items-center space-x-3 mb-4">
        <div className="text-blue-600 text-3xl">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  );
};

export default AgrivoltaicsCard;
