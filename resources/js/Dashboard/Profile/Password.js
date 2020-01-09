import React from 'react';

 export default function Password(){

    return(
         <div className="resetPassword-wrapper">
                        <div className="row">
                            <div className="col-6">
                            <div className="logo-box">
                                <img src={require('../assets/images/logo1.png')} className="img-fluid" />
                            </div>
                            <h1>
                                    Educate Nepal
                            </h1>
                            <div className="address">
                                    Sankhamul, Kathmandu
                            </div>
                            </div>
                            <div className="col-6">
                                   <form action="/setting/selectClass" method="get">
                                       <div className="form-group">
                                           <label>New Password</label>
                                           <input className="form-control" type="password" />
                                       </div>
                                       <div className="form-group">
                                           <label>Confirm Password</label>
                                           <input className="form-control" type="password" />
                                       </div>
                                       <div className="button-container">
                                           <input  type="submit" value="Add Password" />
                                       </div>
                                   </form>
                            </div>
                        </div>
                    </div>
    )
}