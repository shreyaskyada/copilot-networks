import React from "react";

interface EnterpriseSoftwaresCardProps {
  title: string;
  description: string;
}

const EnterpriseSoftwaresCard: React.FC<EnterpriseSoftwaresCardProps> = ({
  title,
  description,
}) => {
  return (
    <section className="w-full rounded-[10px] border border-[#CFE1E8] bg-[#F3F7F9] py-[40px] md:py-[40px]">
      <div className="max-w-7xl px-4 md:px-[30px]">
        <h2 className="mb-6 text-[18px] font-bold text-gray-900 md:mb-8 md:text-[18px]">
          {title}
        </h2>
        <p className="max-w-4xl text-base leading-relaxed text-gray-700 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
};

export default EnterpriseSoftwaresCard;
