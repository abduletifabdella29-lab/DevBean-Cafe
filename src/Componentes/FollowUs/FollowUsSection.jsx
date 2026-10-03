import React from 'react'
import { FaHeart, FaInstagram } from "react-icons/fa";
import { FollowUsSectionData } from "./FollowUsSectionData.js";

function FollowUsSection({ posts = FollowUsSectionData }) {
    return (
        <>
            <div className='bg-[#3E2723]'>
                <h1 className='text-[#D7C6B9] text-center text-[32px] pt-14 font-[DM_Serif_Text]'>FOLLOW US <span className='text-[#64FFDA]'>@DEVBEAN</span></h1>
                <p className='text-[#D7C6B9] font-[DM_Serif_Text] text-center text-[16px] pt-4 pb-13'>Tag us in your coffee moments</p>

                {/* Cards */}
                <div className='mx-auto grid max-w-[1150px] grid-cols-2 gap-2 px-4 md:grid-cols-3 lg:grid-cols-6'>
                    {posts.map((post) => (
                        <div key={post.id} className='overflow-hidden rounded-md bg-[#121212] transition-transform duration-400 hover:-translate-y-1'>
                            <div className='h-40 bg-[#1f1f1f]'>
                                <img src={post.image} alt={post.title} className='h-full w-full object-cover' />
                            </div>

                            {/* Info */}
                            <div className='space-y-2 px-3.5 py-3.5 font-[DM_Serif_Text]'>
                                <h3 className='flex items-center gap-1 text-[13px] font-semibold text-white'>
                                    {post.title}
                                </h3>
                                <p className='text-[11px] text-neutral-400'>{post.tag}</p>
                                <p className='flex items-center gap-1.5 text-[11px] text-[#f5a53a]'>
                                    <FaHeart size={12} className='text-red-500' />
                                    {post.likes} likes
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Follow button */}
                <div className='flex items-center justify-center pt-10 pb-14'>
                    <a
                        href='#'
                        rel="noopener noreferrer"
                        className='inline-flex items-center gap-[0.4em] rounded-full bg-[#FFB74D] px-3 py-3 text-[16px] text-[#121212] font-[Averia_Serif_Libre] shadow-md transition-all duration-400 hover:-translate-y-0.5 hover:bg-[#E3983E]'
                    >
                        Follow on Instagram
                        <FaInstagram className='text-xl' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default FollowUsSection