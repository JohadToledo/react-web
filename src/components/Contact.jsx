import { useRef } from "react";
import emailjs from 'emailjs-com';
import { Form } from "./Form";
import Footer from "./Footer";

export function Contact() {
        const form = useRef()

        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_bf3rqvk', 'template_9eeag5n', form.current, 'IrswQ6NsCEaR6UaUN')
            .then((result) => {
                console.log(result.text);
                form.current.reset()
            }, (error) => {
                console.log(error.text);
            });
        };

        
    return (
    <section id="contact" className="h-screen w-screen max-w-7xl flex flex-col items-center py-16 md:py-20 lg:py-20">
        <div className="">
        <h1 className="my-10 text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]">
            Get in Touch
        </h1>
        </div>
        <div className="form w-4/6 flex flex-col mb-10">
        <form 
            onSubmit={ sendEmail } 
            ref={form} id='contact-form' 
            name="contact" 
            className="g:w-1/3 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 pb-10">
            <Form />
        </form>
        </div>
        <Footer />
    </section>
  );
}

