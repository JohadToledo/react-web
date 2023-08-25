import { useState } from "react";

export function Contact() {
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [message, setMessage] = useState('')

        const handleSubmit = e =>{
            e.preventDefault();

            console.log('Name:', name)
            console.log('Email:', email)
            console.log('Message:', message)
            //reset values
            setName('')
            setEmail('')
            setMessage('')
        }
    
    return (
    <section id="contact" className="h-screen w-full flex flex-col items-center">
        <div className="my-9">
        <h1>
            <strong>Get in Touch</strong>
        </h1>
        </div>
        <div className="form w-4/6 flex flex-col">
        <form onSubmit={handleSubmit} action="" name="contact" className="g:w-1/3 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
            </p>
            <div className="relative mb-4">
            <label id="name-label" htmlFor="name" className="leading-7 text-sm text-gray-400">
            <input
            name="name"
            className="w-full my-7 bg-white h-12 text-[x-large]"
            placeholder="Name"
            required
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            </label>
            </div>
            <div className="relative mb-4">
            <label id="email-label" htmlFor="email" className="leading-7 text-sm text-gray-400">
            {" "}
            <input 
            name="email"
            className="w-full bg-white my-7 h-12 text-[x-large]"
            placeholder="Email"
            required
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

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
            value={message}
            onChange={(e) => setMessage(e.target.value)}

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

