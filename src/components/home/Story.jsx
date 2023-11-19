import React from 'react'
import style from "./home.module.css"

const Story = () => {
    return (
        <>
            <div className={`${style.blur} d-flex align-items-center`} style={{ height: "100px" }}>
                <img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 80, height: 80, borderRadius: 40, border: '5px solid blue', margin: 10 }} />
                <img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 80, height: 80, borderRadius: 40, border: '5px solid blue', margin: 10 }} />
                <img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 80, height: 80, borderRadius: 40, border: '5px solid blue', margin: 10 }} />
                <img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 80, height: 80, borderRadius: 40, border: '5px solid blue', margin: 10 }} />
                <img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 80, height: 80, borderRadius: 40, border: '5px solid blue', margin: 10 }} />
                <img src={require("../../assets/image/profile.png")} alt="profilePic" style={{ width: 80, height: 80, borderRadius: 40, border: '5px solid blue', margin: 10 }} />
            </div>
        </>
    )
}

export default Story