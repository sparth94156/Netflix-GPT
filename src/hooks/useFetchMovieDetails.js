import { useEffect, useState } from 'react'
import { API_OPTION } from '../components/constants'

const useFetchMovieDetails =  ({movieId}) => {

    const [movieInfo, setMovieInfo]= useState(null)

    const fetchMovieInfo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '?language=en-US', API_OPTION)
        const json = await data.json()
        setMovieInfo(json)
        console.log(json)
    }
   
    useEffect( () => {
        fetchMovieInfo();
    },[])
  
    return movieInfo;
}

export default useFetchMovieDetails
