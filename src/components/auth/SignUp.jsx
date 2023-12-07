import React, { useState } from 'react'
import style from './auth.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

const SignUp = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        nickname: "",
        name: "",
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
                Swal.fire("Success", "Register success", "success");
                navigate("/login");
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
                            <input type="email" placeholder='Email' name='email' id='email' onChange={userChange} />
                            <input type="text" placeholder='Username' name='nickname' id='nickname' onChange={userChange} />
                            <input type="text" placeholder='Fullname' name='name' id='name' onChange={userChange} />
                            <input type="password" placeholder='Password' name='password' id='password' onChange={userChange} />
                        </div>
                        <div className='text-center h6'>
                            <Link to={'/login'}>
                                <button onClick={userSubmit} className={`${style.btn} h6 m-3 mb-4`}>Sign Up</button>
                            </Link>
                            <p>Already have Funtechgram account? <span><Link to={'/login'} className='text-danger'>Sign In</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp