import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { WEB_SITE_NAME } from "../../utils/constantes";
import "./login.css"

const Register = () => {
    useEffect(() => {
        document.title = WEB_SITE_NAME+'Register';
      });
    return (
        <>
            <div className="row" >
                <div className="col-md-6 col-12 bg-image bg-image-dim" >
                    <h1 className="text-center titre">Register</h1>
                </div>
                <div className="col-md-6 col-12">
                    <br /><br />
                    <div className="container form">
                        <div className="row">
                            <br />
                            <div className="col-sm-8 offset-2">
                            
                                <form className="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="firstname" placeholder="First name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="lastname" placeholder="Last name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email"  placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="phone"  placeholder="Phone number" />
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" id="sex">
                                            <option>Sex</option>
                                            <option>Female</option>
                                            <option>Male</option>
                                        </select>
                                    </div>   
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password_confirmation" placeholder="Password Confirmation" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-sm btn-block">Submit</button>
                                </form>
                                <br />
                                <p><Link to="/login"><em>Go to login page </em></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register