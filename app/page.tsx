'use client';

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Dank je wel voor je inschrijving! Wij nemen snel contact op.');
    e.currentTarget.reset();
    closeMenu();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background: #fafafa;
        }

        header {
          background: #ffffff;
          border-bottom: 1px solid #e8e8e8;
          padding: 1.5rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.98);
        }

        nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .logo {
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #1a1a1a;
          font-family: 'Playfair Display', serif;
        }

        nav ul {
          display: flex;
          list-style: none;
          gap: 2.5rem;
        }

        nav a {
          color: #1a1a1a;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.3px;
          position: relative;
        }

        nav a::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0;
          height: 1px;
          background: #1a1a1a;
          transition: width 0.3s ease;
        }

        nav a:hover {
          color: #666;
        }

        nav a:hover::after {
          width: 100%;
        }

        .hero {
          background: #ffffff;
          color: #1a1a1a;
          padding: 8rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, #f0f0f0, transparent);
          opacity: 0.5;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero h1 {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.5px;
          line-height: 1.1;
          color: #1a1a1a;
        }

        .hero p {
          font-size: 1.15rem;
          margin-bottom: 2.5rem;
          opacity: 0.7;
          font-weight: 400;
          letter-spacing: 0.3px;
          line-height: 1.8;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1rem 2.2rem;
          font-size: 0.9rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .btn-primary {
          background: #1a1a1a;
          color: #ffffff;
        }

        .btn-primary:hover {
          background: #333;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .btn-secondary {
          background: transparent;
          color: #1a1a1a;
          border: 1.5px solid #1a1a1a;
        }

        .btn-secondary:hover {
          background: #1a1a1a;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .services {
          padding: 6rem 2rem;
          background: #fafafa;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.8rem;
          margin-bottom: 1rem;
          color: #1a1a1a;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .section-subtitle {
          text-align: center;
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 3rem;
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .service-card {
          background: #ffffff;
          padding: 2.5rem;
          border-radius: 4px;
          border: 1px solid #e8e8e8;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #1a1a1a;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: #d0d0d0;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-icon {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
        }

        .service-card h3 {
          color: #1a1a1a;
          margin-bottom: 1rem;
          font-size: 1.35rem;
          font-weight: 700;
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.3px;
        }

        .service-card p {
          color: #666;
          line-height: 1.8;
          font-size: 0.95rem;
          letter-spacing: 0.2px;
        }

        .features {
          padding: 6rem 2rem;
          background: #ffffff;
        }

        .features-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .feature-item {
          padding: 2rem;
          background: #fafafa;
          border: 1px solid #e8e8e8;
          border-radius: 4px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 0;
          background: #1a1a1a;
          transition: height 0.4s ease;
        }

        .feature-item:hover {
          border-color: #d0d0d0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transform: translateY(-4px);
        }

        .feature-item:hover::before {
          height: 100%;
        }

        .feature-item h4 {
          color: #1a1a1a;
          margin-bottom: 0.8rem;
          font-weight: 700;
          font-size: 1.05rem;
          letter-spacing: 0.2px;
        }

        .feature-item p {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.7;
          letter-spacing: 0.2px;
        }

        .stats {
          background: #1a1a1a;
          color: #ffffff;
          padding: 5rem 2rem;
          text-align: center;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-box {
          padding: 2.5rem;
        }

        .stat-number {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.5px;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        .cta-section {
          background: #fafafa;
          color: #1a1a1a;
          padding: 5rem 2rem;
          text-align: center;
          border-top: 1px solid #e8e8e8;
          border-bottom: 1px solid #e8e8e8;
        }

        .cta-section h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .cta-section p {
          font-size: 1rem;
          margin-bottom: 2rem;
          opacity: 0.7;
          letter-spacing: 0.3px;
        }

        footer {
          background: #ffffff;
          color: #1a1a1a;
          padding: 3rem 2rem;
          text-align: center;
          border-top: 1px solid #e8e8e8;
        }

        footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
          margin-bottom: 2rem;
        }

        .footer-section h4 {
          margin-bottom: 1rem;
          color: #1a1a1a;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section p {
          color: #666;
          font-size: 0.85rem;
          letter-spacing: 0.2px;
        }

        .footer-section a {
          color: #666;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.85rem;
          letter-spacing: 0.2px;
        }

        .footer-section a:hover {
          color: #1a1a1a;
        }

        .footer-bottom {
          border-top: 1px solid #e8e8e8;
          padding-top: 2rem;
          opacity: 0.6;
          font-size: 0.85rem;
        }

        .contact-form {
          max-width: 650px;
          margin: 3rem auto;
          background: #ffffff;
          padding: 3rem;
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid #e8e8e8;
        }

        .form-group {
          margin-bottom: 1.8rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.7rem;
          color: #1a1a1a;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.3px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid #e8e8e8;
          border-radius: 4px;
          font-family: inherit;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          background: #ffffff;
          color: #1a1a1a;
          letter-spacing: 0.2px;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 130px;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #1a1a1a;
          box-shadow: 0 0 0 3px rgba(26, 26, 26, 0.05);
          background: #ffffff;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #999;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          z-index: 101;
        }

        .hamburger span {
          width: 25px;
          height: 2px;
          background: #1a1a1a;
          transition: all 0.3s ease;
          display: block;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(0px, 10px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(0px, -10px);
        }

        @media (max-width: 768px) {
          nav ul {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: #ffffff;
            border-bottom: 1px solid #e8e8e8;
            flex-direction: column;
            padding: 1rem 2rem;
            gap: 0;
            display: none;
            list-style: none;
          }

          nav ul.active {
            display: flex;
          }

          nav ul li {
            padding: 1rem 0;
            border-bottom: 1px solid #e8e8e8;
          }

          nav ul li:last-child {
            border-bottom: none;
          }

          .hamburger {
            display: flex;
          }

          .hero {
            padding: 5rem 2rem;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .hero p {
            font-size: 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
          }

          .service-grid {
            grid-template-columns: 1fr;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header>
        <nav>
          <div className="logo"><img src={'/logo_elevate_group.png'} width={96} /></div>
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={isMenuOpen ? 'active' : ''}>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#features" onClick={closeMenu}>Voordelen</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Groei Jouw Business Met Elevate Group</h1>
          <p>Wij leveren kwaliteitsleads, sluiten deals en digitaliseren jouw bedrijf voor maximale groei</p>
          <div className="cta-buttons">
            <a href="https://calendly.com/elevategroupnl/adviesgesprek" className="btn btn-primary">Gratis Adviesgesprek</a>
            <a href='#services' className="btn btn-secondary">Lees meer</a>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-container">
          <h2 className="section-title">Onze Services</h2>
          <p className="section-subtitle">Alles wat je nodig hebt om je business te laten groeien</p>
          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Lead Generation</h3>
              <p>Wij genereren gekwalificeerde leads via data-gedreven strategieën. Onze specialisten identificeren exact jouw doelgroep en leveren leads die converteren.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Sales Support</h3>
              <p>Van prospectie tot afsluiting: we ondersteunen je salesteam met proven tactiek en training. Verhoog je conversie en omzet met professioneel sales support.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Digitale Transformatie</h3>
              <p>CRM-implementatie, automatisering en procesoptimalisatie. Wij moderniseren jouw bedrijf en maken je team efficiënter dan ooit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="features-container">
          <h2 className="section-title">Waarom Elevate Group?</h2>
          <p className="section-subtitle">Bewezen resultaten en een team dat je laat groeien</p>
          <div className="feature-grid">
            <div className="feature-item">
              <h4>✓ Data-Driven Approach</h4>
              <p>Alle strategieën gebaseerd op data en marktanalyse voor maximale resultaten.</p>
            </div>
            <div className="feature-item">
              <h4>✓ Ervaren Team</h4>
              <p>5+ jaar expertise in leadgeneratie, sales en business digitalisering.</p>
            </div>
            <div className="feature-item">
              <h4>✓ Snelle Implementatie</h4>
              <p>We beginnen snel en tonen resultaten binnen 30 dagen.</p>
            </div>
            <div className="feature-item">
              <h4>✓ Full-Service Oplossing</h4>
              <p>Alles onder één dak: leads, sales en digitalisering. Geen gedoe met meerdere partners.</p>
            </div>
            <div className="feature-item">
              <h4>✓ ROI-Gericht</h4>
              <p>We focussen uitsluitend op meetbare resultaten en jouw return on investment.</p>
            </div>
            <div className="feature-item">
              <h4>✓ Transparante Rapportage</h4>
              <p>Maandelijkse reports met duidelijke KPI's en voortgang.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Klaar om te groeien?</h2>
        <p>Neem vandaag nog contact op voor een gratis adviesgesprek</p>
        <a href='https://calendly.com/elevategroupnl/adviesgesprek' className="btn btn-primary">Gratis Adviesgesprek Inplannen</a>
      </section>

      <footer>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            textAlign: 'left',
            marginBottom: '2rem',
            maxWidth: '1200px',
            margin: '0 auto 2rem',
          }}
        >
          <div className="footer-section">
            <h4>ELEVATE GROUP</h4>
            <p>Leads • Sales • Digitalisering</p>
            <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: 0.7 }}>
              Wij transformeren bedrijven met data-driven strategieën.
            </p>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Lead Generation</a></li>
              <li><a href="#services">Sales Support</a></li>
              <li><a href="#services">CRM & Automatisering</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 id="contact">Contact</h4>

            {/* Instagram-link met logo */}
            <div style={{ marginTop: '1rem' }}>
              <a
                href="https://www.instagram.com/elevategroup" // ← vervang met jouw echte link
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  color: '#1a1a1a',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                  alt="Instagram"
                  width="18"
                  height="18"
                  style={{ filter: 'invert(0.3)' }}
                />
                Stuur ons een bericht op Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Elevate Group. Alle rechten voorbehouden.</p>
        </div>
      </footer>

    </>
  );
}