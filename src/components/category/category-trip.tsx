import { Card, CardContent } from "../ui/card";

interface CategoryTripProps {
  index: number;
  category: {
    image: string;
    title: string;
  };
}

const CategoryTrip = ({ index, category }: CategoryTripProps) => {
  return (
    <Card key={index} className="flex-shrink-0 w-64 overflow-hidden">
      <CardContent className="p-0 relative">
        <img
          src={category.image}
          alt={category.title}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-0 left-0 right-0 p-4 text-lg font-semibold text-white">
          {category.title}
        </h3>
      </CardContent>
    </Card>
  );
};

export default CategoryTrip;
