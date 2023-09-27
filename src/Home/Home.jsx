import React from 'react';
import Banner from '../components/Navber/Banner/Banner';
import Experience from '../components/Navber/Experience/Experience';
import MyProjects from '../components/MyProjects/MyProjects';
import Contact from '../components/Contact/Contact';
import Projects from '../components/Projects/Projects';

const Home = () => {
    return (
        <div className='px-4  md:px-4 lg:px-0 '>
            <Banner></Banner>
            <Experience></Experience>
            <MyProjects></MyProjects>
            <Contact></Contact>
            <Projects></Projects>
        </div>
    );
};

export default Home;