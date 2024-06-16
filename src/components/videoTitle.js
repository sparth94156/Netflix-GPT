import { useState } from "react"

const Videotitle = ({title, overview}) => {

    const [showInfo, setShowInfo] = useState(false)

    const handleInfo = () => {
        setShowInfo(!showInfo)
    }
    return (
        <div className="pt-40 pl-16 w-5/12 absolute text-white">
            <h2 className="font-bold text-2xl mb-5">{title}</h2>
            {
                showInfo && (<p className="text-justify text-[15px]">{overview}</p>)
            }
            <div className="my-5">
                <button className="bg-white mr-5 px-4 py-2 text-black rounded-sm font-semibold hover:bg-slate-300 bg-opacity-60">▶️ Play</button>
                <button className="bg-gray-500 px-4 py-2 text-white rounded-sm font-semibold hover:bg-gray-600 bg-opacity-60" onClick={handleInfo}>
                {
                    showInfo ? 'ℹ️ Hide Info' : 'ℹ️ More Info'
                } 
                </button>
            </div>
        </div>
    )
}

export default Videotitle;