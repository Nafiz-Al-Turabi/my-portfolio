import React from 'react';
import Banner from '../components/Navber/Banner/Banner';
import Experience from '../components/Navber/Experience/Experience';
import MyProjects from '../components/MyProjects/MyProjects';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto px-4  md:px-4 lg:px-0 '>
            <Banner></Banner>
            <Experience></Experience>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;