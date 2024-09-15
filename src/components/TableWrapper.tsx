"use client";
import React from "react";
import Searchbar from "./Searchbar";
import Image from "next/image";
import Pagination from "./Pagination";
import TableBody from "./TableBody";

const TableWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <div id="table-header" className=" flex justify-between items-center">
        <h1 className="text-lg font-semibold hidden md:block">{title}</h1>
        <div className=" flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <Searchbar />
          <div className="flex  gap-2 self-end">
            <button
              className="w-8 h-8 rounded-full bg-secondary flex justify-center items-center ring hover:bg-primary hover:ring-white"
              onClick={() => window.alert("filter")}
            >
              <Image
                height={18}
                width={18}
                alt="filter"
                src={"/filter-black.png"}
              />
            </button>
            <button
              className="w-8 h-8 rounded-full bg-secondary flex justify-center items-center ring hover:bg-primary hover:ring-white"
              onClick={() => window.alert("sort")}
            >
              <Image height={18} width={18} alt="sort" src={"/sort.png"} />
            </button>
            <button
              className="w-8 h-8 rounded-full bg-secondary flex justify-center items-center ring hover:bg-primary hover:ring-white"
              onClick={() => window.alert("new")}
            >
              <Image height={18} width={18} alt="create" src={"/plus.png"} />
            </button>
          </div>
        </div>
      </div>
      <div id="table-body">{children}</div>
      <div id="table-footer">
        <Pagination pages={15} current={7} />
      </div>
    </>
  );
};

export default TableWrapper;
