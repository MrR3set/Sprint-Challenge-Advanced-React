import { useState, useEffect } from 'react';
import {useLocalStorage} from "./useLocalStorage"

export const useDarkMode = (key,initial) => {

  const [darkMode, setDarkMode] = useLocalStorage(key,initial);

  useEffect( () => {
    
    if(darkMode){
      //set it dark
      document.body.classList.add("dark-mode")
    }else{
      document.body.classList.remove("dark-mode")
    }


  },useLocalStorage(key))



  return [darkMode, setDarkMode]

};
