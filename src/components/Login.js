import React, { useRef, useState } from 'react'
import Header from './Header'
import { formValidation } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { addUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { USER_PROFILE, LOGIN_IMG_URL } from './constants'


const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true) // Hooks should be at the top level of your functional components   

  const [isValidate, setIsValidate] = useState({})

  const [loginError, setloginError] = useState(null)

  const dispatch = useDispatch();

  // useRef hook is used to make a reference to the input field
  const userName = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const toggleSigninForm = () => {

    setIsSigninForm(!isSigninForm); // When the user clicks on sign up signinForm updates to false
    setloginError(null)   // When user clicks on sign up button, it will set the authentication error message to null

    email.current.value = null    // When the user clicks on sign up button it will clear the username and email 
    password.current.value = null
  }

  const handleClickSubmit = () => {
    // console.log(email)   Since we make a reference to the input field so whenever u type some value in input field and click submit, it will store the value inside email reference variable
    // console.log(password)

    // We pass in the value inside reference object created by useRef hook
    const message = formValidation(email.current.value, password.current.value)

    // the state updates to the returned object
    setIsValidate(message)

    // if message is not null then return as it is
    if (message.length) {
      return;
    }

    if (!isSigninForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // Update profile 
          updateProfile(user, {
            displayName: userName.current.value, 
            imageURL: USER_PROFILE
          })
            .then(() => {
              const { uid, email, displayName, imageURL } = auth.currentUser;
              // We again dispatch an action to get the actual updated store data that was null when we sign up
              dispatch(addUser({
                email: email,
                id: uid,
                displayName: displayName,
                imageURL: imageURL
              }))
            })
            .catch((error) => {
              // An error occurred
              setloginError(error.message)
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setloginError(errorCode + " - " + errorMessage)
        });
    }

  }

  return (
    <div className='bg-black h-full'>
      <Header />
      <div className='md:fixed'>
        <img src={LOGIN_IMG_URL}
        className='h-screen object-cover md:h-full'
          alt='background' />
      </div>
      <div className='absolute w-full text-white top-24 md:top-20 '>
        <div className='w-[400px]  bg-black bg-opacity-80 mx-auto flex flex-col pt-8 pb-4 px-10 rounded-md '>
          <form className='flex flex-col gap-y-4 text-white'
            onSubmit={
              (e) => e.preventDefault()
            }>
            <h2 className='text-2xl font-bold mb-2'>
              {isSigninForm ? 'Sign In' : 'Sign Up' }
            </h2>
            {
              !isSigninForm &&
              (<input ref={userName}
                className='bg-black bg-opacity-25 border border-white placeholder:text-[15px] placeholder-slate-300 p-[12px] text-md rounded-md outline-none'
                type='text'
                placeholder='Username'
              />
              )
            }
            <input ref={email}
              className='bg-black bg-opacity-25 border border-white placeholder:text-[15px] placeholder-slate-300 p-[12px] text-md rounded-md outline-none'
              type='text'
              placeholder='Email or mobile number'
            />
            {
              isValidate.email && (<p className='text-red-500'>{isValidate.email}</p>)
            }
            <input ref={password}
              className='bg-black bg-opacity-25 border border-white placeholder:text-[15px] placeholder-slate-300 p-[12px] text-md rounded-md outline-none'
              type='password'
              placeholder='Password' />
            {/* If the value is true then only it executes */}
            {
              loginError && (<p className='text-red-500'>{loginError}</p>)
            }
            <button
              className='hover:bg-red-800 bg-red-700 py-2 rounded-md text-lg'
              onClick={handleClickSubmit}>
              {
                isSigninForm ? 'Sign In' : 'Sign Up'
              }
            </button>
          </form>
          {isSigninForm && (
            <div className='flex flex-col gap-y-3'>
              <span className='hover:underline hover:text-gray-300 text-center cursor-pointer mt-4'>Forgot Password?</span>
            </div>
          )
          }
          {isSigninForm ?
            (<span className='mt-5'>New to Netflix? <span className='cursor-pointer font-semibold mt-[20px] hover:underline' onClick={toggleSigninForm}> Sign up now.</span></span>)
            :
            (<span className='mt-5'>Account already exists? <span className='cursor-pointer font-semibold mt-[20px] hover:underline' onClick={() => window.location.reload()}> Sign in now.</span></span>)
          }
          <span className='my-6 text-sm text-gray-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='cursor-pointer text-blue-700 hover:underline'>Learn more</span>.</span>
        </div>
      </div>

    </div>
  )
}

export default Login
