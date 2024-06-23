import { IMG_CDN_URL } from "./constants";
const MovieCard = ({ posterPath }) => {
    
    if(!posterPath) return null;

    return (
        <div className="w-[95px] md:w-[122px] cursor-pointer relative">
            <img className="w-[100%]" src={IMG_CDN_URL + posterPath} alt="Movie poster"/>
        </div>
    )
}

export default MovieCard;