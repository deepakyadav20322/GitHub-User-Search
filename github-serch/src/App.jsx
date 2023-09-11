import {Route,Routes} from 'react-router-dom';
import { useState,useContext } from 'react';
import {ThemeContext} from './components/context/ThemeChangeContext'
import Logo from './components/Logo';
import UserSerchBox from './components/UserSerchBox';


function App() {
 
const {theme,setTheme}  =useContext(ThemeContext);
  return (
   
    <div className={`min-h-screen ${theme=="dark"?'bg-[#141D2F] text-[#fff]':'bg-[#F6F8FF] text-[#000]'}`}>
      <div className='container'>
     <Logo/>
     <UserSerchBox/>
     </div>
    </div>
  )
}

export default App
