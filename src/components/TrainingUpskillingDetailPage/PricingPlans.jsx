import { useEffect, useRef, useState } from "react";

const plans = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    desc: "Perfect for individuals exploring new skills.",
    cta: "Get Started Free",
    features: [
      "5 courses access",
      "Community support",
      "Basic certificates",
      "Mobile access",
      "Monthly webinars",
    ],
  },
  {
    name: "Pro",
    price: { monthly: 19, annual: 15 },
    desc: "Advanced tools for growing professionals.",
    cta: "Start Free Trial",
    featured: true,
    features: [
      "Unlimited courses & storage",
      "Priority customer support",
      "Custom branding & watermark removal",
      "Export in multiple formats",
      "Advanced integrations (Slack, Zapier, Figma)",
    ],
  },
  {
    name: "Enterprise",
    price: { monthly: 59, annual: 49 },
    desc: "Comprehensive solutions for scaling teams.",
    cta: "Contact Sales",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom learning paths",
      "API access & SSO",
      "SLA & premium uptime guarantee",
    ],
  },
];

const PricingPlans = () => {
  const ref = useRef(null);
  const [annual, setAnnual] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("pp-visible");
        });
      },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".pp-card, .pp-header-el").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .pp-section {
          font-family: 'DM Sans', sans-serif;
          background: #fafaf8;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .pp-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent);
        }

        .pp-blob-1 {
          position: absolute;
          top: -120px; right: -120px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
          animation: pp-pulse 6s ease-in-out infinite;
        }

        .pp-blob-2 {
          position: absolute;
          bottom: -100px; left: -100px;
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
          animation: pp-pulse 8s ease-in-out infinite reverse;
        }

        @keyframes pp-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        /* Header */
        .pp-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }

        .pp-eyebrow {
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

        .pp-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .pp-title em { font-style: italic; color: #f97316; }

        .pp-sub {
          font-size: 0.875rem;
          color: #9ca3af;
          font-weight: 300;
          margin-bottom: 28px;
        }

        /* Toggle */
        .pp-toggle-wrap {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: white;
          border: 1.5px solid #f3f4f6;
          border-radius: 100px;
          padding: 6px 20px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }

        .pp-toggle-label {
          font-size: 0.8rem;
          color: #9ca3af;
          cursor: pointer;
          transition: color 0.2s;
          font-weight: 400;
        }

        .pp-toggle-label.active {
          color: #111827;
          font-weight: 600;
        }

        .pp-toggle-btn {
          width: 42px; height: 22px;
          background: #f97316;
          border-radius: 100px;
          cursor: pointer;
          position: relative;
          border: none;
          outline: none;
          box-shadow: 0 2px 8px rgba(249,115,22,0.35);
          transition: background 0.3s;
        }

        .pp-toggle-thumb {
          position: absolute;
          width: 16px; height: 16px;
          background: white;
          border-radius: 50%;
          top: 3px; left: 3px;
          transition: transform 0.3s ease;
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        }

        .pp-toggle-btn.annual .pp-toggle-thumb {
          transform: translateX(20px);
        }

        .pp-save-badge {
          background: rgba(249,115,22,0.1);
          color: #ea580c;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 100px;
          letter-spacing: 0.05em;
          border: 1px solid rgba(249,115,22,0.2);
        }

        /* Cards grid */
        .pp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .pp-grid { grid-template-columns: 1fr; max-width: 460px; margin: 0 auto; }
        }

        .pp-card {
          background: white;
          border-radius: 24px;
          padding: 36px 30px;
          border: 1.5px solid #f3f4f6;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(48px);
          transition: opacity 0.7s ease, transform 0.7s ease,
                      border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .pp-card.pp-visible { opacity: 1; transform: translateY(0); }
        .pp-card:nth-child(1) { transition-delay: 0s; }
        .pp-card:nth-child(2) { transition-delay: 0.15s; }
        .pp-card:nth-child(3) { transition-delay: 0.3s; }

        .pp-card:hover {
          border-color: rgba(249,115,22,0.25);
          box-shadow: 0 16px 56px rgba(249,115,22,0.1);
          transform: translateY(-5px) !important;
        }

        /* Featured */
        .pp-card.featured {
          background: linear-gradient(160deg, #fff7ed 0%, white 50%);
          border-color: rgba(249,115,22,0.35);
          box-shadow: 0 16px 56px rgba(249,115,22,0.14);
          transform: scale(1.03) !important;
        }

        .pp-card.featured.pp-visible { transform: scale(1.03) !important; }

        .pp-card.featured:hover {
          box-shadow: 0 24px 72px rgba(249,115,22,0.2);
          transform: scale(1.03) translateY(-5px) !important;
        }

        /* Top accent */
        .pp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.45s ease;
        }

        .pp-card.featured::before { transform: scaleX(1); }
        .pp-card:hover::before { transform: scaleX(1); }

        /* Decorative number */
        .pp-card-num {
          position: absolute;
          bottom: -10px; right: 16px;
          font-family: 'Playfair Display', serif;
          font-size: 6rem;
          font-weight: 700;
          color: rgba(249,115,22,0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .pp-feat-badge {
          position: absolute;
          top: 20px; right: 20px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 5px 12px;
          border-radius: 100px;
          box-shadow: 0 4px 14px rgba(249,115,22,0.35);
        }

        .pp-plan-name {
          font-size: 0.75rem;
          font-weight: 700;
          color: #f97316;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 14px;
        }

        .pp-price-row {
          display: flex;
          align-items: baseline;
          gap: 3px;
          margin-bottom: 6px;
        }

        .pp-dollar {
          font-size: 1.2rem;
          font-weight: 500;
          color: #6b7280;
          align-self: flex-start;
          margin-top: 8px;
        }

        .pp-price-num {
          font-family: 'Playfair Display', serif;
          font-size: 3.6rem;
          font-weight: 700;
          color: #111827;
          line-height: 1;
          transition: all 0.3s ease;
        }

        .pp-period {
          font-size: 0.78rem;
          color: #9ca3af;
          font-weight: 300;
          margin-bottom: 14px;
        }

        .pp-desc {
          font-size: 0.85rem;
          color: #6b7280;
          line-height: 1.65;
          font-weight: 300;
          margin-bottom: 24px;
        }

        .pp-btn {
          width: 100%;
          padding: 13px;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          border: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          margin-bottom: 8px;
        }

        .pp-btn.primary {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          box-shadow: 0 4px 16px rgba(249,115,22,0.3);
        }

        .pp-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(249,115,22,0.4);
        }

        .pp-btn.outline {
          background: transparent;
          color: #374151;
          border: 1.5px solid #e5e7eb;
        }

        .pp-btn.outline:hover {
          border-color: #f97316;
          color: #f97316;
          transform: translateY(-2px);
        }

        .pp-refill {
          text-align: center;
          font-size: 0.7rem;
          color: #d1d5db;
          margin-bottom: 22px;
        }

        .pp-divider {
          border: none;
          border-top: 1px solid #f3f4f6;
          margin-bottom: 20px;
        }

        .pp-feat-title {
          font-size: 0.72rem;
          font-weight: 600;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 14px;
        }

        .pp-feat-list {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .pp-feat-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.83rem;
          color: #374151;
          font-weight: 300;
          line-height: 1.5;
        }

        .pp-check {
          width: 18px; height: 18px;
          background: rgba(249,115,22,0.1);
          border: 1px solid rgba(249,115,22,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .pp-card.featured .pp-check {
          background: rgba(249,115,22,0.15);
          border-color: rgba(249,115,22,0.4);
        }

        /* Header reveals */
        .pp-header-el {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .pp-header-el.pp-visible { opacity: 1; transform: translateY(0); }
        .pp-header-el:nth-child(1) { transition-delay: 0s; }
        .pp-header-el:nth-child(2) { transition-delay: 0.1s; }
        .pp-header-el:nth-child(3) { transition-delay: 0.2s; }
        .pp-header-el:nth-child(4) { transition-delay: 0.3s; }
      `}</style>

      <section className="pp-section">
        <div className="pp-blob-1" />
        <div className="pp-blob-2" />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="pp-header">
            <div className="pp-eyebrow pp-header-el">💎 Transparent Pricing</div>
            <h2 className="pp-title pp-header-el">
              Choose the <em>perfect plan</em>
              <br />for your business
            </h2>
            <p className="pp-sub pp-header-el">Scale as you grow. No hidden fees. Cancel anytime.</p>

            <div className="pp-toggle-wrap pp-header-el">
              <span
                className={`pp-toggle-label${!annual ? " active" : ""}`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </span>
              <button
                className={`pp-toggle-btn${annual ? " annual" : ""}`}
                onClick={() => setAnnual(!annual)}
              >
                <div className="pp-toggle-thumb" />
              </button>
              <span
                className={`pp-toggle-label${annual ? " active" : ""}`}
                onClick={() => setAnnual(true)}
              >
                Annual
              </span>
              <span className="pp-save-badge">Save 20%</span>
            </div>
          </div>

          <div className="pp-grid" ref={ref}>
            {plans.map((plan, i) => (
              <div key={plan.name} className={`pp-card${plan.featured ? " featured" : ""}`}>
                {plan.featured && <div className="pp-feat-badge">Most Popular</div>}
                <div className="pp-card-num">0{i + 1}</div>

                <div className="pp-plan-name">{plan.name}</div>

                <div className="pp-price-row">
                  <span className="pp-dollar">$</span>
                  <span className="pp-price-num">
                    {annual ? plan.price.annual : plan.price.monthly}
                  </span>
                </div>
                <div className="pp-period">Per month · {annual ? "Billed annually" : "Billed monthly"}</div>
                <p className="pp-desc">{plan.desc}</p>

                <button className={`pp-btn ${plan.featured ? "primary" : "outline"}`}>
                  {plan.cta}
                </button>
                <div className="pp-refill">No contracts · Cancel anytime</div>

                <hr className="pp-divider" />

                <div className="pp-feat-title">What's included</div>
                <ul className="pp-feat-list">
                  {plan.features.map((f) => (
                    <li key={f} className="pp-feat-item">
                      <div className="pp-check">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlans;