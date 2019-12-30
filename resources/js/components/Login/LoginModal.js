import React from "react";

function LoginModal(){
    return(
        
<div className="modal join fade" id="login">
    <div className="modal-dialog">
        <div className="modal-content">
          
                 {/* <!-- Modal body --> */}
            <button type="button" className="close" data-dismiss="modal"><i className="fa fa-window-close mt-2"></i></button>
            <div className="modal-body">
            <div className="logo-box">
                    <img src={require('../../pages/images/logo1.png')} className="img-fluid" />
                </div>
                <div className="title">
                    Login
                </div>
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Password" />
                    </div>
                    
                    <div className="button-container">
                        <button className="btn btn-success">Login</button>
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