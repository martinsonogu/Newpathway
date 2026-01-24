

interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className = '' }) => {
  return (
    <h1 className={`text-2xl md:text-4xl lg:text-6xl font-bold font-[poppins] text-teal-500  ${className}`}>
      {text}
    </h1>
  );
};

export default Title;
