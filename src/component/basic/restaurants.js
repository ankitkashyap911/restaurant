import React, { useState } from 'react'
import "./style.css";
import Menucard from '../menucard';
import Menu from "./MenuApi"
import Navbar from './Navbar';

const Uniquelist = [...new Set(Menu.map((curelem) => {
  return curelem.category
})), "All"]
//console.log(Uniquelist)
console.log(Uniquelist)
//unique list chahiye kyuki category lunch break dinner repeat ho rhe h to uske liye
//ab navbar alg se file bnane k bad jo humne uniquelist variable m value store krk rkhi h usko ek state m store krk loop chla denge map se  jese card-container m kiya tha 



const Restaurants = () => {
  const[MenuData , setMenuData] = useState(Menu); 
  const[Uniquedata , Setuniquedata] = useState(Uniquelist)
  //menucard ko to call krdiya yha but ispe loop chlana tha uske liye map mathod use kiya par sbse phle state ko store kiya usestate se , 

  const filteritem = (category) => {
    if(category==="All"){
      return setMenuData(Menu)
    }
    const updatedlist = Menu.filter(
      (curelem)=> {return curelem.category===category}
    );  
    setMenuData(updatedlist);
  };  
    return (
        <>
        <Navbar filteritem={filteritem} Uniquedata ={Uniquedata} / >
        <Menucard Menuread ={MenuData} / >
        </>
    )
};

export default Restaurants;