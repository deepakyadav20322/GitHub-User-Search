import {Route,Routes} from 'react-router-dom';
import { useState,useContext } from 'react';
import {ThemeContext} from './components/context/ThemeChangeContext'
import Logo from './components/Logo';
import UserSerchBox from './components/UserSerchBox';
import UserInfo from './pages/UserInfo'


function App() {
 
const {theme,setTheme}  =useContext(ThemeContext);
  return (
   
    <div className={`min-h-screen transition-all duration-100 ${theme=="dark"?'bg-[#141D2F] text-[#fff]':'bg-[#F6F8FF] text-[#000]'}`}>
      <div className='container-fluid'>
      <Logo/>
        <Routes>
    <Route path="/" element={<UserSerchBox/>}></Route>
    <Route path="/:username" element={<UserInfo />}></Route>
     
     </Routes>
     
     </div>
    </div>
  )
}

export default App
