const Lifestyle = () => {
  const healthyHabits = [
    {
      title: "Pola Tidur Teratur",
      description: "Tidur 7-9 jam setiap malam membantu memulihkan tubuh dan pikiran."
    },
    {
      title: "Nutrisi Seimbang",
      description: "Konsumsi makanan bergizi untuk mendukung kesehatan otak dan tubuh."
    },
    {
      title: "Aktivitas Fisik",
      description: "Olahraga teratur melepaskan endorfin yang meningkatkan mood."
    },
    {
      title: "Hidrasi Cukup",
      description: "Minum air yang cukup membantu fungsi kognitif dan energi."
    },
    {
      title: "Waktu untuk Diri Sendiri",
      description: "Luangkan waktu setiap hari untuk kegiatan yang kamu nikmati."
    },
    {
      title: "Koneksi Sosial",
      description: "Hubungan yang sehat dengan orang lain penting untuk kesejahteraan mental."
    }
  ];

  return (
    <div className="lifestyle-page">
      <h2>Gaya Hidup Sehat untuk Kesehatan Mental</h2>
      
      <div className="habits-grid">
        {healthyHabits.map((habit, index) => (
          <div key={index} className="habit-card">
            <h3>{habit.title}</h3>
            <p>{habit.description}</p>
          </div>
        ))}
      </div>

      <div className="additional-info">
        <h3>Pentingnya Rutinitas</h3>
        <p>
          Membuat rutinitas yang teratur dapat memberikan struktur dan rasa stabil 
          yang penting untuk kesehatan mental. Cobalah untuk bangun dan tidur pada 
          waktu yang sama setiap hari, termasuk di akhir pekan.
        </p>
      </div>
    </div>
  );
};

export default Lifestyle;