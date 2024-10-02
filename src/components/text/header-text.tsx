import { FC } from "react";

interface HeaderTextProps {
  header: string;
  text: string;
}

const HeaderText: FC<HeaderTextProps> = ({ header, text }: HeaderTextProps) => {
  return (
    <div className="d-flex justify-center items-center my-3">
      <div className="text-center text-4xl font-bold">{header}</div>
      <div className="text-center text-xl text-gray-400">{text}</div>
    </div>
  );
};

export default HeaderText;
