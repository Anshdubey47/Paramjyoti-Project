import { motion } from "framer-motion";

const Commitment = () => {
  return (
    <section className="relative overflow-hidden max-w-7xl text-left mx-auto px-6 py-20">

      
      
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-black leading-tight"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Committed to
      </motion.h2>

      {/* ✨ Animated Underline */}

      <motion.div
        className="h-1 w-40 mt-4 rounded-full bg-gradient-to-r from-orange-500 via-orange-800 to-orange-500"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 160, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
      />

      {/* ───────── SUBTEXT ───────── */}

      <motion.p
        className="text-gray-900 text-xl md:text-2xl font-bold mt-6 tracking-wide"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        professionalism and excellence
      </motion.p>
    </section>
  );
};

export default Commitment;