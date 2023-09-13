import React,{useContext} from "react";
import { ThemeContext } from "./context/ThemeChangeContext";

const Repo = ({ users }) => {
  const {theme}  =useContext(ThemeContext);
  return (
    <>
      {users.map((user, idx) => (
        <div key={idx} className={`${theme=='dark'?'bg-gray-900':'bg-[#fff] text-[#000]'} p-3 leadincg-8`}>
          <a
            href={user.html_url}
            target="_blank"
            className="text-[#1079FF] break-words font-semibold hover:underline"
          >
            {user.full_name}
          </a>
          <div className="flex gap-x-5">
            <h1 className="text-sm font-semibold"> {"🟢" + user.language}</h1>
            <h1 className="text-sm font-semibold">forks : {user.forks}</h1>
            <h1 className="text-sm font-semibold">
              stars : {user.stargazers_count}
            </h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Repo;
