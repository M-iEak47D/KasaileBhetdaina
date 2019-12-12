import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import DropdownItem from "./DropdownItem"
import axios from "axios";


function ClassNavbarsub(){
        const [navbarItems, setNavbar] = useState([])
    //  console.log(navbarItems);
        // console.log('http://192.168.1.67')   
        useEffect(()=>{
            axios.get('http://192.168.1.67/api/navs')
            .then(response=>{
                setNavbar(response.data)
            })  
        }, [])
     return(
         <React.Fragment>
         {
             navbarItems.map(({id, ...datas }) => (
                   <DropdownItem key={id} {...datas} /> 
             ))
         }
         </React.Fragment>
     )
}

export default ClassNavbarsub;
