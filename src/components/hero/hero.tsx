import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Hero: React.FC = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-25 pointer-events-none"></div>
      <div className="w-full h-screen relative z-10 flex flex-col justify-center items-start">
        <div className="w-2/4 mt-10 mx-auto ">
          <h1 className="text-white text-6xl font-extrabold">Explore</h1>
          <h1 className="text-white text-5xl font-thin">
            your amazing city together
          </h1>
        </div>
        <div className="w-2/4 mt-10 mx-auto justify-center items-center">
          <p className="text-white">Find great places to holiday</p>
          <div className="flex flex-row">
            <Input
              className="bg-white py-6 border-0 focus:border-0 focus:outline-none focus:ring-0 focus:shadow-none focus:bg-gray-50 transition-colors duration-200"
              style={{
                border: "none",
                boxShadow: "none",
              }}
            />
            <Button className="py-6 -ml-2 px-7 bg-[#FFAF00] hover:bg-[#e69e02]">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
