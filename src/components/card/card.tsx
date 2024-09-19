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
    <CardComponent className="bg-white shadow-none">
      <div className="relative">
        <Image
          src={"/hero.png"}
          alt="card"
          width={100}
          height={100}
          className="max-h-screen min-w-full rounded-t-sm"
          objectFit="cover"
        />
      </div>
      <CardHeader className="grid gap-1 p-4">
        <CardTitle>{title}</CardTitle>
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
