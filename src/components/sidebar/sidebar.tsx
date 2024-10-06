import Link from "next/link";

import {
  Building2,
  ChartBarStacked,
  LayoutPanelLeft,
  LogOut,
  PlaneTakeoff,
} from "lucide-react";

import { signOut } from "next-auth/react";
import Image from "next/image";

const dataMenuSidebar = [
  {
    id: "/admin",
    title: "Dashboard",
    icon: LayoutPanelLeft,
  },
  {
    id: "/admin/category-trip",
    title: "Category Trip",
    icon: ChartBarStacked,
  },
  {
    id: "/admin/trips",
    title: "Trips",
    icon: PlaneTakeoff,
  },
  {
    id: "/admin/transactions",
    title: "Transaction",
    icon: Building2,
  },
  {
    id: "signOut",
    title: "Sign Out",
    icon: LogOut,
  },
];

const Sidebar = () => {
  return (
    <aside
      id="sidebar"
      className="fixed left-0 top-0 z-40 h-screen w-64 transition-transform"
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900">
        {/* <Link href={"/"} className="bg-red-300 h-fit"> */}
        <Image
          src={"/Header.png"}
          alt="header"
          width={1000}
          height={600}
          className="mt-3 w-full h-auto object-cover" // Ensure the image fills the available width while maintaining its aspect ratio
        />
        {/* </Link> */}

        <ul className="space-y-2 text-sm font-medium">
          {dataMenuSidebar.map((item) => (
            <li key={item.id}>
              {item.id === "signOut" ? (
                <button
                  onClick={() => signOut()}
                  className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-orange-50 dark:text-white dark:hover:bg-slate-700 w-full text-left"
                >
                  <item.icon size={28} />
                  <span className="ml-3 whitespace-nowrap text-lg">
                    {item.title}
                  </span>
                </button>
              ) : (
                <Link
                  href={item.id}
                  className="flex items-center rounded-lg px-3 py-2 hover:bg-orange-50"
                >
                  <item.icon size={28} />
                  <span className="ml-3 whitespace-nowrap text-lg">
                    {item.title}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex">
          <div className="flex w-full justify-between">
            <span className="text-sm font-medium text-black dark:text-white">
              zainal609@gmail.com
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-roledescription="more menu"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5 text-black dark:text-white"
              strokeLinecap="round"
              strokeLinejoin="round"
              // className="lucide lucide-more-horizontal"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
