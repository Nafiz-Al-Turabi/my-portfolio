import React from 'react';

const ProjectCard = () => {
    return (
        <div className='md:flex md:h-[220px] gap-4 shadow-lg rounded-lg border-2 relative '>
            <img className='md:w-80 rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg   object-cover' src="https://i.ibb.co/KGBMGKM/web-development.jpg" alt="" />
            <div className='mt-4 md:mt-0 p-6 md:p-0   '>
                <h1 className='primary-text text-xl font-bold'>Title hhadba asdjhda ahda</h1>
                <p className='secondary-text mt-2 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium amet commodi, deleniti nisi fugiat molestiae! lorem20</p>
                <p className='text-gray-700 '><span
                    className='text-lg primary-text font-bold'
                >Technology:</span> react js tailwind Html Css </p>
                <div className='flex- space-x-4 mt-4'>
                    <a className='text-xl text-white py-2 px-5 bg-[#10637d] rounded-lg' href="">Live Link</a>
                    <a className='text-xl text-white py-2 px-5 bg-[#10637d] rounded-lg' href="">Live Link</a>
                </div>
            </div>
            <p className='bg-cyan-600 bg-opacity-50 text-white text-base md:text-lg  w-40 md:w-44 shadow-lg rounded-tl-lg font-bold py-2 px-5 absolute top-0 left-0'>Responsive: Yes</p>
        </div>
    );
};

export default ProjectCard;