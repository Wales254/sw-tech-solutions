import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch("https://formspree.io/f/xpwljarv", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section
      id="contact"
      className="
        relative py-20 bg-cover bg-center
        bg-white text-black
        dark:bg-black dark:text-white
        transition duration-500
      "
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?office,technology')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 dark:bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-200 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to start your next software project or IT solution?
            Send us a message and let’s work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">

            <h3 className="text-2xl font-semibold text-cyan-400 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 text-lg">

              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-xl">
                  📞
                </div>

                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <p className="font-medium">+254 114 610 579</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-xl">
                  ✉️
                </div>

                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="font-medium">
                    wesongasydney2@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-xl">
                  📍
                </div>

                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="font-medium">Nairobi, Kenya</p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-10 flex gap-6">

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white/10 hover:bg-cyan-500
                  transition duration-300
                  p-4 rounded-2xl
                "
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.9 0 4.6 2.6 4.6 6V24h-4v-7.9c0-1.9-.03-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-4V8z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white/10 hover:bg-cyan-500
                  transition duration-300
                  p-4 rounded-2xl
                "
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.7 1.9-1.1.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:wesongasydney2@gmail.com"
                className="
                  bg-white/10 hover:bg-cyan-500
                  transition duration-300
                  p-4 rounded-2xl
                "
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 13.5l-11-7V20h22V6.5l-11 7zm0-2.5l11-7H1l11 7z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="
              bg-white dark:bg-gray-900
              text-gray-800 dark:text-white
              rounded-3xl shadow-2xl
              p-8 space-y-6
              transition duration-500
            "
          >

            {/* Name */}
            <div>
              <label className="block mb-2 font-medium">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="
                  w-full
                  border border-gray-300 dark:border-gray-700
                  bg-white dark:bg-black
                  text-black dark:text-white
                  rounded-xl px-4 py-3
                  focus:ring-2 focus:ring-cyan-500
                  focus:outline-none
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="
                  w-full
                  border border-gray-300 dark:border-gray-700
                  bg-white dark:bg-black
                  text-black dark:text-white
                  rounded-xl px-4 py-3
                  focus:ring-2 focus:ring-cyan-500
                  focus:outline-none
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Tell us about your project..."
                className="
                  w-full
                  border border-gray-300 dark:border-gray-700
                  bg-white dark:bg-black
                  text-black dark:text-white
                  rounded-xl px-4 py-3
                  focus:ring-2 focus:ring-cyan-500
                  focus:outline-none
                "
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                w-full
                bg-cyan-500 hover:bg-cyan-400
                transition duration-300
                text-black font-semibold
                py-4 rounded-2xl
                shadow-lg shadow-cyan-500/20
              "
            >
              Send Message
            </button>

            {/* Status Messages */}
            {status === "SUCCESS" && (
              <p className="text-green-500 text-center font-medium">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "ERROR" && (
              <p className="text-red-500 text-center font-medium">
                ❌ Something went wrong. Please try again.
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;