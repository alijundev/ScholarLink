<script>
    import banner from "$lib/assets/student_mask.jpg"
</script>


  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #1a1a1a;
    }

    /* Header */
    header {
      background-color: #fef9e7;
      padding: 1.5rem 2rem;
      
    }

    nav {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      font-weight: bold;
      color: #06b6d4;
      text-decoration: none;
    }

    .logo-icon {
      width: 32px;
      height: 32px;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }

    .nav-links a {
      color: #1a1a1a;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: #06b6d4;
    }

    /* Hero Section */
    .hero {
      background-color: #ffffff;
      padding: 4rem 2rem;
    }

    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;
    }

    .hero-text {
      flex: 1;
    }

    .hero-text h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .hero-text p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      color: #4a4a4a;
    }

    .hero-image {
      flex: 1;
      text-align: center;
    }

    .hero-image img {
      max-width: 100%;
      height: auto;
    }

    .btn {
      display: inline-block;
      padding: 1rem 2.5rem;
      background-color: #1a1a1a;
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      transition: transform 0.3s, box-shadow 0.3s;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    /* Problem Section */
    .problem-section {
      background-color: white;
      padding: 4rem 2rem;
    }

    .problem-content {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .section-header {
      background-color: #fef9e7;
      border: 3px solid #1a1a1a;
      border-radius: 50px;
      padding: 1rem 2rem;
      display: inline-block;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .section-subtitle {
      font-style: italic;
      color: #4a4a4a;
      margin-bottom: 3rem;
      font-size: 1.1rem;
    }

    .problem-cards {
      display: flex;
      gap: 2rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .problem-card {
      background-color: #fef9e7;
      border: 2px solid #1a1a1a;
      border-radius: 20px;
      padding: 2rem;
      flex: 1;
      min-width: 250px;
      max-width: 300px;
      position: relative;
    }

    .problem-card-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .problem-card h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .problem-card p {
      font-size: 0.95rem;
      color: #4a4a4a;
    }

    /* Solution Section */
    .solution-section {
      background-color: #fef9e7;
      padding: 4rem 2rem;
    }

    .solution-content {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .solution-cards {
      display: flex;
      gap: 2rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 3rem;
    }

    .solution-card {
      background-color: #fef3c7;
      border: 2px solid #1a1a1a;
      border-radius: 20px;
      padding: 2rem;
      flex: 1;
      min-width: 250px;
      max-width: 320px;
      text-align: center;
    }

    .solution-card-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .solution-card h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .solution-card p {
      font-size: 0.9rem;
      color: #4a4a4a;
    }

    /* Features Section */
    .features-section {
      background-color: white;
      padding: 4rem 2rem;
    }

    .features-content {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .features-title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .features-subtitle {
      font-style: italic;
      color: #4a4a4a;
      margin-bottom: 3rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .feature-box {
      padding: 2rem;
      border-radius: 15px;
      text-align: left;
    }

    .feature-box.yellow {
      background-color: #fef3c7;
      border: 2px solid #1a1a1a;
    }


    .feature-box h3 {
      font-size: 1.2rem;
      margin-bottom: 0.75rem;
    }

    .feature-box p {
      font-size: 0.95rem;
      color: #4a4a4a;
      line-height: 1.5;
    }

    /* CTA Section */
    .cta-section {
      background-color: #fef9e7;
      padding: 4rem 2rem;
    }

    .cta-content {
      max-width: 800px;
      margin: 0 auto;
      background-color: #fef3c7;
      border-radius: 30px;
      padding: 3rem;
      text-align: center;
    }

    .cta-content h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      line-height: 1.3;
    }

    .cta-content p {
      color: #4a4a4a;
      margin-bottom: 2rem;
      font-size: 1.05rem;
    }

    .btn-dark {
      background-color: #4a5568;
    }

    /* Footer */
    footer {
      background-color: white;
      border-top: 2px solid #e5e5e5;
      padding: 3rem 2rem 2rem;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      gap: 3rem;
      flex-wrap: wrap;
    }

    .footer-column {
      flex: 1;
      min-width: 200px;
    }

    .footer-column h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .footer-column p {
      color: #4a4a4a;
      font-size: 0.9rem;
      line-height: 1.6;
    }

    .footer-links {
      list-style: none;
    }

    .footer-links li {
      margin-bottom: 0.5rem;
    }

    .footer-links a {
      color: #4a4a4a;
      text-decoration: none;
      transition: color 0.3s;
    }

    .footer-links a:hover {
      color: #06b6d4;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero-content {
        flex-direction: column;
        text-align: center;
      }

      .hero-text h1 {
        font-size: 2rem;
      }

      .nav-links {
        gap: 1rem;
      }

      .problem-cards,
      .solution-cards {
        flex-direction: column;
        align-items: center;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }

      .footer-content {
        flex-direction: column;
      }
    }
  </style>


  <!-- Header -->
  <header>
    <nav>
      <a href="#" class="logo">
        <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14L8 10H16L12 14Z" fill="currentColor"/>
          <path d="M4 4H20V6H4V4Z" fill="currentColor"/>
          <circle cx="12" cy="18" r="2" fill="currentColor"/>
        </svg>
        SchoolarLink
      </a>
      <ul class="nav-links">
        <li><a href="#beranda">Beranda</a></li>
        <li><a href="#fitur">Fitur</a></li>
        <li><a href="#manfaat">Manfaat</a></li>
        <li><a href="#tujuan">Tujuan</a></li>
      </ul>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="hero" id="beranda">
    <div class="hero-content">
      <div class="hero-text">
        <h1>Temukan Beasiswa yang Tepat untuk Masa Depanmu</h1>
        <p>Kami membantu kamu menemukan informasi beasiswa dan pelatihan magang dengan cepat, mudah, dan terpercaya</p>
        <a href="#" class="btn">Jelajahi Sekarang</a>
      </div>
      <div class="hero-image">
        <img src={banner} alt="Mahasiswa dengan masker">
      </div>
    </div>
  </section>

  <!-- Problem Section -->
  <section class="problem-section">
    <div class="problem-content">
      <div class="section-header">Sulit mencari informasi beasiswa?</div>
      <p class="section-subtitle">Kami memahami tantangan yang kamu hadapi dalam mencari beasiswa</p>
      <div class="problem-cards">
        <div class="problem-card">
          <div class="problem-card-icon">ℹ️</div>
          <h3>Informasi Tersebar</h3>
          <p>Informasi beasiswa tersebar di berbagai platform dan sulit ditemukan</p>
        </div>
        <div class="problem-card">
          <div class="problem-card-icon">🔔</div>
          <h3>Informasi Kurang Update</h3>
          <p>Banyak informasi sudah lewat deadline atau tidak sesuai kriteria</p>
        </div>
        <div class="problem-card">
          <div class="problem-card-icon">📅</div>
          <h3>Ketinggalan Deadline</h3>
          <p>Sering klewatan batas waktu pendaftaran beasiswa penting</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Solution Section -->
  <section class="solution-section">
    <div class="solution-content">
      <div class="section-header">SchoolarLink adalah solusinya 🎓</div>
      <p class="section-subtitle">Platform all-in-one untuk semua kebutuhan pencarian beasiswamu</p>
      <div class="solution-cards">
        <div class="solution-card">
          <div class="solution-card-icon">📄</div>
          <h3>Informasi dalam 1 Platform</h3>
          <p>Database lengkap beasiswa dari berbagai sumber terpercaya, semua terkurasi</p>
        </div>
        <div class="solution-card">
          <div class="solution-card-icon">🔄</div>
          <h3>Informasi Terupdate</h3>
          <p>Temukan beasiswa sesuai jurusan dengan mudah</p>
        </div>
        <div class="solution-card">
          <div class="solution-card-icon">🔔</div>
          <h3>Notifikasi Deadline</h3>
          <p>Dapatkan pengingat otomatis agar tidak klewatan kesempatan emas</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features-section" id="fitur">
    <div class="features-content">
      <h2 class="features-title">Fitur Utama SchoolarLink</h2>
      <p class="features-subtitle">Semua yang kamu butuhkan untuk menemukan beasiswa impian</p>
      <div class="features-grid">
        <div class="feature-box yellow">
          <h3>Database Beasiswa Terupdate</h3>
          <p>Akses ribuan informasi beasiswa dari seluruh dunia yang selalu diperbarui setiap hari</p>
        </div>
        <div class="feature-box yellow">
          <h3>Filter Pintar</h3>
          <p>Cari beasiswa berdasarkan jurusan, jenjang, pendidikan, dan kriteria lainnya</p>
        </div>
        <div class="feature-box yellow">
          <h3>Bookmark Favorit</h3>
          <p>Simpan beasiswa yang menarik dan akses kapan saja dengan mudah</p>
        </div>
        <div class="feature-box yellow">
          <h3>Reminder Deadline via Email</h3>
          <p>Terima notifikasi email otomatis sebelum deadline pendaftaran berakhir</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section">
    <div class="cta-content">
      <h2>Siap Dapatkan Beasiswa Impianmu?</h2>
      <p>Bergabunglah dengan ribuan mahasiswa yang sudah memulai perjalanan mereka menuju masa depan cerah</p>
      <a href="#" class="btn btn-dark">Mulai Cari Beasiswa</a>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="footer-content">
      <div class="footer-column">
        <h3>SchoolarLink</h3>
        <p>Platform terpercaya untuk menemukan informasi beasiswa terbaru dan terlengkap</p>
      </div>
      <div class="footer-column">
        <h3>Tautan</h3>
        <ul class="footer-links">
          <li><a href="#beranda">Beranda</a></li>
          <li><a href="#masalah">Masalah</a></li>
          <li><a href="#solusi">Solusi</a></li>
          <li><a href="#fitur">Fitur</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Legal</h3>
        <ul class="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>
    </div>
  </footer>

