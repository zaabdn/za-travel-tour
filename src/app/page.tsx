import { Card, CategoryTrip, Footer, HeaderText, Hero } from "@/components";
import Image from "next/image";
import Link from "next/link";

interface categories {
  id: number;
  name: string;
  image: string;
}

const getUser = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/users`, {
    next: { revalidate: 0 },
  });
  const json = res.json();

  return json;
};

const getCategoryTrip = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/category`, {
    next: { revalidate: 0 },
  });
  const json = res.json();

  return json;
};

export default async function Home() {
  // const user = await getUser();
  const categories = await getCategoryTrip();

  console.log(categories.data);

  return (
    <div className="h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-[#F1F1F1]">
        <Hero />
        <div className="p-10 overflow-hidden w-full justify-center bg-[#F1F1F1]">
          <div className="container mx-auto py-8">
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {categories.data.map((item: categories, i: number) => (
                <CategoryTrip index={i} category={item} />
              ))}
            </div>
          </div>
          <HeaderText header="Most Popular" text="description" />
          <div className="mt-5 h-auto pb-20 flex flex-row grid-rows-3 flex-wrap">
            {[0, 1, 2, 3].map((item, i) => (
              <Link
                href={`/detail/${i}`}
                key={i}
                className="sm:pl-0 md:p-4 mx-auto w-1/4 h-auto"
              >
                <Card
                  title="Gn. Bromo"
                  description="Gunung Bromo atau dalam bahasa Tengger dieja 'Brama', juga disebut Kaldera Tengger, adalah sebuah gunung berapi aktif di Jawa Timur, Indonesia."
                  price="IDR 200.000"
                  cardImage="/data1.png"
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer title="Zainal Abidin" />
    </div>
  );
}
