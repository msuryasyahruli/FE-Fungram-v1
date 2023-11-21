import React from 'react'
import style from "./home.module.css"

const Content = () => {
    return (
        <>
            <div className={`mt-4 ${style.backgound} text-light`}>
                <div className='d-flex align-items-center justify-content-between'>
                    <button className='d-flex align-items-center p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}>
                        <img src={require("../../assets/image/profile.png")} alt="profile" style={{ height: 40, width: 40, borderRadius: 20, margin: 8 }} />
                        <h6>Ananda TPP <span className='text-primary'><i class="bi bi-patch-check-fill"></i></span></h6>
                    </button>
                    <button className='m-3 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}>
                        <i className="bi bi-three-dots h4"></i>
                    </button>
                </div>
                <div>
                    <img src={require("../../assets/image/post1.jpg")} alt="post" className='w-100' />
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex'>
                        <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}><i className="bi bi-heart h4"></i></button>
                        <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}><i className="bi bi-chat-right h4"></i></button>
                        <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}><i className="bi bi-share h4"></i></button>
                    </div>
                    <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}>
                        <i className="bi bi-bookmark h4"></i>
                    </button>
                </div>
                <h6 className='m-0 ms-2'>100 Likes</h6>
                <div className='p-2'>
                    <h6 className='m-0'>Ananda TPP <span style={{ fontWeight: 300 }}>indahnya pemandangan banyak pohon-pohon</span></h6>
                    <p className='text-secondary m-0'>Comments...</p>
                </div>
            </div>
            <div className={`mt-4 ${style.backgound} text-light`}>
                <div className='d-flex align-items-center justify-content-between'>
                    <button className='d-flex align-items-center p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}>
                        <img src={require("../../assets/image/profile.png")} alt="profile" style={{ height: 40, width: 40, borderRadius: 20, margin: 8 }} />
                        <h6>Ananda TPP <span className='text-primary'><i class="bi bi-patch-check-fill"></i></span></h6>
                    </button>
                    <button className='m-3 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}>
                        <i className="bi bi-three-dots h4"></i>
                    </button>
                </div>
                <div>
                    <img src={require("../../assets/image/img28.jpg")} alt="post" className='w-100' />
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex'>
                        <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}><i className="bi bi-heart h4"></i></button>
                        <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}><i className="bi bi-chat-right h4"></i></button>
                        <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}><i className="bi bi-share h4"></i></button>
                    </div>
                    <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}>
                        <i className="bi bi-bookmark h4"></i>
                    </button>
                </div>
                <h6 className='m-0 ms-2'>44 Likes</h6>
                <div className='p-2'>
                    <h6 className='pe-2 m-0'>Ananda TPP  <span style={{ fontWeight: 300 }}>Pagi hari</span></h6>
                    <p className='text-secondary m-0'>Comments...</p>
                </div>
            </div>
            <div className={`mt-4 ${style.backgound} text-light`}>
                <div className='d-flex align-items-center justify-content-between'>
                    <button className='d-flex align-items-center p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}>
                        <img src={require("../../assets/image/profile.png")} alt="profile" style={{ height: 40, width: 40, borderRadius: 20, margin: 8 }} />
                        <h6>Ananda TPP <span className='text-primary'><i class="bi bi-patch-check-fill"></i></span></h6>
                    </button>
                    <button className='m-3 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}>
                        <i className="bi bi-three-dots h4"></i>
                    </button>
                </div>
                <div>
                    <img src={require("../../assets/image/img29.jpg")} alt="post" className='w-100' />
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex'>
                        <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}><i className="bi bi-heart h4"></i></button>
                        <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}><i className="bi bi-chat-right h4"></i></button>
                        <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}><i className="bi bi-share h4"></i></button>
                    </div>
                    <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}>
                        <i className="bi bi-bookmark h4"></i>
                    </button>
                </div>
                <h6 className='m-0 ms-2'>287 Likes</h6>
                <div className='p-2'>
                    <h6 className='pe-2 m-0'>Ananda TPP  <span style={{ fontWeight: 300 }}>hutan kecil</span></h6>
                    <p className='text-secondary m-0'>Comments...</p>
                </div>
            </div>
        </>
    )
}

export default Content