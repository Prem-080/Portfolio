import React from "react";
import { Divider, Button, ContactCard } from "../index";
import { contacts } from "./contactData.js";

function Contact() {
  return (
    <>
      <div
        id="contact"
        className="z-100 w-full min-h-full relative bg-black text-muted-foreground px-18 py-30"
      >
        <span className="font-mono tracking-widest text-primary">
          $ ./<span className="text-white">contact.sh</span>
          <span className="animate-pulse">_</span>
        </span>

        <h2 className="text-5xl font-semibold mt-10">
          Let's build something together.
        </h2>

        <p className="text-muted-foreground max-w-2xl mt-6">
          Whether it's an internship, a full-time opportunity, or an exciting
          project, I'd love to hear from you.
        </p>
        <div className="grid grid-cols-2 mt-6 ">
          {contacts.map((contact) => (
            <ContactCard key={contact.label} contact={contact}  />
          ))}
        </div>
      </div>

      <Divider />
    </>
  );
}

export default Contact;
