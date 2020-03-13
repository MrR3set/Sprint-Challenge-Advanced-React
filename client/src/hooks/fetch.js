
import { useState, useEffect } from 'react';
import axios from "axios";


export const Fetch = (key) => {

  const [data, setData] = useState([])
  
  useEffect(()=>{
    axios.get(key).then(response => {
        console.log(response.data);
        setData(response.data);
      }).catch(err => console.log(err.message));
  },[])

  return [data, setData]

};
