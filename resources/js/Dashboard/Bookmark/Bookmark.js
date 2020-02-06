import React, { useEffect, useState } from 'react';
import {Link, Switch, Route, useRouteMatch, useHistory} from 'react-router-dom';
import Axios from 'axios';
import { useAuth } from '../../Context/Auth';


export default function Bookmark(){
   let {path, url} = useRouteMatch();
    let History = useHistory();
    const {Authtoken} = useAuth();

    const [BookmarkResponse, setBookmarkResponse] = useState([]);

    let getUrl = 'http://noname.hellonep.com/api/bookmarks/'+Authtoken.user_id

    useEffect(() => {
        let source = Axios.CancelToken.source();
        const loadData = async() =>{
            try{
                const response = await Axios.get(getUrl,{
                        cancelToken: source.token,
                });
                setBookmarkResponse(response);
            } catch(error){
                if(Axios.isCancel(error)){
                    console.log(error)
                }else{
                    throw error;
                }
            }
        };
        loadData();
        return () =>{
            source.cancel()
        }
    }, [getUrl])
    console.log(BookmarkResponse)
    return(
        <React.Fragment>
        <div className="main-subject-containter">
            <div className="subject-navbar d-flex justify-content-between">
                <a onClick={History.goBack} className="back">
                  <i className="fa fa-arrow-left"></i>
                  </a>
                <div className="top-subject-navbar">
                    <div className="icon-box">
                        <i className="fa fa-atom"></i>
                        </div>
                    <div className="title-box">
                    <h2>Bookmark</h2>
                    <div className="chapter-number">Quick access for your requirement</div>
                </div>
                

                </div>     
            </div>
            <div className="subject-content">
        { BookmarkResponse && 
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>01</span>Measurement
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <Link to={`/viewer/measure`}><i className="fa fa-eye"></i></Link>
                <a href="#"><i className="fa fa-bookmark"></i></a>
            </div>
          </div>
        }
      </div>
           
        </div>
         
         
      
        </React.Fragment> 
       
        
    )
}