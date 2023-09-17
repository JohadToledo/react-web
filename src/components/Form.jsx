export function Form() {
  return (
    <>
        <p className="leading-relaxed mb-5 text-xl text-center">
            I&#39;m excited to hear from you and explore how I can contribute to your project.<br/>Feel free to reach out using the form below, and let&#39;s discuss how we can collaborate on something amazing.
            </p>
            <div className="relative mb-4">
            <label id="name-label" htmlFor="name" className="leading-7 text-sm text-red">
            <input
            name="from_name"
            className="w-full my-7 h-12 text-[x-large] bg-transparent rounded border-2 hover:border-yellow"
            placeholder="  Name"
            required
            type="text"
            id="name"
            />
            </label>
            </div>
            <div className="relative mb-4">
            <label id="email-label" htmlFor="email" className="leading-7 text-sm text-red">
            {" "}
            <input 
            name="user_email"
            className="w-full my-7 h-12 text-[x-large] bg-transparent rounded border-2 hover:border-yellow"
            placeholder="  Email"
            required
            type="email"
            id="email"
            />
            </label>
            </div>
            <div className="relative mb-4">
            <label id="message-label" htmlFor="message" className="leading-7 text-sm text-red">
            <textarea
            name="message"
            rows={6}
            cols={30} 
            className="pl-3 pt-2 w-full my-7 h-36 text-[x-large] bg-transparent border-2 rounded hover:border-yellow"
            placeholder="Message"
            required
            type="text"
            id="Message"
            />
            </label>
            </div>
            <div >
            <button
            className="border-3 rounded w-40 mx-auto bg-red py-2 text-white text-lg flex justify-center items-center  hover:bg-orange"
            type="submit" 
            value="Send"
            >Send</button>
            </div> 
    </>
  )
}
