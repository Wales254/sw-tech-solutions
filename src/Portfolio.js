function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-gray-950 text-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Our Portfolio
          </h2>

          <p className="text-gray-400">
            Some of our recent software and IT projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-black p-8 rounded-3xl border border-cyan-500/10">
            <h3 className="text-2xl text-cyan-400 font-semibold mb-4">
              Laundry Management System
            </h3>

            <p className="text-gray-400">
              Smart laundry tracking and payment management system.
            </p>
          </div>

          <div className="bg-black p-8 rounded-3xl border border-cyan-500/10">
            <h3 className="text-2xl text-cyan-400 font-semibold mb-4">
              Smart Home Security
            </h3>

            <p className="text-gray-400">
              Security monitoring with mobile alerts and live streaming.
            </p>
          </div>

          <div className="bg-black p-8 rounded-3xl border border-cyan-500/10">
            <h3 className="text-2xl text-cyan-400 font-semibold mb-4">
              Survey Application
            </h3>

            <p className="text-gray-400">
              Dynamic survey platform with API integration.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Portfolio;