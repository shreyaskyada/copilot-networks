interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProductCard = ({ title, description, imageUrl }: ProductCardProps) => {
  return (
    <div className="min-w-[300px] rounded-lg border border-[#003D60] shadow-sm">
      <div>
        <img
          className="h-[160px] w-full rounded-t-lg object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-[#6AA5BD]">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
