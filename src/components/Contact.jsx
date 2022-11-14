import React from "react";
import '../styles/_contact.scss'

function Contact() {
    return (
        <div className="contact-container" id="contact">
            <div className="heading">
                <h1>CONTACT</h1>
            </div>
            <div className="form-container">
                <form action="/" name="contact-us" method="POST">
                    <input type="hidden" name="form-name" value="contact-us"/>
                    <input required name="name" type="text" placeholder="Your Name"/>
                    <input required name="email" type="text" placeholder="Your Email"/>
                    <textarea name="feedback" placeholder="Drop us a line"></textarea>
                    <div className="btn">
                        <input type="submit" name="send" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;