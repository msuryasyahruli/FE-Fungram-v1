import React, { useState } from 'react'
import style from './auth.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

const SignIn = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        user_email: "",
        user_password: ""
    });

    const userChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
        // console.log(userData);
    };

    const userSubmit = (e) => {
        axios
            .post(`${process.env.REACT_APP_API_KEY}/users/login`, userData)
            .then((res) => {
                if (res.data.message === "Email is incorrect") {
                    Swal.fire({
                        title: "Error",
                        text: res.data.message,
                        icon: "info"
                    });
                } else if (res.data.message === "Password is incorrect") {
                    Swal.fire({
                        title: "Error",
                        text: res.data.message,
                        icon: "info"
                    });
                } else {
                    Swal.fire({
                        title: "Good job!",
                        text: "Login Success",
                        icon: "success"
                    });
                    setTimeout(function () {
                        navigate("/funtechgram.com");
                        // window.location.reload();
                    }, 1000)
                    localStorage.setItem("token", res.data.data.token);
                    localStorage.setItem("userId", res.data.data.user_id);
                }
                // console.log(res.data);
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
                            <input type="email" placeholder='Email' name='user_email' id='user_email' onChange={userChange} />
                            <input type="password" placeholder='Password' name='user_password' id='user_password' onChange={userChange} />
                        </div>
                        <div className='text-end'>
                            <Link to={''} className='text-danger'>Forgot Password?</Link>
                        </div>
                        <div className='text-center h6'>
                            <div>
                                <button onClick={userSubmit} className={`${style.btn} h6 m-3 mb-4`}>Sign In</button>
                            </div>
                            <p>Don’t have Funtechgram account? <span><Link to={'/register'} className='text-danger'>Sign Up</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn