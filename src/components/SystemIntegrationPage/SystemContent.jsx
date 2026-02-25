import { useEffect, useRef } from "react";

const SystemContent = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("syc-visible");
        });
      },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".syc-reveal, .syc-img-reveal").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .syc-section {
          font-family: 'DM Sans', sans-serif;
          background: #ffffff;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .syc-section::before {
          content: '';
          position: absolute;
          top: -160px; left: -160px;
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }

        .syc-section::after {
          content: '';
          position: absolute;
          bottom: -100px; right: -100px;
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }

        .syc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 768px) {
          .syc-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        /* Left content */
        .syc-eyebrow {
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
          margin-bottom: 18px;
        }

        .syc-dot {
          width: 6px; height: 6px;
          background: #f97316;
          border-radius: 50%;
          animation: syc-blink 2s ease-in-out infinite;
        }

        @keyframes syc-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }

        .syc-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 700;
          color: #111827;
          line-height: 1.15;
          margin-bottom: 8px;
        }

        .syc-title em { font-style: italic; color: #f97316; }

        .syc-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #fff7ed, #fed7aa);
          border: 1px solid rgba(249,115,22,0.2);
          border-radius: 10px;
          padding: 8px 14px;
          margin: 16px 0 20px;
        }

        .syc-badge-icon {
          font-size: 1.1rem;
        }

        .syc-badge-text {
          font-size: 0.8rem;
          font-weight: 600;
          color: #ea580c;
        }

        .syc-divider {
          width: 44px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          border-radius: 2px;
          margin-bottom: 22px;
        }

        .syc-desc {
          font-size: 0.9rem;
          color: #6b7280;
          line-height: 1.85;
          font-weight: 300;
          max-width: 460px;
          margin-bottom: 12px;
        }

        .syc-desc-highlight {
          font-size: 0.88rem;
          color: #374151;
          line-height: 1.85;
          font-weight: 400;
          max-width: 460px;
          margin-bottom: 28px;
          border-left: 3px solid rgba(249,115,22,0.3);
          padding-left: 16px;
        }

        .syc-btn {
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
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .syc-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #f97316, #ea580c);
          opacity: 0;
          transition: opacity 0.25s;
        }

        .syc-btn:hover { color: white; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(249,115,22,0.35); }
        .syc-btn:hover::before { opacity: 1; }
        .syc-btn span { position: relative; z-index: 1; }
        .syc-btn-arr { position: relative; z-index: 1; transition: transform 0.25s; }
        .syc-btn:hover .syc-btn-arr { transform: translateX(4px); }

        /* Right: image grid */
        .syc-img-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          position: relative;
        }

        .syc-img-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.09);
        }

        .syc-img-wrap:first-child {
          grid-row: span 1;
          margin-top: 28px;
        }

        .syc-img-wrap:last-child {
          margin-top: -28px;
        }

        .syc-img-wrap img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .syc-img-wrap:hover img { transform: scale(1.05); }

        /* Overlay shimmer on hover */
        .syc-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(249,115,22,0.12), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .syc-img-wrap:hover::after { opacity: 1; }

        /* Orange corner accents */
        .syc-img-corner {
          position: absolute;
          top: 10px; right: 10px;
          width: 28px; height: 28px;
          border-top: 2px solid rgba(249,115,22,0.5);
          border-right: 2px solid rgba(249,115,22,0.5);
          border-radius: 0 4px 0 0;
          z-index: 1;
          pointer-events: none;
        }

        /* Floating experience badge */
        .syc-float-badge {
          position: absolute;
          bottom: -16px;
          left: -16px;
          background: white;
          border-radius: 14px;
          padding: 12px 18px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.1);
          border: 1px solid #f3f4f6;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 3;
          animation: syc-float 3.5s ease-in-out infinite;
        }

        @keyframes syc-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .syc-float-icon {
          width: 36px; height: 36px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }

        .syc-float-val {
          font-size: 0.85rem;
          font-weight: 700;
          color: #111827;
          line-height: 1;
        }

        .syc-float-label {
          font-size: 0.68rem;
          color: #9ca3af;
          font-weight: 300;
        }

        /* Reveal */
        .syc-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        .syc-reveal.syc-visible { opacity: 1; transform: translateY(0); }
        .syc-reveal:nth-child(1) { transition-delay: 0s; }
        .syc-reveal:nth-child(2) { transition-delay: 0.1s; }
        .syc-reveal:nth-child(3) { transition-delay: 0.18s; }
        .syc-reveal:nth-child(4) { transition-delay: 0.26s; }
        .syc-reveal:nth-child(5) { transition-delay: 0.34s; }
        .syc-reveal:nth-child(6) { transition-delay: 0.42s; }
        .syc-reveal:nth-child(7) { transition-delay: 0.5s; }

        .syc-img-reveal {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .syc-img-reveal.syc-visible { opacity: 1; transform: translateX(0); }
      `}</style>

      <section className="syc-section" ref={ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="syc-grid">
            {/* Left */}
            <div>
              <div className="syc-eyebrow syc-reveal">
                <div className="syc-dot" />
                IT Solutions
              </div>
              <h1 className="syc-title syc-reveal">
                System <em>Integration</em>
              </h1>
              <div className="syc-badge syc-reveal">
                <span className="syc-badge-icon">🏆</span>
                <span className="syc-badge-text">20+ Years of BFSI Sector Experience</span>
              </div>
              <div className="syc-divider syc-reveal" />
              <p className="syc-desc syc-reveal">
                20+ years of System Integration services in BFSI Sector.
              </p>
              <p className="syc-desc-highlight syc-reveal">
                Today, businesses demand global vision, an in-depth understanding of
                customers and suppliers, demonstrated thought leadership and a
                consultative partnership approach to offer the highest possible
                returns on IT investment. We help businesses achieve these ends.
              </p>
              <button className="syc-btn syc-reveal">
                <span>Learn More</span>
                <span className="syc-btn-arr">→</span>
              </button>
            </div>

            {/* Right: staggered image grid */}
            <div className="syc-img-reveal" style={{ position: "relative" }}>
              <div className="syc-img-grid">
                <div className="syc-img-wrap">
                  <div className="syc-img-corner" />
                  <img src="/src/assets/images/image(6).png" alt="System Integration" />
                </div>
                <div className="syc-img-wrap">
                  <img src="/src/assets/images/image(7).png" alt="System Integration" />
                </div>
              </div>
              <div className="syc-float-badge">
                <div className="syc-float-icon">⚙️</div>
                <div>
                  <div className="syc-float-val">500+ Integrations</div>
                  <div className="syc-float-label">Successfully delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SystemContent;