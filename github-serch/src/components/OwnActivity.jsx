import React,{useContext} from 'react'
import { ThemeContext } from './context/ThemeChangeContext';

const OwnActivity = ({data}) => {
  
const {theme} = useContext(ThemeContext);
const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    // timeZoneName: 'short',
}
   
  return (
    <>
    {data.length>0?"":<p className={`w-[80vw] text-center mt-5 ${theme=='dark'?'text-[#8D93A2]':'text-black'} text-[19px]`}>No Activity available</p>}
     {  data?.map((user) => ( 
      <div key={user.id} className={`${theme=='dark'?'bg-gray-900':'bg-[#fff] text-[#000]'} p-3 leadincg-8`}>
        <div className='flex flex-row justify-between items-center'>
            <div>
        <div>
            <span>Event type:- </span>
        <a
          href={`https://github.com/${user.repo?.name}`}
          target="_blank"
          className="text-[#1079FF] break-words font-semibold hover:underline"
        >
          {user?.type}
        </a>
         </div>
        <div className="flexflex-col">
          <h1 className="text-sm font-semibold"> {"🟢" + user?.repo?.name}</h1>
          <h1 className="text-sm font-semibold ml-4">Created : {new Date(user?.created_at).toLocaleString('en-IN', options)}</h1>
          <h1 className="text-sm font-semibold ml-4 ">Public:&nbsp;{(user?.public?<span className='text-[#00D26a]'>true</span>:'false')}</h1>
          <h1 className="text-sm font-semibold text-red-600 ml-4 py-1">
            commits :---{!(user?.payload?.commits)?<p className='text-[#8D93A2] text-[12px] inline'>&nbsp;No commits</p>
                :(<div>
               <p className='ml-10 text-[#8D93A2] text-[12px]'><span className='text-[#00D26A] text-[14px]'>1.Author name:&nbsp; </span>{user?.payload?.commits?.[0]?.author?.name}</p>
               {/* <p className='ml-10  text-[#8D93A2] text-[12px] '><span className='text-[#00D26A] text-[14px]'>2. Message:&nbsp; : </span> <div className='ellipsiss inline'> {user?.payload?.commits?.[0]?.message}</div></p> */}
               </div>)
          }
          </h1>
        </div>
        </div>
        <div>
            <img src={user?.actor?.avatar_url} alt="user-Img" className='own-activity-avtar h-[80px] w-[80px] rounded-full' />
        </div>
        </div>
      </div>
    ))}
  </>
  )
}

export default OwnActivity