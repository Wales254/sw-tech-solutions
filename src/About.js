function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-950 text-white px-6 transition duration-500"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Text */}
        <div data-aos="fade-right">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan-400">SW Tech Solutions</span>
          </h2>

          <p className="text-gray-400 text-lg mb-6">
            SW Tech Solutions is a modern software development and IT services brand
            focused on building scalable, efficient, and innovative digital solutions.
            We help businesses transform their ideas into powerful software systems.
          </p>

          <p className="text-gray-400 text-lg mb-6">
            Our expertise covers web development, mobile applications, UI/UX design,
            cloud solutions, and IT support services tailored for startups and enterprises.
          </p>

          <div className="flex gap-4">

            <div className="bg-black p-4 rounded-xl border border-cyan-500/10">
              <h3 className="text-cyan-400 font-bold text-2xl">10+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div className="bg-black p-4 rounded-xl border border-cyan-500/10">
              <h3 className="text-cyan-400 font-bold text-2xl">100%</h3>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>

            <div className="bg-black p-4 rounded-xl border border-cyan-500/10">
              <h3 className="text-cyan-400 font-bold text-2xl">24/7</h3>
              <p className="text-gray-400 text-sm">Support</p>
            </div>

          </div>

        </div>

        {/* Right Side - Visual Card */}
        <div
          className="
            bg-gray-900
            p-10
            rounded-3xl
            border border-cyan-500/10
            shadow-2xl shadow-cyan-500/10
          "
          data-aos="fade-left"
        >

          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
            Our Mission
          </h3>

          <p className="text-gray-400 mb-6">
            To empower businesses through modern, reliable, and scalable technology solutions
            that drive growth and digital transformation.
          </p>

          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
            Our Vision
          </h3>

          <p className="text-gray-400">
            To become a leading software and IT solutions provider in Africa,
            delivering world-class digital products.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;