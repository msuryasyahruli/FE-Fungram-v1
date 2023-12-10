import React, { useState } from 'react'
import style from './auth.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

const SignUp = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        user_email: "",
        user_fullname: "",
        user_nickname: "",
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
            .post(`${process.env.REACT_APP_API_KEY}/users/register`, userData)
            .then((res) => {
                if (res.data.message === "User created") {
                    Swal.fire("Success", "Register success", "success");
                    navigate("/login");
                } else {
                    Swal.fire({
                        title: "Error",
                        text: res.data.message,
                        icon: "info"
                    });
                }
                // console.log(res.data);
            })
            .catch((err) => {
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
                            <input type="text" placeholder='Fullname' name='user_fullname' id='user_fullname' onChange={userChange} />
                            <input type="text" placeholder='Username' name='user_nickname' id='user_nickname' onChange={userChange} />
                            <input type="password" placeholder='Password' name='user_password' id='user_password' onChange={userChange} />
                        </div>
                        <div className='text-center h6'>
                            <button onClick={userSubmit} className={`${style.btn} h6 m-3 mb-4`}>Sign Up</button>
                            <p>Already have Funtechgram account? <span><Link to={'/login'} className='text-danger'>Sign In</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp