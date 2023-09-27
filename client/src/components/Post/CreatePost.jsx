import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { SiPhotobucket } from 'react-icons/si'
import { Portrait } from '../../assets'
const CreatePost = ({ isVisiblePost, handleCreatePost, setActiveOverlay }) => {

    const [textInput, setTextInput] = useState(false)
    const handleTextareaChange = (event) => {
        // Check if the textarea has text
        const hasText = event.target.value.trim() !== '';
        setTextInput(hasText);
    };
    return (
        <>
            <motion.div
                initial={{
                    scale: 0,
                    opacity: 0
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                        duration: 0.3,
                        ease: [0.12, 0, 0.39, 0],
                        type: "spring"
                    }
                }}
                exit={{
                    scale: 0,
                    opacity: 0,
                    transition: {
                        duration: 0.15,
                        ease: [0.12, 0, 0.39, 0],
                        type: "spring"
                    }
                }}
                className='fixed inset-0 m-auto w-[600px] h-[600px] bg-white z-10 rounded-lg'>
                <div className="w-full h-full flex flex-col">
                    <p className='text-base text-center font-semibold py-2 border-b'>Create new post</p>
                    <form className="flex flex-col" method='POST' action='#'>
                        <div className="p-4 border-b border-gray-300">
                            <div className="flex">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                                    <img src={Portrait} alt="" className='w-full h-full object-cover' />
                                </div>
                                <textarea
                                    onChange={(e) => handleTextareaChange(e)}
                                    type="text" className='w-[90%] focus:outline-none h-32 resize-none' placeholder='What&#39;s on your mind?' />
                            </div>
                        </div>
                        <div className="px-4 py-2 border-b border-gray-300">
                            <div className="w-full h-full flex">
                                <div className="flex justify-start items-center gap-2 relative px-4 py-2 bg-gray-100 rounded-lg text-gray-400 overflow-hidden group">
                                    <SiPhotobucket size={20} className='group-hover:text-black transition-all' />
                                    <span>Media</span>
                                    <input type="file" name="" id="" accept='.jpg .png .jpeg' className='absolute w-full h-full top-0 left-0 text-[0px] opacity-0 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                        <div className=" px-4 py-2">
                            <button className={`w-full p-2 bg-button text-center rounded-lg text-white ${textInput ? "opacity-100 cursor-pointer" : "opacity-50 cursor-default"}`}>
                                Publish
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
            <div
                onClick={() => {
                    handleCreatePost()
                    setActiveOverlay(0)
                }}
                className="fixed w-full h-screen bg-black/50">
            </div>
            <AiOutlineClose
                onClick={() => {
                    handleCreatePost()
                    setActiveOverlay(0)
                }}
                size={22}
                className='fixed top-4 right-4 text-white cursor-pointer hover:rotate-[360deg] transition-all duration-300' />
        </>
    )
}

export default CreatePost
