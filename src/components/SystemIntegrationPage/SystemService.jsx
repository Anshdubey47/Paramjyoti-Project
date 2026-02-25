import { useEffect, useRef } from "react";

const services = [
  { icon: "🔍", label: "Site Inspection and Planning" },
  { icon: "🖥️", label: "Selection and supply of Hardware/software" },
  { icon: "⚙️", label: "Installation and Implementation of Hardware and Software" },
  { icon: "🔗", label: "System Integration" },
  { icon: "🌐", label: "Web Development & Maintenance" },
  { icon: "📊", label: "Master Data Creation" },
  { icon: "🎓", label: "Training to Managers and other Bank Staff (Class room and On-Job)" },
];

const SystemService = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("sys-visible");
        });
      },
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".sys-reveal, .sys-item, .sys-img-reveal").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .sys-section {
          font-family: 'DM Sans', sans-serif;
          background: #fafaf8;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .sys-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.25), transparent);
        }

        .sys-section::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.25), transparent);
        }

        .sys-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .sys-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        /* Left: services list */
        .sys-eyebrow {
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

        .sys-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .sys-title em { font-style: italic; color: #f97316; }

        .sys-divider {
          width: 44px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          border-radius: 2px;
          margin: 14px 0 28px;
        }

        /* Service items */
        .sys-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          list-style: none;
          padding: 0; margin: 0;
        }

        .sys-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: white;
          border: 1.5px solid #f3f4f6;
          border-radius: 14px;
          padding: 14px 18px;
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity 0.55s ease, transform 0.55s ease,
                      border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }

        .sys-item.sys-visible { opacity: 1; transform: translateX(0); }
        .sys-item:nth-child(1) { transition-delay: 0s; }
        .sys-item:nth-child(2) { transition-delay: 0.07s; }
        .sys-item:nth-child(3) { transition-delay: 0.14s; }
        .sys-item:nth-child(4) { transition-delay: 0.21s; }
        .sys-item:nth-child(5) { transition-delay: 0.28s; }
        .sys-item:nth-child(6) { transition-delay: 0.35s; }
        .sys-item:nth-child(7) { transition-delay: 0.42s; }

        .sys-item:hover {
          border-color: rgba(249,115,22,0.28);
          box-shadow: 0 6px 24px rgba(249,115,22,0.09);
          transform: translateX(4px) !important;
        }

        .sys-item::before {
          content: '';
          position: absolute;
          /* reset */
        }

        .sys-item-icon {
          width: 36px; height: 36px;
          background: linear-gradient(135deg, #fff7ed, #fed7aa);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .sys-item:hover .sys-item-icon { transform: scale(1.1) rotate(-6deg); }

        .sys-item-text {
          font-size: 0.85rem;
          color: #374151;
          line-height: 1.55;
          font-weight: 400;
          padding-top: 2px;
        }

        /* Right: image + content */
        .sys-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sys-img-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: start;
        }

        .sys-img-wrap {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 36px rgba(0,0,0,0.09);
          position: relative;
        }

        .sys-img-wrap img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .sys-img-wrap:hover img { transform: scale(1.05); }

        .sys-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(249,115,22,0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .sys-img-wrap:hover::after { opacity: 1; }

        /* Info card */
        .sys-info-card {
          background: white;
          border-radius: 16px;
          border: 1.5px solid #f3f4f6;
          padding: 22px 20px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .sys-info-card:hover {
          border-color: rgba(249,115,22,0.25);
          box-shadow: 0 8px 28px rgba(249,115,22,0.08);
        }

        .sys-info-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s;
        }

        .sys-info-card:hover::before { transform: scaleX(1); }

        .sys-info-text {
          font-size: 0.85rem;
          color: #6b7280;
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 18px;
          font-style: italic;
          border-left: 3px solid rgba(249,115,22,0.25);
          padding-left: 14px;
        }

        .sys-btn {
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

        .sys-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #f97316, #ea580c);
          opacity: 0;
          transition: opacity 0.25s;
        }

        .sys-btn:hover { color: white; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(249,115,22,0.35); }
        .sys-btn:hover::before { opacity: 1; }
        .sys-btn span { position: relative; z-index: 1; }
        .sys-btn-arr { position: relative; z-index: 1; transition: transform 0.25s; }
        .sys-btn:hover .sys-btn-arr { transform: translateX(4px); }

        /* Reveals */
        .sys-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        .sys-reveal.sys-visible { opacity: 1; transform: translateY(0); }
        .sys-reveal:nth-child(1) { transition-delay: 0s; }
        .sys-reveal:nth-child(2) { transition-delay: 0.1s; }
        .sys-reveal:nth-child(3) { transition-delay: 0.18s; }

        .sys-img-reveal {
          opacity: 0;
          transform: translateX(32px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }

        .sys-img-reveal.sys-visible { opacity: 1; transform: translateX(0); }
      `}</style>

      <section className="sys-section" ref={ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="sys-grid">
            {/* Left: list */}
            <div>
              <div className="sys-eyebrow sys-reveal">🔧 What We Offer</div>
              <h2 className="sys-title sys-reveal">Our <em>Services</em> Include</h2>
              <div className="sys-divider sys-reveal" />
              <ul className="sys-list">
                {services.map((s, i) => (
                  <li key={i} className="sys-item">
                    <div className="sys-item-icon">{s.icon}</div>
                    <span className="sys-item-text">{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: images + info */}
            <div className="sys-right sys-img-reveal">
              <div className="sys-img-pair">
                <div className="sys-img-wrap">
                  <img src="/src/assets/images/image(8).png" alt="Service" />
                </div>
                <div className="sys-img-wrap">
                  <img src="/src/assets/images/image(9).png" alt="Service" />
                </div>
              </div>

              <div className="sys-info-card">
                <p className="sys-info-text">
                  We deliver and implement innovative software solutions across a number of technology platforms
                </p>
                <button className="sys-btn">
                  <span>Learn More</span>
                  <span className="sys-btn-arr">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SystemService;