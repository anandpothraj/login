import React, { useState } from 'react';
import LoginImg from './img/login.png';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Login = () => {

    const [ name, setName ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = () => {
        console.log(name);
        console.log(password);
    }

    return (
        <div className='login'>
            <div className="form">
                <div className="loginCard">
                    <h1>LOGIN</h1>
                    <input type="text" placeholder="Username" onChange={(e)=>setName(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    <button onClick={handleSubmit} className="loginBtn" >LOGIN&nbsp;<HiOutlineArrowNarrowRight/></button>
                </div>
            </div>
            <div className="imgDiv">
                <img src={LoginImg} alt="loginImg" className="loginImg" />
            </div>
        </div>
    )
}

export default Login;