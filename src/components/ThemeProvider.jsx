import React, {useState} from "react";
import { ThemesContext } from "./ThemeContext";


export const ThemeProvider = (props) =>{
    const [theme, setTheme] = useState(0);
    const [num, setNum] = useState("");
    const [result, setResult] = useState("");

    const evaluate = ()=>{
        const result = parseFloat(eval(num))
        setResult(result);
    
    }

    return (
        <ThemesContext.Provider value={{evaluate, theme, setTheme, num, setNum, result, setResult}}>
            {props.children}
        </ThemesContext.Provider>
    );
}