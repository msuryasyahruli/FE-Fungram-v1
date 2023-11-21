import React from 'react'
import style from "./search.module.css";

const Search = () => {
    return (
        <>
            <div className={`${style.backgound}`}>
                <div className={`${style.search} d-flex align-items-center`}>
                    <i className="bi bi-search p-3"/>
                    <input type="text" className='m-0 w-100' placeholder='Search' />
                    <i class="bi bi-x-lg  btn"></i>
                </div>
            </div>
            <div className={`${style.backgound} mt-4 vh-100`}></div>
        </>
    )
}

export default Search