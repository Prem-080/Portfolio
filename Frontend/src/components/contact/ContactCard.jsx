import React from "react";
import { ArrowUpRight } from "lucide-react";

function ContactCard({ contact }) {
  return (
    <>
      <div className="group border border-border rounded-md p-5 hover:border-primary transition-all duration-300 hover:-translate-y-1">
        <div className="text-xs uppercase tracking-widest text-primary font-mono">
          {contact.label}
        </div>

        <div className="mt-2 text-lg font-medium">{contact.value}</div>

        <a
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors"
        >
          {contact.text}
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </>
  );
}

export default ContactCard;
