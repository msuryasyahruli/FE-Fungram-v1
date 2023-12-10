import React from 'react'
import style from "./home.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Story = () => {
    return (
        <>
            <div className={`${style.backgound}`}>
                <Swiper
                    // slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 5,
                            // spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 7,
                            // spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 8,
                            // spaceBetween: 50,
                        },
                        1400: {
                            slidesPerView: 9,
                            // spaceBetween: 50,
                        },
                    }}
                    className='ps-2 py-2'
                    style={{ borderRadius: 15 }}
                >
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue'}} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue'}} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue'}} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue'}} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue'}} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue'}} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue'}} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue'}} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue'}} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue'}} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue'}} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue'}} /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Story