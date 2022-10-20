import React, { useState } from "react";
import header from './header.jpg';
import {Link, useNavigate} from 'react-router-dom';
import './Login.css';


const Login = () => {

    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const loginUser = async(e) =>{
        e.preventDefault();

       const res = await fetch('/signin',{
        method:"post",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            email , password
        })
       });

       const data = res.json();

       if(res.status === 400 || !data){
        window.alert("Invalid Credentials");
       }else{
        window.alert("Login Successful");

        navigate("/home")
       }
    }
    return(
        <>
        <div className="home-main-div">
        <div className="box">
            <div className="form" method="post">
                <div className="logo">
                    <img style={{width:120, height:110}} src={header} alt="logo" />
                </div>
                <input type="text" 
                name="email"
                 placeholder="Email"
                 value={email}
                 onChange= {(e) => setEmail(e.target.value)}
                  required="required" />
                <input type="text" 
                name="password" 
                value={password}
                onChange= {(e) => setPassword(e.target.value)}
                placeholder="Password"
                 required="required"/>
                <button type="submit" onClick={loginUser} >Log In</button>
                <div >
                    <input className="checking" type="checkbox" id="check" />
                    <span >Remember me</span>
                </div>
                <span className="has-seperator">OR</span>
                <div className="icons">
                    <a href="https://www.facebook.com/login/" className="facebook-login">
                        <i className="fab fa-facebook" />
                    </a>
                    <a href="https://www.twitter.com/login/" className="twitter">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="https://accounts.google.com/v3/signin/identifier?dsh=S1896857692%3A1664177106109817&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWpPDcoaptHiDTGYcyThnapfhibzpoaoBY9qtLICX0NnqddLCzfrZMArRHGZyTvQp5Xf76HB" className="gmail">
                        <i className="fab fa-google" />
                    </a>
                        <div className="reset">
                            <a className="password-reset" href="reset">
                                Forgotten your password?
                            </a>
                        </div>
                </div>
                <div className="sign-up">
                    Don't an account? <Link to="/signup" style={{color: '#45f3ff', textDecoration: 'none'}}>Sign up</Link> 
                </div>
            </div>
    </div>
    </div>
    </>
   
    )
}

export default Login;