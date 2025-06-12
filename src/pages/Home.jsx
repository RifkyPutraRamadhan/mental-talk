import QuoteBox from '../components/QuoteBox';
import Quiz from '../components/Quiz';
import TipCard from '../components/TipCard';

const Home = () => {
  const quickTips = [
    "Luangkan waktu 5 menit setiap hari untuk bernapas dalam-dalam",
    "Jangan ragu untuk mengatakan 'tidak' ketika kamu merasa kewalahan",
    "Buat jurnal rasa syukur untuk mencatat hal-hal positif setiap hari"
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <h2>Selamat Datang di MentalTalk</h2>
        <p>Platform edukasi kesehatan mental untuk hidup yang lebih seimbang</p>
      </section>

      <QuoteBox />

      <section className="quick-tips">
        <h3>Tips Cepat Hari Ini</h3>
        <div className="tips-grid">
          {quickTips.map((tip, index) => (
            <TipCard key={index} tip={tip} />
          ))}
        </div>
      </section>

      <section className="mental-health-quiz">
        <h3>Quiz Kesehatan Mental</h3>
        <p>Uji pengetahuanmu tentang kesehatan mental dengan quiz singkat ini</p>
        <Quiz />
      </section>
    </div>
  );
};

export default Home;