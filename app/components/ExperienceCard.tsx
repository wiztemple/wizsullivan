import React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  location,
  startDate,
  endDate,
}) => {
  return (
    <div className="p-5 border border-slate-200 mb-5 rounded-lg hover:shadow-sm">
      <span className="block text-sm text-gray-500">{`${startDate} - ${endDate}`}</span>
      <span className="block text-lg font-semibold">{title}</span>
      <div className="flex items-center">
        <span className="block text-sm">{`${company}, ${location}`}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
