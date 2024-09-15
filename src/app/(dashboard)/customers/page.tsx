"use client";
import TableWrapper from "@/components/TableWrapper";
import React, { useMemo } from "react";
import { classesData } from "@/lib/data";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  fuzzyTextFilterFn,
  numberRangeFilterFn,
  dateRangeFilterFn,
} from "@/Utilities/tanstackFiltersFuncs";
import { NumberRangeFilter, StringFilter } from "@/components/Filters";

//{
//   id: 1,
//   teacherId: "1234567890",
//   name: "John Doe",
//   email: "john@doe.com",
//   photo:
//     "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   phone: "1234567890",
//   subjects: ["Math", "Geometry"],
//   classes: ["1B", "2A", "3C"],
//   address: "123 Main St, Anytown, USA",
// },

type customer = {
  id: number;
  teacherId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

type classData = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const data: classData[] = classesData;
const columnHelper = createColumnHelper<classData>();

const page = () => {
  const columns = [
    columnHelper.accessor("id", {
      cell: (i) => i.getValue(),
      header: "ID",
      enableColumnFilter: false,
    }),
    columnHelper.accessor("name", {
      cell: (i) => i.getValue(),
      header: "Name",
      filterFn: fuzzyTextFilterFn,
      meta: {
        Filter: StringFilter,
      },
    }),
    columnHelper.accessor("capacity", {
      cell: (i) => i.getValue(),
      header: "Capacity",
      meta: {
        Filter: NumberRangeFilter,
      },
    }),
    columnHelper.accessor("grade", {
      cell: (i) => i.getValue(),
      header: "Grade",
    }),
    columnHelper.accessor("supervisor", {
      cell: (i) => i.getValue(),
      header: "Supervisor",
      meta: {
        Filter: StringFilter,
      },
    }),

    // columnHelper.accessor("photo", {
    //   cell: ({ row, cell }) => (
    //     <button
    //       className="w-10 h-10  rounded-full bg-secondary flex justify-center items-center ring hover:bg-primary hover:ring-white"
    //       onClick={() => window.alert(row.original.id)}
    //     >
    //       <img
    //         className="rounded-full w-full h-full aspect-auto"
    //         height={90}
    //         width={90}
    //         alt="avatar"
    //         src={`${cell.getValue()}`}
    //       />
    //     </button>
    //   ),
    //   header: "Photo",
    // }),
  ];

  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: {
      fuzzyText: fuzzyTextFilterFn,
      numberRange: numberRangeFilterFn,
      dateRange: dateRangeFilterFn,
    },
    globalFilterFn: fuzzyTextFilterFn, // Optional: global filter
  });
  return (
    <TableWrapper title="Tüm Müşteriler">
      <div className="p-2 block max-w-full overflow-x-scroll overflow-y-hidden">
        <table className="w-full table table-auto ">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      )}
                      <div>
                        {header.column.getCanFilter() &&
                        header.column.columnDef.meta?.Filter ? (
                          <header.column.columnDef.meta.Filter
                            column={header.column}
                          />
                        ) : null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div>{table.getRowModel().rows.length} Rows</div>
      </div>
    </TableWrapper>
  );
};

export default page;
