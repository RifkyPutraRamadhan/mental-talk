import { useState } from 'react';

const questions = [
  {
    question: "Apa yang biasanya kamu lakukan ketika merasa stres?",
    options: [
      "Mencari teman untuk berbicara",
      "Menyendiri dan menangis",
      "Melakukan aktivitas fisik",
      "Mengabaikan perasaan"
    ],
    correctAnswer: "Mencari teman untuk berbicara"
  },
  {
    question: "Berapa jam tidur yang direkomendasikan untuk orang dewasa?",
    options: [
      "4-5 jam",
      "6-7 jam",
      "7-9 jam",
      "Lebih dari 10 jam"
    ],
    correctAnswer: "7-9 jam"
  },
  {
    question: "Apa yang BUKAN termasuk praktik self-care yang baik?",
    options: [
      "Meditasi teratur",
      "Makan makanan sehat",
      "Mengisolasi diri dari semua orang",
      "Berolahraga secara teratur"
    ],
    correctAnswer: "Mengisolasi diri dari semua orang"
  },
  {
    question: "Apa manfaat utama dari journaling (menulis jurnal)?",
    options: [
      "Mengabaikan emosi negatif",
      "Mengatur pikiran dan perasaan",
      "Mengisi waktu luang",
      "Melatih kemampuan mengetik"
    ],
    correctAnswer: "Mengatur pikiran dan perasaan"
  },
  {
    question: "Latihan pernapasan dalam bermanfaat untuk?",
    options: [
      "Menambah berat badan",
      "Menghindari olahraga",
      "Mengelola stres dan kecemasan",
      "Mengurangi kebutuhan tidur"
    ],
    correctAnswer: "Mengelola stres dan kecemasan"
  },
  {
    question: "Apa tanda umum seseorang mengalami burnout?",
    options: [
      "Merasa segar setiap hari",
      "Penuh semangat bekerja",
      "Kelelahan emosional dan fisik",
      "Rajin olahraga"
    ],
    correctAnswer: "Kelelahan emosional dan fisik"
  },
  {
    question: "Mengapa penting untuk membatasi waktu penggunaan media sosial?",
    options: [
      "Agar tidak kehabisan kuota",
      "Untuk menjaga kesehatan mental",
      "Supaya bisa main game lebih banyak",
      "Biar bisa tidur sepanjang hari"
    ],
    correctAnswer: "Untuk menjaga kesehatan mental"
  },
  {
    question: "Mendengarkan musik yang menenangkan dapat membantu untuk?",
    options: [
      "Menambah rasa lapar",
      "Mengurangi stres dan meningkatkan fokus",
      "Meningkatkan tekanan darah",
      "Membuat tubuh lemas"
    ],
    correctAnswer: "Mengurangi stres dan meningkatkan fokus"
  },
  {
    question: "Apa yang sebaiknya dilakukan jika merasa terlalu cemas?",
    options: [
      "Menyalahkan orang lain",
      "Berbicara dengan tenaga profesional",
      "Menyimpan semua perasaan sendiri",
      "Menonton berita terus-menerus"
    ],
    correctAnswer: "Berbicara dengan tenaga profesional"
  },
  {
    question: "Apa bentuk dukungan sederhana yang bisa diberikan ke teman yang sedang sedih?",
    options: [
      "Menasehati tanpa mendengar",
      "Menghindarinya agar dia punya waktu sendiri",
      "Mendengarkan tanpa menghakimi",
      "Menyuruhnya cepat sembuh"
    ],
    correctAnswer: "Mendengarkan tanpa menghakimi"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h3>Skor Kamu: {score} dari {questions.length}</h3>
          <p>{score >= 8 ? "Hebat! Kamu sangat peduli dengan kesehatan mental." : score >= 5 ? "Bagus! Tapi masih bisa ditingkatkan." : "Ayo belajar lagi agar lebih peduli kesehatan mental ya!"}</p>
          <button onClick={restartQuiz}>Ulangi Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <h3>Pertanyaan {currentQuestion + 1}/{questions.length}</h3>
            <p>{questions[currentQuestion].question}</p>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={
                  selectedAnswer === option
                    ? option === questions[currentQuestion].correctAnswer
                      ? "correct"
                      : "incorrect"
                    : ""
                }
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;