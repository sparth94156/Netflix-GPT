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
import { clearGptMovies, toggleGptSearch } from '../utils/gptSlice'
import { languageConstant } from './constants'
import { selectLanguage } from '../utils/configSlice'

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector(store => store.user) // subscribe to the store (accesing the user reducer fn)
  const gptShowSearch = useSelector(store => store.gpt.gptSearchShow)

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

  const handleGptSearch = () => {

    dispatch(toggleGptSearch()) 

    if(gptShowSearch) return dispatch(clearGptMovies())
  }

  const handleLangChange = (e) => {

    dispatch(selectLanguage(e.target.value))
  }

  return (
    <div className=' w-full absolute py-1 px-8 bg-gradient-to-b from-black z-20 flex justify-between '>
      <img className='w-[120px] ml-8 cursor-pointer' src={LOGO} alt='logo' />
      {
        user &&
        <div className='flex'>
          <div className='flex gap-3 text-white text-sm font-semibold'>
            {
              gptShowSearch &&
              <select className='bg-slate-900 text-white my-4 p-2 rounded-md outline-none' onChange={handleLangChange}>
                {
                  languageConstant.map(lang => <option key={lang.identifier} value={lang.identifier}>
                    {lang.langkey}
                  </option>)
                }
              </select>
            }
            <div className='flex gap-x-3 text-gray-300 text-sm'>
              <button className='hover:text-white font-semibold'
                onClick={handleGptSearch}>
                {gptShowSearch ? 'Homepage' : 'GPT Search'}
              </button>
            </div>
            <img className='w-[30px] h-[30px] mt-5 cursor-pointer rounded-full' src={user?.imageURL}
              alt='user-profile' />
            <button className='hover:text-slate-200 text-nowrap'
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
