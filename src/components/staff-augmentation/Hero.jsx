import img1 from "../../assets/sa-1.jpg";
import img2 from "../../assets/sa-2.jpg";
import img3 from "../../assets/sa-3.jpg";

import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  /* ─────────────────────────────────────────────
     Parallax Scroll Effect
  ───────────────────────────────────────────── */

  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, -60]);
  const y2 = useTransform(scrollY, [0, 500], [0, -90]);
  const y3 = useTransform(scrollY, [0, 500], [0, -120]);

  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

     
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-black mb-6"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          Staff Augmentation
        </motion.h1>

        <motion.p
          className="text-slate-900 leading-relaxed max-w-xl text-lg"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          Staff augmentation is a flexible outsourcing strategy where we hire
          skilled professionals on a temporary basis to fill specific roles or
          meet project demands. It allows organizations to scale their workforce
          quickly without long-term commitments.
        </motion.p>
      </motion.div>

      {/* ───────────────── IMAGE COLLAGE ───────────────── */}

      <div className="relative w-full h-[420px]">

        {/* IMAGE 1 */}
        <motion.img
          src={img1}
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.08,
            rotate: 2,
            boxShadow: "0px 25px 50px rgba(0,0,0,0.25)",
          }}
          className="absolute top-0 right-0 w-64 rounded-xl shadow-lg cursor-pointer"
        />

        {/* IMAGE 2 */}
        <motion.img
          src={img2}
          style={{ y: y2 }}
          initial={{ opacity: 0, scale: 0.85, rotate: 6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          whileHover={{
            scale: 1.08,
            rotate: -2,
            boxShadow: "0px 25px 50px rgba(0,0,0,0.25)",
          }}
          className="absolute top-32 left-12 w-56 rounded-xl shadow-lg cursor-pointer"
        />

        {/* IMAGE 3 */}
        <motion.img
          src={img3}
          style={{ y: y3 }}
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{
            scale: 1.08,
            rotate: 2,
            boxShadow: "0px 25px 50px rgba(0,0,0,0.25)",
          }}
          className="absolute bottom-0 right-12 w-56 rounded-xl shadow-lg cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Hero;