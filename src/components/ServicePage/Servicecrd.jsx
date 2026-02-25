import React, { useEffect, useRef } from "react";

const Servicecrd = ({ title, description, image, reverse }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("sc-visible");
        });
      },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".sc-reveal, .sc-slide").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .sc-wrap {
          font-family: 'DM Sans', sans-serif;
          display: flex;
          align-items: center;
          gap: 72px;
          margin-bottom: 100px;
          position: relative;
        }

        .sc-wrap.reversed { flex-direction: row-reverse; }

        @media (max-width: 768px) {
          .sc-wrap, .sc-wrap.reversed { flex-direction: column; gap: 40px; }
        }

        /* Content side */
        .sc-content {
          flex: 1;
        }

        .sc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(249,115,22,0.08);
          border: 1px solid rgba(249,115,22,0.2);
          border-radius: 100px;
          padding: 4px 12px;
          font-size: 0.68rem;
          font-weight: 600;
          color: #ea580c;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .sc-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .sc-divider {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          border-radius: 2px;
          margin: 14px 0 18px;
        }

        .sc-desc {
          font-size: 0.9rem;
          color: #6b7280;
          line-height: 1.85;
          font-weight: 300;
          max-width: 460px;
          margin-bottom: 28px;
        }

        .sc-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: transparent;
          border: 1.5px solid #f97316;
          color: #f97316;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease,
                      transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .sc-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #f97316, #ea580c);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .sc-btn:hover {
          color: white;
          border-color: #f97316;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(249,115,22,0.35);
        }

        .sc-btn:hover::before { opacity: 1; }
        .sc-btn span { position: relative; z-index: 1; }

        .sc-btn-arrow {
          position: relative;
          z-index: 1;
          transition: transform 0.25s ease;
        }

        .sc-btn:hover .sc-btn-arrow { transform: translateX(4px); }

        /* Image side */
        .sc-img-side {
          flex: 1;
          position: relative;
        }

        .sc-img-bg {
          position: absolute;
          inset: 14px -14px -14px 14px;
          background: linear-gradient(135deg, rgba(249,115,22,0.1), rgba(251,146,60,0.04));
          border-radius: 22px;
          pointer-events: none;
        }

        .sc-wrap.reversed .sc-img-bg {
          inset: 14px 14px -14px -14px;
        }

        .sc-img {
          width: 100%;
          max-width: 500px;
          border-radius: 18px;
          object-fit: contain;
          display: block;
          position: relative;
          z-index: 1;
          box-shadow: 0 20px 60px rgba(0,0,0,0.09);
          transition: transform 0.5s ease;
        }

        .sc-img-side:hover .sc-img { transform: scale(1.02); }

        /* Corner accent */
        .sc-corner {
          position: absolute;
          width: 48px;
          height: 48px;
          border-top: 3px solid rgba(249,115,22,0.35);
          border-left: 3px solid rgba(249,115,22,0.35);
          border-radius: 4px;
          top: -8px;
          left: -8px;
          z-index: 2;
          pointer-events: none;
        }

        .sc-wrap.reversed .sc-corner {
          left: auto;
          right: -8px;
          border-left: none;
          border-right: 3px solid rgba(249,115,22,0.35);
        }

        .sc-corner-br {
          position: absolute;
          width: 48px;
          height: 48px;
          border-bottom: 3px solid rgba(249,115,22,0.2);
          border-right: 3px solid rgba(249,115,22,0.2);
          border-radius: 4px;
          bottom: -8px;
          right: -8px;
          z-index: 2;
          pointer-events: none;
        }

        .sc-wrap.reversed .sc-corner-br {
          right: auto;
          left: -8px;
          border-right: none;
          border-left: 3px solid rgba(249,115,22,0.2);
        }

        /* Reveal animations */
        .sc-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        .sc-reveal.sc-visible { opacity: 1; transform: translateY(0); }
        .sc-reveal:nth-child(1) { transition-delay: 0s; }
        .sc-reveal:nth-child(2) { transition-delay: 0.1s; }
        .sc-reveal:nth-child(3) { transition-delay: 0.18s; }
        .sc-reveal:nth-child(4) { transition-delay: 0.26s; }
        .sc-reveal:nth-child(5) { transition-delay: 0.34s; }

        .sc-slide {
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .sc-slide-left {
          transform: translateX(-36px);
        }

        .sc-slide-right {
          transform: translateX(36px);
        }

        .sc-slide.sc-visible { opacity: 1; transform: translateX(0); }
      `}</style>

      <div className={`sc-wrap${reverse ? " reversed" : ""}`} ref={ref}>
        {/* Content */}
        <div className="sc-content">
          <div className="sc-eyebrow sc-reveal">✦ Our Service</div>
          <h3 className="sc-title sc-reveal">{title}</h3>
          <div className="sc-divider sc-reveal" />
          <p className="sc-desc sc-reveal">{description}</p>
          <button className="sc-btn sc-reveal">
            <span>Learn More</span>
            <span className="sc-btn-arrow">→</span>
          </button>
        </div>

        {/* Image */}
        <div className={`sc-img-side sc-slide ${reverse ? "sc-slide-left" : "sc-slide-right"}`}>
          <div className="sc-img-bg" />
          <div className="sc-corner" />
          <div className="sc-corner-br" />
          <img src={image} alt={title} className="sc-img" />
        </div>
      </div>
    </>
  );
};

export default Servicecrd;