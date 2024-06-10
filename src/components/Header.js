import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from './constants'

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector(store => store.user) // subscribe to the store (accesing the user reducer fn)

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {});
  } 

   // When the auth state changes in app, this api will be called (will be called once )
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid, email, displayName, imageURL} = user;
        dispatch(addUser({ 
          id: uid, 
          email: email,
          displayName: displayName, 
          imageURL: imageURL
        }))
        navigate('/browse')
      } 
      else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    });
    // Cleanup (return a callback that unsubscribe auth when compoonent umnounts)
    return () => unsubscribe();
  },[])

  return (
    <div className=' w-full absolute py-3 px-8 bg-gradient-to-b from-black z-20 flex justify-between'>
      <img className='w-[180px] ml-5 cursor-pointer' src={LOGO} alt='logo' />
      {
      user && 
      <div className='flex gap-2 '>
        <img className='w-[40px] h-[40px] mt-8 cursor-pointer rounded-full' src={user?.imageURL}
          alt='user-profile' />
        <button className=' text-white font-semibold hover:underline'
          onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      }
    </div>
  )
}

export default Header
