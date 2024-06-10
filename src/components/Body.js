import React, { useEffect } from 'react'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import Error from './Error'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

  const dispatch = useDispatch()

    const appRouter = createBrowserRouter([
          {
            path:'/',
            element: <Login/>,
            errorElement: <Error/>
            },
            {
                path: '/browse',
                element: <Browse/>
            },
            {
              path: '/login',
              element: <Login/>
            },
    ])
  
  // When the auth state changes in app, this api will be called (will be called once )
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const {uid, email, displayName, imageURL} = user;
          dispatch(addUser({ 
            email: email,
            id: uid, 
            displayName: displayName, 
            imageURL: imageURL
          }))
        } 
        else {
          // User is signed out
          dispatch(removeUser())
          console.log('User signed out')
        }
      });
    },[])

  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
