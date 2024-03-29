import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Message = () => {
    const token = localStorage.getItem("token");
    const [user, setUser] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/users/profile`, {
                headers: { 'Authorization': 'Bearer ' + token }
            })
            .then((res) => {
                setUser(res.data.data);
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <>
            <div className={`${style.backgound} p-3`}>
                <div className='d-flex align-items-center justify-content-between'>
                    <button className='d-flex align-items-center p-0' style={{ backgroundColor: 'transparent', border: 0 }} >
                        {!isLoading ? <img src={require("../../assets/image/profile.png")} alt="profile" style={{ height: 50, width: 50, borderRadius: 25, marginRight: 10 }} /> : <Skeleton circle={true} width={50} height={50} style={{ marginRight: 10 }} />}
                        <div>
                            <h6 className='m-0 text-start'>{isLoading ? <Skeleton width={150} /> : user.user_nickname} {user.verify === "true" ? (<i className="bi bi-patch-check-fill text-primary"></i>) : user.verify === "owner" ? (<i style={{ color: "#FFD700", fontSize: 15 }} className="bi bi-patch-check-fill"></i>) : ("")} </h6>
                            <p className='m-0 text-start'>{isLoading ? <Skeleton /> : user.user_fullname}</p>
                        </div>
                    </button>
                    <button className='p-0' style={{ backgroundColor: 'transparent', border: 0 }}>
                        <i className="bi bi-three-dots-vertical h4"></i>
                    </button>
                </div>
                <hr />
                <div>
                    <div className='d-flex justify-content-between'>
                        <p className='m-0'>Your message</p>
                        <Link to={{}} className='text-dark'>all</Link>
                    </div>
                    <button className='d-flex align-items-center justify-content-between w-100 rounded p-0 mt-3' style={{ backgroundColor: 'transparent', border: 0 }}>
                        <div className='d-flex align-items-center'>
                            <img src={require("../../assets/image/profile.png")} alt="profile" style={{ height: 50, width: 50, borderRadius: 25, marginRight: 10 }} />
                            <div>
                                <h6 className='m-0 text-start'>Vineas</h6>
                                <p className='m-0 text-start' style={{ fontWeight: 400 }}>Halo gais</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <p className="text-center mt-3"><i className="bi bi-c-circle"></i> 2023 FuntechGram. By Funtech Team</p>
        </>
    )
}

export default Message