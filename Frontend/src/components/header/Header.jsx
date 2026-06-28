import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [active, setActive] = useState("home");
  const links = ["home", "about", "projects", "contact"];
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 flex justify-between px-16 lg:px-36 md:px-24 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-sm border border-b-border" : ""} `}
      >
        {/* Logo */}
        <div className="flex items-center justify-center">
          <span
            className="text-muted-foreground cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            prem
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex gap-12 ">
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

        {/* Hire Me */}
        <div className="hidden lg:flex">
          <button
            className="bg-background cursor-pointer text-muted-foreground py-2 px-5 text-sm font-mono inline-flex gap-2 items-center justify-center border border-border  "
            onClick={() => handleEmailClick()}
          >
            <span>Hire Me</span>
          </button>
        </div>

        <div className=" flex lg:hidden">
          <div className="relative">
            <button
              className="cursor-pointer py-2 px-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
            {isOpen && (
              <div className="bg-background/90 backdrop-blur-md -z-10 shadow-sm border border-b-border flex flex-col gap-3 w-[150px] pr-5 items-start p-2.5 right-0 top-0 absolute ">
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
                <button
                  className="bg-background cursor-pointer text-muted-foreground py-1 px-3 text-[13px] font-mono border border-border  "
                  onClick={() => handleEmailClick()}
                >
                  <span>Hire Me</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
import { Form } from "react-router-dom";

export default Header;
