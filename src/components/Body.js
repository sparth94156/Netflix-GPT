import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import Error from './Error'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login/>,
            children: [{
                path: '/browse',
                element: <Browse/>
            },
            {
              path: '/login',
              element: <Login/>
            }
            ],
            errorElement: <Error/>
        }  
    ])
  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
