import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">
      <p className="contact-header">HIT ME UP!</p>
      <form
        id="myForm"
        method="POST"
        action="https://formspree.io/erichkopp@gmail.com"
      >
        <input
          className="email"
          type="email"
          name="email"
          placeholder="Your E-Mail"
        />
        <textarea name="message" placeholder="Your Message..." />
        <input type="hidden" name="_subject" value="New submission!" />
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <input className="submit-button" type="submit" value="SEND" />
      </form>
    </div>
  );
}
