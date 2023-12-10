import React, { useEffect, useState } from 'react'
import style from "./profile.module.css";
import axios from 'axios';

const Profile = () => {
    const token = localStorage.getItem("token");
    const [user, setUser] = useState("")

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
    });

    const userId = localStorage.getItem("userId")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/post/user/${userId}`)
            .then((res) => {
                setPosts(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    return (
        <>
            <div className={`${style.backgound}`}>
                <div className={`${style.headProfile}`}>
                    <div className='d-flex align-items-center justify-content-center m-lg-5 m-3'>
                        <img src={require("../../assets/image/profile.png")} alt="Profile Image" style={{ width: 130, height: 130, borderRadius: 65 }} />
                    </div>
                    <div className={`${style.bio}`}>
                        <h5 className='m-0'>@{user.user_nickname} {user.verify === "true" ? (<i className="bi bi-patch-check-fill text-primary"></i>) : user.verify === "owner" ? (<i style={{ color: "#FFD700", fontSize: 18 }} className="bi bi-patch-check-fill"></i>) : ("")}  </h5>
                        <div className='d-flex my-2'>
                            <h5 className='pe-5 m-0'>{posts.length} Post</h5>
                            <h5 className='pe-5 m-0'>0 Followers</h5>
                            <h5 className='pe-5 m-0'>0 Following</h5>
                        </div>
                        <div className='text-secondary'>
                            <p className='m-0'>{user.user_fullname}</p>
                            <p className='m-0'>bio: {user.user_bio}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-center mb-3'>
                    <div className={`${style.content}`}>
                        {posts.map((posts, index) => (
                            <div key={index} className={style.contentImg}>
                                <img src={posts.post_image} alt="contentImg" className='w-100 h-100 object-fit-cover' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile