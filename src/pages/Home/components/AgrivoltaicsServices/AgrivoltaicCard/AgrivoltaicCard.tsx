interface AgrivoltaicCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const AgrivoltaicCard: React.FC<AgrivoltaicCardProps> = ({
  title,
  imageUrl,
  description,
}) => {
  return (
    <div className="rounded-xl border border-[#CFE1E8] bg-[#F3F7F9] p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-2 flex items-center gap-5 text-xl font-semibold text-gray-800">
        <img src={imageUrl} alt="" />
        <p>{title}</p>
      </div>
      <p className="pt-2 leading-[30px] text-[#013D55]">{description}</p>
    </div>
  );
};

export default AgrivoltaicCard;
