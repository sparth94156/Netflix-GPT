import Header from "./Header";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
const Browse = () => {

  // Custom hook
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()


  return (
    <div className="overflow-x-hidden">
      <Header />
      <MainContainer/>
    </div>
  )
}

export default Browse
