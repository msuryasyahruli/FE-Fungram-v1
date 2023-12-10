import React, { useEffect, useState } from 'react'
import style from './explore.module.css'
import axios from 'axios'

const Explore = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/post`)
            .then((res) => {
                setPosts(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <>
            <div className={`${style.backgound}`}>
                <div className={`${style.content}`}>
                    {posts.map((posts, index) => (
                        <div key={index} className={style.contentImg}>
                            <img src={posts.post_image} alt="contentImg" className='w-100 h-100 object-fit-cover' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Explore