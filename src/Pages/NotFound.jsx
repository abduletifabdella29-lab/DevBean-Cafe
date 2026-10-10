import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <main className="bg-[#121212] min-h-screen flex flex-col items-center justify-center gap-5 px-6 text-center">
            <p className="text-[#FFB74D] text-[100px] font-['DM_Serif_Text'] leading-none">
                404
            </p>

            <h1 className="text-white text-[30px] font-['DM_Serif_Text']">
                Page Not Found
            </h1>

            <p className="text-[#D7C6B9] text-base font-['DM_Serif_Text'] max-w-md">
                Sorry, we couldn't find the page you're looking for. <br /> Please go back or return to our home page.
            </p>

            <div className="flex items-center gap-4 mt-2">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-6 py-3 rounded bg-[#FFB74D] text-black text-sm font-['DM_Serif_Text'] font-bold transition-all duration-400 hover:bg-[#ffa726]"
                >
                    <FaArrowLeft size={16} />
                    Go Back
                </button>

                <Link
                    to="/"
                    className="px-6 py-3 rounded border border-[#FFB74D] text-[#FFB74D] text-sm font-['DM_Serif_Text'] font-bold transition-all duration-400 hover:bg-[#FFB74D] hover:text-black"
                >
                    Home
                </Link>
            </div>
        </main>
    )
}