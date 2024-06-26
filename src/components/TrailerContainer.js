import { useSelector } from "react-redux";
import Videotitle from "./videoTitle";
import VideoBackground from "./Videobackground";

const TrailerContainer = () => {

    const movieStore = useSelector(store => store.movies.nowPLayingMovies)

    if(!movieStore) return ;

    const {original_title, overview, id} = movieStore[2];

    return (
        <div className="w-screen">
            <Videotitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default TrailerContainer;