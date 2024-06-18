import GptSearchBar from "./gptSearchBar"
import { LOGIN_IMG_URL } from "./constants"
export const GPTSearchPage = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img src={LOGIN_IMG_URL} alt='background' />
            </div>
            <GptSearchBar />
        </div>
    )
}

