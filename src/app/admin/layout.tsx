import NavADminRoutes from "@/components/NavAdminRoutes";
import React from "react";
interface props {
  children: React.ReactNode;
}

function layoutAdminRouter({ children }: props) {
  return (
    <div>
      <NavADminRoutes></NavADminRoutes>
      {children}
    </div>
  );
}

export default layoutAdminRouter;
