import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeChangeContext";

const Tabs = ({ urls, seturls }) => {
  const { theme } = useContext(ThemeContext);
 console.log(urls)
  return (
    <div className={`flex flex-row justify-center gap-4 mt-14 mb-5 sm:w-[90%] m-auto ${theme=='dark'?'border-b-2 border-white':'border-b-2 border-[#0079FF]'} `}>
      <button
        onClick={()=>seturls("repos")}
        className={urls == "repos" ? "text-white" : "text-black"}
      >
        repo
      </button>
      <button
        onClick={()=>seturls("received_events")}
        className={urls == "received_events" ? "text-white" : "text-black"}
      >
        Activity
      </button>

      <button
        onClick={()=>seturls("followers")}
        className={urls == "followers" ? "text-white" : "text-black"}
      >
        Follwers
      </button>
    </div>
  );
};

export default Tabs;
