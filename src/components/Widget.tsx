import Image from "next/image";
import React from "react";
import { colors as widgetThemes } from "@/lib/colors";
const Widget = ({
  title,
  theme,
  value1,
  value1label,
  value2,
  value2label,
}: widget_props) => {
  return (
    <div
      style={widgetThemes[theme]}
      className={`min-w-[240px] flex-1 rounded-2xl p-3 relative flex flex-col justify-between`}
    >
      <div className="flex flex-col gap-1">
        <button>
          <Image
            width={20}
            height={10}
            alt="more"
            src={"/more.png"}
            className="absolute top-1 right-2"
          />
        </button>
        <div className="flex justify-start">
          <h1 className="text-3xl font-semibold">{value1}</h1>
          <span className="text-sm ms-1 font-light  opacity-90">
            {value1label}
          </span>
        </div>
        {value2 && (
          <div className="flex justify-start">
            <h1 className="font-semibold">{value2}</h1>
            <span className=" ms-1 text-sm font-light opacity-90">
              {value2label}
            </span>
          </div>
        )}
      </div>
      <span className="font-bold mt-3 text-lg text-end">{title}</span>
    </div>
  );
};

export default Widget;
