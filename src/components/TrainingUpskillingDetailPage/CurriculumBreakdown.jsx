import { useEffect, useRef, useState } from "react";

const modules = [
  {
    num: "01",
    title: "Foundations of UI/UX",
    desc: "Core design principles, visual hierarchy, typography, color theory, and the fundamentals of user-centered design.",
    weeks: "Week 1–3",
  },
  {
    num: "02",
    title: "Advanced Design Tools & Techniques",
    desc: "Deep dives into Figma, Adobe XD, and Protopie — from wireframing to pixel-perfect interactive prototypes.",
    weeks: "Week 4–6",
  },
  {
    num: "03",
    title: "Research & Testing",
    desc: "User interviews, usability testing, A/B experiments, heat maps, and data-driven design decisions.",
    weeks: "Week 7–9",
  },
  {
    num: "04",
    title: "Real-World Project & Portfolio",
    desc: "Build a capstone project from scratch, peer-review sessions, and craft a portfolio that gets noticed.",
    weeks: "Week 10–12",
  },
];

const CurriculumBreakdown = () => {
  const ref = useRef(null);
  const [activeModule, setActiveModule] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("cb-visible");
        });
      },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".cb-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .cb-section {
          font-family: 'DM Sans', sans-serif;
          background: #fafaf8;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .cb-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent);
        }

        .cb-section::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent);
        }

        /* Header */
        .cb-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .cb-eyebrow {
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
          margin-bottom: 16px;
        }

        .cb-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .cb-title em { font-style: italic; color: #f97316; }

        .cb-sub {
          font-size: 0.9rem;
          color: #9ca3af;
          font-weight: 300;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Main layout */
        .cb-layout {
          display: grid;
          grid-template-columns: 1fr 1.4fr 1fr;
          gap: 40px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .cb-layout { grid-template-columns: 1fr; gap: 40px; }
          .cb-img-col { display: none; }
        }

        .cb-img-col {
          display: flex;
          justify-content: center;
        }

        .cb-img-wrap {
          position: relative;
          width: 100%;
          max-width: 260px;
        }

        .cb-img-wrap::before {
          content: '';
          position: absolute;
          inset: -10px;
          border: 2px solid rgba(249,115,22,0.15);
          border-radius: 24px;
          pointer-events: none;
        }

        .cb-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          display: block;
          transition: transform 0.5s ease;
        }

        .cb-img-wrap:hover .cb-img { transform: scale(1.03); }

        .cb-img-badge {
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 100px;
          padding: 8px 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
          white-space: nowrap;
          font-size: 0.75rem;
          font-weight: 600;
          color: #111827;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .cb-img-badge span {
          color: #f97316;
        }

        /* Center modules */
        .cb-center {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cb-module {
          background: white;
          border-radius: 16px;
          border: 1.5px solid #f3f4f6;
          padding: 0;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .cb-module.active {
          border-color: rgba(249,115,22,0.35);
          box-shadow: 0 8px 32px rgba(249,115,22,0.12);
        }

        .cb-module:hover:not(.active) {
          border-color: rgba(249,115,22,0.2);
          box-shadow: 0 4px 20px rgba(249,115,22,0.07);
        }

        .cb-module-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
        }

        .cb-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #f3f4f6;
          transition: color 0.3s ease;
          min-width: 32px;
          line-height: 1;
        }

        .cb-module.active .cb-num { color: #f97316; }

        .cb-module-title {
          font-weight: 600;
          font-size: 0.875rem;
          color: #374151;
          flex: 1;
          transition: color 0.3s ease;
        }

        .cb-module.active .cb-module-title { color: #111827; }

        .cb-week-tag {
          font-size: 0.68rem;
          font-weight: 500;
          color: #f97316;
          background: rgba(249,115,22,0.08);
          border-radius: 100px;
          padding: 3px 10px;
          white-space: nowrap;
        }

        .cb-chevron {
          color: #d1d5db;
          font-size: 0.8rem;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .cb-module.active .cb-chevron {
          transform: rotate(90deg);
          color: #f97316;
        }

        .cb-module-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .cb-module.active .cb-module-body {
          max-height: 120px;
        }

        .cb-module-desc {
          font-size: 0.82rem;
          color: #6b7280;
          line-height: 1.7;
          padding: 0 20px 18px 68px;
          font-weight: 300;
        }

        .cb-progress-bar {
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          border-radius: 0 0 0 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }

        .cb-module.active .cb-progress-bar { transform: scaleX(1); }

        /* Right info panel */
        .cb-info-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cb-info-card {
          background: white;
          border-radius: 16px;
          border: 1.5px solid #f3f4f6;
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cb-info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(249,115,22,0.08);
          border-color: rgba(249,115,22,0.2);
        }

        .cb-info-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #fff7ed, #fed7aa);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          margin-bottom: 12px;
        }

        .cb-info-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }

        .cb-info-val {
          font-size: 0.95rem;
          font-weight: 600;
          color: #111827;
        }

        /* Reveal animations */
        .cb-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        .cb-reveal.cb-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cb-reveal:nth-child(1) { transition-delay: 0s; }
        .cb-reveal:nth-child(2) { transition-delay: 0.1s; }
        .cb-reveal:nth-child(3) { transition-delay: 0.2s; }
        .cb-reveal:nth-child(4) { transition-delay: 0.3s; }
      `}</style>

      <section className="cb-section" ref={ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          {/* Header */}
          <div className="cb-header">
            <div className="cb-eyebrow cb-reveal">📚 12-Week Program</div>
            <h2 className="cb-title cb-reveal">
              Curriculum <em>Breakdown</em>
            </h2>
            <p className="cb-sub cb-reveal">
              A structured learning journey from foundations to a portfolio-ready capstone project.
            </p>
          </div>

          {/* Main 3-col layout */}
          <div className="cb-layout">
            {/* Left image */}
            <div className="cb-img-col cb-reveal">
              <div className="cb-img-wrap">
                <img
                  src="/src/assets/images/image(15).png"
                  alt="Curriculum work"
                  className="cb-img"
                />
                <div className="cb-img-badge">
                  🎓 <span>4</span> Modules
                </div>
              </div>
            </div>

            {/* Center: accordion modules */}
            <div className="cb-center cb-reveal">
              {modules.map((mod, i) => (
                <div
                  key={i}
                  className={`cb-module${activeModule === i ? " active" : ""}`}
                  onClick={() => setActiveModule(i === activeModule ? -1 : i)}
                >
                  <div className="cb-progress-bar" />
                  <div className="cb-module-header">
                    <div className="cb-num">{mod.num}</div>
                    <div className="cb-module-title">{mod.title}</div>
                    <div className="cb-week-tag">{mod.weeks}</div>
                    <div className="cb-chevron">›</div>
                  </div>
                  <div className="cb-module-body">
                    <div className="cb-module-desc">{mod.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: info cards */}
            <div className="cb-info-panel cb-reveal">
              {[
                { icon: "⏱️", title: "Duration", val: "12 Weeks" },
                { icon: "📡", title: "Format", val: "Live + Recorded" },
                { icon: "🧑‍🏫", title: "Instructor", val: "Industry Experts" },
                { icon: "📜", title: "Certificate", val: "On Completion" },
              ].map((card) => (
                <div key={card.title} className="cb-info-card">
                  <div className="cb-info-icon">{card.icon}</div>
                  <div className="cb-info-title">{card.title}</div>
                  <div className="cb-info-val">{card.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CurriculumBreakdown;