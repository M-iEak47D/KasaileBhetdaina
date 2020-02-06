import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/Auth";
import { useHistory } from "react-router-dom";

function LoginModal(){
    const [isLogged, setisLogged] = useState(false)
    const {register, handleSubmit, errors} = useForm();
    const {StorageToken, Authtoken} = useAuth();
    const [LoginError, setLoginError] = useState()

   const onSubmit = (data) => {
       axios({
           method: 'post',
           url: 'http://noname.hellonep.com/api/login',
           data: data,
       }).then(
           response =>{
               if(response.data.status === "success"){
                document.querySelector(".modal-backdrop").style.display= "none";
                   StorageToken({
                    name: response.data.name,
                    user_id: response.data.user_id,
                    class_id: response.data.class_id,
                    token: response.data.auth_token,
                   })
                   setisLogged(true);
               }else{
                   setLoginError("User is Not Valid")
               }
           }
       )
   }

   const history = useHistory();
   useEffect(() => {
    if(isLogged){
        history.push({
            pathname: "/learn"
        })
    }
 }, [Authtoken, isLogged])

   
   return(        
<div className="modal join fade" id="login"  data-keyboard="false"
                data-backdrop="static">
    <div className="modal-dialog">
        <div className="modal-content">
          
            <button type="button" className="close" data-dismiss="modal"><i className="fa fa-window-close mt-2"></i></button>
            <div className="modal-body">
            <div className="logo-box">
                    <img src={require('../../pages/images/logo1.png')} className="img-fluid" />
                </div>
                <div className="title">
                    Login
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input type="tel" className="form-control" name="phone" placeholder="Phone Number" ref={register({minLength: 10, 
                        pattern: { value: /^[0-9]*$/ }, required: true} )} />
                    </div>
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

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" name="password"
                        ref={register({required: true})} />
                    </div>
                    {errors.password && errors.password.type === "required" && (
                            <span style={{ color: 'red' }} id="error-name-required">
                                    *The field is empty
                     </span> )}

                    {
                        LoginError && <span style={{ color: 'red', textAlign:'center' }}>{LoginError}</span>
                    } 
                    
                    <div className="button-container">
                        <button className="btn btn-success" type="submit">Login</button>
                        <br />
                        <a href="" data-dismiss="modal" data-toggle="modal" data-target="#join">I DON'T HAVE ACCOUNT</a>
                    </div>
                </form>
            </div>
           
        </div>
    </div>
</div>
    );
}
export default LoginModal; 