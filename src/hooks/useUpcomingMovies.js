import { useDispatch, useSelector } from "react-redux"
import { API_OPTION } from "../components/constants"
import { addUpcomingMovies } from "../utils/movieSlice"
import { useEffect } from "react"

const useUpcomingMovies = () => {

    const dispatch = useDispatch()

    const nowUpcomingMovies = useSelector(store => store.movies.nowUpcomingMovies)

    const fetchUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTION)

        const json = await data.json()

        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(() => {
    
    //  memoization
       !nowUpcomingMovies && fetchUpcomingMovies()
    },[])

}

export default useUpcomingMovies;