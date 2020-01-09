import React from "react";
import ReactDOM from "react-dom";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom"
import axios from "axios";

const OTPModal = ({response}) =>{
    const{register, handleSubmit, errors} = useForm();
    const onSubmit = (values) => {
        console.log(values)
            axios({
                method: 'post',
                url: 'http://192.168.1.67:80/api/validateotp',
                data: values
            }).then(
                response =>{
                    console.log(response)
                }
            )
    }
        return(
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
                            <button className="btn btn-success" type="submit">
                                <Link to="/set-password">
                                Jump In
                                </Link>
                                </button>
                            <br />
                            <a href="#" >Resend OTP code</a>
                        </div>
                    </form>
                </div>
            
            </div>
        </div>
    </div>
    )
}

export default OTPModal;