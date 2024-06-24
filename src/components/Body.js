import React from 'react'
import { createBrowserRouter, useParams } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import Error from './Error'
import MovieInfo from './MovieInfo'
import { useSelector } from 'react-redux'


const Body = () => {

    const appRouter = createBrowserRouter([
          {
            path:'/',
            element: <Login/>,
            errorElement: <Error/>
            },
            {
                path: '/browse',
                element: <Browse/>,
            },
            {
              path: '/login',
              element: <Login/>
            },
            {
              path: '/browse/:movieId',
              element: <MovieInfo/>
            }
            
    ])
  
  

  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
