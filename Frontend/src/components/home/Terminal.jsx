import { useEffect, useState } from "react";

export default function Terminal() {
  const texts = ["I'm a Web Developer", "Building Products", "Solving Problems", "Shipping Features"];

  const [textIndex, setTextIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (display.length < currentText.length) {
            setDisplay(currentText.slice(0, display.length + 1));
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          // Deleting
          if (display.length > 0) {
            setDisplay(currentText.slice(0, display.length - 1));
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  });

  return (
    <div className="bg-black text-xl pl-0 p-15 pb-5">
      <span className="font-mono tracking-widest text-primary">
        $ <span className="text-muted-foreground ml-1">{display}</span>
        <span className="ml-1 animate-pulse">_</span>
      </span>
    </div>
  );
}
