import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeChangeContext";

const Tabs = ({ urls, seturls }) => {

  const { theme } = useContext(ThemeContext);
 console.log(urls)
  return (
    <div className={`flex font-bold flex-row transition-all duration-150 justify-center gap-4 mt-14 mb-5 sm:w-[90%] m-auto ${theme=='dark'?'border-b-2 border-white':'border-b-2 border-[#0079FF]'} `}>
      <button
        onClick={()=>seturls("repos")}
        className={`${urls == "repos" ? "border-[3px] py-1 px-2 rounded border-[#0079FF]":"" } ${theme=='dark'?'text-[#fff]':'text-[#000]'} pb-1 mb-2`}
      >
        Repos
      </button>
      <button
        onClick={()=>seturls("received_events")}
        className={`${urls == "received_events" ?"border-[3px] rounded p-1 border-[#0079FF]":""} ${theme=='dark'?'text-[#fff]':'text-[#000]'} pb-1 mb-2`}
      >
        Recived Events
      </button>

      <button
        onClick={()=>seturls("followers")}
        className={`${urls == "followers" ? "border-[3px] p-1 rounded border-[#0079FF]":""} ${theme=='dark'?'text-[#fff]':'text-[#000]'} pb-1 mb-2`}
      >
        Follwers
      </button>
      <button
        onClick={()=>seturls("events")}
        className={`${urls == "events" ? "border-[3px] py-1 px-2 rounded border-[#0079FF]":"" } ${theme=='dark'?'text-[#fff]':'text-[#000]'} pb-1 mb-2`}
      >
        Own Activity
      </button>
    </div>
  );
};

export default Tabs;
