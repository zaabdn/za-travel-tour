import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="w-full">
      <Image
        src={"/hero.png"}
        alt="hero"
        width={1820}
        height={450}
        // className="max-h-screen max-w-full"
      />
    </div>
  );
};

export default Hero;
