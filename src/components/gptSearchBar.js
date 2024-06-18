import { useSelector } from "react-redux"
import language from "../utils/appLanguage"

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)

  return (
    <div className="bg-gray flex justify-center align-middle pt-[180px]">
      <form className="w-6/12">
        <input type="text" placeholder={language[langKey].searchPlaceholder} className="border-2 border-slate-800  outline-none p-3 rounded-2xl w-9/12 "></input>
        <button className="bg-red-800 text-white px-1 py-3 rounded-lg w-2/12 ml-[5px]">{language[langKey].Search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
