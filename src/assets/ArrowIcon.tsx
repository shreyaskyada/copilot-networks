const ArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...rest
}) => {
  return (
    <svg
      width="15"
      height="24"
      viewBox="0 0 15 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M1.42891 7.46025L7.88874 1.00042M7.88874 1.00042L13.8818 6.99344M7.88874 1.00042L7.8892 22.7773"
        stroke="#77A3BA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.42891 7.46025L7.88874 1.00042M7.88874 1.00042L13.8818 6.99344M7.88874 1.00042L7.8892 22.7773"
        stroke="white"
        stroke-opacity="0.2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
