import React from "react";
import { motion } from "framer-motion";

import Servicecrd from "./Servicecrd.jsx";
import SpecialService from "./SpecialService.jsx";
import WhatWeDo from "./WhatWeDo.jsx";
import ServicesHero from "./ServicesHero.jsx";

/* ─────────────────────────────────────────────
   Animation Variants
───────────────────────────────────────────── */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services relative max-w-7xl mx-7 px-6 py-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* ✨ Background Glow */}
      <div className="absolute -z-10 blur-3xl opacity-30 
        bg-gradient-to-r from-purple-500 to-blue-500 
        w-[600px] h-[600px] rounded-full top-20 left-10" />

      {/* HERO */}
      <motion.div variants={fadeUp}>
        <ServicesHero />
      </motion.div>

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
  );
};

export default Services;