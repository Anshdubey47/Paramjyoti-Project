import { useEffect, useRef } from "react";

const districtBanks = [
  "Indore Premier", "Khandwa", "Mandsaur", "Vidisha", "Ujjain",
  "Chattarpur", "Satna", "Sehore", "Seoni", "Jabalpur",
  "Gwalior", "Khargone", "Rajgrah", "Ratlam", "Datia",
  "Bhind", "Betul", "Chindwara", "Shajapur", "Raisen",
  "Dewas", "Jhabua", "Tikamgarh", "Shivpuri", "Damoh",
  "Dhar", "Durg", "Rajnandgaon", "Bilaspur", "Raipur",
];

const SystemClientList = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("scl-visible");
        });
      },
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".scl-reveal, .scl-chip").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .scl-section {
          font-family: 'DM Sans', sans-serif;
          background: #fafaf8;
          padding: 90px 0;
          position: relative;
          overflow: hidden;
        }

        .scl-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.25), transparent);
        }

        /* Background decoration */
        .scl-bg-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Playfair Display', serif;
          font-size: 220px;
          font-weight: 700;
          color: rgba(249,115,22,0.03);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
        }

        .scl-inner {
          position: relative;
          z-index: 1;
        }

        /* Header */
        .scl-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .scl-eyebrow {
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
          margin-bottom: 16px;
        }

        .scl-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 10px;
        }

        .scl-title em { font-style: italic; color: #f97316; }

        .scl-divider {
          width: 48px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          border-radius: 2px;
          margin: 12px auto 0;
        }

        /* Stats row */
        .scl-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .scl-stat {
          text-align: center;
        }

        .scl-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: #f97316;
          line-height: 1;
        }

        .scl-stat-label {
          font-size: 0.72rem;
          color: #9ca3af;
          font-weight: 300;
          margin-top: 4px;
        }

        .scl-stat-sep {
          width: 1px;
          background: #f3f4f6;
          align-self: stretch;
          margin: 4px 0;
        }

        /* Card container */
        .scl-card {
          background: white;
          border-radius: 24px;
          border: 1.5px solid #f3f4f6;
          padding: 36px 40px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .scl-card:hover {
          border-color: rgba(249,115,22,0.2);
          box-shadow: 0 12px 48px rgba(249,115,22,0.07);
        }

        .scl-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c, rgba(249,115,22,0));
        }

        .scl-card-label {
          font-size: 0.72rem;
          font-weight: 600;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .scl-card-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #f3f4f6;
        }

        /* Chip grid */
        .scl-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .scl-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fafaf8;
          border: 1.5px solid #f3f4f6;
          border-radius: 100px;
          padding: 8px 16px;
          font-size: 0.8rem;
          font-weight: 400;
          color: #374151;
          cursor: default;
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.4s ease, transform 0.4s ease,
                      border-color 0.25s ease, background 0.25s ease,
                      color 0.25s ease, box-shadow 0.25s ease;
        }

        .scl-chip.scl-visible { opacity: 1; transform: scale(1); }

        /* Stagger every 5 chips */
        .scl-chip:nth-child(5n+1) { transition-delay: 0s; }
        .scl-chip:nth-child(5n+2) { transition-delay: 0.05s; }
        .scl-chip:nth-child(5n+3) { transition-delay: 0.1s; }
        .scl-chip:nth-child(5n+4) { transition-delay: 0.15s; }
        .scl-chip:nth-child(5n+5) { transition-delay: 0.2s; }

        .scl-chip:hover {
          border-color: rgba(249,115,22,0.35);
          background: rgba(249,115,22,0.05);
          color: #ea580c;
          box-shadow: 0 4px 14px rgba(249,115,22,0.1);
        }

        .scl-chip-dot {
          width: 5px; height: 5px;
          background: rgba(249,115,22,0.4);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .scl-chip:hover .scl-chip-dot {
          background: #f97316;
        }

        /* Bottom note */
        .scl-note {
          text-align: center;
          margin-top: 28px;
          font-size: 0.78rem;
          color: #9ca3af;
          font-weight: 300;
          font-style: italic;
        }

        /* Reveals */
        .scl-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .scl-reveal.scl-visible { opacity: 1; transform: translateY(0); }
        .scl-reveal:nth-child(1) { transition-delay: 0s; }
        .scl-reveal:nth-child(2) { transition-delay: 0.1s; }
        .scl-reveal:nth-child(3) { transition-delay: 0.18s; }
        .scl-reveal:nth-child(4) { transition-delay: 0.26s; }
      `}</style>

      <section className="scl-section" ref={ref}>
        <div className="scl-bg-text">CLIENTS</div>

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }} className="scl-inner">
          {/* Header */}
          <div className="scl-header">
            <div className="scl-eyebrow scl-reveal">🏦 District Network</div>
            <h2 className="scl-title scl-reveal">
              District Central <em>Cooperative Banks</em>
            </h2>
            <div className="scl-divider scl-reveal" />
          </div>

          {/* Stats */}
          <div className="scl-stats scl-reveal">
            {[
              { num: "30+", label: "Districts Covered" },
              { num: "2", label: "States — MP & CG" },
              { num: "20+", label: "Years of Service" },
            ].map((s, i) => (
              <>
                {i > 0 && <div key={`sep-${i}`} className="scl-stat-sep" />}
                <div key={s.label} className="scl-stat">
                  <div className="scl-stat-num">{s.num}</div>
                  <div className="scl-stat-label">{s.label}</div>
                </div>
              </>
            ))}
          </div>

          {/* Chip card */}
          <div className="scl-card scl-reveal">
            <div className="scl-card-label">All Served Districts</div>
            <div className="scl-chips">
              {districtBanks.map((bank, i) => (
                <div key={i} className="scl-chip">
                  <div className="scl-chip-dot" />
                  {bank}
                </div>
              ))}
            </div>
          </div>

          <p className="scl-note scl-reveal">
            District Central Cooperative Banks — Madhya Pradesh & Chhattisgarh
          </p>
        </div>
      </section>
    </>
  );
};

export default SystemClientList;