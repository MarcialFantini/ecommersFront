import NavADminRoutes from "@/components/NavAdminRoutes";
import React from "react";

import style from "./style.module.css";
interface props {
  children: React.ReactNode;
}

function layoutAdminRouter({ children }: props) {
  return (
    <div className={style.containerAdmin}>
      <NavADminRoutes></NavADminRoutes>
      {children}
    </div>
  );
}

export default layoutAdminRouter;
