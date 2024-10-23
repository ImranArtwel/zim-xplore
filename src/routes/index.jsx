import React from "react";
import ContactForm from "../ContactForm";

const Support = () => {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center text-white">Zim Xplore Contact Form</h1>
        <p className="text-white">
          Thank you for trusting us with your Zimbabwean journey! While we may
          not be able to respond to each message individually, please know that
          your concerns and feedback are invaluable. We will share them with our
          team, who are continuously working to improve and enhance your
          experience.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Support;
