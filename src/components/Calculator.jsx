import React, {useState, useEffect, useContext} from 'react'
import Keys from './Keys'
import Screen from './Screen'
import App from '../App'
import { ThemesContext } from './ThemeContext'



function Calculator() {
    

    const {theme, setTheme} =useContext(ThemesContext);


    const changeTheme = (index) =>{
        setTheme(index);
    }


  return (
    <div className={` bg-skin-fill  h-auto p-12 w-auto`}>
        <div className="            theme-controller flex justify-between items-center ">
            <div className="logo font-extrabold text-2xl text-skin-odd ">Calc</div> 
            <div className="flex items-center gap-5">
                <div className="uppercase text-2xl text-skin-odd">theme</div>
                <div className="flex flex-col gap-3 md:mb-5">
                    <div className="flex text-xl font-semibold gap-4 text-skin-odd">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                    <div className="w-full h-7 bg-skin-toggleBg rounded-lg relative">
                        <span onClick={()=>changeTheme(0)} className={` ${theme == 0 ? "opacity-1" : "opacity-0"} w-5 h-6 bg-skin-equalToggle shadow-md shadow-skin-toggleShd rounded-full absolute left-0`}></span>
                        <span onClick={()=>changeTheme(1)} className={` ${theme == 1 ? "opacity-1" : "opacity-0"} w-5 h-6 bg-skin-equalToggle shadow-md shadow-skin-toggleShd rounded-full absolute left-6`}></span>
                        <span onClick={()=>changeTheme(2)} className={` ${theme == 2 ? "opacity-1" : "opacity-0"} w-5 h-6 bg-skin-equalToggle shadow-md shadow-skin-toggleShd rounded-full absolute right-0`}></span>
                    </div>
                </div>
            </div>
            
        </div>
        <Screen/>
        <Keys/>
    </div>
  )
}

export default Calculator