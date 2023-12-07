import React, { useState } from 'react'
import style from './auth.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

const SignIn = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const userChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
        console.log(userData);
    };

    const userSubmit = (e) => {
        axios
            .post(`${process.env.REACT_APP_API_KEY}/user`, userData)
            .then((res) => {
                // localStorage.setItem("token", res.data.data.token);
                localStorage.setItem("userId", res.data.id);
                // console.log(res.data);
                Swal.fire("Success", "Login success", "success");
                navigate("/");
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Account doesnt exist!",
                });
                console.log(err);
            });
    };

    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className={`${style.bg}`}>
                    <div className={`${style.auth}`}>
                        <div className='text-center p-5'>
                            <img src={require('../../assets/image/Authlogo.png')} alt="logo" />
                        </div>
                        <div className={`${style.form}`}>
                            <input type="email" placeholder='Email' name='email' id='email' onChange={userChange} />
                            <input type="password" placeholder='Password' name='password' id='password' onChange={userChange} />
                        </div>
                        <div className='text-end'>
                            <Link to={''} className='text-danger'>Forgot Password?</Link>
                        </div>
                        <div className='text-center h6'>
                            <Link to={'/'}>
                                <button onClick={userSubmit} className={`${style.btn} h6 m-3 mb-4`}>Sign In</button>
                            </Link>
                            <p>Don’t have Funtechgram account? <span><Link to={'/register'} className='text-danger'>Sign Up</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn