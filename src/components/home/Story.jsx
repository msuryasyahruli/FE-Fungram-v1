import React from 'react'
import style from "./home.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Story = () => {
    return (
        <>
            <div className={`${style.backgound}`}>
                <Swiper
                    slidesPerView={8}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Story