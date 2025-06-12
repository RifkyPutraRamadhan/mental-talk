import { useState, useEffect } from 'react';

const quotes = [
  {
    text: "Kesehatan mental sama pentingnya dengan kesehatan fisik.",
    author: "Unknown"
  },
  {
    text: "Tidak apa-apa untuk tidak baik-baik saja. Yang penting kamu jujur pada dirimu sendiri.",
    author: "Unknown"
  },
  {
    text: "Merawat pikiranmu sama pentingnya dengan merawat tubuhmu.",
    author: "Unknown"
  },
  {
    text: "Langkah kecil masih merupakan kemajuan. Rayakan setiap kemenangan kecilmu.",
    author: "Unknown"
  }
];

const QuoteBox = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }, 10000); // Ganti kutipan setiap 10 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-box">
      <blockquote>
        <p>"{currentQuote.text}"</p>
        <footer>— {currentQuote.author}</footer>
      </blockquote>
    </div>
  );
};

export default QuoteBox;