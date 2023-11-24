import React from 'react'
import style from "./post.module.css";

const Post = () => {
    return (
        <>
            <div className={`${style.backgound}`}>
                <div className={`${style.addCol}`}>
                    <button className='bg-transparent border-0'>
                        <img src={require("../../assets/image/add img.png")} alt="addImg" />
                    </button>
                </div>
                <div className={`${style.title} mt-4`}>
                    <textarea name="title" id="title" cols="10" placeholder='Captions' className='bg-transparent border-0 w-100'></textarea>
                </div>
                <button className={`${style.postbtn} mt-4`}>POST</button>
            </div>
        </>
    )
}

export default Post