function Footer() {
  return (
    <footer className="bg-blue-900 dark:bg-blue-950 text-white dark:text-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} SW Tech Solutions. All rights reserved.
        </p>

        {/* Quick Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/sydeny-walusala-wesonga/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 dark:hover:text-blue-300 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Wales254"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 dark:hover:text-gray-400 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:wesongasydney2@gmail.com"
            className="hover:text-red-400 dark:hover:text-red-300 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
