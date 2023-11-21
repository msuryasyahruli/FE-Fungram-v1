import React from 'react'
import style from "./home.module.css"

const Story = () => {
    return (
        <>
            <div className={`${style.blur} d-flex align-items-center`}>
                <img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} />
                <img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} />
                <img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} />
                <img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} />
                <img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} />
                <img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 70, height: 70, borderRadius: 40, border: '5px solid blue', margin: 10 }} />
            </div>
        </>
    )
}

export default Story