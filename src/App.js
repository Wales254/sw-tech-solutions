import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Portfolio from "./Portfolio";
import DarkModeToggle from "./DarkModeToggle";
import About from "./About";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaShieldAlt,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col transition duration-500 overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Background Glow Effects */}
      <div className="fixed top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="fixed bottom-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 -z-10"></div>

      {/* HERO SECTION */}
      <section
        id="home"
        className="
          min-h-screen
          bg-black
          text-white
          flex items-center
          px-6
          pt-24
          transition duration-500
        "
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div data-aos="fade-right">

            {/* Badge */}
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm mb-6 shadow-lg">
              🚀 Professional Software & IT Services
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Building Smart
              <span className="text-cyan-400"> Digital </span>
              Solutions
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed">
              We create modern software systems, websites, mobile applications,
              and IT solutions that help businesses grow and scale digitally.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4">

              {/* Contact Button */}
              <a
                href="#contact"
                className="
                  bg-cyan-500
                  px-8 py-4
                  rounded-2xl
                  text-black
                  font-semibold
                  hover:bg-cyan-400
                  hover:scale-105
                  transition
                  duration-300
                  shadow-lg shadow-cyan-500/30
                "
              >
                Get Started
              </a>

              {/* Portfolio Button */}
              <a
                href="#portfolio"
                className="
                  border border-cyan-400
                  px-8 py-4
                  rounded-2xl
                  hover:bg-cyan-500/10
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                View Portfolio
              </a>

            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12 flex-wrap">

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">50+</h2>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">24/7</h2>
                <p className="text-gray-400 text-sm">IT Support</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">99%</h2>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE SERVICES */}
          <div
            className="
              bg-gray-900/80
              backdrop-blur-lg
              rounded-3xl
              p-8
              border border-cyan-500/10
              shadow-2xl shadow-cyan-500/10
            "
            data-aos="fade-left"
          >

            <h2 className="text-2xl font-bold text-white mb-8">
              Our Services
            </h2>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* SERVICE 1 */}
              <div className="bg-black p-5 rounded-2xl hover:scale-105 transition duration-300 border border-gray-800 hover:border-cyan-500">
                <FaCode className="text-cyan-400 text-3xl mb-3" />
                <h3 className="text-cyan-400 text-lg font-semibold">
                  Software Development
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Custom business systems and scalable applications.
                </p>
              </div>

              {/* SERVICE 2 */}
              <div className="bg-black p-5 rounded-2xl hover:scale-105 transition duration-300 border border-gray-800 hover:border-cyan-500">
                <FaLaptopCode className="text-cyan-400 text-3xl mb-3" />
                <h3 className="text-cyan-400 text-lg font-semibold">
                  Website Development
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Modern responsive websites and landing pages.
                </p>
              </div>

              {/* SERVICE 3 */}
              <div className="bg-black p-5 rounded-2xl hover:scale-105 transition duration-300 border border-gray-800 hover:border-cyan-500">
                <FaServer className="text-cyan-400 text-3xl mb-3" />
                <h3 className="text-cyan-400 text-lg font-semibold">
                  IT Support
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Networking, troubleshooting, and maintenance services.
                </p>
              </div>

              {/* SERVICE 4 */}
              <div className="bg-black p-5 rounded-2xl hover:scale-105 transition duration-300 border border-gray-800 hover:border-cyan-500">
                <FaMobileAlt className="text-cyan-400 text-3xl mb-3" />
                <h3 className="text-cyan-400 text-lg font-semibold">
                  Mobile Apps
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Android & iOS apps with backend integration.
                </p>
              </div>

              {/* SERVICE 5 */}
              <div className="bg-black p-5 rounded-2xl hover:scale-105 transition duration-300 border border-gray-800 hover:border-cyan-500">
                <FaShieldAlt className="text-cyan-400 text-3xl mb-3" />
                <h3 className="text-cyan-400 text-lg font-semibold">
                  Cyber Security
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Secure systems, backups, and data protection solutions.
                </p>
              </div>

              {/* SERVICE 6 */}
              <div className="bg-black p-5 rounded-2xl hover:scale-105 transition duration-300 border border-gray-800 hover:border-cyan-500">
                <FaCloud className="text-cyan-400 text-3xl mb-3" />
                <h3 className="text-cyan-400 text-lg font-semibold">
                  Cloud & Hosting
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Deployment, hosting, and cloud infrastructure setup.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <About />

      {/* PORTFOLIO */}
      <Portfolio />

      {/* CONTACT */}
      <section
        id="contact"
        className="py-16 bg-white dark:bg-gray-800 transition duration-500"
      >
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />

      {/* UTILITIES */}
      <ScrollToTop />
      <DarkModeToggle />

    </div>
  );
}

export default App;