import Image from "next/image";
import React from "react";

const Navbar = () => {
  const notifications = 1;
  const messages = 10;
  return (
    <div className="  py-1 px-7 flex justify-between flex-row-reverse items-center rounded-b-lg  shadow-md bg-secondary/60">
      <div className="flex justify-end gap-5 items-center">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image width={20} height={20} alt="message" src={"/message.png"} />
          {messages > 0 ? (
            <span className="bg-primary -top-3 -right-3 w-5 h-5 text-sm rounded-full  text-center text-white absolute">
              {messages}
            </span>
          ) : null}
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            width={20}
            height={20}
            alt="announcement"
            src={"/announcement.png"}
          />
          {notifications > 0 ? (
            <span className="bg-primary -top-3 -right-3 w-5 h-5 text-sm rounded-full  text-center text-white absolute">
              {notifications}
            </span>
          ) : null}
        </div>

        <div className="p-2 flex gap-3 items-stretch cursor-pointer">
          <div className=" flex flex-col justify-center text-sm ">
            <span className="text-xs leading-3 font-medium">
              Abdullah Elkuse
            </span>
            <span className="text-xs leading-2 text-primary/70">Admin</span>
          </div>
          <div className="flex justify-center items-center p-0.5 flex-grow bg-primary rounded-full">
            <Image
              className="rounded-full"
              width={36}
              height={36}
              alt="avatar"
              src={"/avatar.png"}
            />
          </div>
        </div>
      </div>
      <Image
        src={"/logo2.png"}
        width={120}
        height={80}
        alt="logo"
        className="select-none"
      />
      <form className="w-1/5 h-9 hidden lg:flex rounded-full px-5 border bg-transparent gap-2 justify-between ring-1 ">
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
    </div>
  );
};

export default Navbar;
