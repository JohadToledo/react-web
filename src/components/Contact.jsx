import { useRef } from "react";
import emailjs from 'emailjs-com';



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
    <section id="contact" className="h-screen w-full flex flex-col items-center">
        <div className="my-9">
        <h1>
            <strong>Get in Touch</strong>
        </h1>
        </div>
        <div className="form w-4/6 flex flex-col">
        <form onSubmit={ sendEmail } ref={form} id='contact-form' action="" name="contact" className="g:w-1/3 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
            </p>
            <div className="relative mb-4">
            <label id="name-label" htmlFor="name" className="leading-7 text-sm text-gray-400">
            <input
            name="from_name"
            className="w-full my-7 bg-white h-12 text-[x-large]"
            placeholder="Name"
            required
            type="text"
            id="name"
            />
            </label>
            </div>
            <div className="relative mb-4">
            <label id="email-label" htmlFor="email" className="leading-7 text-sm text-gray-400">
            {" "}
            <input 
            name="user_email"
            className="w-full bg-white my-7 h-12 text-[x-large]"
            placeholder="Email"
            required
            type="email"
            id="email"

            />
            </label>
            </div>
            <div className="relative mb-4">
            <label id="message-label" htmlFor="message" className="leading-7 text-sm text-gray-400">
            <textarea
            name="message"
            rows={6}
            cols={30} 
            className="w-full my-7 h-36 bg-white text-[x-large]"
            placeholder="message"
            required
            type="text"
            id="Message"

            />
            </label>
            </div>
            <div className="border-3 rounded w-40 mx-auto bg-teal-500 py-2 text-white text-lg flex justify-center items-center  hover:bg-teal-600">
            <input 
            type="submit" 
            value="Send"
            />
            </div> 
        </form>
        </div>
    </section>
  );
}

