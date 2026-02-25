import { useEffect, useRef } from "react";

const testimonials = [
  {
    rating: 3,
    text: "Their creative strategies helped us gain thousands of followers and real customer conversions.",
    name: "Tracey Wilson",
    role: "Marketing Director",
    date: "August 10, 2025",
    avatar: "#fde68a",
  },
  {
    rating: 4,
    text: "Thanks to their expert social media marketing, we saw a 3x increase in interactions and brand awareness!",
    name: "James Carter",
    role: "Startup Founder",
    date: "August 10, 2025",
    featured: true,
    avatar: "#fed7aa",
  },
  {
    rating: 3,
    text: "Their creative strategies helped us gain thousands of followers and real customer conversions.",
    name: "Sophia Lee",
    role: "Product Manager",
    date: "August 10, 2025",
    avatar: "#d1fae5",
  },
];

const Testimonials = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("tm-visible");
        });
      },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".tm-card, .tm-header-el").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .tm-section {
          font-family: 'DM Sans', sans-serif;
          background: #ffffff;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        /* Giant quote watermark */
        .tm-watermark {
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Playfair Display', serif;
          font-size: 320px;
          color: rgba(249,115,22,0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        /* Orange blobs */
        .tm-blob-r {
          position: absolute;
          top: -80px; right: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }

        .tm-blob-l {
          position: absolute;
          bottom: -80px; left: -80px;
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }

        .tm-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }

        .tm-eyebrow {
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

        .tm-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 10px;
        }

        .tm-title em { font-style: italic; color: #f97316; }

        .tm-divider {
          width: 56px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          border-radius: 2px;
          margin: 0 auto 14px;
        }

        .tm-sub {
          font-size: 0.875rem;
          color: #9ca3af;
          font-weight: 300;
        }

        /* Grid */
        .tm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .tm-grid { grid-template-columns: 1fr; }
        }

        .tm-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          border: 1.5px solid #f3f4f6;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.65s ease, transform 0.65s ease,
                      border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }

        .tm-card.tm-visible { opacity: 1; transform: translateY(0); }
        .tm-card:nth-child(1) { transition-delay: 0s; }
        .tm-card:nth-child(2) { transition-delay: 0.15s; }
        .tm-card:nth-child(3) { transition-delay: 0.3s; }

        .tm-card:hover {
          border-color: rgba(249,115,22,0.25);
          box-shadow: 0 12px 48px rgba(249,115,22,0.1);
          transform: translateY(-4px) !important;
        }

        /* Featured card */
        .tm-card.featured {
          background: linear-gradient(160deg, #fff7ed 0%, #ffffff 55%);
          border-color: rgba(249,115,22,0.28);
          box-shadow: 0 12px 48px rgba(249,115,22,0.12);
          transform: scale(1.04) !important;
          z-index: 1;
        }

        .tm-card.featured.tm-visible {
          transform: scale(1.04) !important;
        }

        .tm-card.featured:hover {
          box-shadow: 0 20px 60px rgba(249,115,22,0.18);
          transform: scale(1.04) translateY(-4px) !important;
        }

        /* Top shimmer line */
        .tm-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .tm-card.featured::before { transform: scaleX(1); }
        .tm-card:hover::before { transform: scaleX(1); }

        /* Large quote mark */
        .tm-card::after {
          content: '"';
          position: absolute;
          top: 12px; right: 18px;
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          color: rgba(249,115,22,0.08);
          line-height: 1;
          pointer-events: none;
        }

        .tm-card.featured::after {
          color: rgba(249,115,22,0.12);
        }

        .tm-feat-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 10px;
          border-radius: 100px;
          margin-bottom: 16px;
        }

        .tm-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 18px;
        }

        .tm-text {
          font-size: 0.9rem;
          color: #374151;
          line-height: 1.8;
          font-style: italic;
          font-weight: 300;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .tm-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid #f3f4f6;
          padding-top: 18px;
        }

        .tm-avatar {
          width: 40px; height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
          color: #111827;
          flex-shrink: 0;
          border: 2px solid rgba(249,115,22,0.15);
        }

        .tm-name {
          font-weight: 600;
          font-size: 0.875rem;
          color: #111827;
        }

        .tm-role {
          font-size: 0.72rem;
          color: #9ca3af;
          font-weight: 300;
        }

        /* Header reveals */
        .tm-header-el {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .tm-header-el.tm-visible { opacity: 1; transform: translateY(0); }
        .tm-header-el:nth-child(1) { transition-delay: 0s; }
        .tm-header-el:nth-child(2) { transition-delay: 0.1s; }
        .tm-header-el:nth-child(3) { transition-delay: 0.2s; }
        .tm-header-el:nth-child(4) { transition-delay: 0.3s; }
      `}</style>

      <section className="tm-section">
        <div className="tm-watermark">"</div>
        <div className="tm-blob-r" />
        <div className="tm-blob-l" />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="tm-header">
            <div className="tm-eyebrow tm-header-el">💬 Success Stories</div>
            <h2 className="tm-title tm-header-el">What Our <em>Learners</em> Say</h2>
            <div className="tm-divider tm-header-el" />
            <p className="tm-sub tm-header-el">Real stories from real professionals who leveled up.</p>
          </div>

          <div className="tm-grid" ref={ref}>
            {testimonials.map((item, i) => (
              <div key={i} className={`tm-card${item.featured ? " featured" : ""}`}>
                {item.featured && (
                  <div className="tm-feat-badge">⭐ Top Review</div>
                )}

                <div className="tm-stars">
                  {[...Array(4)].map((_, si) => (
                    <svg key={si} width="15" height="15" viewBox="0 0 20 20">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        fill={si < item.rating ? "#f97316" : "#f3f4f6"}
                      />
                    </svg>
                  ))}
                </div>

                <p className="tm-text">"{item.text}"</p>

                <div className="tm-footer">
                  <div className="tm-avatar" style={{ background: item.avatar }}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="tm-name">{item.name}</div>
                    <div className="tm-role">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;