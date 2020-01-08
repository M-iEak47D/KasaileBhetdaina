import React from "react";
import ReactDOM from "react-dom";
import {useForm} from "react-hook-form";

const OTPModal = ({catchResponse}) =>{
    const{otp, handleSubmit, errors} = useForm();
    const onSubmit = () => {

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
                                ref={otp}/>
                            <input type="hidden" name="user_id" value={catchResponse} ref={otp} />
                        </div>
                        
                        <div className="button-container">
                            <button className="btn btn-success" type="submit">Jump In</button>
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