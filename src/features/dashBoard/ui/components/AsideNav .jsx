import React from "react";
import { ChartArea, MessageCircle } from "lucide-react";
import { Navigate, NavLink } from "react-router";
import NavigationTab from "./NavigationTab";
import { useSelector } from "react-redux";
import { store } from "../../../../app/store";
import { adminNavigation, employeeNavigation } from "../../../../app/constants/navigations";


const AsideNav = () => {


  let {employee} = useSelector((store)=> store.auth);
  let navigations = employee?.role === "admin" ? adminNavigation : employeeNavigation

  return (
    <div>
      <div className="flex flex-col gap-1 p-4">
        <h1 className="text-3xl font-semibold text-[#CAB8F9]">team-sync</h1>
        <p className="text-sm text-[var(--text-secondary)]">
          Enterprise workspace
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {navigations.map((route)=>{
          return (
            <NavigationTab path={route.path} title={route.title} Icon={route.icon}/>
          )
        })}
      </div>
    </div>
  );
};

export default AsideNav;