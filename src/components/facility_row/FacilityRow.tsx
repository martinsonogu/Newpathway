type FacilityRowProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  reverse?: boolean;
};

const FacilityRow: React.FC<FacilityRowProps> = ({
  title,
  description,
  image,
  alt,
  reverse = false,
}) => {
  return (
    <div
      className={`
        flex flex-col md:flex-row items-center gap-8 mb-12
        ${reverse ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* Text */}
      <div className="md:w-1/2">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className=" leading-relaxed text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        <img
          src={image}
          alt={alt}
          className="w-full h-auto rounded-lg object-cover shadow-sm"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default FacilityRow;
