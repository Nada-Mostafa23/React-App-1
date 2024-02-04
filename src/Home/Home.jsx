import React, { useEffect } from 'react'

import logo from '../avataaars.svg'

export default function Home() {
    useEffect(()=>{
        document.title="Home"
    },[])
    return <>
    
        <div className='home'>
            <div className="container text-center text-white">
                <img  className="logo" src={logo} alt="" />
                <h1>START FRAMEWORK</h1>
                <div className='after'></div>
                <i class="fa-solid fa-star"></i>
                <div className='before'></div>
                <p className='mt-3'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>

    </>
}
