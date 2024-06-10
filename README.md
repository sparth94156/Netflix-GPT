# Netflix GPT

- create react app
- configure tailwindCSS


# Features 

- Login/Sign Up
    - Login/Signup Form (Will autoamatically redirects to the login page when routing to the browse page without Login/Sign Up)
    - redirect to the browse page
    - Created a Sign-in/ Sign-up form from the same Sign-in component
    - Form Validation
    - Uses useRef hook for Form Validation
    - Setup Firebase
    - Deploy the app to production
    - Authentication for Sign-in/Sign-up
    - Create a store
    - Provide store to app
    - Implemented (onauthStateChanged) for authentication for Sign-in/Sign-up 
    - Dispatched the action for writing the store whenever we do Sign-in/Sign-up/Sign-out
    - Updates the user profile when Sign-in/Login
    - Bug Fix - User Sign in displayName and imageProfile update
    - Bug Fix - User not signed in then redirect from /Browse to /Login page and vice versa
    - Unsubscribe onauthStateChanged when component unmounts
    - Added hardcoded string and URLs into a single constant file
    - Fetch Movies from TMDB Api

- Browse (after authentication)
    - Header
    - Main Movie
        - Movie trailer
        - Movie title & description
        - Movie suggestions
            - Movie Genre Titles
            - MovieLists * N

- Netflix GPT
    - Search bar
    - Movie suggestions

     
