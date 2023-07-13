import React from 'react';

const Banner = () => {
    return (
        <div className='pt-20'>
            <div className='md:flex lg:flex items-center gap-10 text-center md:text-left lg:text-left'>
                <div className='text-center'>
                    <img className=' w-60 rounded-full' src="https://i.ibb.co/Q8ZjVdS/My-project-1.jpg" alt="" />
                </div>
                <div>
                    <h1 className='text-4xl md:text-5xl lg:text-8xl primary-text font-semibold '>Nafiz Al Turabi</h1>
                    <p className='text-4xl secondary-text mb-10 mt-5'>Transforming ideas into functional, elegant solutions-lets collaborate!</p>
                    <a href='https://drive.google.com/file/d/1XgHKf_1fIRO6OFtp_xnzi9Xm6bXHJqjx/view?usp=sharing' target="_blank" className='text-2xl text-white bg-[#10637d] py-2 px-3 rounded-lg hover:bg-[#137290] duration-300'>Download Resume</a>
                </div>
            </div>
            <div>
                <h1>About</h1>
                <p>
                    Hello, I'm Nafiz Al Turabi, a passionate and dedicated fullstack web developer. With a strong foundation in both front-end and back-end development, I strive to create engaging and user-friendly web experiences.
                </p>
            </div>
        </div>
    );
};

export default Banner;