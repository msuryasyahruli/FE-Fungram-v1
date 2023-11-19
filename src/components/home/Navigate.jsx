import React from 'react'
import style from "./home.module.css"

const Navigate = () => {
    return (
        <>
            <div className={`${style.navigation} text-center`}>
                <img src={require("../../assets/image/FuntechGramLogo.png")} alt="Logo" className='m-3' />
                <div className='p-2'>
                    <button className={`${style.btn}`}><div className='d-flex align-items-center'><i className="bi bi-house p-2 h4"></i><h6>Home</h6></div></button>
                    <button className={`${style.btn}`}><div className='d-flex align-items-center'><i className="bi bi-search p-2 h4"></i><h6>Search</h6></div></button>
                    <button className={`${style.btn}`}><div className='d-flex align-items-center'><i className="bi bi-grid-1x2 p-2 h4"></i><h6>Explore</h6></div></button>
                    <button className={`${style.btn}`}><div className='d-flex align-items-center'><i className="bi bi-chat p-2 h4"></i><h6>Chat</h6></div></button>
                    <button className={`${style.btn}`}><div className='d-flex align-items-center'><i className="bi bi-plus-square p-2 h4"></i><h6>Post</h6></div></button>
                    <button className={`${style.btn}`}><div className='d-flex align-items-center'><i className="bi bi-person-circle p-2 h4"></i><h6>Profile</h6></div></button>
                    <button className={`${style.btn} mt-5`}><div className='d-flex align-items-center'><i className="bi bi-gear p-2 h4"></i><h6>Setting</h6></div></button>
                </div>
            </div>
        </>
    )
}

export default Navigate