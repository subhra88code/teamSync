import React from "react";
import { MessageCircle } from "lucide-react";
import { Navigate, NavLink } from "react-router";


const AsideNav = () => {


  return (
    <div>
      <div className="flex flex-col gap-1 p-4">
        <h1 className="text-3xl font-semibold text-[#CAB8F9]">team-sync</h1>
        <p className="text-sm text-[var(--text-secondary)]">
          Enterprise workspace
        </p>
      </div>

      <div className="flex flex-col gap-3">
        
      </div>
    </div>
  );
};

export default AsideNav;