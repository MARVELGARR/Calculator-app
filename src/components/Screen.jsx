import React, {useContext} from 'react'
import App from '../App'
import { ThemesContext } from './ThemeContext'


function Screen() {

  const {num, setNum} = useContext(ThemesContext);
  const {result, setResult} = useContext(ThemesContext);

  const {evaluate} = useContext(ThemesContext);

  return (
    <div className=" bg-skin-screenBg w-full h-28 rounded-xl text-skin-base flex flex-col gap-5 justify-end items-end pr-5">
      <input readOnly  type="text" value={result} className="text-skin-odd text-right bg-inherit text-4xl mb-1 h-9 w-full"></input>
      <input onChange={()=>evaluate()} type="text" value={num} className="text-skin-odd text-right bg-inherit text-4xl mb-1 h-9 w-full"></input>
    </div>
  )
}

export default Screen