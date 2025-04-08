import React from "react";

interface EnterpriseSoftwaresCardProps {
  title: string;
  description?: string;
  points?: string[];
}

const EnterpriseSoftwaresCard: React.FC<EnterpriseSoftwaresCardProps> = ({
  title,
  description,
  points,
}) => {
  return (
    <section className="w-full rounded-[10px] border border-[#CFE1E8] bg-[#F3F7F9] py-[40px] md:py-[40px]">
      <div className="max-w-7xl px-4 md:px-[30px]">
        <h2 className="mb-5 text-[18px] font-bold text-gray-900 md:mb-6 md:text-[18px]">
          {title}
        </h2>
        {description && (
          <p className="max-w-4xl text-base leading-relaxed text-gray-700 md:text-lg">
            {description}
          </p>
        )}

        {points && (
          <ul className="space-y-2 pl-5 text-[#517C93]">
            {points.map((point, index) => {
              return (
                <li className="list-disc" key={index}>
                  {point}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default EnterpriseSoftwaresCard;
