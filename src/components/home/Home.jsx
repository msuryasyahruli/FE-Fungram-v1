import React from 'react'
import Story from './Story'
import Content from './Content'
import Message from './Message'

const Home = () => {
    return (
        <>
            <div className='row'>
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