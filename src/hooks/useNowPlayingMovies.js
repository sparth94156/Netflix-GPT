import { useDispatch } from "react-redux"
import { API_OPTION } from "../components/constants"
import { addMovie } from "../utils/movieSlice"
import { useEffect } from "react"

const useNowPlayingMovies = () => {

    const dispatch = useDispatch()

    const fetchNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION)

        const json = await data.json()

        dispatch(addMovie(json.results))

        // console.log(json.results)
    }

    useEffect(() => {
        fetchNowPlayingMovies()
    },[])

}

export default useNowPlayingMovies;