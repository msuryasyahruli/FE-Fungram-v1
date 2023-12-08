import React, { useEffect, useState } from 'react'
import style from './setting.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Setting = () => {
    const navigate = useNavigate();

    const isLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

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
                <section>
                    <div className='m-3'>
                        <img src={require('../../assets/image/profile.png')} alt="profile" className='my-3 me-3' style={{ width: 130, height: 130, borderRadius: 65 }} />
                        <button className={`${style.btn}`}><i className="bi bi-pencil-square"></i> Change</button>
                        <button className={`${style.btn} bg-danger`}><i className="bi bi-trash3"></i> Delete</button>
                    </div>
                    <div className={`${style.form}`}>
                        <p>Email</p>
                        <input type="text" value={user.user_email} className={`${style.input}`} />
                        <p>Fullname</p>
                        <input type="text" value={user.user_fullname} className={`${style.input}`} />
                        <p>Nick</p>
                        <input type="text" value={`@${user.user_nickname}`} className={`${style.input}`} />
                        <p>Bio</p>
                        <textarea name="bio" id="bio" className={`${style.area}`} placeholder='add bio' value={user.user_bio}></textarea>
                        {/* <p>Birthday date</p>
                        <input type="text" className={`${style.input}`} /> */}
                    </div>
                    <button className={`${style.btn} bg-danger`} onClick={isLogout}>Logout</button>
                </section>
            </div>
        </>
    )
}

export default Setting