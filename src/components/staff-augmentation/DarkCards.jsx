import texture from "../../assets/dark.png";
import { motion, useMotionValue, useTransform } from "framer-motion";

/* ───────────────── UNIQUE CARD ───────────────── */

const DarkCard = ({ title, text }) => {
  /* 🎯 Mouse-based 3D tilt */

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative text-white rounded-[40px] p-10 min-h-[420px] overflow-hidden"
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      {/* 🌌 TEXTURE BACKGROUND */}
      <div
        className="absolute inset-0 rounded-[40px]"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ✨ GLASS OVERLAY */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-[40px]" />

      {/* 🌈 GRADIENT BORDER GLOW */}
      <div className="absolute inset-0 rounded-[40px] p-[2px] bg-gradient-to-br from-orange-500 via-orange-500 to-orange-400 opacity-0  transition duration-500">
        <div className="w-full h-full bg-transparent rounded-[38px]" />
      </div>

      {/* 💫 SPOTLIGHT FOLLOW CURSOR */}
      <motion.div
        className="pointer-events-none absolute w-72 h-72 rounded-full bg-white/10 blur-3xl"
        style={{ x, y }}
      />

      {/* 🌊 FLOATING ORBS */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* ───────── CONTENT ───────── */}

      <div className="relative z-10">

        {/* ✨ TITLE WITH GRADIENT HOVER */}
        <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent   transition duration-500">
          {title}
        </h3>

        <p className="text-gray-200 leading-relaxed whitespace-pre-line">
          {text}
        </p>
      </div>
    </motion.div>
  );
};

/* ───────────────── UNIQUE SECTION ───────────────── */

const DarkCards = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 overflow-hidden">

      {/* 🌌 MASSIVE BACKGROUND AURORA */}
      <div className="absolute -z-10 w-[900px] h-[900px] bg-gradient-to-br from-orange-600 via-orange-600 to-orange-500 opacity-20 blur-3xl rounded-full -top-60 -left-60" />

      <DarkCard
        title="We aim to..."
        text={`Recruit and retain the highest calibre of experienced employees with proven ability.

We create stringent recruitment strategies bespoke to your business need, outlining a cost-effective recruitment process with defined timelines.

Provide clients with value for money invested and on-going support and advice.`}
      />

      <DarkCard
        title="Unique Services"
        text={`We invest time to understand your business, its organisational structure, culture, and strategic goals.

Professional Standards – we operate with strict ethical practices, ensuring complete confidentiality for both candidates and clients.`}
      />
    </section>
  );
};

export default DarkCards;