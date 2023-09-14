import React,{useState,useEffect,useRef,useContext} from 'react';
import { useLocation } from 'react-router-dom';
import Loading from './Loading';
import UserContainer from './UserContainer';
import axios from 'axios'
import { ThemeContext } from './context/ThemeChangeContext';
import {CiSearch} from 'react-icons/ci'



const UserSerchBox = () => {
    const baseURL = 'https://api.github.com/users'
    const user = useRef(null);
    const {pathname}  = useLocation();
    const [users,setUsers]= useState([]);
    const [loading,setLoading] = useState(false);
    const {theme}  =useContext(ThemeContext);
    const containerClassName = theme === 'dark'
           ? 'bg-[#1E2A47] text-white '
           : 'bg-[#FEFEFE] text-black ';

    const focus = ()=>{
      if(pathname=='/'){
        user?.current?.focus();
      }
    }
    focus();
    
    async function AllUesrs() {
        if (user.current && user.current.value === "") {
            console.log("Alluaer")
          setLoading(true);
          const res = await axios(baseURL);
          setUsers(res.data);
          setLoading(null);
        }
      }


    const FindUser = async()=>{
        
        if( user.current && user.current.value!==""){
            
        setLoading(true);
        try {
            const res = await axios.get(baseURL + '/'+ user.current.value);
            console.log(res)
            console.log(baseURL + '/'+ user.current.value);
            setUsers(() => [res.data]);
             console.log("deepak",users);
             user.current.value="";
            
        } catch (error) {
          if (error.response && error.response.status === 404) {
            setUsers("");
            user.current.value="";
          }else{
            console.log(error);
            user.current.value="";
          }
        }
    }else {
        AllUesrs();
    }
    setLoading(false);
    
    }

    useEffect(()=>{
      AllUesrs();
    },[user,setUsers])

  return (
    <div>
      <div className=' userSearchInput flex flex-row justify-center items-center p-[5px]'>
      <div className={`${containerClassName} w-[600px] flex flex-row justify-center items-center m-1 p-2  rounded-[1rem] `}>
        <CiSearch size={30} className='ml-2' color='#0079FF'/>
       <input ref={user} className={theme=='dark'? 'dark-input-box w-[70%]':'light-input-box w-[70%]'}  spellCheck="false" type="text" placeholder='Enter usernmae'/>
       <button onClick={FindUser} className='border-2 py-[0.6rem] px-6 rounded-[1rem] text-white font-bold text-[1.1rem] bg-[#0079FF]' >Search</button>
       </div>
       </div>
       
       <div>
          {loading?<Loading/>: <UserContainer users={users}/>}
       </div>
          
    </div>
  )
}

export default UserSerchBox