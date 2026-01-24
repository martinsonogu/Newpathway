type TwoColumnSectionProps = {
  left: React.ReactNode;
  right: React.ReactNode;
  gap?: string;
};

const ContentRow: React.FC<TwoColumnSectionProps> = ({
  left,
  right,
  gap = "gap-12",
}) => {
  return (
    <div className={`flex flex-col md:flex-row ${gap} mb-16`}>
      <div className="md:w-1/2">
        {left}
      </div>

      <div className="md:w-1/2">
        {right}
      </div>
    </div>
  );
};

export default ContentRow;
