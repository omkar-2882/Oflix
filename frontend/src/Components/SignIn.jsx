import React, { useState } from 'react'
import Login from './Login';
import logo from "./oflixlogo.png";
import './Login.css'

const SignIn = () => {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className='loginScreenbg'>
            <nav>
                <a href="#"><img src={logo} alt="logo" /></a>
                <button className='btn' onClick={()=>{setSignIn(true)}}>Sign In</button>
            </nav>
            {signIn ? (
                <Login/>
            ):(
                <div className='loginScreen__body'>
                <div className='loginText1'>
                    <h1>Unlimited films, TV programmes and more.</h1>
                </div>
                <div className='loginText2'>Watch anywhere. Cancel at any time.</div>
                <div className='loginText3'>Ready to watch? Enter your email to create or restart your membership.</div>
                <div className='loginInput'>
                    <input type="email" placeholder='Email Address' required />
                    <button onClick={()=>{setSignIn(true)}}>Get Started</button>
                </div>
            </div>
            )}


        </div>
    )
}

export default SignIn