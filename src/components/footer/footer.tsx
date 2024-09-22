import Image from "next/image";

interface FooterProps {
  title: string;
}

const Footer = ({ title }: FooterProps) => {
  return (
    <footer className="flex py-3 bg-[#FFAF00]">
      <p className="text-center text-white w-full text-xl"> {title}</p>
    </footer>
  );
};

export default Footer;
