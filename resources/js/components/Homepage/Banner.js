import React from "react";
import ReactDOM from "react-dom";

function Banner(){
    return(
        <div>
        <div className="banner">
        <div className="title">
            Better Education For a Better World
        </div>
        <div className="subtitle d-sm-block d-none">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, vero nesciunt qui enim blanditiis
        </div>

        <div className="join-now-form container-fluid">
            <div className="row">
                <div className="col-md-3 col-lg-3 col-3">
                    <div className="country-code">
                        +977
                    </div>
                </div>
                <div className="col-md-5 col-lg-5 col-5">
                    <div className="phone-number">
                        <input type="phone" name="phone number" maxLength="10" />
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-4">
                    <div className="submit">
                        <a href="" className="button" data-toggle="modal" data-target="#myModal" name="">Join</a>
                    </div>
                </div>
            </div>
        </div>
            <div className="app-download ">
                        <div className="play-store">
                            <a href=""><img src={require('../../pages/images/play-store.png')} className="img-fluid" /></a>
                        </div>
                        <div className="app-store">
                            <a href=""><img src={require('../../pages/images/brand-apple.png')} className="img-fluid" /></a>
                        </div>
            </div>
         
        <div className="banner-wave">

            <img className="wave-img" src={require('../../pages/images/banner-wave.png')} alt="" />
        </div>
    </div>
    
    <div className="modal join fade" id="myModal">
    <div className="modal-dialog">
        <div className="modal-content">
            {/* <!-- Modal body --> */}
            <button type="button" className="close" data-dismiss="modal"><i className="fa fa-window-close mt-2"></i></button>
            <div className="modal-body">
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
                        <div href="" id="invite_code" >I HAVE INVITE CODE</div>
                        <div id="invite_code_collapse" style={{display:'none'}}>
                            <input name="text" type="tel" value="" placeholder="Invite Code" className="form-control" />
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="btn btn-success">Join Now</button>
                        <br />
                        <a href="" data-dismiss="modal" data-toggle="modal" data-target="#myModal2">I ALREADY HAVE ACCOUNT</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div className="modal join fade" id="myModal2">
    <div className="modal-dialog">
        <div className="modal-content">
          
                 {/* <!-- Modal body --> */}
            <button type="button" className="close" data-dismiss="modal"><i className="fa fa-window-close mt-2"></i></button>
            <div className="modal-body">
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
                        <a href="" data-dismiss="modal" data-toggle="modal" data-target="#myModal">I DON'T HAVE ACCOUNT</a>
                    </div>
                </form>
            </div>
           
        </div>
    </div>
</div>
</div>
    )
}

export default Banner;