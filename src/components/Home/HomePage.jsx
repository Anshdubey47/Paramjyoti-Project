import { motion } from "framer-motion";
import { useState } from "react";
import { FiAward, FiClock, FiSettings, FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const scrollToSolutions = () => {
    if (typeof window !== "undefined") {
      const el = document.getElementById("solutions-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const scrollToContact = () => {
    if (typeof window !== "undefined") {
      const el = document.getElementById("contact-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const heroImages = ["/image.png", "/Vector 3.png", "/image (1).png", "/image (2).png"];

  return (
    <section className="bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto px-6 py-12 lg:py-16 text-center">
        <motion.h1
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
>
  Empowering Innovation, Securing the Future
</motion.h1>

        <div className="mt-8 flex justify-center">
          <div className="flex items-stretch gap-1 justify-center">
            <div className="h-24 lg:h-32 w-10 flex-shrink-0">
              <img
                src="/Vector 2.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
           <div className="flex justify-center items-stretch">
  {heroImages.map((src, index) => (
  <motion.div
    key={src}
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className={`relative h-24 lg:h-32 w-56 lg:w-72 overflow-hidden 
      ${index !== 0 ? "-ml-10 lg:-ml-14" : ""}`}
    style={{
      clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
    }}
  >
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  ))}
           </div>
          </div>
        </div>

        <p className="mt-10 text-sm lg:text-base text-gray-600 leading-relaxed">
          Param Jyoti Infotech Pvt. Ltd. is an IT solutions company specializing in
          software development, implementation, social media promotion, system integration,
          AV production, and consultancy services.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollToSolutions}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm"
          >
            Get Started
          </button>
          <button
            type="button"
            onClick={scrollToContact}
            className="border border-orange-500 text-orange-500 hover:bg-orange-50 text-sm font-semibold px-5 py-2.5 rounded-full"
          >
            More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

const AboutTeaser = () => {
  return (
    <section className="bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-20 items-start">
        {/* <div className="bg-white rounded-2xl shadow-sm px-6 py-8 text-center h-[400px] w-[400px]"> */}
          <img
            src="/new 1.png"
            alt="goal image"
            className="w-full max-w-[355px] h-auto md:h-[353px] md:w-[355px] object-contain"
          />
        {/* </div> */}

        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mt-10">
            Param Jyoti Infotech Private Limited
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            IT Solutions & Services Company engaged in software development,
            software implementation, social media promotion, system integration,
            audio-visual production, facility management, project management,
            manpower services, and consultancy.
          </p>
        </div>
      </div>
    </section>
  );
};

const CapabilityIcons = () => {
  const items = [
    {
      title: "Professional IT Experts",
      text: "Specialists who understand banking and enterprise environments.",
      icon: FiUsers,
    },
    {
      title: "Super Fast Delivery",
      text: "Efficient project planning and on-ground implementation.",
      icon: FiClock,
    },
    {
      title: "Fully Customized Services",
      text: "Solutions tailored to each organization’s needs.",
      icon: FiSettings,
    },
    {
      title: "Proven Track Records",
      text: "Experience delivering complex projects reliably.",
      icon: FiAward,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-4">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/70 backdrop-blur-md border border-orange-100 px-6 py-6 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-600 mx-auto mb-4 flex items-center justify-center shadow-md">
              <item.icon className="text-xl" />
            </div>

            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              {item.title}
            </h4>

            <p className="text-xs text-gray-600 leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  const navigate = useNavigate();
  const pageByTitle = {
    "Staff Augmentation": "/staff",
    "Training & Upskilling": "/training",
    "System Integration": "/system",
    "Social Media Marketing": "/services",
    "Software Development": "/services",
    "Hardware Maintenance": "/services",
    "Web Design & Development": "/services",
  };

  const handleMore = (title) => {
    const targetPage = pageByTitle[title];
    if (!targetPage) {
      return;
    }

    navigate(targetPage);
  };

  const cards = [
    {
      title: "Staff Augmentation",
      image: "/staff.png",
    },
    {
      title: "Social Media Marketing",
      image: "/marketing.png",
    },
    {
      title: "Training & Upskilling",
      image: "/training.png",
    },
    {
      title: "Software Development",
      image: "/develop.png",
    },
    {
      title: "System Integration",
      image: "/si.png",
    },
    {
      title: "Hardware Maintenance",
      image: "/hardw.png",
    },
    {
      title: "Web Design & Development",
      image: "/wd.png",
    },
  ];

  const firstRow = cards.slice(0, 4);
  const secondRow = cards.slice(4);

  return (
    <section id="solutions-section" className="bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Solutions & Services
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              A single partner for technology, manpower, digital media, and training needs.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <div className="grid gap-8 md:grid-cols-4 items-stretch">
            {firstRow.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-full"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-52 md:h-56 w-full object-cover"
                />
                <div className="px-4 py-4 flex flex-col items-center gap-3 flex-1">
                  <span className="text-sm font-semibold text-gray-900 text-center">
                    {card.title}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleMore(card.title)}
                    className="text-[11px] font-semibold text-orange-500 border border-orange-500 rounded-full px-3 py-1"
                  >
                    MORE
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {secondRow.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col"
                style={{ width: "240px" }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-52 md:h-56 w-full object-cover"
                />
                <div className="px-4 py-4 flex flex-col items-center gap-3 flex-1">
                  <span className="text-sm font-semibold text-gray-900 text-center">
                    {card.title}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleMore(card.title)}
                    className="text-[11px] font-semibold text-orange-500 border border-orange-500 rounded-full px-3 py-1"
                  >
                    MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MarketingOffices = () => {
  const offices = [
    {
      city: "Raipur",
      image: "/raipur.png",
      text: "Head office managing operations, projects, and central coordination.",
    },
    {
      city: "Mumbai",
      image: "/mum.png",
      text: "Strategic office for enterprise and media engagements.",
    },
    {
      city: "Bhopal",
      image: "/bhop.png",
      text: "Regional hub for banking and government projects.",
    },
    {
      city: "Bangalore",
      image: "/bang.png",
      text: "Technology partnerships and talent engagement hub.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Marketing Offices
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Local teams supporting projects and relationships across major cities.
            </p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
          <iframe
            title="Param Jyoti Infotech Office Location"
            src="https://www.google.com/maps?q=Jai+Villa+Yash+Vihar+Colony+Motinagar+Boriyakhurd+Raipur+Chhattisgarh&output=embed"
            className="w-full h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-4 items-stretch">
          {offices.map((office) => (
            <div
              key={office.city}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 flex flex-col h-full"
            >
              <img
                src={office.image}
                alt={office.city}
                className="h-full w-full object-cover"
              />
              <div className="px-4 py-4 flex flex-col items-center flex-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 text-center">
                  {office.city}
                </h3>
                <p className="text-[11px] text-gray-600 leading-relaxed text-center">
                  {office.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const emailSubject = encodeURIComponent(
      subject || `Website enquiry from ${name || "Visitor"}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:info@paramjyotiinfotech.com?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section
      id="contact-section"
      className="bg-[#f5f5f7] border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-[1.1fr,0.9fr] gap-10">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            Get in touch
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Let us know your requirements and we will connect with you shortly with the
            right solution and engagement model.
          </p>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Address</span>
              <p className="text-gray-600">
                Jai Villa, Yash Vihar Colony, Motinagar, Boriyakhurd,
                Raipur, Chhattisgarh
              </p>
            </div>
            <div>
              <span className="font-semibold">Phone</span>
              <p className="text-gray-600">+91-00000-00000</p>
            </div>
            <div>
              <span className="font-semibold">Email</span>
              <p className="text-gray-600">info@paramjyotiinfotech.com</p>
            </div>
          </div>
        </div>

        <form
          className="bg-white rounded-2xl shadow-sm px-6 py-6 space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="How can we help you?"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
              placeholder="Share a brief about your requirement"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutTeaser />
      <CapabilityIcons />
      <SolutionsSection />
      <MarketingOffices />
    </div>
  );
};

export default HomePage;
