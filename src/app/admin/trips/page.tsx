"use client";

import { DataTable } from "@/components";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { useState } from "react";

interface tripInput {
  title: string;
  description: string;
  categoryTripId: number;
  accommodationTripId: number;
  regionId: number;
  duration: string;
  price: number;
  quota: number;
  image: string;
}

interface RowOriginal {
  id: string;
  dateStart?: string;
  dateEnd?: string;
  // Add any other properties that `original` might have
}

// const getTrips = async () => {
//   const res = await fetch(`${process.env.BASE_URL}/api/trips`, {
//     next: { revalidate: 0 },
//   });
//   const json = res.json();

//   return json;
// };

const AdminTrips = async () => {
  const dataTrips: unknown[] = [];
  const [recordID, setRecordID] = useState<string>("");
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<tripInput>({
    title: "",
    description: "",
    categoryTripId: 0,
    accommodationTripId: 0,
    regionId: 0,
    duration: "",
    price: 0,
    quota: 0,
    image: "",
  });
  const [openForm, setOpenForm] = useState(true);

  const columns: ColumnDef<unknown, unknown>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value: unknown) =>
            table.toggleAllPageRowsSelected(!!value)
          }
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: unknown) => row.toggleSelected(!!value)}
          className="flex justify-start"
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <div className="flex flex-row">
            Title
            <ArrowUpDown
              className="ml-2 h-4 w-4"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            />
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="text-left">{row.getValue("title")}</div>
      ),
    },
    {
      accessorKey: "description",
      header: () => <div className="text-left">Description</div>,
      cell: ({ row }) => {
        return (
          <div className="text-left font-medium">
            {row.getValue("description")}
          </div>
        );
      },
    },
    {
      id: "actions",
      enableHiding: false,
      header: () => <div className="text-left">Actions</div>,
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="flex justify-center">
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  setOpenForm(true);

                  setDataEdit({
                    title: row.getValue("title"),
                    description: row.getValue("description"),
                    categoryTripId: row.getValue("categoryTripId"),
                    accommodationTripId: row.getValue("accommodationTripId"),
                    duration: row.getValue("duration"),
                    image: row.getValue("image"),
                    price: row.getValue("price"),
                    quota: row.getValue("quota"),
                    regionId: row.getValue("regionId"),
                    // dateStart: (row.original as RowOriginal).dateStart,
                    // dateEnd: (row.original as RowOriginal).dateEnd,
                  });
                  setRecordID((row.original as RowOriginal).id);
                }}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setRecordID((row.original as RowOriginal).id);
                  setIsDelete(true);
                }}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="w-full">
      {/* <Loading isVisible={isLoading} /> */}
      {/* <Header isAdmin={true} /> */}
      {/* <Sidebar /> */}
      <div className="flex flex-col mx-20 mt-24 pr-8">
        <div className="w-full">
          <Button
            className="w-1/6 flex ml-auto"
            onClick={() => setOpenForm(true)}
          >
            Add New
          </Button>
        </div>
        <DataTable data={dataTrips} columns={columns} searchBy="title" />
        {/* {openForm && <FormDialog />}

      {isDelete && (
        <ConfirmationDelete
          isVisible={isDelete}
          onClick={onDelete}
          onClose={() => setIsDelete(false)}
        />
      )} */}
      </div>
    </div>
  );
};

export default AdminTrips;
