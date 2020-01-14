import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {useForm} from "react-hook-form";
import {Link, Switch, Route} from "react-router-dom"
import axios from "axios";
import ResetPassword from './ResetPassword'


const OTPModal = ({response}) =>{
    const{register, handleSubmit, errors} = useForm();
    const [dataResponse, SetResoponse] = useState();
    const [closeOTP, setOTP] = useState(true)
    const onSubmit = (values) => {
        console.log(values)
            axios({
                method: 'post',
                url: 'http://192.168.1.250/api/validateotp',
                data: values
            }).then(
                response =>{
                    console.log(response)
                    if(response.status === "success"){
                     SetResoponse(dataResponse)
                     document.querySelector(".modal-backdrop").style.display= "none"

                    }
                }
            )
    }
    
    
        return(
            <React.Fragment>
         <div className="modal join fade" id="otp">
        <div className="modal-dialog">
            <div className="modal-content">
                    {/* <!-- Modal body --> */}
                <button type="button" className="close" data-dismiss="modal"><i className="fa fa-window-close mt-2"></i></button>
                <div className="modal-body">
                <div className="logo-box">
                    <img src={require('../../pages/images/logo1.png')} className="img-fluid" />
                </div>
                    <div className="title">
                        Enter OTP Code  
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="number" className="form-control" placeholder="OTP code" 
                                name="otp" 
                                ref={register}
                            />
                        </div>
                        <input type="hidden" name="user_id" 
                                value={response.user_id}
                            ref={register} 
                        />
                        
                        <div className="button-container">
                        <Link to="/set-password">
                            <button className="btn btn-success" type="submit">
                                     Jump In
                            </button>
                        </Link>
                            <br />
                            <a href="#" >Resend OTP code</a>
                        </div>
                    </form>
                </div>       
            </div>
        </div>
    </div>
    </React.Fragment>
    )
}

export default OTPModal;