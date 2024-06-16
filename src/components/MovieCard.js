import { IMG_CDN_URL } from "./constants";
const MovieCard = ({ posterPath }) => {
    
    return (
        <div className="w-[120px] cursor-pointer">
            <img className="w-[100%]" src={IMG_CDN_URL + posterPath} alt="Movie poster"/>
        </div>
    )
}

export default MovieCard;