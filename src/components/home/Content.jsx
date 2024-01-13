import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import ModalPosts from '../modal/ModalPosts';

const Content = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/post`)
            .then((res) => {
                setPosts(res.data.data);
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <>
            <div>
                {isLoading ?
                    <div>
                        <div className={`mt-4 ${style.backgound} text-dark`}>
                            <div className='d-flex align-items-center'>
                                <Skeleton circle={true} width={40} height={40} style={{ margin: 10 }} />
                                <Skeleton width={100} />
                                {/* <Skeleton width={150} /> */}
                            </div>
                            <Skeleton width={'100%'} height={400} borderRadius={0} />
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <Skeleton width={25} height={25} className='m-2' />
                                    <Skeleton width={25} height={25} className='m-2' />
                                    <Skeleton width={25} height={25} className='m-2' />
                                </div>
                                <div>
                                    <Skeleton width={25} height={25} className='m-2' />
                                </div>
                            </div>
                            <Skeleton width={200} className='m-2' />
                            <Skeleton width={100} className='m-2' />
                        </div>
                        <div className={`mt-4 ${style.backgound} text-dark`}>
                            <div className='d-flex align-items-center'>
                                <Skeleton circle={true} width={40} height={40} style={{ margin: 10 }} />
                                <Skeleton width={100} />
                                {/* <Skeleton width={150} /> */}
                            </div>
                            <Skeleton width={'100%'} height={400} borderRadius={0} />
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <Skeleton width={25} height={25} className='m-2' />
                                    <Skeleton width={25} height={25} className='m-2' />
                                    <Skeleton width={25} height={25} className='m-2' />
                                </div>
                                <div>
                                    <Skeleton width={25} height={25} className='m-2' />
                                </div>
                            </div>
                            <Skeleton width={200} className='m-2' />
                            <Skeleton width={100} className='m-2' />
                        </div>
                    </div>
                    :
                    posts.map((posts, index) => (
                        <div key={index} className={`mt-4 ${style.backgound} text-dark`}>
                            <div className='d-flex align-items-center justify-content-between'>
                                <button className='d-flex align-items-center p-0' style={{ backgroundColor: 'transparent', border: 0 }}>
                                    <img src={require("../../assets/image/profile.png")} alt="profile" style={{ height: 40, width: 40, borderRadius: 20, margin: 8 }} />
                                    <h6>{posts.user_nickname} {posts.verify === "true" ? (<i className="bi bi-patch-check-fill text-primary"></i>) : posts.verify === "owner" ? (<i style={{ color: "#FFD700", fontSize: 15 }} className="bi bi-patch-check-fill"></i>) : ("")}</h6>
                                </button>
                                <button className='m-3 p-0' style={{ backgroundColor: 'transparent', border: 0 }}>
                                    <i className="bi bi-three-dots h4"></i>
                                </button>
                            </div>
                            <div>
                                <Swiper
                                    pagination={{
                                        dynamicBullets: true,
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide><img src={posts.post_image} alt="post" className='w-100' /></SwiperSlide>
                                </Swiper>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex'>
                                    <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0 }}><i className="bi bi-heart h4"></i></button>
                                    <ModalPosts postId={posts.post_id} postImg={posts.post_image} name={posts.user_nickname}><i className="bi bi-chat-right h4"></i></ModalPosts>
                                    {/* <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0 }}></button> */}
                                    <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0 }}><i className="bi bi-share h4"></i></button>
                                </div>
                                <button className='m-2 p-0' style={{ backgroundColor: 'transparent', border: 0 }}>
                                    <i className="bi bi-bookmark h4"></i>
                                </button>
                            </div>
                            <h6 className='m-0 ms-2'>100 Likes</h6>
                            <div className='p-2'>
                                <h6 className='m-0'>{posts.user_nickname} <span style={{ fontWeight: 400 }}>{posts.post_captions}</span></h6>
                                <p className='text-secondary m-0'>Comments...</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Content