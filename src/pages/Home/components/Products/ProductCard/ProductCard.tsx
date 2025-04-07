interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProductCard = ({ title, description, imageUrl }: ProductCardProps) => {
  return (
    <div className="min-w-[300px] rounded-lg border border-[#CFE1E8] shadow-sm">
      <div>
        <img
          className="h-[160px] w-full rounded-t-lg object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#092133]">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-[#092133]">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
