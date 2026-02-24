const LocationSection = () => {
  return (
    <section className="text-center mt-16 px-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Location
      </h2>

      <p className="text-gray-600 leading-relaxed">
        Jai Villa, Yash Vihar Colony, Motinagar,<br></br> Boriyakhurd, Raipur, Chhattisgarh
      </p>

      <div className="max-w-6xl mx-auto mt-8 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
        <iframe
          title="Param Jyoti Infotech Location"
          src="https://www.google.com/maps?q=Jai+Villa+Yash+Vihar+Colony+Motinagar+Boriyakhurd+Raipur+Chhattisgarh&output=embed"
          className="w-full h-[360px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Jai+Villa+Yash+Vihar+Colony+Motinagar+Boriyakhurd+Raipur+Chhattisgarh"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl transition"
      >
        Find us on Google Maps
      </a>
    </section>
  );
};

export default LocationSection;
