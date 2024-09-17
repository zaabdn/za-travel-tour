import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="w-full">
      <Image
        src={"/hero.jpg"}
        alt="hero"
        width={1920}
        height={450}
        className="max-h-screen min-w-full"
        objectFit="cover"
      />
    </div>
  );
};

export default Hero;
