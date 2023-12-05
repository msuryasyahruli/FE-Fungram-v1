import React from 'react'
import Story from './Story'
import Content from './Content'
import Message from './Message'

const Home = () => {
    return (
        <>
            <div className='d-flex' style={{ overflowY: 'scroll', height: "95vh" }}>
                <section className='col-md-8'>
                    <Story />
                    <Content />
                </section>
                <section className='col-md-4 ps-4'>
                    <Message />
                </section>
            </div>
        </>
    )
}

export default Home