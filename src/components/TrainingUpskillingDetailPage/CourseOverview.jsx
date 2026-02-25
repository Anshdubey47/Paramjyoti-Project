import { useEffect, useRef } from "react";

const details = [
  {
    icon: "📖",
    label: "Course Name",
    value: "Advanced UI/UX Design & Prototyping",
    highlight: true,
  },
  {
    icon: "🗓️",
    label: "Duration",
    value: "12 Weeks",
  },
  {
    icon: "📊",
    label: "Difficulty Level",
    value: "Intermediate to Advanced",
  },
  {
    icon: "💻",
    label: "Mode",
    value: "Online (Live + Recorded Sessions)",
  },
  {
    icon: "🏅",
    label: "Certification",
    value: "Yes, issued upon completion",
  },
];

const CourseOverview = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("co-visible");
        });
      },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".co-reveal, .co-slide-left").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .co-section {
          font-family: 'DM Sans', sans-serif;
          background: #ffffff;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .co-section::before {
          content: '';
          position: absolute;
          top: -160px;
          left: -160px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }

        .co-section::after {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }

        .co-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 768px) {
          .co-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        /* Image side */
        .co-img-wrap {
          position: relative;
        }

        .co-img-bg {
          position: absolute;
          inset: 20px -20px -20px 20px;
          background: linear-gradient(135deg, rgba(249,115,22,0.1), rgba(251,146,60,0.05));
          border-radius: 24px;
          pointer-events: none;
        }

        .co-img {
          width: 100%;
          border-radius: 20px;
          object-fit: cover;
          box-shadow: 0 24px 80px rgba(0,0,0,0.1);
          display: block;
          position: relative;
          z-index: 1;
          transition: transform 0.5s ease;
        }

        .co-img-wrap:hover .co-img { transform: scale(1.02); }

        .co-float-card {
          position: absolute;
          top: 28px;
          right: -24px;
          z-index: 2;
          background: white;
          border-radius: 16px;
          padding: 14px 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 10px;
          animation: co-float 3s ease-in-out infinite;
        }

        @keyframes co-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .co-float-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }

        .co-float-label {
          font-size: 0.68rem;
          color: #9ca3af;
          font-weight: 300;
        }

        .co-float-val {
          font-size: 0.82rem;
          font-weight: 700;
          color: #111827;
        }

        .co-rating-card {
          position: absolute;
          bottom: 28px;
          left: -24px;
          z-index: 2;
          background: white;
          border-radius: 16px;
          padding: 14px 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          animation: co-float 4s ease-in-out infinite reverse;
        }

        .co-rating-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 4px;
        }

        .co-star {
          color: #f97316;
          font-size: 0.9rem;
        }

        .co-rating-text {
          font-size: 0.72rem;
          color: #9ca3af;
          font-weight: 300;
        }

        .co-rating-num {
          font-size: 0.875rem;
          font-weight: 700;
          color: #111827;
        }

        /* Content side */
        .co-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(249,115,22,0.08);
          border: 1px solid rgba(249,115,22,0.2);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #ea580c;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .co-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .co-title em { font-style: italic; color: #f97316; }

        .co-subtitle {
          font-size: 0.875rem;
          color: #9ca3af;
          font-weight: 300;
          line-height: 1.75;
          margin-bottom: 36px;
          max-width: 420px;
        }

        /* Detail cards */
        .co-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .co-detail-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #fafaf8;
          border: 1.5px solid #f3f4f6;
          border-radius: 14px;
          padding: 16px 20px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .co-detail-card::after {
          content: '';
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #f97316, #fb923c);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.35s ease;
          border-radius: 14px 0 0 14px;
        }

        .co-detail-card:hover {
          border-color: rgba(249,115,22,0.25);
          box-shadow: 0 6px 24px rgba(249,115,22,0.08);
          transform: translateX(-4px);
        }

        .co-detail-card:hover::after { transform: scaleY(1); }

        .co-detail-card.highlighted {
          background: linear-gradient(135deg, #fff7ed 0%, white 100%);
          border-color: rgba(249,115,22,0.2);
        }

        .co-detail-icon {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, #fff7ed, #fed7aa);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .co-detail-card:hover .co-detail-icon {
          transform: scale(1.1) rotate(-6deg);
        }

        .co-detail-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 2px;
        }

        .co-detail-val {
          font-size: 0.875rem;
          font-weight: 600;
          color: #111827;
          line-height: 1.4;
        }

        .co-detail-card.highlighted .co-detail-val {
          color: #ea580c;
        }

        /* CTA row */
        .co-cta-row {
          display: flex;
          gap: 14px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .co-btn-primary {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          border: none;
          padding: 13px 24px;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(249,115,22,0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .co-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(249,115,22,0.45);
        }

        .co-btn-outline {
          background: transparent;
          color: #374151;
          border: 1.5px solid #e5e7eb;
          padding: 13px 24px;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }

        .co-btn-outline:hover {
          border-color: #f97316;
          color: #f97316;
          transform: translateY(-2px);
        }

        /* Reveal animations */
        .co-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        .co-reveal.co-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .co-reveal:nth-child(2) { transition-delay: 0.1s; }
        .co-reveal:nth-child(3) { transition-delay: 0.2s; }
        .co-reveal:nth-child(4) { transition-delay: 0.3s; }
        .co-reveal:nth-child(5) { transition-delay: 0.4s; }
        .co-reveal:nth-child(6) { transition-delay: 0.5s; }
        .co-reveal:nth-child(7) { transition-delay: 0.6s; }

        .co-slide-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .co-slide-left.co-visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <section className="co-section" ref={ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="co-grid">
            {/* Left: Image */}
            <div className="co-img-wrap co-slide-left">
              <div className="co-img-bg" />
              <img
                src="/src/assets/images/image(13).png"
                alt="Course overview"
                className="co-img"
              />
              <div className="co-float-card">
                <div className="co-float-icon">🎓</div>
                <div>
                  <div className="co-float-val">Certified</div>
                  <div className="co-float-label">Upon completion</div>
                </div>
              </div>
              <div className="co-rating-card">
                <div className="co-rating-stars">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="co-star">{s}</span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                  <div className="co-rating-num">4.9</div>
                  <div className="co-rating-text">/ 2,400+ reviews</div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <div className="co-eyebrow co-reveal">✦ Program Details</div>
              <h2 className="co-title co-reveal">
                Course <em>Overview</em>
              </h2>
              <p className="co-subtitle co-reveal">
                A comprehensive, industry-aligned program designed to take you from fundamentals to professional-grade design in 12 weeks.
              </p>

              <div className="co-details">
                {details.map((d, i) => (
                  <div
                    key={i}
                    className={`co-detail-card co-reveal${d.highlight ? " highlighted" : ""}`}
                  >
                    <div className="co-detail-icon">{d.icon}</div>
                    <div>
                      <div className="co-detail-label">{d.label}</div>
                      <div className="co-detail-val">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseOverview;