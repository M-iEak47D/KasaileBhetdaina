import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom"
import { useForm } from "react-hook-form"
import Axios from "axios";
import OTPModal from "./OTPModal";


export default function RegisterModal() {
    const { register, handleSubmit, errors } = useForm();
    const [response, setResponse] = useState("");
    const [catchResponse, setcatchResponse] = useState("");
    
      const onSubmit = (data) => {
        axios({
            method: 'post',
            url: 'http://192.168.1.67:80/api/register',
            data: data,

        }).then(
        response => {
                console.log(response);
                setResponse(response.data);
                setcatchResponse(true);
                console.log(response)
            }
        )
    }
    
    useEffect(() => {
        if(catchResponse) {
            $("#join").modal('hide');
        }
    }, [catchResponse])

    return (
        <React.Fragment>    
        <div className="modal join fade" id="join">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* <!-- Modal body --> */}
                    <button type="button" className="close" data-dismiss="modal"><i className="fa fa-window-close mt-2"></i></button>
                    <div className="modal-body">
                        <div className="logo-box">
                            <img src={require('../../pages/images/logo1.png')} className="img-fluid" />
                        </div>
                        <div className="title">
                            Join Now
                </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="tel"
                                 className="form-control no-spinner" 
                                 placeholder="Phone Number" 
                                 name="phone"
                                 maxLength="10"
                                aria-invalid={errors.phone ? 'true' : 'false'}
                                aria-describedby="error-name-maxLength error-name-pattern error-name-required"
                                ref={register({ minLength: 10, pattern: { value: /^[0-9]*$/ }, required: true}) } />
                                {errors.phone && errors.phone.type === "minLength" && (
                                <span style={{ color: 'red' }} id="error-name-maxLength">
                                    *The length must be 10
                                </span> )}
                                {errors.phone && errors.phone.type === "pattern" && (
                                <span style={{ color: 'red' }} id="error-name-pattern">
                                    *The value must be number
                                </span> )}
                                {errors.phone && errors.phone.type === "required" && (
                                <span style={{ color: 'red' }} id="error-name-required">
                                    *The field is empty
                                </span> )}
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" maxLength="23" placeholder="Your Name" 
                                name="name" 
                                aria-invalid={errors.name ? 'true' : 'false'}
                                aria-describedby="error-name-pattern error-name-required"
                                ref={register({
                                    pattern: {value:/[A-za-z]/}, required: true
                                })} />
                                {errors.name && errors.name.type === "pattern" && (
                                    <span style={{color: 'red',  textAlign: 'center'}} id="error-name-pattern">*The name should be alphabetic</span>
                                )}
                                {errors.name && errors.name.type === "required" && (
                                    <span style={{color: 'red',  textAlign: 'center'}} id="error-name-required">*The field is empty</span>
                                )}
                            </div>
                            {/* <div className="text-center my-2">
                                <div href="" id="invite_code" onClick={displayCode}>I HAVE INVITE CODE</div>
                                <div id="invite_code_collapse" style={{ display: 'none', textAlign: 'center' }}>
                                    <input name="text" type="tel" value="" placeholder="Invite Code" className="form-control" />
                                </div>
                            </div> */}
                            <div className="button-container" >
                                <button className="btn btn-success" data-toggle="modal" data-target="#otp" type="submit" >Join Now</button>
                                <br />
                                <a href="" data-dismiss="modal" data-toggle="modal" data-target="#login">I ALREADY HAVE ACCOUNT</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <OTPModal response={response} />
        </React.Fragment>
        
    );
}