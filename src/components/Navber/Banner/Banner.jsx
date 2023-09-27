import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto pt-20'>
            <div className='md:flex lg:flex items-center gap-10 text-center md:text-left lg:text-left'>
                <div className="flex justify-center">
                    <img className="w-60 rounded-full" src="https://i.ibb.co/nQqLwt2/img-1.jpg" alt="" />
                </div>

                <div>
                    <h1 className='text-4xl md:text-5xl lg:text-8xl primary-text font-semibold '>Nafiz Al Turabi</h1>
                    <p className='text-2xl md:text-3xl lg:text-4xl secondary-text mb-10 mt-5'>Transforming ideas into functional, elegant solutions-lets collaborate!</p>
                    <a href='https://drive.google.com/file/d/1XgHKf_1fIRO6OFtp_xnzi9Xm6bXHJqjx/view?usp=sharing' target="_blank" className='text-2xl text-white bg-[#10637d] py-2 px-3 rounded-lg hover:bg-[#137290] duration-300'>Download Resume</a>
                </div>
            </div>
            <div className='mt-10'>
                <h1 className=' text-3xl md:text-4xl lg:text-5xl primary-text text-center md:text-left lg:text-left mb-5'>About</h1>
                <p className='text-lg secondary-text text-justify '>
                    Hello, I'm Nafiz Al Turabi, a passionate and dedicated fullstack web developer. With a strong foundation in both front-end and back-end development, I strive to create engaging and user-friendly web experiences. I have several years of experience working as a fullstack web developer, honing my skills and staying up-to-date with the latest industry trends and technologies. Throughout my career, I have successfully completed numerous projects, collaborating with clients to bring their ideas to life and exceed their expectations.
                </p>
            </div>
            <div className="mt-6">
                <div className="flex items-center">
                    <hr className="border-2 border-[#10637d]  w-full mt-2 mr-5 md:hidden" />
                    <h1 className="text-3xl md:text-4xl lg:text-5xl primary-text text-center md:text-left lg:text-left mb-1">Skills</h1>
                    <hr className="border-2 border-[#10637d] w-full mt-2 ml-5" />
                </div>
                <Marquee>
                    <div className="mx-10 p-4">
                        <img className="h-20 w-20" src="https://i.ibb.co/RvsbLb8/tailwind-css.png" alt="" />
                    </div>
                    <div className="mx-10 p-4">
                        <img className="h-20 w-20" src="https://i.ibb.co/tc7z33m/bootstrap.png" alt="" />
                    </div>
                    <div className="mx-10 p-4">
                        <img className="h-20 w-20" src="https://i.ibb.co/L55bLHr/javascript.png" alt="" />
                    </div>
                    <div className="mx-10 p-4">
                        <img className="h-20 w-20" src="https://i.ibb.co/pL7my11/mongodb.png" alt="" />
                    </div>
                    <div className="mx-10 p-4">
                        <img className="h-20 w-20" src="https://i.ibb.co/P5Ls9PM/firebase.png" alt="" />
                    </div>
                    <div className="mx-10 p-4">
                        <img className="h-20 w-20" src="https://i.ibb.co/D5XD9cv/pngfind-com-html-5-logo-png-6834213.png" alt="" />
                    </div>
                    <div className="mx-10 p-4">
                        <img className="h-20 w-20" src="https://i.ibb.co/TgyYCyV/css-1.png" alt="" />
                    </div>
                    <div className="mx-10 p-4">
                        <img className="h-20 w-20" src="https://i.ibb.co/VYdWjfV/figma.png" alt="" />
                    </div>
                    <div className="mx-10 p-4">
                        <img className="h-20 w-20" src="https://i.ibb.co/K7CL35G/vscode.png" alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Banner;