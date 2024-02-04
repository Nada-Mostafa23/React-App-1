import React, { useEffect } from 'react'
import img1 from '../poert1.png'
import img2 from '../port2.png'
import img3 from '../port3.png'

export default function Portfolio() {
    useEffect(()=>{
        document.title="Portfolio"
    },[])
    return <>
        <div className="portfolio">
            <div className="container text-center">
                <h1>PORTFOLIO COMPONENT</h1>
                <div className='after'></div>
                <i class="fa-solid fa-star"></i>
                <div className='before'></div>
                <div className="row g-4 pt-5">
                    <div className="col-md-4">
                        <div className="item  ">
                            <img className='w-100' src={img1} alt="" />
                            <div className="layer">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item ">
                            <img className='w-100' src={img2} alt="" />
                            <div className="layer">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item ">
                            <img className='w-100' src={img3} alt="" />
                            <div className="layer">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item ">
                            <img className='w-100' src={img1} alt="" />
                            <div className="layer">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item ">
                            <img className='w-100' src={img2} alt="" />
                            <div className="layer">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item ">
                            <img className='w-100' src={img3} alt="" />
                            <div className="layer">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}
