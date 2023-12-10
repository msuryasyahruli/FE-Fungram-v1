import React, { useEffect, useState } from 'react'
import style from './setting.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Setting = () => {
    const navigate = useNavigate();

    const isLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const [user, setUser] = useState({
        "user_email": "",
        "user_fullname": "",
        "user_nickname": "",
        "user_bio": ""
    })

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

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
        console.log(user);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .put(`${process.env.REACT_APP_API_KEY}/users/${userId}`, user)
            .then((res) => {
                setUser(res);
                Swal.fire("Success", "Profile updated", "success");
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    };

    return (
        <>
            <div className={`${style.backgound}`}>
                <section>
                    <div className='m-3'>
                        <img src={require('../../assets/image/profile.png')} alt="profile" className='my-3 me-3' style={{ width: 130, height: 130, borderRadius: 65 }} />
                        <button className={`${style.btn}`}><i className="bi bi-pencil-square"></i> Change</button>
                        <button className={`${style.btn} bg-danger`}><i className="bi bi-trash3"></i> Delete</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={`${style.form}`}>
                            {user.verify === "true" ? (<span className='text-primary'>Account Verified </span>) : ("")}
                            <p>Nick</p>
                            <input type="text" name='user_nickname' value={user.user_nickname} className={`${style.input}`} onChange={handleChange} />
                            {/* <p>Email</p>
                            <input type="text" name='user_email' value={user.user_email} className={`${style.input}`} onChange={handleChange} /> */}
                            <p>Fullname</p>
                            <input type="text" name='user_fullname' value={user.user_fullname} className={`${style.input}`} onChange={handleChange} />
                            <p>Bio</p>
                            <textarea name="user_bio" id="bio" className={`${style.area}`} placeholder='add bio' value={user.user_bio} onChange={handleChange}></textarea>
                            {/* <p>Birthday date</p>
                        <input type="text" className={`${style.input}`} /> */}
                        </div>
                        <button className={`${style.btn} bg-danger`} onClick={isLogout}>Logout</button>
                        <button className={`${style.btn} bg-secondary`} type='submit'>Update</button>
                    </form>
                </section>
            </div>
        </>
    )
}

export default Setting