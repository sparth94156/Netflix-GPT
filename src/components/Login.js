import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true) // Hooks should be at the top level of the functional components   

  const toggleSigninForm = () => {

    setIsSigninForm(!isSigninForm); // When the user clicks on sign up signinForm updates to false
  }
  return (
    <div className='bg-black'>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='background' />
      </div>
      <div className='absolute w-full text-white top-20 '>
        <div className='w-4/12  bg-black bg-opacity-80 mx-auto flex flex-col py-10 px-10 rounded-md '>
          <form className='flex flex-col gap-y-4 text-white'>
            <h2 className='text-3xl font-bold mb-2'>
              {isSigninForm ? 'Sign In' : 'Sign Up'}
            </h2>
            {!isSigninForm &&
              (<input className='bg-black bg-opacity-25 border border-white placeholder:text-[15px] placeholder-slate-300 place p-4 text-md rounded-md' type='text' placeholder='Username' />)
            }
            <input className='bg-black bg-opacity-25 border border-white placeholder:text-[15px] placeholder-slate-300 place p-4 text-md rounded-md' type='text' placeholder='Email or mobile number' />
            <input className='bg-black bg-opacity-25 border border-white placeholder:text-[15px] placeholder-slate-300 p-4 text-md rounded-md' type='password' placeholder='Password' />
            <button className='hover:bg-red-800 bg-red-700 py-2 rounded-md text-lg'>{isSigninForm ? 'Sign In' : 'Sign Up'}</button>
          </form>
          {isSigninForm && (
            <div className='flex flex-col gap-y-3'>
              <span className='text-center mt-[10px]'>OR</span>
              <button className='bg-gray-500 bg-opacity-60 py-2  rounded-md text-lg hover:bg-opacity-50'>Use a sign-in code</button>
              <span className='hover:underline hover:text-gray-300 text-center cursor-pointer '>Forgot Password?</span>
              <div className='flex'>
                <input className='mr-2 border-none cursor-pointer' type='checkbox' /><span className='text-md'>Remember me</span><br />
              </div>
            </div>
          )
          }
          {isSigninForm ? (<span className='mt-5'>New to Netflix? <span className='cursor-pointer font-semibold mt-[20px] hover:underline' onClick={toggleSigninForm}> Sign up now.</span></span>)
            : (<span className='mt-5'>Account already exists? <span className='cursor-pointer font-semibold mt-[20px] hover:underline' onClick={toggleSigninForm}> Sign in now.</span></span>)}
          <span className='my-6 text-sm text-gray-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='cursor-pointer text-blue-700 hover:underline'>Learn more</span>.</span>
        </div>
      </div>

    </div>
  )
}

export default Login