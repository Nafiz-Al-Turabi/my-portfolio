import { useForm } from "react-hook-form";
import './Contact.css'
import { useEffect, useRef, useState } from "react";

const Contact = () => {
    const form = useRef();
    const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i86xbgv', 'template_zvrkvpz', form.current, '3gR6qTil8efo699ya')
            .then((result) => {
                console.log(result);
                setIsSubmissionSuccessful(true);
                form.current.reset(); 
            }, (error) => {
                console.log(error.text);
            });
    };
    useEffect(() => {
        let timeoutId;

        if (isSubmissionSuccessful) {
            timeoutId = setTimeout(() => {
                setIsSubmissionSuccessful(false);
            }, 3000); 
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isSubmissionSuccessful]);

    console.log(watch("example"));
    return (
        <div className=" py-32 bg-[#fbfeff]">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl primary-text text-center md:text-left lg:text-left mb-10">Contact Me</h1>
                <div className="md:flex justify-between items-center">
                    <div>
                        <img className="w-96" src="https://i.ibb.co/xgrcpvQ/Get-in-touch-amico.png" alt="" />
                    </div>
                    <form  className="md:w-2/4 lg:w-2/4 grid md:grid-cols-2 lg:grid-cols-2 gap-5" ref={form} onSubmit={handleSubmit(sendEmail)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <div>
                            <input placeholder="Full Name"  {...register("name")} className="shadow-lg rounded-lg w-full  p-3 focus:outline-[#10637d]" />
                        </div>
                        <div>
                            <input placeholder="E-mail Address"  {...register("email")} className="shadow-lg rounded-lg w-full p-3 focus:outline-[#10637d]" />
                        </div>
                        <div className="col-span-2">
                            <input placeholder="Subject"  {...register("subject")} className="shadow-lg rounded-lg w-full  p-3 focus:outline-[#10637d]" />
                        </div>
                        <div className="col-span-2">
                            <textarea placeholder="Message..."  {...register("message")} className="shadow-lg rounded-lg w-full h-52 p-3 focus:outline-[#10637d]" />
                        </div>
                        {isSubmissionSuccessful ? (
                        <div  className="absolute -bottom-12 bg-green-100 border-l-4 border-green-500 py-2 px-4 mt-4">
                            <p className="text-green-700">Message sent successfully !</p>
                        </div>
                    ) : null}
                        <div className="w-1/4">
                            <button>
                                <div class="svg-wrapper-1">
                                    <div class="svg-wrapper">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                                <span type="submit">Send</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;