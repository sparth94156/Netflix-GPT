import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer"

// Destructured while receiving 
const VideoBackground = ({ movieId }) => {

    // Custom hook for getting movie trailer (we are passing movieId to our custom hook to make our API dynamic)
    useMovieTrailer(movieId)

    const getTrailer = useSelector(store => store.movies.movieTrailer)

    if(!getTrailer) return ;

    return (
        <div className="w-screen">
            <iframe  className="w-screen h-screen pointer-events-none"
            src={"https://www.youtube.com/embed/" + getTrailer?.key + '?autoplay=1&mute=1&showinfo=0&controls=0&rel=0' }
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
        </div>
    )
}

export default VideoBackground;