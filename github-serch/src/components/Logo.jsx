import React ,{useContext}from 'react';
import {BsFillMoonFill} from 'react-icons/bs';
import {BiSun} from 'react-icons/bi';
import { ThemeContext } from './context/ThemeChangeContext';

const Logo = () => {
  const {theme,setTheme} = useContext(ThemeContext)
  return (
    <div className='py-3 mx-2'>
         <div className="flex border-b border-gray-500 pb-2 justify-center items-center  sm:gap-2 ">
      <img
        src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
        className=" w-20 sm:w-24 rounded-full"
      />
      <h1 className="text-[1rem] sm:text-2xl px-2 mr-5 first-letter:text-[2rem] sm:first-letter:text-5xl">GitHub Search Profile</h1>
      <div className='flex flex-row justify-center items-center mt-4 border-[1px] px-3 py-2 font-bold border-gray-400 rounded cursor-pointer' onClick={()=>(theme=='light' ? setTheme('dark'):setTheme('light'))}>
          <p className='themeValue pr-2'>{theme=='light'?'Dark':'Light'}</p>
          {theme=='light'?
          <BsFillMoonFill size={25} color='#697C9A'/>
          :<BiSun size={30}/>
          }
        
        
      </div>
    </div>
    </div>
  )
}

export default Logo