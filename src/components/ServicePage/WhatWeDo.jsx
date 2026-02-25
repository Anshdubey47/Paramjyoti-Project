import React, { useEffect, useRef } from "react";

const stats = [
  { num: "15+", label: "Years of Experience" },
  { num: "500+", label: "Projects Delivered" },
  { num: "200+", label: "Happy Clients" },
  { num: "7", label: "Core Services" },
];

const WhatWeDo = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("wwd-visible");
        });
      },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".wwd-reveal, .wwd-stat").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .wwd-section {
          font-family: 'DM Sans', sans-serif;
          background: #fff7ed;
          border-radius: 24px;
          padding: 64px 56px;
          position: relative;
          overflow: hidden;
          margin-bottom: 60px;
        }

        /* Decorative large text watermark */
        .wwd-watermark {
          position: absolute;
          right: -20px;
          top: -30px;
          font-family: 'Playfair Display', serif;
          font-size: 160px;
          font-weight: 700;
          color: rgba(249,115,22,0.06);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -4px;
        }

        /* Left orange accent bar */
        .wwd-section::before {
          content: '';
          position: absolute;
          left: 0; top: 32px; bottom: 32px;
          width: 4px;
          background: linear-gradient(180deg, #f97316, #fb923c, rgba(249,115,22,0));
          border-radius: 0 4px 4px 0;
        }

        .wwd-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .wwd-inner { grid-template-columns: 1fr; gap: 36px; }
          .wwd-section { padding: 40px 28px; }
          .wwd-watermark { font-size: 80px; }
        }

        .wwd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(249,115,22,0.1);
          border: 1px solid rgba(249,115,22,0.25);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #ea580c;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .wwd-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .wwd-title em { font-style: italic; color: #f97316; }

        .wwd-text {
          font-size: 0.9rem;
          color: #4b5563;
          line-height: 1.85;
          font-weight: 300;
          max-width: 480px;
        }

        .wwd-text strong {
          color: #111827;
          font-weight: 600;
        }

        /* Divider */
        .wwd-divider {
          width: 48px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          border-radius: 2px;
          margin: 20px 0;
        }

        /* Stats grid */
        .wwd-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .wwd-stat {
          background: white;
          border-radius: 16px;
          padding: 20px 18px;
          border: 1.5px solid rgba(249,115,22,0.12);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease,
                      border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }

        .wwd-stat:nth-child(1) { transition-delay: 0s; }
        .wwd-stat:nth-child(2) { transition-delay: 0.1s; }
        .wwd-stat:nth-child(3) { transition-delay: 0.2s; }
        .wwd-stat:nth-child(4) { transition-delay: 0.3s; }

        .wwd-stat.wwd-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .wwd-stat:hover {
          border-color: rgba(249,115,22,0.35);
          box-shadow: 0 8px 28px rgba(249,115,22,0.1);
          transform: translateY(-3px) !important;
        }

        .wwd-stat::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .wwd-stat:hover::before { transform: scaleX(1); }

        .wwd-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #f97316;
          line-height: 1;
          margin-bottom: 4px;
        }

        .wwd-stat-label {
          font-size: 0.72rem;
          color: #9ca3af;
          font-weight: 300;
          line-height: 1.4;
        }

        /* Reveal */
        .wwd-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        .wwd-reveal.wwd-visible { opacity: 1; transform: translateY(0); }
        .wwd-reveal:nth-child(1) { transition-delay: 0s; }
        .wwd-reveal:nth-child(2) { transition-delay: 0.1s; }
        .wwd-reveal:nth-child(3) { transition-delay: 0.2s; }
        .wwd-reveal:nth-child(4) { transition-delay: 0.3s; }
      `}</style>

      <div className="wwd-section" ref={ref}>
        <div className="wwd-watermark">WE DO</div>

        <div className="wwd-inner">
          {/* Left: text */}
          <div>
            <div className="wwd-eyebrow wwd-reveal">🚀 Our Mission</div>
            <h2 className="wwd-title wwd-reveal">What <em>We Do</em></h2>
            <div className="wwd-divider wwd-reveal" />
            <p className="wwd-text wwd-reveal">
              <strong>Param Jyoti Infotech Pvt. Ltd.</strong> (formerly PS Associates) is a versatile
              IT solutions company offering software development, implementation,
              social media promotion, AV production, system integration, facility
              management, project management, and consultancy services.
            </p>
          </div>

          {/* Right: stat cards */}
          <div className="wwd-stats">
            {stats.map((s) => (
              <div key={s.label} className="wwd-stat">
                <div className="wwd-stat-num">{s.num}</div>
                <div className="wwd-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;