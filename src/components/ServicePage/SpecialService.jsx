import React, { useEffect, useRef } from "react";

const SpecialService = ({ title, description, imageLeft, imageRight, dominant = "left" }) => {
  const ref = useRef(null);

  const leftH = dominant === "left" ? "520px" : "300px";
  const rightH = dominant === "right" ? "520px" : "300px";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("ss-visible");
        });
      },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".ss-reveal, .ss-img-reveal").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ss-section {
          font-family: 'DM Sans', sans-serif;
          background: #fafaf8;
          border-radius: 28px;
          padding: 60px 56px;
          margin-bottom: 100px;
          position: relative;
          overflow: hidden;
          border: 1.5px solid #f3f4f6;
        }

        /* Subtle orange top border */
        .ss-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #f97316, #fb923c, transparent);
        }

        /* Orange glow blob */
        .ss-section::after {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }

        .ss-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .ss-grid { grid-template-columns: 1fr; }
          .ss-section { padding: 36px 24px; border-radius: 20px; }
        }

        /* Left image column */
        .ss-img-left {
          position: relative;
        }

        .ss-img-left::before {
          content: '';
          position: absolute;
          top: -10px; left: -10px;
          right: 10px; bottom: 10px;
          border: 2px dashed rgba(249,115,22,0.15);
          border-radius: 20px;
          pointer-events: none;
        }

        .ss-img {
          width: 100%;
          object-fit: cover;
          border-radius: 16px;
          display: block;
          box-shadow: 0 16px 48px rgba(0,0,0,0.1);
          transition: transform 0.5s ease;
        }

        .ss-img:hover { transform: scale(1.02); }

        /* Right column */
        .ss-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .ss-img-right-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
        }

        .ss-img-right-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 1.5px solid rgba(249,115,22,0.15);
          border-radius: 16px;
          pointer-events: none;
        }

        /* Content block */
        .ss-content {
          background: white;
          border-radius: 18px;
          padding: 28px 24px;
          border: 1.5px solid #f3f4f6;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .ss-content:hover {
          border-color: rgba(249,115,22,0.22);
          box-shadow: 0 10px 36px rgba(249,115,22,0.08);
        }

        .ss-content::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .ss-content:hover::before { transform: scaleX(1); }

        .ss-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(249,115,22,0.08);
          border: 1px solid rgba(249,115,22,0.2);
          border-radius: 100px;
          padding: 4px 12px;
          font-size: 0.68rem;
          font-weight: 600;
          color: #ea580c;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .ss-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.4rem, 2.2vw, 1.9rem);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .ss-divider {
          width: 36px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          border-radius: 2px;
          margin: 12px 0 14px;
        }

        .ss-desc {
          font-size: 0.85rem;
          color: #6b7280;
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 20px;
        }

        .ss-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
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

        .ss-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #f97316, #ea580c);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .ss-btn:hover { color: white; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(249,115,22,0.35); }
        .ss-btn:hover::before { opacity: 1; }
        .ss-btn span { position: relative; z-index: 1; }
        .ss-btn-arrow { position: relative; z-index: 1; transition: transform 0.25s; }
        .ss-btn:hover .ss-btn-arrow { transform: translateX(4px); }

        /* Reveal animations */
        .ss-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        .ss-reveal.ss-visible { opacity: 1; transform: translateY(0); }
        .ss-reveal:nth-child(1) { transition-delay: 0s; }
        .ss-reveal:nth-child(2) { transition-delay: 0.1s; }
        .ss-reveal:nth-child(3) { transition-delay: 0.2s; }

        .ss-img-reveal {
          opacity: 0;
          transform: translateX(-32px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }

        .ss-img-reveal.ss-visible { opacity: 1; transform: translateX(0); }
      `}</style>

      <div className="ss-section" ref={ref}>
        <div className="ss-grid">
          {/* Left image */}
          <div className="ss-img-left ss-img-reveal">
            <img
              src={imageLeft}
              alt={title}
              className="ss-img"
              style={{ height: leftH }}
            />
          </div>

          {/* Right column */}
          <div className="ss-right">
            <div className="ss-img-right-wrap ss-reveal">
              <img
                src={imageRight}
                alt={title}
                className="ss-img"
                style={{ height: rightH }}
              />
            </div>

            <div className="ss-content ss-reveal">
              <div className="ss-eyebrow">✦ Featured Service</div>
              <h3 className="ss-title">{title}</h3>
              <div className="ss-divider" />
              <p className="ss-desc">{description}</p>
              <button className="ss-btn">
                <span>Learn More</span>
                <span className="ss-btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialService;