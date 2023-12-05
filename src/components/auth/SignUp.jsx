import React from 'react'
import style from './auth.module.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className={`${style.bg}`}>
                    <div className={`${style.auth}`}>
                        <div className='text-center p-5'>
                            <img src={require('../../assets/image/Authlogo.png')} alt="logo" />
                        </div>
                        <div className={`${style.form}`}>
                            <input type="text" placeholder='Username' />
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                        </div>
                        <div className='text-center h6'>
                            <Link to={'/login'}>
                                <button className={`${style.btn} h6 m-3 mb-4`}>Sign Up</button>
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