import React, { useState } from 'react';
import LoginImg from './img/login.png';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = () => {

    const [ name, setName ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = () => {
        if(name && password){
            console.log(name);
            console.log(password);
        }
        else{
            toast.error("Please Fill all fields")
        }
    }

    return (
        <>
            <ToastContainer/>
            <div className="loginDiv">
                <div className='login'>
                    <div className="form">
                        <div className="loginCard">
                            <h1>LOGIN</h1>
                            <input type="text" placeholder="Username" onChange={(e)=>setName(e.target.value)}/>
                            <Link to="/" className='link'>forget username</Link>
                            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                            <Link to="/" className='link'>forget password</Link>
                            <button onClick={handleSubmit} className="loginBtn" >LOGIN&nbsp;<HiOutlineArrowNarrowRight/></button>
                        </div>
                    </div>
                    <div className="imgDiv">
                        <img src={LoginImg} alt="loginImg" className="loginImg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;