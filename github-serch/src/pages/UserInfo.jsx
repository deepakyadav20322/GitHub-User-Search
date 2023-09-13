import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { BiLink } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import { ThemeContext } from "../components/context/ThemeChangeContext";
import Tabs from "../components/Tabs";
import Loading from "../components/Loading";
import Repo from "../components/Repo";
import Events from "../components/Events";
import UserContainer from "../components/UserContainer";

const UserInfo = () => {
  const [user, setUser] = useState([]);
  const [urls, seturls] = useState("repos");
  const [urlData, setUrlData] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseURL = "https://api.github.com/users";
  const { pathname } = useLocation();

  const { theme } = useContext(ThemeContext);

  const userInfo = async () => {
    console.log(pathname);
    try {
      const res = await axios.get(`${baseURL}${pathname}`);
      console.log(res);
      setUser(() => [res.data]);
      console.log(pathname, user);
    } catch (error) {
      console.log(error);
    }
  };

  const getLinks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${baseURL}${pathname}/${urls}`);
      if (res.status == 200) {
        setUrlData(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    userInfo();
    getLinks();
  }, [pathname, urls]);
  return (
    <div>
      
      <div>
        {user &&
          user?.map((info, i) => (
            <div
              key={i}
              className={`flex justify-cenetr pt-4 pb-8 px-8 flex-col  transition-all duration-[10ms] border-[1px] w-[730px] m-auto ${
                theme == "dark" ? "bg-[#1E2A47]" : "bg-[#FEFEFE]"
              } rounded-[1.2rem] boxShadow-first`}
            >
              <div className="flex flex-row gap-5 mt-6">
                <img
                  src={info.avatar_url}
                  className="w-[116px] h-[116px] rounded-full  border-4 border-[#1079FF] md:mx-0 mx-auto"
                />
                <div>
                  <h1 className="font-[600] text-[25px] mt-2">{info.login}</h1>
                  <Link
                    to={info.html_url}
                    target="_blanck"
                    className="font-[500] "
                  >
                    {" "}
                    <span className="text-[#1079FF]">@{info.login}</span>
                  </Link>
                  <p className="">
                    {" "}
                    Joind:{" "}
                    <span className="">
                      {new Date(info.created_at).toLocaleDateString()}
                    </span>
                  </p>
                </div>
                <div className="flex justify-end w-full">
                <Link className={`px-4 py-2 h-[40px] rounded m-3 ${theme=='dark'?'text-white bg-[#1079FF] ':'text-[#fff] bg-[#1079FF] border-[1px] border-gray-200'} hover:bg-[#1078ffb8]`} to={'/'}>Another_Search</Link>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center my-5  transition-all duration-[0ms]">
                <div
                  className={`flex font-bold  flex-row justify-evenly w-[550px]  p-2 rounded-[1rem] ${
                    theme == "dark" ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
                  } `}
                >
                  <p className="text-[1rem] p-[5px]">
                    {" "}
                    <span className="font-bold">Repos:</span>{" "}
                    <p className="text-[#1079FF]">{info.public_repos}</p>
                  </p>
                  <p className="text-[1rem] p-[5px]">
                    <span className="font-bold">Follower:</span>{" "}
                    <p className="text-[#1079FF]">{info.followers}</p>
                  </p>
                  <p className="text-[1rem] p-[5px]">
                    {" "}
                    <span className="font-bold">Following:</span>{" "}
                    <p className="text-[#1079FF]">{info.following}</p>
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-around ">
                <div
                  className={`${
                    theme == "dark" ? "text-white" : "#4B6A9B"
                  } flex flex-col justify-start`}
                >
                  <ul>
                    <li className="">
                      <FaLocationDot
                        color={`${theme == "light" ? "#4b6a9b" : "#fff"}`}
                        className="inline mr-4"
                        size={20}
                      />
                      {info.location ? (
                        info.location
                      ) : (
                        <span className="text-[#8D93A2]">Not available</span>
                      )}
                    </li>
                    <li className="">
                      <FaXTwitter
                        color={`${theme == "light" ? "#4b6a9b" : "#fff"}`}
                        className="inline mr-4"
                        size={17}
                      />
                      {info.twitter_username ? (
                        info.twitter_username
                      ) : (
                        <span className="text-[#8D93A2]">Not available</span>
                      )}
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-start">
                  <ul>
                    <Link
                      target="_blanck"
                      to={info.blog}
                      className={`${info.blog ? "hover:underline" : ""} `}
                    >
                      <BiLink
                        className="inline mr-4"
                        color={`${theme == "light" ? "#4b6a9b" : "#fff"}`}
                        size={20}
                      />
                      {info.blog ? (
                        info.blog
                      ) : (
                        <span className="text-[#8D93A2]">Not available</span>
                      )}
                    </Link>

                    <li className="">
                      <BsFillBuildingsFill
                        color={`${theme == "light" ? "#4b6a9b" : "#fff"}`}
                        className={`inline mr-4`}
                        size={17}
                      />
                      {info.company ? (
                        info.company
                      ) : (
                        <span className="text-[#8D93A2]">Not available</span>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Tabs urls={urls} seturls={seturls} />

      <div>
        {loading?<Loading />:
        <div>
          {urls === "repos" && (
            <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto">
              {urlData && <Repo users={urlData} />}
            </div>
          )}
          {urls === "received_events" && (
            <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto ">
              {urlData && <Events data={urlData} />}
            </div>
          )}
          {urls === "followers" && <UserContainer users={urlData} />}
        </div>
        }
      </div>
    </div>
  );
};

export default UserInfo;
