// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import { SGU1, SGU3 } from '../../../assets';
import './HomeAdmin.css';

function HomeAdmin() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(handleNextSlide, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className=" max-w-800 h-screen w-full m-auto">
            <div id="default-carousel" className="relative mb-4 mt-4 ml-4" data-carousel="static">
                {/* <!-- Carousel wrapper --> */}
                <div className="overflow-hidden relative h-80 rounded-lg sm:h-64 xl:h-96 2xl:h-96">
                    {/* <!-- Item 1 --> */}
                    <div
                        id="carousel-item-1"
                        className={`h-full  duration-700 ease-in-out ${currentIndex === 0 ? 'block fade' : 'hidden'}`}
                        data-carousel-item
                    >
                        <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl">
                            First Slide
                        </span>
                        <img
                            src={SGU1}
                            className="block absolute fade top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                            alt="..."
                        />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div
                        id="carousel-item-2"
                        className={`h-full  duration-700 ease-in-out ${currentIndex === 1 ? 'block fade' : 'hidden'}`}
                        data-carousel-item
                    >
                        <img
                            src={SGU3}
                            className="block absolute fade top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                            alt="..."
                        />
                    </div>
                    {/* <!-- Item 3 --> */}
                    <div
                        id="carousel-item-3"
                        className={`h-full duration-700 ease-in-out ${currentIndex === 2 ? 'block  fade' : 'hidden'}`}
                        data-carousel-item
                    >
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                            className="block absolute fade top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                            alt="..."
                        />
                    </div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    <button
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentIndex === 0 ? 'bg-white' : 'bg-white/50'}`}
                        aria-current={currentIndex === 0 ? 'true' : 'false'}
                        aria-label="Slide 1"
                        data-carousel-slide-to="0"
                        onClick={() => setCurrentIndex(0)}
                    ></button>
                    <button
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentIndex === 1 ? 'bg-white' : 'bg-white/50'}`}
                        aria-current={currentIndex === 1 ? 'true' : 'false'}
                        aria-label="Slide 2"
                        data-carousel-slide-to="1"
                        onClick={() => setCurrentIndex(1)}
                    ></button>
                    <button
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentIndex === 2 ? 'bg-white' : 'bg-white/50'}`}
                        aria-current={currentIndex === 2 ? 'true' : 'false'}
                        aria-label="Slide 3"
                        data-carousel-slide-to="2"
                        onClick={() => setCurrentIndex(2)}
                    ></button>
                </div>
                {/* <!-- Slider controls --> */}
                {/* <button
                    type="button"
                    className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev
                    onClick={handlePrevSlide}
                >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white ing-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-5 h-5 text-white sm:w-6 sm:h-6 "
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            ></path>
                        </svg>
                        <span className="hidden">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-next
                    onClick={handleNextSlide}
                >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white ing-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-5 h-5 text-white sm:w-6 sm:h-6 "
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                        <span className="hidden">Next</span>
                    </span>
                </button> */}
            </div>
            <blockquote className="text-6xl italic font-semibold text-red-600 text-center flex flex-col justify-center h-64">
                <p>Welcome to SGU Smurf village</p>
            </blockquote>
        </div>
    );
}

export default HomeAdmin;
