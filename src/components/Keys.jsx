import React, { useContext } from 'react'
import App from '../App'

import { ThemesContext } from './ThemeContext'

function Keys() {

  const {num, setNum} = useContext(ThemesContext);
  const {result, setResult} = useContext(ThemesContext);

  const collectNum = (index) =>{
    setNum(num.concat(index));
    console.log(num);
  }

  const del =()=>{
    const newNum = num.slice(0, num.length-1)
    setNum(newNum);
  }

  const reset = ()=>{
    setNum("");
    setResult("");
  }

  const evaluate = ()=>{
    const result = parseFloat(eval(num))
    setResult(result);

  }

  return (
    <div className="grid grid-cols-4 gap-5 mt-10 p-8 rounded-xl bg-skin-keypadBg">
      <div onClick={()=>collectNum(7)} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd red w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base `}>7</div>
      <div onClick={()=>collectNum(8)} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base`}>8</div>
      <div onClick={()=>collectNum(9)} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base `}>9</div>
      <div onClick={()=>del()} className={` cursor-pointer md:w-28 bg-skin-delSel w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md shadow-skin-delSelShd text-skin-muted`}>DEL</div>
      <div onClick={()=>collectNum(4)} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base`}>4</div>
      <div onClick={()=>collectNum(5)} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base`}>5</div>
      <div onClick={()=>collectNum(6)} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base`}>6</div>
      <div onClick={()=>collectNum("+")} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base`}>+</div>
      <div onClick={()=>collectNum(1)} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base`}>1</div>
      <div onClick={()=>collectNum(2)} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base`}>2</div>
      <div onClick={()=>collectNum(3)} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base`}>3</div>
      <div onClick={()=>collectNum("-")} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base`}>-</div>
      <div onClick={()=>collectNum(".")} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base`}>.</div>
      <div onClick={()=>collectNum(0)} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base`}>0</div>
      <div onClick={()=>collectNum("/")} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base`}>/</div>
      <div onClick={()=>collectNum("*")} className={` cursor-pointer md:w-28 bg-skin-key shadow-skin-keyShd w-20 h-20 rounded-md flex justify-center items-center font-bold text-2xl shadow-md text-skin-base`}>x</div>
      <div onClick={()=>reset()} className={` cursor-pointer bg-skin-delSel h-20 text-skin-muted rounded-md shadow-md col-span-2 flex justify-center items-center font-bold text-2xl shadow-skin-delSelShd `}>Reset</div>
      <div onClick={()=>evaluate()} className={` cursor-pointer bg-skin-equalToggle text-skin-equal  h-20 rounded-md shadow-md shadow-gray-900 col-span-2 flex justify-center items-center font-bold text-2xl`}>=</div>
    </div>
  )
}

export default Keys