import "./contact.css";

export function Contact() {
    return (
    <section id="contact">
        <div className="contact-header">
        <h1>
            <strong>Get in Touch</strong>
        </h1>
        </div>
        <div className="form">
        <form action="">
        <div className="div-name">
            <label id="name-label" htmlFor="name">
            <input
            placeholder="Name"
            required
            type="text"
            id="name"
            />
            </label>
        </div>
        <div className="div-email">
            <label id="email-label" htmlFor="email">
            {" "}
            <input 
            className=""
            placeholder="Email"
            required
            type="email"
            id="email"
            />
            </label>
        </div>
        <div className="div-message">
            <label id="message-label" htmlFor="message">
            <textarea
            rows={6}
            cols={30} 
            className=""
            placeholder="message"
            required
            type="text"
            id="Message"
            />
            </label>
        </div>
        <div className="send-btn">
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
