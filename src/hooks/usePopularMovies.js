import { useDispatch, useSelector } from "react-redux"
import { API_OPTION } from "../components/constants"
import { addPopularMovies } from "../utils/movieSlice"
import { useEffect } from "react"

const usePopularMovies = () => {

    const dispatch = useDispatch()

    const nowPopularMovies = useSelector(store => store.movies.nowPopularMovies)


    const fetchPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION)

        const json = await data.json()

        dispatch(addPopularMovies(json.results))
    }

    useEffect(() => {

        !nowPopularMovies && fetchPopularMovies()
    },[])

}

export default usePopularMovies;