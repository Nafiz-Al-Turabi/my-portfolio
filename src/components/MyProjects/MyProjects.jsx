import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const MyProjects = () => {
    return (
        <div className='my-32'>
            <div className='md:flex items-center gap-6'>
                <div>
                    <h1 className='text-4xl font-bold secondary-text'>MY Creative work <br /> Latest <span className='primary-text'>Projects</span> </h1>
                    <p className='text-lg text-justify text-gray-500 my-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repellendus recusandae, sed quidem nulla error? Facere tempore consequuntur saepe sunt laudantium voluptate esse ad dolore veniam corporis! Voluptatem, provident praesentium!</p>
                    <button className=' text-white bg-[#10637d] py-2 px-4 rounded-lg hover:bg-[#137290] duration-300 mt-2'>See more</button>
                </div>
                <div className='md:w-[60%]  m-3'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='shadow-lg rounded-lg my-5'>
                                <img className='rounded-t-lg' src="https://i.ibb.co/Q8ZjVdS/My-project-1.jpg" alt="" />
                                <div className='p-2'>
                                    <h1 className='text-xl font-semibold'>Nafiz al turabi</h1>
                                    <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, labore!</p>
                                    <button className=' text-white bg-[#10637d] py-2 px-3 rounded-lg hover:bg-[#137290] duration-300 w-full mt-2'>Live Site</button>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-lg rounded-lg my-5'>
                                <img className='rounded-t-lg' src="https://i.ibb.co/Q8ZjVdS/My-project-1.jpg" alt="" />
                                <div className='p-2'>
                                    <h1 className='text-xl font-semibold'>Nafiz al turabi</h1>
                                    <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, labore!</p>
                                    <button className=' text-white bg-[#10637d] py-2 px-3 rounded-lg hover:bg-[#137290] duration-300 w-full mt-2'>Live Site</button>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-lg rounded-lg my-5'>
                                <img className='rounded-t-lg' src="https://i.ibb.co/Q8ZjVdS/My-project-1.jpg" alt="" />
                                <div className='p-2'>
                                    <h1 className='text-xl font-semibold'>Nafiz al turabi</h1>
                                    <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, labore!</p>
                                    <button className=' text-white bg-[#10637d] py-2 px-3 rounded-lg hover:bg-[#137290] duration-300 w-full mt-2'>Live Site</button>
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
