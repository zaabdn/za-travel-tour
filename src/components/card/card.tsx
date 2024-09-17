import { FC } from "react";
import {
  Card as CardComponent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  price: string;
  cardImage: string;
}

const Card: FC<CardProps> = ({
  title,
  description,
  price,
  cardImage,
}: CardProps) => {
  return (
    <CardComponent className="bg-white shadow-none">
      <CardHeader className="p-0">
        <Image
          src={"/hero.jpg"}
          alt="card"
          width={100}
          height={100}
          className="max-h-screen min-w-full"
          objectFit="cover"
        />
        <CardTitle className="px-3 pt-3">{title}</CardTitle>
        <CardDescription className="px-3 pb-3">{description}</CardDescription>
      </CardHeader>
    </CardComponent>
  );
};

export default Card;
