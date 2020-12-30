import React, { useEffect } from "react";
import { useLocalStorage } from "./LocalStorage.js";


export const useDarkMode = initialValue => {

    const [ storedValue, setStoredValue ] = useLocalStorage(
        'darkModeToggler', initialValue);

    useEffect(()=>{
        if(storedValue === true){
            return (document.getElementById('root').classList.add('dark-mode'))
        } else {
        return (document.getElementById('root').classList.remove('dark-mode'))
        }
    }, [storedValue]);
    

    const setValue = e => {
        return setStoredValue(!storedValue)
    };

return[ storedValue, setValue ];
};