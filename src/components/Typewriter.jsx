import { useEffect, useState } from 'react';

function Typewriter({ text = "", delay = 100 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayed((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return <h1 className="typewriter-text">{displayed}</h1>;
}

export default Typewriter;
