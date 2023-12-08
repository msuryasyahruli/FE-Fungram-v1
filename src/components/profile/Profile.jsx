import React, { useEffect, useState } from 'react'
import style from "./profile.module.css";
import axios from 'axios';

const Profile = () => {
    const token = localStorage.getItem("token");
    const [user, setUser] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/users/profile`, {
                headers: { 'Authorization': 'Bearer ' + token }
            })
            .then((res) => {
                setUser(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [token]);

    return (
        <>
            <div className={`${style.backgound}`}>
                <div className={`${style.headProfile}`}>
                    <div className='d-flex align-items-center justify-content-center m-lg-5 m-3'>
                        <img src={require("../../assets/image/profile.png")} alt="Profile Image" style={{ width: 130, height: 130, borderRadius: 65 }} />
                    </div>
                    <div className={`${style.bio}`}>
                        <h5 className='m-0'>@{user.user_nickname} {user.verify === "true" ? (<span className='text-primary'><i className="bi bi-patch-check-fill"></i></span>) : ("")} </h5>
                        <div className='d-flex my-2'>
                            <h5 className='pe-5 m-0'>Post</h5>
                            <h5 className='pe-5 m-0'>Followers</h5>
                            <h5 className='pe-5 m-0'>Following</h5>
                        </div>
                        <div className='text-secondary'>
                            <p className='m-0'>{user.user_fullname}</p>
                            <p className='m-0'>bio: {user.user_bio}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='d-flex flex-wrap justify-content-center pb-3'>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100' />
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100' />
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100' />
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100' />
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100' />
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile