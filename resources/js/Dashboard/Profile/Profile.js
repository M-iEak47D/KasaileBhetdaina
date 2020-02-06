import React, {useEffect, useState} from 'react';
import { useAuth } from '../../Context/Auth';
import Axios from "axios";

export default function Profile() {

    const {Authtoken} = useAuth()
    const [userResponse, setUserResponse] = useState();

    let getUrl = "http://noname.hellonep.com/api/user/"+(Authtoken.user_id);

   useEffect(() => {
        let source = Axios.CancelToken.source();

        const loadData = async() => {
            try{
                const response = await Axios.get(getUrl,{
                    cancelToken: source.token,
                   
                });
                setUserResponse(response.data.subjects);
            } catch (error) {
                if(Axios.isCancel(error)){
                    console.log(error)
                }else{
                    throw error;
                }
            }
    };
    loadData();
    return () =>{
        source.cancel()
    };
}, [getUrl]);

    return (
        <React.Fragment>
            <div className="profile-wrapper">
                <div className="top-wrapper">
                    <div className="container">
                        <div className="profile-pic">
                            <img src={require('../assets/images/testimonial-1.jpg')} className="img-fluid" />
                        </div>
                        <div className="text-container">
                            <div className="name">
                                <i className="fa fa-user"></i>Hot Babe
                                    </div>
                            <div className="number">
                                9841587582
                                    </div>
                        </div>
                    </div>
                </div>
                <div className="personal-details">
                    <div className="title">Personal Details</div>
                    <form>

                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label>School/College Name</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label>Birthday</label>
                            <input className="form-control" type="date" />
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <select className="form-control">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Save" />
                        </div>
                    </form>

                </div>
                <div className="account-details">
                    <div className="title">Account Details</div>
                    <form>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input className="form-control" type="number" placeholder="9841587582" disabled />
                        </div>
                        <div className="form-group">
                            <label>email</label>
                            <input className="form-control" type="email" placeholder="bishowraut@gmail.com" disabled />
                        </div>
                        <div className="form-group">
                            <label>New Password</label>
                            <input className="form-control" type="password" />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input className="form-control" type="password" />
                        </div>
                        <div className="form-group">
                            <label>Old Password</label>
                            <input className="form-control" type="password" />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Update" />
                        </div>
                    </form>

                </div>


            </div>
        </React.Fragment>
    )
}