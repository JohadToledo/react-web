export function Form() {
  return (
    <>
        <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
            </p>
            <div className="relative mb-4">
            <label id="name-label" htmlFor="name" className="leading-7 text-sm text-gray-400">
            <input
            name="from_name"
            className="w-full my-7 h-12 text-[x-large] bg-transparent rounded border-2 border-teal-900 hover:border-teal-600"
            placeholder="  Name"
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
            className="w-full my-7 h-12 text-[x-large] bg-transparent rounded border-2 border-teal-900 hover:border-teal-600"
            placeholder="  Email"
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
            className="w-full my-7 h-36 text-[x-large] bg-transparent border-2 rounded border-teal-900 hover:border-teal-600"
            placeholder="  Message"
            required
            type="text"
            id="Message"
            />
            </label>
            </div>
            <div >
            <button
            className="border-3 rounded w-40 mx-auto bg-teal-500 py-2 text-white text-lg flex justify-center items-center  hover:bg-teal-600"
            type="submit" 
            value="Send"
            >Send</button>
            </div> 
    </>
  )
}
