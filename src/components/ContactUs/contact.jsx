import React from "react";
import Logo from "./Logo1.png";
import {Link} from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    return(
        <>
        <div className="contact-main-div">
            <div className="fox">
                <div className="form2">
                    <div className="logo2">
                        <img style={{width:100, height:100}} src={Logo} alt="logo" />
                    </div>
                    <div className="link">
                        <input type="text" placeholder="Tell you email-address or phone number" required="required" />
                        <input type="text" placeholder="Write Down your querry...?" required="required" />
                        <button type="submit" >Contact Us</button>
                    </div>
                    <span className="has-seperator2">OR</span>
                    <div className="icons2">
                        <a href="https://www.facebook.com/login/" className="facebook-login">
                            <i className="fab fa-facebook" />
                        </a>
                        <a href="https://www.twitter.com/login/" className="twitter">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="https://accounts.google.com/v3/signin/identifier?dsh=S1896857692%3A1664177106109817&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWpPDcoaptHiDTGYcyThnapfhibzpoaoBY9qtLICX0NnqddLCzfrZMArRHGZyTvQp5Xf76HB" className="gmail">
                            <i className="fab fa-google" />
                        </a>
                    </div>
                    <div className="sign-up2">
                        Have an account? <Link to="/login" style={{color:'#45f3ff', textDecoration:'none'}}>Log In</Link> 
                    </div>
                </div>
        </div>
    </div>
    </>
    )
}

export default Contact;