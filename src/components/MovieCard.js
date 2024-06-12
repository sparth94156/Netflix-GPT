const MovieCard = (movieObj) => {

    const {original_title, original_language, release_date} = movieObj;
    console.log(original_title)
    
    return (
        <div className="border border-gray-500">
            <h2>{original_title}</h2>
            <p>{original_language}</p>
            <p>{release_date}</p>
        </div>
    )
}

export default MovieCard;