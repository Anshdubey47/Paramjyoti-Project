import React from "react";
import { motion } from "framer-motion";

import Servicecrd from "./Servicecrd.jsx";
import SpecialService from "./SpecialService.jsx";
import WhatWeDo from "./WhatWeDo.jsx";
import ServicesHero from "./ServicesHero.jsx";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .services-page {
          font-family: 'DM Sans', sans-serif;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        /* Animated top accent stripe */
        .services-stripe {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c, #fdba74, #f97316);
          background-size: 200% 100%;
          animation: stripe-shift 3s linear infinite;
          z-index: 100;
        }

        @keyframes stripe-shift {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }

        /* Section separators */
        .services-sep {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent);
          margin: 0 0 80px;
        }

        /* Background blob that follows page */
        .services-bg-blob {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
          top: 10%;
          right: -200px;
        }

        .services-bg-blob-2 {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(249,115,22,0.03) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
          top: 55%;
          left: -150px;
        }
      `}</style>

      <div className="services-page">
        <div className="services-stripe" />
        <div className="services-bg-blob" />
        <div className="services-bg-blob-2" />

        <motion.div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px" }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* HERO */}
          <motion.div variants={fadeUp}>
            <ServicesHero />
          </motion.div>

          <div className="services-sep" />

          {/* WHAT WE DO */}
          <motion.div variants={fadeUp}>
            <WhatWeDo />
          </motion.div>

          {/* WEB DESIGN */}
          <motion.div variants={fadeUp}>
            <SpecialService
              title="Web Design"
              description="PJIPL offers a complete suite of Web Solutions to venture-backed companies, helping them build a solid online foundation for growth. We offer the following web services: Web Designing, Web Development, Internet Marketing /SEO, and Social Media Marketing."
              imageLeft="/src/assets/images/webdesign2.png"
              imageRight="/src/assets/images/webdesign1.png"
              dominant="left"
            />
          </motion.div>

          {/* TRAINING */}
          <motion.div variants={fadeUp}>
            <Servicecrd
              title="Training & Upskilling"
              description="PJIPL, Formally PS Associates, is enabling Skill development by providing SMART Training Solutions using Digital tools to enable better understanding of concepts and increase employability."
              image="/src/assets/images/training1.png"
            />
          </motion.div>

          {/* SOFTWARE DEV */}
          <motion.div variants={fadeUp}>
            <SpecialService
              title="Software Development"
              description="PJIPL Products range include Smart Credit Online Branch Automation System and HotelPro — a revolutionary software solution for achieving excellence in hotel operations and improved profitability."
              imageLeft="/src/assets/images/software1.png"
              imageRight="/src/assets/images/software2.png"
              dominant="left"
            />
          </motion.div>

          {/* SYSTEM INTEGRATION */}
          <motion.div variants={fadeUp}>
            <Servicecrd
              title="System Integration"
              description="PJIPL specializes in delivering technology solutions aligned with Digital India, offering global vision, deep customer understanding, and maximum returns on IT investment."
              image="/src/assets/images/image(1).png"
            />
          </motion.div>

          {/* HARDWARE */}
          <motion.div variants={fadeUp}>
            <Servicecrd
              title="Hardware Maintenance"
              description="PJIPL provides outstanding computer hardware maintenance services with customized solutions tailored to your organization's IT needs."
              image="/src/assets/images/image(2).png"
              reverse
            />
          </motion.div>

          {/* SOCIAL MEDIA */}
          <motion.div variants={fadeUp}>
            <Servicecrd
              title="Social Media Marketing"
              description="PJIPL helps businesses grow online through effective social media strategies that increase leads, engagement, and sales."
              image="/src/assets/images/image(3).png"
            />
          </motion.div>

          {/* STAFF AUGMENTATION */}
          <motion.div variants={fadeUp}>
            <SpecialService
              title="Staff Augmentation"
              description="PJIPL provides skilled professionals and technical experts to support business growth, improve productivity, and ensure project success."
              imageLeft="/src/assets/images/software1.png"
              imageRight="/src/assets/images/software2.png"
              dominant="left"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Services;