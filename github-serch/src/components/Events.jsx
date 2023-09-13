import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { ThemeContext } from "./context/ThemeChangeContext";

const Events = ({ data }) => {
    const {theme} = useContext(ThemeContext);
  return (
    <>
    {data.length>0?"":<p className={`w-[80vw] text-center mt-5 ${theme=='dark'?'text-[#8D93A2]':'text-black'} text-[19px]`}>No Activity available</p>}
      {data?.map((events, i) => (
        <div key={i} className="flex gap-x-4 items-center">
          <Link to={`/${events.actor?.login}`}>
            <img src={events.actor?.avatar_url} className="w-16 rounded-full" />
          </Link>
          <h1 className="break-word">
            {events?.actor?.login} /<span className="text-[#00F700]">{events?.type}</span>
            <br/>
            {events?.repo?.name}
            <br />
            <span className="text-sm text-[#0079FF]">{format(events?.created_at)}</span>
          </h1>
        </div>
      ))}
    </>
  );
};

export default Events;
