interface ServiceCardProps {
  title: string;
  iconPath: string;
}

const ServiceCard = ({ title, iconPath }: ServiceCardProps) => {
  return (
    <div className="flex w-full flex-col rounded-lg border border-gray-200 bg-[#F3F7F9] px-[30px] py-[26px]">
      <div className="mb-4">
        <img src={iconPath} alt={title} />
      </div>
      <h3 className="m-0 text-[16px] leading-[32px] font-medium text-gray-800 md:text-[18px]">
        {title}
      </h3>
    </div>
  );
};

export default ServiceCard;
