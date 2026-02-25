import { useEffect, useRef, useState } from "react";

const tabs = [
  {
    title: "Course Overview",
    icon: "📋",
    desc: "A structured snapshot of what the course covers — from learning format to certification details and key highlights.",
  },
  {
    title: "Learning Outcomes",
    icon: "🎯",
    desc: "Master real-world skills with measurable results and industry-recognized certifications upon completion.",
  },
  {
    title: "Curriculum Breakdown",
    icon: "📚",
    desc: "A meticulously structured curriculum covering foundational to advanced topics, crafted by domain experts.",
  },
  {
    title: "Pricing & Enrollment",
    icon: "💳",
    desc: "Flexible pricing plans and seamless enrollment designed to fit every budget and learning schedule.",
  },
];

const TrainingTabs = () => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("tt-visible");
        });
      },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".tt-card, .tt-header-el").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .tt-section {
          font-family: 'DM Sans', sans-serif;
          background: #fafaf8;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        /* Top and bottom orange accent lines */
        .tt-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent);
        }

        .tt-section::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent);
        }

        /* Subtle orange dot grid */
        .tt-dotgrid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(249,115,22,0.08) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%);
        }

        .tt-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }

        .tt-eyebrow {
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

        .tt-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .tt-title em { font-style: italic; color: #f97316; }

        .tt-sub {
          font-size: 0.875rem;
          color: #9ca3af;
          font-weight: 300;
          max-width: 420px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .tt-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .tt-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 560px) {
          .tt-grid { grid-template-columns: 1fr; }
        }

        .tt-card {
          background: white;
          border-radius: 20px;
          padding: 28px 24px;
          border: 1.5px solid #f3f4f6;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease, transform 0.6s ease,
                      border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .tt-card:hover {
          border-color: rgba(249,115,22,0.28);
          box-shadow: 0 12px 40px rgba(249,115,22,0.1);
          transform: translateY(-4px) !important;
        }

        .tt-card.tt-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .tt-card:nth-child(1) { transition-delay: 0s; }
        .tt-card:nth-child(2) { transition-delay: 0.1s; }
        .tt-card:nth-child(3) { transition-delay: 0.2s; }
        .tt-card:nth-child(4) { transition-delay: 0.3s; }

        /* Top bar sweep */
        .tt-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .tt-card:hover::before { transform: scaleX(1); }

        /* Background wash on hover */
        .tt-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(249,115,22,0.03) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tt-card:hover::after { opacity: 1; }

        .tt-icon-wrap {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, #fff7ed, #fed7aa);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .tt-card:hover .tt-icon-wrap {
          transform: scale(1.1) rotate(-8deg);
        }

        .tt-card-num {
          position: absolute;
          top: 20px;
          right: 20px;
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: rgba(249,115,22,0.07);
          line-height: 1;
          pointer-events: none;
        }

        .tt-card-title {
          font-weight: 600;
          font-size: 0.9rem;
          color: #111827;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }

        .tt-card-desc {
          font-size: 0.82rem;
          color: #6b7280;
          line-height: 1.75;
          font-weight: 300;
          position: relative;
          z-index: 1;
        }

        .tt-card-arrow {
          margin-top: 18px;
          font-size: 0.78rem;
          color: #f97316;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .tt-card:hover .tt-card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Header elements reveal */
        .tt-header-el {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .tt-header-el.tt-visible { opacity: 1; transform: translateY(0); }
        .tt-header-el:nth-child(1) { transition-delay: 0s; }
        .tt-header-el:nth-child(2) { transition-delay: 0.1s; }
        .tt-header-el:nth-child(3) { transition-delay: 0.2s; }
      `}</style>

      <section className="tt-section">
        <div className="tt-dotgrid" />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="tt-header">
            <div className="tt-eyebrow tt-header-el">✦ Explore the Program</div>
            <h2 className="tt-title tt-header-el">
              Training & <em>Upskilling</em>
            </h2>
            <p className="tt-sub tt-header-el">
              Everything you need to know before you begin your learning journey.
            </p>
          </div>

          <div className="tt-grid" ref={ref}>
            {tabs.map((tab, i) => (
              <div
                key={tab.title}
                className="tt-card"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="tt-card-num">0{i + 1}</div>
                <div className="tt-icon-wrap">{tab.icon}</div>
                <h3 className="tt-card-title">{tab.title}</h3>
                <p className="tt-card-desc">{tab.desc}</p>
                <div className="tt-card-arrow">Learn more <span>→</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingTabs;