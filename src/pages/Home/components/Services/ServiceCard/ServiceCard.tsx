type Points = {
  title: string;
  subTitle: string;
};

interface ServiceCardProps {
  title: string;
  iconPath: string;
  points?: Array<string | Points>;
}

const ServiceCard = ({ title, iconPath, points }: ServiceCardProps) => {
  return (
    <div className="flex w-full flex-col rounded-lg border border-gray-200 bg-[#F3F7F9] px-[30px] py-[26px]">
      <div>
        <div className="mb-4">
          <img src={iconPath} alt={title} />
        </div>
        <h3 className="m-0 text-[16px] leading-[32px] font-medium text-gray-800 md:text-[18px]">
          {title}
        </h3>
      </div>

      {points && (
        <ul className="mt-2 space-y-2.5 pl-5 text-[14px] text-[#517C93]">
          {points.map((point, index) => {
            return typeof point === "string" ? (
              <li className="list-disc" key={index}>
                {point}
              </li>
            ) : (
              <div key={index}>
                <li className="list-disc">{point.title}</li>
                <h2 className="mt-2 text-[12px]">{point.subTitle}</h2>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
