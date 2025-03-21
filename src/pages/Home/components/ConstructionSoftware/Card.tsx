import React from "react";
import { WebsiteButton } from "./WebsiteButton";

interface CardProps {
  imageSrc: string;
  altText: string;
  buttonClassName?: string;
  isButtonVisible?: boolean;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  altText,
  isButtonVisible = true,
  buttonClassName,
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={imageSrc}
        alt={altText}
        className="h-full w-full object-cover"
      />

      <div className="absolute bottom-[20px] left-[25px] md:bottom-[40px] md:left-[52px]">
        {isButtonVisible && <WebsiteButton className={buttonClassName} />}
      </div>
    </div>
  );
};

export default Card;
