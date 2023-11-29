import React from 'react'
import style from './setting.module.css'

const Setting = () => {
    return (
        <>
            <div className={`${style.backgound}`}>
                <section>
                    <div className='m-3'>
                        <img src={require('../../assets/image/profile.png')} alt="profile" className='my-3 me-3' style={{ width: 130, height: 130, borderRadius: 65 }} />
                        <button className={`${style.btn}`}><i class="bi bi-pencil-square"></i> Change</button>
                        <button className={`${style.btn} bg-danger`}><i class="bi bi-trash3"></i> Delete</button>
                    </div>
                    <div className={`${style.form}`}>
                        <p>name</p>
                        <input type="text" className={`${style.input}`} />
                        <p>Bio</p>
                        <textarea name="bio" id="bio" className={`${style.area}`}></textarea>
                        <p>Email</p>
                        <input type="text" className={`${style.input}`} />
                        <p>Gender</p>
                        <input type="text" className={`${style.input}`} />
                        <p>Birthday date</p>
                        <input type="text" className={`${style.input}`} />
                    </div>
                    <button className={`${style.btn} bg-danger`}>Logout</button>
                </section>
            </div>
        </>
    )
}

export default Setting