import Header from "./Header";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from "./MainContainer";
const Browse = () => {

  // Custom hook
  useNowPlayingMovies()


  return (
    <div>
      <Header />
      <MainContainer/>
    </div>
  )
}

export default Browse
