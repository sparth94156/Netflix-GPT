import { useDispatch, useSelector } from "react-redux"
import { API_OPTION } from "../components/constants"
import { addTopRatedMovies } from "../utils/movieSlice"
import { useEffect } from "react"

const useTopRatedMovies = () => {

    const dispatch = useDispatch()

    const nowTopRatedMovies = useSelector(store => store.movies.nowTopRatedMovies)

    const fetchTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION)

        const json = await data.json()

        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(() => {

        !nowTopRatedMovies && fetchTopRatedMovies()
    },[])

}

export default useTopRatedMovies;