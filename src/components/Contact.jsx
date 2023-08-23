export function Contact() {
    return (
    <section id="contact" className="h-screen w-full flex flex-col items-center">
        <div className="my-9">
        <h1>
            <strong>Get in Touch</strong>
        </h1>
        </div>
        <div className="form w-4/6 flex flex-col">
        <form action="" >
            <label id="name-label" htmlFor="name">
            <input
            className="w-full m-7 bg-white h-12 text-[x-large]"
            placeholder="Name"
            required
            type="text"
            id="name"
            />
            </label>
            <label id="email-label" htmlFor="email">
            {" "}
            <input 
            className="w-full bg-white m-7 h-12 text-[x-large]"
            placeholder="Email"
            required
            type="email"
            id="email"
            />
            </label>
            <label id="message-label" htmlFor="message">
            <textarea
            rows={6}
            cols={30} 
            className="w-full m-7 h-36 bg-white text-[x-large]"
            placeholder="message"
            required
            type="text"
            id="Message"
            />
            </label>
        <div className="border-3 w-40 mx-auto my-0 text-white border-white">
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
