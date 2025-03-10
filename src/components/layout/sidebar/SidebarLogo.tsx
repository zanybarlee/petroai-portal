
import React from "react";
import { Link } from "react-router-dom";

export function SidebarLogo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="flex items-center justify-center w-8 h-8 rounded bg-primary">
        <span className="font-bold text-white">KC</span>
      </div>
      <span className="font-semibold">KC-TIP</span>
    </Link>
  );
}
