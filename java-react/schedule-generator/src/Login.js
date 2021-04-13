import register1 from "./images/register1.png";
import logo from "./images/logo.svg";
import {Link} from "react-router-dom";
import React, { useState, useEffect, useContext} from 'react';
import {useCookies} from 'react-cookie';
import UserContext from "./UserContext";

import "./bootstrap-4.5.3-dist/css/bootstrap.min.css"
import './App.css';
import Footer from "./Footer";




function Login(){
    const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);

    const user = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordChange = event =>{
        setPassword(event.target.value);
    }

    const handleSubmit = event =>{
        const inputData = {email, password};
        auth(inputData);
        event.preventDefault();
    }

    async function auth(data){

        const response = await fetch("http://192.168.43.154:8000/auth", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        });

        if(response.status===200){
            let jwt = await response.json();
            setCookieJWT('jwt', jwt);
            console.log("Successful")
            getProfile();
        }
        else{
            console.log('Unauthorized')
        }

    }

    async function getProfile(){

        const bearer = "Bearer "+cookieJWT['jwt'].jwtToken;


        const response = await fetch("http://192.168.43.154:8000/profile", {
            method:'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": bearer,
            }
        });

        if(response.status===200){
            let res = await response.json();
            user.auth=true;
            user.email=res.email;
            user.fullName=res.fullName;


        }
    }

    return (
        <div>
            <div className='registerPage row'>
                <div className='col-7 text-center align-items-center'>
                    <img src={register1} alt=""/>
                </div>
                <div className='col-5 px-4 text-center'>
                    <img src={logo} alt="" width='50' height='50' className=''/>
                    <h3 className='my-3'>Create amazing schedule</h3>
                    <h4 className='font-weight-normal'>Create your free account and enjoy using S-GEN</h4>
                    <form onSubmit={handleSubmit}>
                        <input type='email' placeholder="Email" value={email} onChange={handleEmailChange} className='form-control my-3'/>
                        <input type='password' placeholder="Password" value={password} onChange={handlePasswordChange} className='form-control my-3'/>
                        <button className='btn btn-primary w-100 btn-lg'>Login</button>
                    </form>
                    <div className='row my-3 px-3 h5 font-weight-normal'>
                        <p>New to S-GEN?</p>
                        <Link to='/register' className='text-info ml-2'>Sign Up</Link>
                        <a href='/' className='ml-auto text-info'>Forgot Password?</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Login;