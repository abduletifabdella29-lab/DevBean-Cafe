import { Link } from 'react-router-dom'
import logo from '../../assets/Icons/logo 1.png'

export default function Login() {
    return (
        <main className="min-h-[85vh] flex items-center justify-center px-6 py-10 ">
            <div className="w-full max-w-md bg-[#3B2420] rounded-md p-8">
                <img src={logo} alt="DevBean logo" className="w-14 h-14 mx-auto" />

                <h1 className="text-white text-[28px] font-['DM_Serif_Text'] text-center mt-3">
                    Login
                </h1>
                <p className="text-[#D7C6B9] text-[14px] font-['Averia_Serif_Libre'] text-center mt-1">
                    Welcome back! Please login to your account.
                </p>

                <form noValidate className="flex flex-col gap-4 mt-6">
                    {/* ---------- Email ---------- */}
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="email"
                            className="text-[#D7C6B9] text-[14px] font-['DM_Serif_Text']"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            className="bg-[#2A2321] placeholder:text-[#8f8078] text-[#D7C6B9] text-[16px] font-['DM_Serif_Text'] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#FFB74D]"
                        />
                    </div>

                    {/* ---------- Password ---------- */}
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="password"
                            className="text-[#D7C6B9] text-[14px] font-['DM_Serif_Text']"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                className="w-full bg-[#2A2321] placeholder:text-[#8f8078] text-[#D7C6B9] text-[16px] font-['DM_Serif_Text'] rounded pl-3 pr-16 py-2 outline-none focus:ring-2 focus:ring-[#FFB74D]"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FFB74D] text-[13px] font-['DM_Serif_Text'] cursor-pointer hover:underline"
                            >
                                Show
                            </button>
                        </div>
                    </div>

                    {/* ---------- Error message ---------- */}
                    <p role="alert" className="text-red-400 text-[13px] font-['DM_Serif_Text']">
                        Example error message
                    </p>

                    {/* ---------- Submit ---------- */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-[#FFB74D] text-black text-[16px] font-['DM_Serif_Text'] font-bold rounded cursor-pointer transition-all duration-300 hover:bg-[#ffa726] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        Login
                    </button>
                </form>

                <p className="text-[#D7C6B9] text-[14px] font-['DM_Serif_Text'] text-center mt-5">
                    Don't have an account?
                    <Link to="/register" className="text-[#FFB74D] hover:underline pl-1">
                        Register
                    </Link>
                </p>
            </div>
        </main>
    )
}