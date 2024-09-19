import { Card, HeaderText, Hero } from "@/components";
import Image from "next/image";
import Link from "next/link";

const getUser = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/users`, {
    next: { revalidate: 0 },
  });
  const json = res.json();

  return json;
};

export default async function Home() {
  // const user = await getUser();

  return (
    <div className="h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <div className="pt-10 overflow-hidden w-full justify-center">
          <HeaderText header="Most Popular" text="description" />
          <div className="mt-5 h-auto pb-20 flex flex-row grid-rows-3">
            {[0, 1, 2, 3].map((item, i) => (
              <Link
                href={""}
                key={i}
                className="sm:pl-0 md:p-4 mx-auto w-1/3 h-auto"
              >
                <Card
                  title="Gn. Bromo"
                  description="Gunung Bromo atau dalam bahasa Tengger dieja 'Brama', juga disebut Kaldera Tengger, adalah sebuah gunung berapi aktif di Jawa Timur, Indonesia."
                  price="IDR 200.000"
                  cardImage=""
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
