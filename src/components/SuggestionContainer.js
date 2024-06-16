import { useSelector } from "react-redux";
import MovieCategory from "./MovieCategory";

const SuggestionContainer = () => {

    // reading the nowplayingmovies from the store
    const movieList = useSelector(store => store.movies)

    //  if(!movieList) return ;

    return (
        <div className="bg-black">
            <div className="mx-8 py-2 -mt-[140px] z-40 relative bg-transparent">
                <MovieCategory title={'Now Playing'} movies={movieList.nowPLayingMovies} />
                <MovieCategory title={'Top Rated'} movies={movieList.nowTopRatedMovies} />
                <MovieCategory title={'Popular'} movies={movieList.nowPopularMovies} />
                <MovieCategory title={'Upcoming'} movies={movieList.nowUpcomingMovies} />
            </div>
        </div>
    )
}

export default SuggestionContainer;



