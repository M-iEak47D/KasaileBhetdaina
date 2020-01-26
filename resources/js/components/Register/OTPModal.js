import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {useForm} from "react-hook-form";
import {Link, Switch, Route, Redirect, useHistory, withRouter} from "react-router-dom"
import axios from "axios";
import ResetPassword from './ResetPassword'


const OTPModal = ({RegisterResponse}) =>{
    const{register, handleSubmit, errors} = useForm();
    const[error, setError] = useState()
    const[responseError, setResponseError] = useState()

    let history = useHistory();
    const onSubmit = (values) => {
            axios({
                method: 'post',
                url: 'http://noname.hellonep.com/api/validateotp',
                data: values
            }).then(
            response =>{
                     if(response.data.status === "success"){                 
                     document.querySelector(".modal-backdrop").style.display= "none";
                     history.push({
                         pathname: '/set-password',
                         state: {detail: response.data}
                    });
                    }else{
                        setResponseError(response.data.message)
                    }
                }).catch(error => {
                    setError(error)
                })
    }

   
    
    
        return(
            <React.Fragment>
         <div className="modal join " id="otp"  data-keyboard="false"
                data-backdrop="static">
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
                                value={RegisterResponse.user_id}
                            ref={register} 
                        />
                        {responseError && 
                            <div style={{color:'Red', textAlign:'center'}}>*The OTP provided does not match</div>}
                        <div className="button-container">
                            <button className="btn btn-success" type="submit">
                                Jump In
                            </button>
                           
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