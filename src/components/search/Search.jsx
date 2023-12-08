import React from 'react'
import style from "./search.module.css";
import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <>
            <div className={`${style.backgound}`}>
                <div>
                    <div className={`${style.search} d-flex align-items-center`}>
                        <i className="bi bi-search p-3 h4 m-0" />
                        <input type="text" className='m-0 w-100' placeholder='Search' />
                        <i className="bi bi-x-lg btn"></i>
                    </div>
                    <div><p className='my-2'>Recent</p></div>
                    <div className='d-flex my-2 align-items-center justify-content-between'>
                        <button className='d-flex align-items-center bg-transparent border-0 p-0 text-start'>
                            <img src={require('../../assets/image/profile.png')} alt="foto profile" className='my-2' style={{ width: 50, height: 50, borderRadius: 25 }} />
                            <h6 className='m-2'>Nickname <br /><span style={{ fontSize: 14, color: 'grey', fontWeight: 400 }}>Name</span></h6>
                            <Link to={{}}><p>Follow</p></Link>
                        </button>
                        <i className="bi bi-x-lg btn"></i>
                    </div>
                    <div className='d-flex my-2 align-items-center justify-content-between'>
                        <button className='d-flex align-items-center bg-transparent border-0 p-0 text-start'>
                            <img src={require('../../assets/image/profile.png')} alt="foto profile" className='my-2' style={{ width: 50, height: 50, borderRadius: 25 }} />
                            <h6 className='m-2'>Nickname <br /><span style={{ fontSize: 14, color: 'grey', fontWeight: 400 }}>Name</span></h6>
                            <Link to={{}}><p>Follow</p></Link>
                        </button>
                        <i className="bi bi-x-lg btn"></i>
                    </div>
                    <div className='d-flex my-2 align-items-center justify-content-between'>
                        <button className='d-flex align-items-center bg-transparent border-0 p-0 text-start'>
                            <img src={require('../../assets/image/profile.png')} alt="foto profile" className='my-2' style={{ width: 50, height: 50, borderRadius: 25 }} />
                            <h6 className='m-2'>Nickname <br /><span style={{ fontSize: 14, color: 'grey', fontWeight: 400 }}>Name</span></h6>
                            <Link to={{}}><p>Follow</p></Link>
                        </button>
                        <i className="bi bi-x-lg btn"></i>
                    </div>
                    <div className='d-flex my-2 align-items-center justify-content-between'>
                        <button className='d-flex align-items-center bg-transparent border-0 p-0 text-start'>
                            <img src={require('../../assets/image/profile.png')} alt="foto profile" className='my-2' style={{ width: 50, height: 50, borderRadius: 25 }} />
                            <h6 className='m-2'>Nickname <br /><span style={{ fontSize: 14, color: 'grey', fontWeight: 400 }}>Name</span></h6>
                            <Link to={{}}><p>Follow</p></Link>
                        </button>
                        <i className="bi bi-x-lg btn"></i>
                    </div>
                    <div className='d-flex my-2 align-items-center justify-content-between'>
                        <button className='d-flex align-items-center bg-transparent border-0 p-0 text-start'>
                            <img src={require('../../assets/image/profile.png')} alt="foto profile" className='my-2' style={{ width: 50, height: 50, borderRadius: 25 }} />
                            <h6 className='m-2'>Nickname <br /><span style={{ fontSize: 14, color: 'grey', fontWeight: 400 }}>Name</span></h6>
                            <Link to={{}}><p>Follow</p></Link>
                        </button>
                        <i className="bi bi-x-lg btn"></i>
                    </div>
                </div>
            </div>
            {/* <div className={`${style.backgound} mt-4`} ></div> */}
        </>
    )
}

export default Search