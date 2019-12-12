import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import PreparationDropdownItem from "./PreparationDropdown"
import axios from "axios";



function PreparationNavbarsub(){
        const [navbarItems, setNavbar] = useState([])
    //  console.log(navbarItems);
        // console.log('http://192.168.1.67')   
        useEffect(()=>{
            axios.get('http://192.168.1.67/api/navs')
            .then(response=>{
                setNavbar(response.data)
            })  
        }, [])
        // useEffect(()=>{
        //     setNavbar()
        // },[])
     return(
         <React.Fragment>
         {
             navbarItems.map(({id, ...datas }) => (
                   <PreparationDropdownItem key={id} {...datas} /> 
             ))
         }
         </React.Fragment>
     )
}

export default PreparationNavbarsub;
