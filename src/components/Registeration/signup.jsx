import React, { useState } from "react";
import header from './header.jpg';
import { Link, useNavigate} from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name:"",
        email:"",
        phone :"",
        password: "",
    });

    let name,value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value= e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async(e)=>{
        e.preventDefault();

        const { name, email , phone , password } = user;
        const res = await fetch("/register",{
            method:"post",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                name,
                email,
                phone, 
                password
            })
        });
        const data = await res.json();

        if(data.status === 422 || !data){
            window.alert("Invalid Registration ")
            console.log("Invalid Registration")
        }else{
            window.alert("Registration Successful");
            console.log("Successful Registration");

            navigate("/home")
        };


    }



    return(
        <>
        <div className="signup-main-div">
        <div className="box">
            <div className="form" method="post">
                <div className="logo">
                    <img style={{width:120, height:110}} src={header} alt="logo" />
                </div>
                <input type="text"
                 placeholder="First Name"
                  required="required" 
                  name="name" 
                  value={user.name} 
                  onChange={handleInputs} />
                <input type="text" placeholder="Email-address" required="required" 
                name="email"
                 value={user.email} 
                onChange={handleInputs}/>
                <input type="text" 
                placeholder="Mobile Number" 
                required="required" 
                name="phone" 
                value={user.phone} 
                onChange={handleInputs}/>
                <input type="text" 
                placeholder="Password" 
                required="required" 
                name="password" 
                value={user.password} 
                onChange={handleInputs} />
                <button type="submit" onClick={PostData}>Sign Up</button>
                <span className="has-seperator">OR</span>
                <div className="sign-up1">
                    Have an account? <Link to="/" style={{color:'#45f3ff', textDecoration:'none'}}>Log In</Link> 
                </div>
            </div>
    </div>
    </div>
    </>
        );
}

export default Signup;