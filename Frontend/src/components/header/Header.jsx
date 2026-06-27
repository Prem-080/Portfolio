import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [active, setActive] = useState("home");

  const links = ["home", "about", "projects", "contact"];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEmailClick = () => {
    const email = "premkumarsingh355@gmail.com";
    const subject = encodeURIComponent("Hello There");
    const body = encodeURIComponent("Type your message here.");

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 flex justify-around ${scrolled ? "bg-background/90 backdrop-blur-md shadow-sm border border-b-border" : ""} `}
      >
        <div className="flex items-center justify-center">
          <span
            className="text-muted-foreground cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            prem
          </span>
        </div>
        <div className="flex gap-12 ">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => {
                setActive(link);
                scrollToSection(link);
              }}
              className={`cursor-pointer relative text-[12px] text-muted-foreground font-medium hover:text-foreground transition-colors tracking-widest ${
                active == link ? "font-mono" : ""
              }`}
            >
              {link.toUpperCase()}
            </button>
          ))}
        </div>

        <div>
          <button
            className="bg-background cursor-pointer text-muted-foreground py-2 px-5 text-sm font-mono inline-flex gap-2 items-center justify-center border border-border  "
            onClick={() => handleEmailClick()}
          >
            <span>Hire Me</span>
          </button>
        </div>
      </nav>
    </>
  );
}
import { Form } from "react-router-dom";

export default Header;
