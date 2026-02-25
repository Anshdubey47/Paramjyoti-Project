import { useEffect, useRef } from "react";

const TrainingHero = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("th-visible");
        });
      },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".th-reveal, .th-slide-right").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .th-section {
          font-family: 'DM Sans', sans-serif;
          background: #ffffff;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
        }

        .th-accent-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #f97316, #fb923c, #fdba74, #f97316);
          background-size: 200% 100%;
          animation: th-stripe 3s linear infinite;
        }

        @keyframes th-stripe {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }

        .th-blob-1 {
          position: absolute;
          top: -140px; right: -140px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
          animation: th-pulse 5s ease-in-out infinite;
        }

        .th-blob-2 {
          position: absolute;
          bottom: -100px; left: -100px;
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
          animation: th-pulse 7s ease-in-out infinite reverse;
        }

        @keyframes th-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        .th-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 768px) {
          .th-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        .th-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(249,115,22,0.08);
          border: 1px solid rgba(249,115,22,0.22);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #ea580c;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .th-dot {
          width: 6px; height: 6px;
          background: #f97316;
          border-radius: 50%;
          animation: th-blink 2s ease-in-out infinite;
        }

        @keyframes th-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }

        .th-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 700;
          color: #111827;
          line-height: 1.15;
          margin-bottom: 20px;
        }

        .th-title em { font-style: italic; color: #f97316; }

        .th-underline {
          display: inline-block;
          position: relative;
        }

        .th-underline::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          height: 3px; width: 0%;
          background: linear-gradient(90deg, #f97316, #fb923c);
          border-radius: 2px;
          animation: th-ul-grow 1.2s ease forwards 0.9s;
        }

        @keyframes th-ul-grow { to { width: 100%; } }

        .th-desc {
          font-size: 0.95rem;
          color: #6b7280;
          line-height: 1.8;
          font-weight: 300;
          max-width: 440px;
          margin-bottom: 36px;
        }

        .th-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 44px;
        }

        .th-btn-primary {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(249,115,22,0.32);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .th-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(249,115,22,0.45);
        }

        .th-btn-outline {
          background: transparent;
          color: #374151;
          border: 1.5px solid #e5e7eb;
          padding: 14px 28px;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: border-color 0.25s, color 0.25s, transform 0.25s;
        }

        .th-btn-outline:hover {
          border-color: #f97316;
          color: #f97316;
          transform: translateY(-2px);
        }

        .th-stats {
          display: flex;
          gap: 36px;
          padding-top: 32px;
          border-top: 1px solid #f3f4f6;
        }

        .th-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.9rem;
          font-weight: 700;
          color: #111827;
          line-height: 1;
        }

        .th-stat-num span { color: #f97316; }

        .th-stat-label {
          font-size: 0.72rem;
          color: #9ca3af;
          font-weight: 300;
          margin-top: 4px;
        }

        /* Image */
        .th-img-wrap { position: relative; }

        .th-img-bg {
          position: absolute;
          inset: 16px -16px -16px 16px;
          background: linear-gradient(135deg, rgba(249,115,22,0.1), rgba(251,146,60,0.04));
          border-radius: 24px;
          pointer-events: none;
        }

        .th-img {
          width: 100%;
          border-radius: 20px;
          object-fit: cover;
          box-shadow: 0 24px 80px rgba(0,0,0,0.1);
          display: block;
          position: relative;
          z-index: 1;
          transition: transform 0.5s ease;
        }

        .th-img-wrap:hover .th-img { transform: scale(1.02); }

        .th-badge {
          position: absolute;
          z-index: 2;
          background: white;
          border-radius: 14px;
          padding: 12px 16px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #f3f4f6;
        }

        .th-badge-1 {
          bottom: 28px; left: -20px;
          animation: th-float 3.5s ease-in-out infinite;
        }

        .th-badge-2 {
          top: 28px; right: -20px;
          animation: th-float 4.5s ease-in-out infinite reverse;
        }

        @keyframes th-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .th-badge-icon {
          width: 36px; height: 36px;
          background: linear-gradient(135deg, #fff7ed, #fed7aa);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }

        .th-badge-val {
          font-size: 0.82rem;
          font-weight: 700;
          color: #111827;
        }

        .th-badge-label {
          font-size: 0.68rem;
          color: #9ca3af;
          font-weight: 300;
        }

        /* Animations */
        .th-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        .th-reveal.th-visible { opacity: 1; transform: translateY(0); }
        .th-reveal:nth-child(1) { transition-delay: 0s; }
        .th-reveal:nth-child(2) { transition-delay: 0.1s; }
        .th-reveal:nth-child(3) { transition-delay: 0.2s; }
        .th-reveal:nth-child(4) { transition-delay: 0.3s; }
        .th-reveal:nth-child(5) { transition-delay: 0.4s; }

        .th-slide-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .th-slide-right.th-visible { opacity: 1; transform: translateX(0); }
      `}</style>

      <section className="th-section" ref={ref}>
        <div className="th-accent-stripe" />
        <div className="th-blob-1" />
        <div className="th-blob-2" />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="th-grid">
            <div>
              <div className="th-eyebrow th-reveal">
                <div className="th-dot" />
                Expert-Led Programs
              </div>
              <h1 className="th-title th-reveal">
                Boost Your Career with{" "}
                <em><span className="th-underline">Expert-Led</span></em>{" "}
                Training
              </h1>
              <p className="th-desc th-reveal">
                Stay ahead in your industry with hands-on training programs designed
                to enhance your skills and accelerate career growth.
              </p>
              <div className="th-btns th-reveal">
                <button className="th-btn-primary">Start Learning</button>
                <button className="th-btn-outline">Explore Courses</button>
              </div>
              <div className="th-stats th-reveal">
                {[
                  { num: "12K", suffix: "+", label: "Active Learners" },
                  { num: "98", suffix: "%", label: "Satisfaction Rate" },
                  { num: "200", suffix: "+", label: "Expert Courses" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="th-stat-num">{s.num}<span>{s.suffix}</span></div>
                    <div className="th-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="th-img-wrap th-slide-right">
              <div className="th-img-bg" />
              <img src="/src/assets/images/image(12).png" alt="Training" className="th-img" />
              <div className="th-badge th-badge-1">
                <div className="th-badge-icon">🎓</div>
                <div>
                  <div className="th-badge-val">New Batch</div>
                  <div className="th-badge-label">Starting March 2026</div>
                </div>
              </div>
              <div className="th-badge th-badge-2">
                <div className="th-badge-icon">⚡</div>
                <div>
                  <div className="th-badge-val">Live Sessions</div>
                  <div className="th-badge-label">Interactive & Real-time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingHero;