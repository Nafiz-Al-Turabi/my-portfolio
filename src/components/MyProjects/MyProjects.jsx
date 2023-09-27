import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const MyProjects = () => {
    return (
        <div className=' max-w-7xl mx-auto my-32'>
            <div className='md:flex items-center gap-6'>
                <div>
                    <h1 className='text-4xl md:text-2xl lg:text-5xl font-bold secondary-text'>MY Creative work <br /> Latest <span className='primary-text'>Projects</span> </h1>
                    <p className='text-lg  text-gray-500 my-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repellendus recusandae, sed quidem nulla error? Facere tempore consequuntur saepe sunt laudantium voluptate esse ad dolore veniam corporis! Voluptatem, provident praesentium!</p>
                    <button className=' text-white bg-[#10637d] py-2 px-4 rounded-lg hover:bg-[#137290] duration-300 mt-2'>See more</button>
                </div>
                <div className='md:w-[60%]  m-3'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='shadow-lg rounded-lg my-5'>
                                <img className='rounded-t-lg' src="https://i.ibb.co/cYtn8pR/ranna.png" alt="" />
                                <div className='p-2'>
                                    <h1 className='text-xl font-semibold'>Ranna</h1>
                                    <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, labore!</p>
                                    <a href="https://chef-recipe-hunting-b7944.web.app/" target='blank'>
                                        <button className=' text-white bg-[#10637d] py-2 px-3 rounded-lg hover:bg-[#137290] duration-300 w-full mt-2'><img className='h-4 w-4 mr-2' src="https://i.ibb.co/qn8kbCx/red-circle-png-32255.png" alt="" />Live Site</button>
                                    </a>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-lg rounded-lg my-5'>
                                <img className='rounded-t-lg' src="https://i.ibb.co/vLbsPYC/toyman.png" alt="" />
                                <div className='p-2'>
                                    <h1 className='text-xl font-semibold'>ToyMan</h1>
                                    <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, labore!</p>
                                    <a href="https://toy-marketplace-7a3cc.web.app/" target='blank'>
                                        <button className=' text-white bg-[#10637d] py-2 px-3 rounded-lg hover:bg-[#137290] duration-300 w-full mt-2'><img className='h-4 w-4 mr-2' src="https://i.ibb.co/qn8kbCx/red-circle-png-32255.png" alt="" />Live Site</button>
                                    </a>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-lg rounded-lg my-5'>
                                <img className='rounded-t-lg' src="https://i.ibb.co/vknbq9S/jobHelp.png" alt="" />
                                <div className='p-2'>
                                    <h1 className='text-xl font-semibold'>Job Help</h1>
                                    <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, labore!</p>
                                    <a href="https://fantastic-kringle-84ddf9.netlify.app/" target='blank'>
                                        <button className=' text-white bg-[#10637d] py-2 px-3 rounded-lg hover:bg-[#137290] duration-300 w-full mt-2'><img className='h-4 w-4 mr-2' src="https://i.ibb.co/qn8kbCx/red-circle-png-32255.png" alt="" />Live Site</button>
                                    </a>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-lg rounded-lg my-5'>
                                <img className='rounded-t-lg' src="https://i.ibb.co/Q8ZjVdS/My-project-1.jpg" alt="" />
                                <div className='p-2'>
                                    <h1 className='text-xl font-semibold'>Nafiz al turabi</h1>
                                    <p className='text-gray-500'>Code</p>
                                    <button className=' text-white bg-[#10637d] py-2 px-3 rounded-lg hover:bg-[#137290] duration-300 w-full mt-2'><img className='h-4 w-4 mr-2' src="https://i.ibb.co/qn8kbCx/red-circle-png-32255.png" alt="" />Live Site</button>
                                </div>

                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
{/* */ }