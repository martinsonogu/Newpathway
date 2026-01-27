import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

interface VacancyCardProps {
  title: string;
  description: string;
  applyRoute?: string;
  moreRoute?: string;
}

const VacancyCard: React.FC<VacancyCardProps> = ({
  title,
  description,
  applyRoute = "/apply",
  moreRoute,
}) => {
  const navigate = useNavigate();

  return (
   <div className="w-full md:w-1/2 p-4">
  <div className="h-full p-6 rounded-2xl bg-gray-100 shadow-lg shadow-gray-400">
    <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
    <p className="text-gray-700 mb-6">{description}</p>

    <div className="flex items-center gap-4 mt-auto">
      <Button variant="secondary" onClick={() => navigate(applyRoute)}>
        Apply Now
      </Button>

      {moreRoute && (
        <button
          onClick={() => navigate(moreRoute)}
          className="text-teal-600 hover:underline font-medium"
        >
          Learn more...
        </button>
      )}
    </div>
  </div>
</div>

  );
};

export default VacancyCard;
