import React, { useEffect, useState } from 'react'
import style from './explore.module.css'
import axios from 'axios'
import ModalPosts from '../modal/ModalPosts'

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
                        <ModalPosts key={index} postId={posts.post_id} postImg={posts.post_image} name={posts.user_nickname}>
                            <div className={style.contentImg}>
                                <img src={posts.post_image} alt="contentImg" className='w-100 h-100 object-fit-cover' />
                            </div>
                        </ModalPosts>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Explore