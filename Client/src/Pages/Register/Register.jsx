import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import logo from '../../assets/Icons/logo 1.png'

export default function Register() {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <main className="min-h-[85vh] px-6 py-5 flex flex-col items-center">
            <h1 className="text-[#D7C6B9] text-[32px] font-['DM_Serif_Text']">
                Register
            </h1>

            <div className="w-full max-w-150 bg-[#3B2420] rounded-md mb-7 p-8 mt-10">
                <img
                    src={logo}
                    alt="DevBean logo"
                    className="w-14 h-14 mx-auto"
                />

                <form className="flex flex-col gap-4 mt-6">

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="firstName"
                            className="text-[#E8DDD3] text-[13px] font-['DM_Serif_Text']"
                        >
                            First Name
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            required
                            autoComplete="given-name"
                            placeholder="Enter First Name"
                            className="w-full bg-[#1E1E1E] placeholder:text-[#8f8078] text-[#D7C6B9] text-[14px] font-['DM_Serif_Text'] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#FFB74D]"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="lastName"
                            className="text-[#E8DDD3] text-[13px] font-['DM_Serif_Text']"
                        >
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            required
                            autoComplete="family-name"
                            placeholder="Enter Last Name"
                            className="w-full bg-[#1E1E1E] placeholder:text-[#8f8078] text-[#D7C6B9] text-[14px] font-['DM_Serif_Text'] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#FFB74D]"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="email"
                            className="text-[#E8DDD3] text-[13px] font-['DM_Serif_Text']"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="Enter Email"
                            className="w-full bg-[#1E1E1E] placeholder:text-[#8f8078] text-[#D7C6B9] text-[14px] font-['DM_Serif_Text'] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#FFB74D]"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="password"
                            className="text-[#E8DDD3] text-[13px] font-['DM_Serif_Text']"
                        >
                            Password
                        </label>

                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                required
                                autoComplete="new-password"
                                placeholder="Enter Password"
                                className="w-full bg-[#1E1E1E] placeholder:text-[#8f8078] text-[#D7C6B9] text-[14px] font-['DM_Serif_Text'] rounded pl-3 pr-16 py-2 outline-none focus:ring-2 focus:ring-[#FFB74D]"
                            />

                            <button
                                type="button"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FFB74D] text-[13px] font-['DM_Serif_Text'] cursor-pointer hover:underline"
                            >
                                {showPassword ? <HiEyeOff size={18} /> : <HiEye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-[#FFB74D] text-black text-[14px] font-['DM_Serif_Text'] font-bold rounded cursor-pointer transition-all duration-300 hover:bg-[#ffa726] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        CREATE ACCOUNT
                    </button>
                </form>

                <div className="border-t border-[#D7C6B9]/50 mt-5 pt-4">
                    <p className="text-[#E8DDD3] text-[14px] font-['DM_Serif_Text'] text-center">
                        Already have an account?
                        <Link to="/login" className="text-blue-400 hover:underline pl-1">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}
