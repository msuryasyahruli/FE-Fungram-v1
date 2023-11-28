import React from 'react'
import Story from './Story'
import Content from './Content'
import Message from './Message'

const Home = () => {
    return (
        <>
            <div className='row' style={{ overflowY: 'scroll', height: "96vh" }}>
                <section className='col-md-8'>
                    <Story />
                    <Content />
                </section>
                <section className='col-md'>
                    <Message />
                </section>
            </div>
        </>
    )
}

export default Home