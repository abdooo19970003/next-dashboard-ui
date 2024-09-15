import React from "react";
import menuItems from "./menuItems";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2 mt-4" key={i.title}>
          <span className="hidden lg:block text-lg text-white/50">
            {i.title}
          </span>
          <div className="lg:ps-2 flex flex-col gap-0">
            {i.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex py-3 ps-1 justify-center lg:justify-start gap-2 rounded-s-lg hover:bg-background hover:text-primary`}
              >
                <Image
                  src={item.icon}
                  width={20}
                  height={20}
                  alt={item.label}
                />{" "}
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            ))}
          </div>
          <hr className="lg:hidden opacity-60 w-2/3 m-auto" />
        </div>
      ))}
    </div>
  );
};

export default Menu;
