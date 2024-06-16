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
      .then(() => { })
      .catch((error) => { });
  }

  // When the auth state changes in app, this api will be called (will be called once )
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, imageURL } = user;
        dispatch(addUser({
          id: uid,
          email: email,
          displayName: displayName,
          imageURL: 'https://avatars.githubusercontent.com/u/100994684?v=4'
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
  }, [])

  return (
    <div className=' w-full absolute py-1 px-8 bg-gradient-to-b from-black z-20 flex justify-between '>
      <img className='w-[120px] ml-8 cursor-pointer' src={LOGO} alt='logo' />
      {
        user &&
        <div className='flex gap-x-[460px]'>
          <div className='flex gap-x-3 text-gray-300 text-sm'>
            <button className='font-semibold text-white'>Home</button>
            <button className='hover:text-white'>TV Shows</button>
            <button className='hover:text-white'>Movies</button>
            <button className='hover:text-white'>News & Popular</button>
            <button className='hover:text-white'>My List</button>
            <button className='hover:text-white'>Browse by language</button>
          </div>
          <div className='flex gap-2 text-white text-sm font-semibold'>
            <img className='w-[30px] h-[30px] mt-5 cursor-pointer rounded-full' src={user?.imageURL}
              alt='user-profile' />
            <button className='hover:text-slate-200'
              onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default Header
