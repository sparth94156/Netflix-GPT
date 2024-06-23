import { useDispatch, useSelector } from "react-redux"
import language from "../utils/appLanguage"
import { useRef } from "react"
import openai from "../utils/openAI"
import { API_OPTION } from "./constants"
import { addGptMovies, addUserApi } from "../utils/gptSlice"

const GptSearchBar = () => {

  const dispatch = useDispatch()
  const langKey = useSelector(store => store.config.lang)
  const searchQuery = useRef(null)
  const apiInput = useRef(null)

  const TMDBMovieResult = async (movie) => {

    // fetching the movie details 
    const queryMovie = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTION)
    const data = await queryMovie.json()

    return data.results;
  }

  const handleGptSearchClick = async () => {

    const inputQuery = 'Act like a movie recommendation system, give me names of 5' + searchQuery.current.value + 'movies , comma seperated like the example result given ahead. Example result: War, Chup Chup ke, vastav, kalki, Udaan';

    if (apiInput){
      dispatch(addUserApi(apiInput.current.value))
    }

      const data = await openai.chat.completions.create({
        messages: [{ role: 'user', content: inputQuery }],
        model: 'gpt-3.5-turbo',
      })

      const resultArray = data.choices[0].message.content.split(",")

      // For each movie, I will search TMDB API

      const promiseArray = resultArray.map(movie => TMDBMovieResult(movie))

      const movieDetails = await Promise.all(promiseArray)  // It will executes only after resolving all promises

      dispatch(addGptMovies({ movieNames: resultArray, movieResults: movieDetails }))
    
  }

  return (
    <div className="flex justify-center align-middle">
      <form className="w-[400px] md:w-6/12 mt-[150px]" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchQuery}
          type="text"
          placeholder={language[langKey].searchPlaceholder}
          className="border-2 border-slate-800  outline-none p-3 rounded-2xl w-9/12 ">
        </input>
        <button className="bg-red-800 text-white px-1 py-3 rounded-lg w-[100px] md:w-2/12 md:ml-[5px]"
          onClick={handleGptSearchClick}>
          {language[langKey].Search}  
        </button>
          <input type="text"
            ref={apiInput}
            placeholder={language[langKey].apiKey}
            className="border-2 border-slate-800  outline-none p-3 rounded-2xl w-full md:w-[590px] mt-5">
          </input>
      </form>
    </div>
  )
}

export default GptSearchBar


