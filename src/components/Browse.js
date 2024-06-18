import Header from "./Header";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { GPTSearchPage } from "./gptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {

  const gptSearch = useSelector(store => store.gpt.gptSearchShow)  

  // Custom hook
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div className="overflow-x-hidden">
      <Header />
      {
        gptSearch ? <GPTSearchPage/> : <MainContainer/>
      }
    </div>
  )
}

export default Browse
