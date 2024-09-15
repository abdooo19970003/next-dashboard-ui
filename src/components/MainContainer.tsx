import { colors } from "@/lib/colors";
import React from "react";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={colors.secondary} className="p-4 rounded-md  flex-1 mt-3 ">
      {children}
    </div>
  );
};

export default MainContainer;
