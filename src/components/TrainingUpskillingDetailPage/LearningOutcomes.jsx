import { useEffect, useRef } from "react";

const outcomes = [
  { icon: "🎨", text: "Master advanced UI/UX design principles and heuristics" },
  { icon: "⚡", text: "Learn Figma, Adobe XD, and Protopie for interactive prototyping" },
  { icon: "♿", text: "Design for accessibility and inclusivity" },
  { icon: "💼", text: "Work on real-world projects and build a strong portfolio" },
  { icon: "🔬", text: "Get insights into user research and A/B testing" },
];

const LearningOutcomes = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("lo-visible");
        });
      },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".lo-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .lo-section {
          font-family: 'DM Sans', sans-serif;
          background: #ffffff;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
        }

        .lo-section::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -120px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }

        .lo-section::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }

        .lo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 768px) {
          .lo-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        .lo-eyebrow {
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

        .lo-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .lo-title em {
          font-style: italic;
          color: #f97316;
        }

        .lo-subtitle {
          font-size: 0.9rem;
          color: #9ca3af;
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .lo-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .lo-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #fafaf8;
          border: 1.5px solid #f3f4f6;
          border-radius: 14px;
          padding: 16px 20px;
          cursor: default;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .lo-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #f97316, #fb923c);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.35s ease;
          border-radius: 0 0 0 14px;
        }

        .lo-item:hover {
          border-color: rgba(249,115,22,0.25);
          box-shadow: 0 8px 32px rgba(249,115,22,0.1);
          transform: translateX(4px);
        }

        .lo-item:hover::before { transform: scaleY(1); }

        .lo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #fff7ed, #fed7aa);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .lo-item:hover .lo-icon {
          transform: scale(1.1) rotate(-8deg);
        }

        .lo-item-text {
          font-size: 0.875rem;
          color: #374151;
          line-height: 1.65;
          font-weight: 400;
          padding-top: 2px;
        }

        .lo-image-wrap {
          position: relative;
        }

        .lo-image-wrap::before {
          content: '';
          position: absolute;
          top: -16px;
          right: -16px;
          width: calc(100% - 32px);
          height: calc(100% - 32px);
          border: 2px dashed rgba(249,115,22,0.2);
          border-radius: 24px;
          pointer-events: none;
          animation: lo-border-spin 8s linear infinite;
        }

        @keyframes lo-border-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .lo-img {
          width: 100%;
          border-radius: 20px;
          object-fit: cover;
          box-shadow: 0 24px 80px rgba(0,0,0,0.1);
          transition: transform 0.6s ease;
          display: block;
        }

        .lo-image-wrap:hover .lo-img {
          transform: scale(1.02);
        }

        .lo-stat-strip {
          position: absolute;
          bottom: 24px;
          left: -20px;
          background: white;
          border-radius: 14px;
          padding: 14px 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 12px;
          animation: lo-float 3.5s ease-in-out infinite;
        }

        @keyframes lo-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .lo-stat-icon {
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1rem;
        }

        .lo-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #111827;
          line-height: 1;
        }

        .lo-stat-label {
          font-size: 0.7rem;
          color: #9ca3af;
          font-weight: 300;
        }

        .lo-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .lo-reveal.lo-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .lo-reveal:nth-child(2) { transition-delay: 0.1s; }
        .lo-reveal:nth-child(3) { transition-delay: 0.2s; }
        .lo-reveal:nth-child(4) { transition-delay: 0.3s; }
        .lo-reveal:nth-child(5) { transition-delay: 0.4s; }
        .lo-reveal:nth-child(6) { transition-delay: 0.5s; }

        .lo-slide-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .lo-slide-right.lo-visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <section className="lo-section" ref={ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="lo-grid">
            {/* Left: Content */}
            <div>
              <div className="lo-eyebrow lo-reveal">✦ What You'll Gain</div>
              <h2 className="lo-title lo-reveal">
                Learning <em>Outcomes</em>
                <br />that Matter
              </h2>
              <p className="lo-subtitle lo-reveal">
                Every lesson is crafted to build skills you'll use from day one.
                Real-world applicable, industry-validated knowledge.
              </p>

              <ul className="lo-list">
                {outcomes.map((item, i) => (
                  <li key={i} className="lo-item lo-reveal">
                    <div className="lo-icon">{item.icon}</div>
                    <span className="lo-item-text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Image */}
            <div className="lo-image-wrap lo-slide-right">
              <img
                src="/src/assets/images/image(14).png"
                alt="Learning outcomes"
                className="lo-img"
              />
              <div className="lo-stat-strip">
                <div className="lo-stat-icon">🏆</div>
                <div>
                  <div className="lo-stat-num">94%</div>
                  <div className="lo-stat-label">Learners land jobs faster</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearningOutcomes;