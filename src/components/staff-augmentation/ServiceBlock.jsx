import { motion, useScroll, useTransform } from "framer-motion";

const ServiceBlock = ({ title, text, image, reverse }) => {
  /* 🌊 Parallax effect for image */
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, -30]);

  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-6 py-16">

      {/* ✨ Background glow */}
      <div className="absolute -z-10 w-[600px] h-[600px] bg-gradient-to-r from-orange-400 to-orange-600 opacity-20 blur-3xl rounded-full -top-40 -left-40" />

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* ───────── IMAGE SIDE ───────── */}

        <motion.div
          className={reverse ? "md:order-2" : "md:order-1"}
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={image}
            alt={title}
            style={{ y }}
            className="w-full rounded-2xl shadow-xl cursor-pointer"
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0px 35px 80px rgba(0,0,0,0.25)",
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* ───────── TEXT SIDE ───────── */}

        <motion.div
          className={reverse ? "md:order-1" : "md:order-2"}
          initial={{ opacity: 0, x: reverse ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.h3
            className="text-3xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h3>

          {/* ✨ Animated underline */}
          <motion.div
            className="h-1 w-28 mb-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            transition={{ duration: 0.7 }}
          />

          {/* Text */}
          {Array.isArray(text) ? (
            text.map((para, index) => (
              <motion.p
                key={index}
                className="text-gray-800 leading-relaxed mb-4 last:mb-0"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {para}
              </motion.p>
            ))
          ) : (
            <motion.p
              className="text-gray-800 leading-relaxed"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {text}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceBlock;