import React, { useEffect, useState } from 'react'
import style from "./profile.module.css";
import axios from 'axios';

const Profile = () => {
    const userId = localStorage.getItem("userId");
console.log(userId);
    const [user, setUser] = useState([])
    console.log(user);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/user/${userId}`)
            .then((res) => {
                setUser(res.data); 
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className={`${style.backgound}`}>
                <div className={`${style.headProfile}`}>
                    <div className='d-flex align-items-center justify-content-center m-lg-5 m-3'>
                        <img src={require("../../assets/image/profile.png")} alt="Profile Image" style={{ width: 130, height: 130, borderRadius: 65 }} />
                    </div>
                    <div className={`${style.bio}`}>
                        <h5 className='m-0'>@{user.nickname}</h5>
                        <div className='d-flex my-2'>
                            <h5 className='pe-5 m-0'>Post</h5>
                            <h5 className='pe-5 m-0'>Followers</h5>
                            <h5 className='pe-5 m-0'>Following</h5>
                        </div>
                        <div className='text-secondary'>
                            <p className='m-0'>{user.name}</p>
                            <p className='m-0'>bio: {user.bio}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='d-flex flex-wrap justify-content-center p-3'>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100 p-1' />
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100 p-1' />
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100 p-1' />
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100 p-1' />
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100 p-1' />
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100 p-1' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile