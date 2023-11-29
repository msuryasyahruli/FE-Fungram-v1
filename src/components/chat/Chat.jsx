import React from 'react'
import Contact from './Contact'
import Message from './Message'

const Chat = () => {
    return (
        <>
            <div className='row'>
                <div className='col-4'>
                    <Contact/>
                </div>
                <div className='col'>
                    <Message/>
                </div>
            </div>
        </>
    )
}

export default Chat