const SelfCare = () => {
  const selfCareTips = [
    {
      category: "Fisik",
      tips: [
        "Lakukan peregangan setiap pagi",
        "Berjalan-jalan di alam terbuka",
        "Coba teknik pernapasan dalam"
      ]
    },
    {
      category: "Emosional",
      tips: [
        "Akui dan terima perasaanmu",
        "Buat jurnal harian",
        "Beri diri izin untuk menangis jika perlu"
      ]
    },
    {
      category: "Sosial",
      tips: [
        "Hubungi teman atau keluarga",
        "Batasi waktu media sosial",
        "Ikut komunitas dengan minat serupa"
      ]
    },
    {
      category: "Spiritual",
      tips: [
        "Luangkan waktu untuk refleksi",
        "Coba meditasi atau doa",
        "Hargai momen-momen kecil"
      ]
    }
  ];

  return (
    <div className="selfcare-page">
      <h2>Tips Self-Care untuk Kesehatan Mental</h2>
      <p className="intro">
        Self-care bukanlah kemewahan, melainkan kebutuhan. Berikut beberapa ide 
        untuk merawat diri sendiri di berbagai aspek kehidupan.
      </p>

      <div className="selfcare-categories">
        {selfCareTips.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.category}</h3>
            <ul>
              {category.tips.map((tip, tipIndex) => (
                <li key={tipIndex}>{tip}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="reminder">
        <h3>Ingat!</h3>
        <p>
          Self-care yang efektif adalah yang sesuai dengan kebutuhan pribadimu. 
          Tidak ada pendekatan satu-untuk-semua. Coba berbagai teknik dan temukan 
          apa yang paling berhasil untukmu.
        </p>
      </div>
    </div>
  );
};

export default SelfCare;