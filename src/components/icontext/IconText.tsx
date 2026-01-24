
import type { ReactNode } from "react";

type IconTextRowProps = {
  icon: ReactNode;
  text: string;
};

const IconTextRow = ({ icon, text }: IconTextRowProps) => (
  <div className="flex items-center gap-2">
    {icon}
    <span>{text}</span>
  </div>
);

export default IconTextRow;