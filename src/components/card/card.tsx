import { FC } from "react";
import {
  Card as CardComponent,
  CardContent,
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
    <CardComponent className="bg-white shadow-none border-none w-full">
      <div className="relative">
        <Image
          src={cardImage}
          alt="card"
          width={400}
          height={50}
          className="rounded-t-sm p-3 bg-white"
        />
      </div>
      <CardHeader className="grid gap-1 p-4">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row justify-between items-center p-4">
        <p className="text-3xl font-semibold">{price}</p>
        <p>Day 2 Night 1</p>
      </CardContent>
    </CardComponent>
  );
};

export default Card;
