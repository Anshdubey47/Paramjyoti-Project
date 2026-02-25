import { useEffect, useRef } from "react";

const clients = [
  { name: "NABARD", icon: "🏛️" },
  { name: "M.P. State Cooperative Bank", icon: "🏦" },
  { name: "C.G. State Cooperative Bank", icon: "🏦" },
  { name: "Krishna Mercantile CBL", icon: "💼" },
  { name: "Sadguru Nagrik SBL", icon: "🏢" },
  { name: "Jaineshwar Nagrik SBL", icon: "🏢" },
  { name: "Mahanagar Nagrik SBL", icon: "🏙️" },
];

const SystemShowcase = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("ssw-visible");
        });
      },
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".ssw-reveal, .ssw-client, .ssw-img-slide").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ssw-section {
          font-family: 'DM Sans', sans-serif;
          background: #ffffff;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .ssw-section::before {
          content: '';
          position: absolute;
          bottom: -120px; right: -120px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }

        .ssw-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr 1fr;
          gap: 36px;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .ssw-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 640px) {
          .ssw-grid { grid-template-columns: 1fr; }
        }

        /* Left column */
        .ssw-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        .ssw-img-wrap {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 52px rgba(0,0,0,0.1);
          margin-bottom: 20px;
          position: relative;
        }

        .ssw-img-wrap img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .ssw-img-wrap:hover img { transform: scale(1.04); }

        .ssw-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.15) 100%);
          pointer-events: none;
        }

        /* Orange corner bracket */
        .ssw-img-wrap::before {
          content: '';
          position: absolute;
          bottom: 10px; left: 10px;
          width: 32px; height: 32px;
          border-bottom: 2px solid rgba(249,115,22,0.5);
          border-left: 2px solid rgba(249,115,22,0.5);
          border-radius: 0 0 0 4px;
          z-index: 1;
          pointer-events: none;
        }

        .ssw-caption {
          font-size: 0.85rem;
          color: #6b7280;
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 18px;
          font-style: italic;
          border-left: 3px solid rgba(249,115,22,0.25);
          padding-left: 12px;
        }

        .ssw-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          background: transparent;
          border: 1.5px solid #f97316;
          color: #f97316;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .ssw-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #f97316, #ea580c);
          opacity: 0;
          transition: opacity 0.25s;
        }

        .ssw-btn:hover { color: white; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(249,115,22,0.35); }
        .ssw-btn:hover::before { opacity: 1; }
        .ssw-btn span { position: relative; z-index: 1; }
        .ssw-btn-arr { position: relative; z-index: 1; transition: transform 0.25s; }
        .ssw-btn:hover .ssw-btn-arr { transform: translateX(4px); }

        /* Center: tall image */
        .ssw-center {
          position: relative;
        }

        .ssw-center-img-wrap {
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 24px 72px rgba(0,0,0,0.12);
          position: relative;
        }

        .ssw-center-img-wrap img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .ssw-center-img-wrap:hover img { transform: scale(1.03); }

        /* Floating center stat */
        .ssw-center-badge {
          position: absolute;
          bottom: -18px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 14px;
          padding: 12px 20px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.1);
          border: 1px solid #f3f4f6;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: ssw-float 3.5s ease-in-out infinite;
          z-index: 2;
        }

        @keyframes ssw-float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-6px); }
        }

        .ssw-badge-icon {
          width: 32px; height: 32px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
        }

        .ssw-badge-val {
          font-size: 0.8rem;
          font-weight: 700;
          color: #111827;
        }

        .ssw-badge-sub {
          font-size: 0.65rem;
          color: #9ca3af;
          font-weight: 300;
        }

        /* Right: clients */
        .ssw-right {
          padding-top: 8px;
        }

        .ssw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(249,115,22,0.08);
          border: 1px solid rgba(249,115,22,0.22);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #ea580c;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .ssw-client-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.4rem, 2.2vw, 1.9rem);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .ssw-client-title em { font-style: italic; color: #f97316; }

        .ssw-divider {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          border-radius: 2px;
          margin: 12px 0 22px;
        }

        .ssw-client-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          list-style: none;
          padding: 0; margin: 0;
        }

        .ssw-client {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #fafaf8;
          border: 1.5px solid #f3f4f6;
          border-radius: 12px;
          padding: 12px 16px;
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.55s ease, transform 0.55s ease,
                      border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }

        .ssw-client.ssw-visible { opacity: 1; transform: translateX(0); }
        .ssw-client:nth-child(1) { transition-delay: 0s; }
        .ssw-client:nth-child(2) { transition-delay: 0.07s; }
        .ssw-client:nth-child(3) { transition-delay: 0.14s; }
        .ssw-client:nth-child(4) { transition-delay: 0.21s; }
        .ssw-client:nth-child(5) { transition-delay: 0.28s; }
        .ssw-client:nth-child(6) { transition-delay: 0.35s; }
        .ssw-client:nth-child(7) { transition-delay: 0.42s; }

        .ssw-client:hover {
          border-color: rgba(249,115,22,0.25);
          box-shadow: 0 4px 18px rgba(249,115,22,0.08);
          transform: translateX(-3px) !important;
        }

        .ssw-client-icon {
          width: 34px; height: 34px;
          background: linear-gradient(135deg, #fff7ed, #fed7aa);
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          flex-shrink: 0;
          transition: transform 0.3s;
        }

        .ssw-client:hover .ssw-client-icon { transform: scale(1.1) rotate(-6deg); }

        .ssw-client-name {
          font-size: 0.82rem;
          font-weight: 500;
          color: #374151;
          line-height: 1.4;
        }

        /* Reveals */
        .ssw-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        .ssw-reveal.ssw-visible { opacity: 1; transform: translateY(0); }
        .ssw-reveal:nth-child(1) { transition-delay: 0s; }
        .ssw-reveal:nth-child(2) { transition-delay: 0.1s; }
        .ssw-reveal:nth-child(3) { transition-delay: 0.2s; }
        .ssw-reveal:nth-child(4) { transition-delay: 0.3s; }

        .ssw-img-slide {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }

        .ssw-img-slide.ssw-visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <section className="ssw-section" ref={ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="ssw-grid">
            {/* Left */}
            <div className="ssw-left ssw-img-slide">
              <div className="ssw-img-wrap">
                <img
                  src="/src/assets/images/image(10).png"
                  alt="Client collaboration"
                />
              </div>
              <p className="ssw-caption">
                Working closely with our customers as transformation partners
              </p>
              <button className="ssw-btn">
                <span>Our Approach</span>
                <span className="ssw-btn-arr">→</span>
              </button>
            </div>

            {/* Center */}
            <div className="ssw-center ssw-img-slide" style={{ transitionDelay: "0.15s" }}>
              <div className="ssw-center-img-wrap">
                <img
                  src="/src/assets/images/image(11).png"
                  alt="Client meeting"
                />
              </div>
              <div className="ssw-center-badge">
                <div className="ssw-badge-icon">🤝</div>
                <div>
                  <div className="ssw-badge-val">Trusted Partner</div>
                  <div className="ssw-badge-sub">30+ BFSI Institutions</div>
                </div>
              </div>
            </div>

            {/* Right: clients */}
            <div className="ssw-right">
              <div className="ssw-eyebrow ssw-reveal">🏦 Our Network</div>
              <h2 className="ssw-client-title ssw-reveal">
                Some of Our <em>BFSI</em> Clients
              </h2>
              <div className="ssw-divider ssw-reveal" />
              <ul className="ssw-client-list">
                {clients.map((c, i) => (
                  <li key={i} className="ssw-client">
                    <div className="ssw-client-icon">{c.icon}</div>
                    <span className="ssw-client-name">{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SystemShowcase;