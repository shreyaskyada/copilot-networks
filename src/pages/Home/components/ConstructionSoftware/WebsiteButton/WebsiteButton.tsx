import { Link } from "react-router";

interface WebsiteButtonProps {
  variant?: "blue" | "emerald";
  href?: string;
  className?: string;
}

const WebsiteButton = ({
  variant = "blue",
  href = "#",
  className,
}: WebsiteButtonProps) => {
  const baseClasses =
    "mt-4 inline-flex items-center rounded-full px-[25px] md:px-[36px] py-2 h-[48px] md:h-[56px] text-white transition";
  const variantClasses = {
    blue: "bg-blue-500 hover:bg-blue-600",
    emerald: "bg-emerald-500 hover:bg-emerald-600",
  };

  return (
    <Link
      to={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      Website →
    </Link>
  );
};

export default WebsiteButton;
