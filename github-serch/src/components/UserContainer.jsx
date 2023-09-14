import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./context/ThemeChangeContext";
import { useLocation } from "react-router-dom";

const UsersContainer = ({ users }) => {
     const {pathname} = useLocation()
  const {theme,setTheme}  =useContext(ThemeContext);

  return (
    <>
    {users && pathname=="/" && users.length>1 &&<p className="randomProfile first-letter:text-[25px]  pl-10 lg:pl-3">:- Some random profiles</p>}
    <div className="flex gap-5 flex-wrap justify-center  py-5">
       
      {users &&
        users?.map((user, idx) =>
          user?.login ? (
            <div
              key={idx}
              className={`${theme=='dark'?'card-dark':'card-light'} flex w-[200px] border rounded border-gray-500  
           p-3 flex-col items-center`}
            >
              <img
                src={user?.avatar_url}
                className="w-24 mb-4 border-4 border-[#0079FF] rounded-full"
              />

              <h1 className="text-xl text-center overflow-hidden text-ellipsis w-[180px]">{user?.login}</h1>
              <h1 className="text-xs text-teal-400">{user?.name}</h1>
              <Link to={`/${user?.login}`}>
                <span
                  className="text-gray-200 
                  font-semibold rounded block px-4 py-1 bg-teal-600 my-3 tracking-wide"
                >
                  View
                </span>
              </Link>
            </div>
          ) : (
            <div className="text-lg">No user</div>
          )
        )
        
        }
        {!users && <div className="text-lg">No user</div>}
    </div>
    </>
  );
};

export default UsersContainer;
