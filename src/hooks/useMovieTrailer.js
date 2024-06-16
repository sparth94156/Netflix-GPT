import { useDispatch } from 'react-redux'
import { API_OPTION } from '../components/constants'
import { addTrailer } from '../utils/movieSlice'
import { useEffect } from 'react'

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch()

    const movieTrailer = async () => {

        // fetch Trailer video and updating the store with the trailer data

        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTION)
        const json = await data.json()
    
        // We will filter out the videos of type 'Trailer'
        const filterData = json.results.filter(video => video.type === "Trailer")
        
        // Handling the condition of more than 1 trailer or having no trailer 
        const filteredTrailer = filterData.length ? filterData[0] : json?.results[0];

        dispatch(addTrailer(filteredTrailer))
    }
    
    useEffect(() => {
        movieTrailer()
    },[])
}

export default useMovieTrailer

