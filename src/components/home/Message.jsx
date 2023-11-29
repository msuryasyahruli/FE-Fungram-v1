import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Message = () => {
    return (
        <>
            <div className={`${style.backgound} p-3`}>
                <div className='d-flex align-items-center justify-content-between'>
                    <button className='d-flex align-items-center p-0' style={{ backgroundColor: 'transparent', border: 0 }}>
                        <img src={require("../../assets/image/profile.png")} alt="profile" style={{ height: 50, width: 50, borderRadius: 25, marginRight: 10 }} />
                        <div>
                            <h6 className='m-0 text-start'>Ananda TPP <span className='text-primary'><i class="bi bi-patch-check-fill"></i></span></h6>
                            <p className='m-0 text-start'>Fadilah</p>
                        </div>
                    </button>
                    <button className='p-0' style={{ backgroundColor: 'transparent', border: 0 }}>
                        <i class="bi bi-three-dots-vertical h4"></i>
                    </button>
                </div>
                <hr />
                <div>
                    <div className='d-flex justify-content-between'>
                        <p className='m-0'>Your message</p>
                        <Link to={{  }} className='text-dark'>all</Link>
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
            <p className="text-center mt-3"><i class="bi bi-c-circle"></i> 2023 FuntechGram. By Funtech Team</p>
        </>
    )
}

export default Message