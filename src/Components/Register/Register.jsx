import React, { useState } from 'react'
import './regis.css'

const Register = ({open, setOpen}) => {


    const [state , setState] = useState("Register");

    const  handleClick =()=>{
         setOpen(false) ;
    }

  return (
    <div className='register  p-10 flex justify-center items-center'>
        <div className="reg-details relative bg-yellow-50 border border-yellow-400 p-7 rounded-lg shadow-lg">
                <h3 className='text-center text-2xl my-3 uppercase font-[550] '>{state}</h3>
                <i onClick={handleClick} class='bx bx-x absolute top-0 right-0 text-[22px] m-4 text-red-500 cursor-pointer font-bold'></i>
            <div className="input">
                <div className='flex justify-between my-4'>
                    <label htmlFor="name">Name</label>
                    <input id='name' type="text" placeholder='Enter your name'/>
                </div>
                <div className='flex justify-between my-4'>
                    <label htmlFor="mail">Mail</label>
                    <input id='mail' type="email" placeholder='Enter your email'/>
                </div>
                <div className='flex justify-between my-4'>
                    <label htmlFor="password" className='mr-2'>Password</label>
                    <input id='password' type="email" placeholder='Create your password '/>
                </div>
                <div className='text-center'>
                    <button className='w-full bg-red-600 text-white rounded-lg p-2'>{state}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register