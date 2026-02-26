import { motion } from "framer-motion";
import executiveImg from "../../assets/executive.jpg";
import honestyImg from "../../assets/honesty.jpg";
import negotiationImg from "../../assets/negotiation.jpg";
import sa1Img from "../../assets/sa-1.jpg";
import sa2Img from "../../assets/sa-2.jpg";
import sa3Img from "../../assets/sa-3.jpg";
import manpowerImg from "../../assets/manpower.jpg";
import c5 from "../../assets/images/c5.png";
import c6 from "../../assets/images/c6.png";
import c7 from "../../assets/images/c7.png";
import c8 from "../../assets/images/c8.png";
import c9 from "../../assets/images/c9.png";
import c10 from "../../assets/images/c10.png";
import c11 from "../../assets/images/c11.png";
import c12 from "../../assets/images/c12.png";
import c13 from "../../assets/images/c13.png";
import c14 from "../../assets/images/c14.png";

const aboutImg = "/aboutus.png";
const MotionSection = motion.section;
const MotionDiv = motion.div;

const sectionReveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut" },
};

const AboutHero = () => {
  return (
    <MotionSection
      className="bg-[#111827] text-white"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium mb-4">
            About Us
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">
            Your trusted partner for business and technology
          </h1>
          <p className="text-sm lg:text-base text-gray-200 leading-relaxed mb-6">
            We combine consulting, technology, manpower, and media expertise to help
            organizations transform, build trust, and scale securely.
          </p>
          <div className="flex gap-4 text-xs text-gray-200">
            <div>
              <div className="font-semibold text-white">Multi-domain expertise</div>
              <p>Banking, government, enterprise, and media solutions.</p>
            </div>
            <div>
              <div className="font-semibold text-white">Outcome focused</div>
              <p>Measurable impact in efficiency, reach, and customer experience.</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden bg-black/40">
          <img
            src={aboutImg}
            alt="About Param Jyoti"
            className="w-full aspect-[16/10] object-cover opacity-90"
          />
        </div>
      </div>
    </MotionSection>
  );
};

const AboutStory = () => {
  return (
    <MotionSection id="about-details-anchor" className="bg-white" {...sectionReveal}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-[1.05fr,0.95fr] gap-10 items-start">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Building trust, fostering relationships
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Param Jyoti Infotech Pvt. Ltd. brings together specialists across software
            development, digital marketing, system integration, and manpower sourcing. Our
            teams work closely with clients to understand their environment, challenges,
            and ambitions before designing the right mix of technology and services.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            From banking automation projects to large-scale recruitment drives and
            full-funnel digital campaigns, we focus on delivering long-term value rather
            than short-term fixes.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-800">
            <div className="bg-gray-50 rounded-xl px-4 py-4">
              <div className="text-2xl font-bold text-orange-500 mb-1">15+</div>
              <div className="text-xs text-gray-600">Years of experience</div>
            </div>
            <div className="bg-gray-50 rounded-xl px-4 py-4">
              <div className="text-2xl font-bold text-orange-500 mb-1">50+</div>
              <div className="text-xs text-gray-600">Institutions and enterprises</div>
            </div>
            <div className="bg-gray-50 rounded-xl px-4 py-4">
              <div className="text-2xl font-bold text-orange-500 mb-1">4+</div>
              <div className="text-xs text-gray-600">Key marketing locations</div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <img
            src={executiveImg}
            alt="Team at work"
            className="w-full aspect-[16/10] object-cover rounded-2xl"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src={honestyImg}
              alt="Honesty"
              className="w-full aspect-[4/3] object-cover rounded-2xl"
            />
            <img
              src={negotiationImg}
              alt="Negotiation"
              className="w-full aspect-[4/3] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

const TestimonialsBand = () => {
  return (
    <MotionSection className="bg-[#111827] text-white" {...sectionReveal}>
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">Testimonials</h2>
        <p className="text-sm text-gray-200 leading-relaxed">
          Our clients value our ability to execute complex projects reliably while staying
          transparent, responsive, and focused on outcomes. From first engagement to
          long-term partnership, we work as an extension of their teams.
        </p>
      </div>
    </MotionSection>
  );
};

const TeamSection = () => {
  const team = [
    {
      name: "Leadership Team",
      role: "Strategy and Delivery",
      image: sa1Img,
    },
    {
      name: "Technology Team",
      role: "Engineering and Implementation",
      image: sa2Img,
    },
    {
      name: "People Team",
      role: "Recruitment and Training",
      image: manpowerImg,
    },
    {
      name: "Media Team",
      role: "Digital and Creative",
      image: sa3Img,
    },
  ];

  return (
    <MotionSection className="bg-white" {...sectionReveal}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
          Our team
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          {team.map((member, index) => (
            <MotionDiv
              key={member.name}
              className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="px-4 py-3">
                <div className="text-sm font-semibold text-gray-900">
                  {member.name}
                </div>
                <div className="text-[11px] text-gray-600 mt-1">
                  {member.role}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

const ClientsSection = () => {
  const logos = [c5, c6, c7, c8, c9, c10, c11, c12, c13, c14];

  return (
    <MotionSection className="bg-[#f5f5f7]" {...sectionReveal}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
          Our clients
        </h2>
        <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4 items-center mx-6">
          {logos.map((logo, index) => (
            <MotionDiv
              key={logo}
              className="bg-white rounded-xl border border-gray-200 flex items-center justify-center "
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.25, delay: index * 0.03, ease: "easeOut" }}
            >
              <img src={logo} alt="Client logo" className="object-contain" />
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <AboutStory />
      <TestimonialsBand />
      <TeamSection />
      <ClientsSection />
    </div>
  );
};

export default AboutPage;
