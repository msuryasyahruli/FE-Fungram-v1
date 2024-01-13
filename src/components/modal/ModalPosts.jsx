import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const ModalPosts = ({ postId, postImg, name, children }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     axios
    //         .get(`${process.env.REACT_APP_API_KEY}/comment/${postId}`)
    //         .then((res) => {
    //             setPosts(res.data.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //         // eslint-disable-next-line
    // }, [postId])

    return (
        <>
            <Button onClick={handleShow} className='bg-transparent border-0 p-0 text-dark'>
                {children}
            </Button>

            <Modal show={show} onHide={handleClose} animation={false} className='modal-lg'>
                <Modal.Header closeButton>
                    <Modal.Title><h6>{name}</h6></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={postImg} alt="contentImg" className='w-100 h-100 object-fit-cover' />
                    {/* {posts.map((posts, index) => (
                        <div key={index}>{posts.comment}</div>
                    ))} */}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalPosts