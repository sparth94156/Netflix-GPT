import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const SuggestionContainer = () => {

    const movieList = useSelector(store => store.movies.nowPlayingMovies)

    if(!movieList) return ;

    console.log(movieList)

    return (
        <div>
            <h2>Now Playing</h2>
            <div className="border border-gray-700">
                {
                    movieList.map((movie) => (
                        <div id={movie.id}>
                            <MovieCard movieObj = {movie}/>
                        </div>
                    )
                )
                }
            </div>
        </div>
    )
}

export default SuggestionContainer;