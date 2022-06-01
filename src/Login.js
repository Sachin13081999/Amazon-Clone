import React, {useState} from 'react';
import {Link , useNavigate} from "react-router-dom";
import'./Login.css';
import { auth } from "./Firebase";


function Login() {
    const navigate = useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const signIn = e=> {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
           navigate('/')
        })
        .catch(error=>alert(error.message))
        //some stuff about firebase login..
    }
    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth){
                navigate('/')
            }
            //it successfully created a new user with email and password 
        
        }) 
        .catch(error => alert(error.message))

        //some stuff about firebase register..
    }
    return (
    <div className='login'>
        <Link to='/'>
      <img
      className="login__logo"
      src ="https://www.bgr.in/wp-content/uploads/2013/06/amazonIN_logo.jpg"
            />
        </Link>
        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text"
                  value={email}
                  onChange= {e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" 
                   value={password}
                   onChange= {e=> setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn}
                className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice,our Cookies Notice and our Intrest-Based Ads 
            </p>
           <button onClick={register}
            className='login__registerButton'>Create your Amazon Account</button> 
        </div>
    </div>
  )
}

export default Login
