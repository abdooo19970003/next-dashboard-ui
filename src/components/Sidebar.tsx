import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className=" min-h-screen  w-[14%] md:w-[8%] lg:w-[16%] pt-3 lg:ps-3  shadow-2xl bg-primary text-white text-2xl overflow-y-scroll no-scrollbar"
    >
      {/* LOGO */}
      <Link
        href={"/"}
        className="flex justify-center items-center gap-2 lg:justify-start font-extrabold "
      >
        <Image src="/logo31.png" alt="Logo" width={50} height={50} />
        <span className="hidden text-secondary lg:block">GRAND</span>
      </Link>

      {/* Menu */}
      <Menu />
    </div>
  );
};

export default Sidebar;
