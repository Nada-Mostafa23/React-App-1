import React, { useEffect } from 'react'


import { Form } from "react-router-dom";

export default function Contact() {
    useEffect(()=>{
        document.title ="Contact"
    },[])

    return <>
        <div className='contact'>
        <div className="container text-center">
            <h1>CONTACT SECTION</h1>
            <div className='after'></div>
            <i class="fa-solid fa-star"></i>
            <div className='before'></div>
            <Form className='mt-5'>
                <input type="text" placeholder='userName' name='userName' className='form-control w-50 mx-auto ' />
                <input type="number" placeholder='userAge' name='userAge' className='form-control w-50 mx-auto my-4 ' />
                <input type="email" placeholder='userEmail' name='userMail' className='form-control w-50 mx-auto  ' />
                <input type="password" placeholder='userPassword' name='userPass' className='form-control w-50 mx-auto my-4 ' />
                <button type='submit'>Send Message</button>
            </Form>
        </div>

        </div>

    </>
}
