interface WebsiteButtonProps {
  variant?: "blue" | "emerald";
  href?: string;
}

const WebsiteButton = ({
  variant = "blue",
  href = "#",
}: WebsiteButtonProps) => {
  const baseClasses =
    "mt-4 inline-flex items-center rounded-full px-6 py-2 text-white transition";
  const variantClasses = {
    blue: "bg-blue-500 hover:bg-blue-600",
    emerald: "bg-emerald-500 hover:bg-emerald-600",
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      Website →
    </a>
  );
};

export default WebsiteButton;
