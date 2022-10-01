import {useEffect,useState} from 'react'
import { useLocalStoreValues } from './../store';


export const useTheme =()=>{
const localdata = useLocalStoreValues();    
const [theme,setTheme] = useState(localdata.localValues.theme??"ark")
useEffect(() => {
    const colorTheme = theme === "dark"? "light": "dark";
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    if (theme) {
      root.classList.add(theme);
      localdata.updateTheme(theme)
    }
  }, [theme]);
return {theme,setTheme}
}
