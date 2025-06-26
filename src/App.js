import './App.css';
import Typewriter from './components/Typewriter';
import FloatingDecor from './components/FloatingDecor';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

function App() {
  const [showQuote, setShowQuote] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    const quoteTimer = setTimeout(() => {
      setShowQuote(true);
    }, 3000);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => {
      clearTimeout(quoteTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const handleSurpriseClick = () => {
    setShowSurprise(true);

    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <>
      <FloatingDecor />
      <div className="App">
        <div className="typewriter-wrapper">
          <Typewriter text="  अञ्जलि, तव परीक्षायाः सर्वोत्तमं शुभकामना:💖 " />

        </div>

        <div className={`quote-wrapper ${showQuote ? 'visible' : ''}`}>
          <p className="motivational-quote">
            Anju, first of all All the very best for your exams.♥️<br />
            I know you will do great, ani kahi tension nako gheu, jate paper chan.😌
          </p>
        </div>

        <div className={`button-wrapper ${showButton ? 'visible' : ''}`}>
          {!showSurprise && (
            <button className="surprise-btn" onClick={handleSurpriseClick}>
              🎁 Tap for a Surprise
            </button>
          )}
        </div>

        <div className={`surprise-wrapper ${showSurprise ? 'visible' : ''}`}>
          <div className="surprise-message">
            Aik, kahi jast vichar karu nako, aur bata de kon hai tu toh😁
            <br />
            Tenstion vagairah kahi gheu nako, mai hu na tere sath☺️
          </div>
        </div>
      </div>
      <footer className="footer">
        Harshal — All the Best Anju!!!🌿
      </footer>

    </>

  );
}

export default App;
