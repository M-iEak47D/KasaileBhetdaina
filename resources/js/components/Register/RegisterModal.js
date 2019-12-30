import React from "react"

export default function RegisterModal(){
    function displayCode() {
        document.getElementById('invite_code_collapse').style.display = 'block';
    }
    return(
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
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="text-center my-2">
                        <div href="" id="invite_code"  onClick={displayCode}>I HAVE INVITE CODE</div>
                        <div id="invite_code_collapse" style={{display:'none'}}>
                            <input name="text" type="tel" value="" placeholder="Invite Code" className="form-control" />
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="btn btn-success" data-dismiss="modal" data-toggle="modal" data-target="#otp">Join Now</button>
                        <br />
                        <a href="" data-dismiss="modal" data-toggle="modal" data-target="#login">I ALREADY HAVE ACCOUNT</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    );
}