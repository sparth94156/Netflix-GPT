import MovieCard from './MovieCard';

const MovieCategory = ({ title, movies }) => {

    // Not of movies is true then return nothing
    if (!movies) return;    // it quickly access the movie inside store even before the data is stored so we need to write condition
    return (
        <div className='mb-5'>
            <div>
                <h2 className="text-white text-xl font-semibold my-3">{title}</h2>
            </div>
            {/* I have installed an external plugin to hide the scrollbar */}
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className='flex gap-x-3'>
                    {
                        movies.map(movie => (<MovieCard key={movie.id} posterPath={movie.poster_path} />)
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default MovieCategory
