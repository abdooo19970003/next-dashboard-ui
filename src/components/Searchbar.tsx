"use client";
import React from "react";
import Image from "next/image";
const Searchbar = () => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();

    console.log(formData.entries());
  };
  return (
    <>
      <form className="w-full md:w-auto h-9 flex rounded-full px-5 border bg-transparent gap-2 justify-between ring-1 ">
        <button type="submit">
          <Image
            className="mx-2"
            width={"14"}
            height={"14"}
            alt="search"
            src={"/search.png"}
          />
        </button>
        <input
          type="search"
          placeholder="search..."
          className=" py-1 px-2 flex-grow bg-transparent outline-none"
        />
      </form>
    </>
  );
};

export default Searchbar;
