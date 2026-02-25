import React, { useState, useEffect, useRef } from "react";

const services = [
  { title: "Social Media Marketing", image: "/src/assets/images/scroll1.png" },
  { title: "Web Design", image: "/src/assets/images/scroll2.png" },
  { title: "System Integration", image: "/src/assets/images/scroll7.png" },
  { title: "Staff Augmentation", image: "/src/assets/images/scroll3.png" },
  { title: "Software Development", image: "/src/assets/images/scroll4.png" },
  { title: "Training & Upskilling", image: "/src/assets/images/scroll5.png" },
  { title: "Hardware Maintenance", image: "/src/assets/images/scroll6.png" },
];

const ServicesHero = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("up");
  const ref = useRef(null);

  const changeSlide = (dir, newIndex) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setIndex(newIndex);
      setAnimating(false);
    }, 350);
  };

  const prevService = () => {
    const newIndex = index === 0 ? services.length - 1 : index - 1;
    changeSlide("up", newIndex);
  };

  const nextService = () => {
    const newIndex = index === services.length - 1 ? 0 : index + 1;
    changeSlide("down", newIndex);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("sh-visible");
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".sh-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .sh-section {
          font-family: 'DM Sans', sans-serif;
          padding: 80px 0 60px;
          position: relative;
        }

        .sh-eyebrow {
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
          margin-bottom: 14px;
        }

        .sh-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          color: #111827;
          margin-bottom: 40px;
          line-height: 1.2;
        }

        .sh-title em { font-style: italic; color: #f97316; }

        /* Slider */
        .sh-slider-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0,0,0,0.12);
        }

        .sh-slide {
          position: relative;
          height: 480px;
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .sh-slide.animating-up {
          opacity: 0;
          transform: translateY(-20px);
        }

        .sh-slide.animating-down {
          opacity: 0;
          transform: translateY(20px);
        }

        .sh-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Overlay */
        .sh-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.75) 0%,
            rgba(0,0,0,0.2) 50%,
            transparent 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px 48px;
        }

        .sh-service-num {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          font-weight: 700;
          color: rgba(249,115,22,0.25);
          line-height: 1;
          margin-bottom: -8px;
        }

        .sh-service-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 700;
          color: white;
          line-height: 1.1;
        }

        .sh-service-divider {
          width: 48px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          border-radius: 2px;
          margin: 16px 0 0;
        }

        /* Top-right indicators */
        .sh-indicators {
          position: absolute;
          top: 24px;
          right: 24px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 2;
        }

        .sh-indicator-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.35);
          transition: background 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }

        .sh-indicator-dot.active {
          background: #f97316;
          transform: scale(1.5);
        }

        /* Nav buttons */
        .sh-nav-btns {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 2;
        }

        .sh-nav-btn {
          width: 42px;
          height: 42px;
          background: rgba(255,255,255,0.92);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          font-size: 1rem;
          color: #374151;
        }

        .sh-nav-btn:hover {
          background: #f97316;
          color: white;
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(249,115,22,0.4);
        }

        /* Bottom progress bar */
        .sh-progress-track {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: rgba(255,255,255,0.15);
        }

        .sh-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #f97316, #fb923c);
          transition: width 0.4s ease;
        }

        /* Thumbnail strip */
        .sh-thumbs {
          display: flex;
          gap: 10px;
          margin-top: 16px;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none;
        }

        .sh-thumbs::-webkit-scrollbar { display: none; }

        .sh-thumb {
          flex-shrink: 0;
          width: 80px;
          height: 54px;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
        }

        .sh-thumb.active {
          border-color: #f97316;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(249,115,22,0.3);
        }

        .sh-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .sh-thumb-label {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.35);
          display: flex;
          align-items: flex-end;
          padding: 4px 5px;
          font-size: 0.55rem;
          color: rgba(255,255,255,0.85);
          font-weight: 500;
          line-height: 1.2;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .sh-thumb:hover .sh-thumb-label,
        .sh-thumb.active .sh-thumb-label { opacity: 1; }

        /* Hint text */
        .sh-hint {
          margin-top: 20px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.78rem;
          color: #9ca3af;
          font-weight: 300;
        }

        .sh-hint-icon {
          width: 28px;
          height: 28px;
          background: rgba(249,115,22,0.08);
          border: 1px solid rgba(249,115,22,0.18);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          color: #f97316;
          animation: sh-bounce 2s ease-in-out infinite;
        }

        @keyframes sh-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        /* Reveal */
        .sh-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .sh-reveal.sh-visible { opacity: 1; transform: translateY(0); }
        .sh-reveal:nth-child(2) { transition-delay: 0.1s; }
        .sh-reveal:nth-child(3) { transition-delay: 0.2s; }
        .sh-reveal:nth-child(4) { transition-delay: 0.3s; }
        .sh-reveal:nth-child(5) { transition-delay: 0.4s; }
      `}</style>

      <div className="sh-section" ref={ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "8px" }}>
            <div className="sh-eyebrow sh-reveal">✦ What We Offer</div>
            <h2 className="sh-title sh-reveal">
              All Our <em>Services</em>
            </h2>
          </div>

          {/* Slider */}
          <div className="sh-slider-wrap sh-reveal">
            <div className={`sh-slide${animating ? ` animating-${direction}` : ""}`}>
              <img src={services[index].image} alt={services[index].title} />

              <div className="sh-overlay">
                <div className="sh-service-num">
                  0{index + 1}
                </div>
                <div className="sh-service-title">{services[index].title}</div>
                <div className="sh-service-divider" />
              </div>

              {/* Dot indicators */}
              <div className="sh-indicators">
                {services.map((_, i) => (
                  <div
                    key={i}
                    className={`sh-indicator-dot${i === index ? " active" : ""}`}
                    onClick={() => changeSlide(i > index ? "down" : "up", i)}
                  />
                ))}
              </div>

              {/* Nav */}
              <div className="sh-nav-btns">
                <button className="sh-nav-btn" onClick={prevService}>↑</button>
                <button className="sh-nav-btn" onClick={nextService}>↓</button>
              </div>

              {/* Progress bar */}
              <div className="sh-progress-track">
                <div
                  className="sh-progress-fill"
                  style={{ width: `${((index + 1) / services.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="sh-thumbs sh-reveal">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`sh-thumb${i === index ? " active" : ""}`}
                onClick={() => changeSlide(i > index ? "down" : "up", i)}
              >
                <img src={svc.image} alt={svc.title} />
                <div className="sh-thumb-label">{svc.title}</div>
              </div>
            ))}
          </div>

          {/* Hint */}
          <div className="sh-hint sh-reveal">
            <div className="sh-hint-icon">↕</div>
            <span>Click arrows or thumbnails to explore all services</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHero;