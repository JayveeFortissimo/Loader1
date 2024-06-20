import PictureList from "../Components/PictureList";
import {useLoaderData} from 'react-router-dom';
import { useEffect,useState } from "react";
const Pictures = () => {

const datax = useLoaderData();

/*
const [dats,setDats] = useState([])
useEffect(()=>{
  const pictureData = async() =>{
    try{
      const response = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
  const datas = await response.json();
  setDats(datas)
  
    }catch(error){
      console.error("Fetch error:", error);
      throw error;
    }

  }

  pictureData();
},[dats])
*/
  return <PictureList picture={datax}/>
}

export default Pictures


export const pictureData = async() =>{
  try{
    const response = await fetch("https://picsum.photos/v2/list?page=1&limit=5");

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
const datas = await response.json();
console.log(datas)
return datas;

  }catch(error){
    console.error("Fetch error:", error);
    throw error;
  }
}

