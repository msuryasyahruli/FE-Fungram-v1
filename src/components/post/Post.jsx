import React, { useRef, useState } from 'react'
import style from "./post.module.css";
import axios from 'axios';
import Swal from 'sweetalert2';

const Post = () => {
    const userId = localStorage.getItem('userId')
    const [addPost, setAddPost] = useState({
        user_id: `${userId}`,
        post_captions: ""
    })

    const handleChange = (e) => {
        setAddPost({
            ...addPost,
            [e.target.name]: e.target.value,
        });
        // console.log(addPost);
    };

    const [photo, setPhoto] = useState(null);
    const inputRef = useRef(null);
    const handleImgClick = () => {
        inputRef.current.click();
    };

    const [preview, setPreview] = useState(null);
    const handleUpload = (e) => {
        const img = e.target.files[0];
        setPhoto(img);
        setPreview(URL.createObjectURL(img));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("user_id", addPost.user_id);
        formData.append("post_captions", addPost.post_captions);
        formData.append("post_image", photo);
        axios
            .post(`${process.env.REACT_APP_API_KEY}/post`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                Swal.fire({
                    icon: "success",
                    title: res.data.message,
                });
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            })
            .catch((err) => {
                console.log(err);
                alert(err.message);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={`${style.backgound}`}>
                    <div className={`${style.addCol}`} onClick={handleImgClick}>
                        {preview ? (
                            <img
                                src={preview}
                                alt="avatar"
                                style={{ objectFit: "cover", maxHeight: "100%", maxWidth: "100%" }}
                                className="m-auto my-3"
                            />
                        ) : (
                            <img src={require("../../assets/image/add img.png")} alt="addImg" />
                        )}
                        <input
                            className="border"
                            type="file"
                            ref={inputRef}
                            name="photo"
                            onChange={handleUpload}
                            style={{ display: "none" }}
                        />
                    </div>
                    <div className={`${style.title} mt-4`}>
                        <textarea name="post_captions" value={addPost.post_captions} onChange={handleChange} id="title" cols="10" placeholder='Captions' className='bg-transparent border-0 w-100'></textarea>
                    </div>
                    <button type="submit" className={`${style.postbtn} mt-4`}>POST</button>
                </div>
            </form>
        </>
    )
}

export default Post