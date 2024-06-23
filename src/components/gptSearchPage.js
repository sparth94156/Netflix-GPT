import GptSearchBar from "./gptSearchBar"
import { LOGIN_IMG_URL } from "./constants"
import GptSuggestionPage from "./gptSuggestionPage"
export const GPTSearchPage = () => {
    return (
        <div>
            <div className='fixed -z-10'>
                <img src={LOGIN_IMG_URL} className="h-screen md:h-full object-cover" alt='background' />
            </div>
            <GptSearchBar />
            <GptSuggestionPage/>
        </div>
    )
}

