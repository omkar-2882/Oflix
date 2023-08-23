import React, { useRef } from 'react'
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase';
import logo from "./logo.svg";
import './Login.css'

const Login = () => {
  const emailRef = useRef(null)
  const passRef = useRef(null)

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passRef.current.value
    )
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.message);
    })

  }
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passRef.current.value
    )
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.message);
    })
  }
  return (
    <div className="form-wrapper">
      <h2>Sign In</h2>
      <form action="#">
        <div className="form-control">
          <input ref={emailRef} type="email" required />
          <label>Email</label>
        </div>
        <div className="form-control">
          <input ref={passRef} type="password" required />
          <label>Password</label>
        </div>
        <button type="submit" onClick={signIn}>Sign In</button>
        {/* <div className="form-help">
          <div className="remember-me">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <a href="#">Need help?</a>
        </div> */}
      </form>
      <p>New to Netflix? <span href="#" onClick={register}>Sign up now</span></p>
      {/* <small>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <a href="#">Learn more.</a>
      </small> */}
    </div>
  )
}

export default Login