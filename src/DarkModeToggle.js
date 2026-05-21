import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 left-6 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
}

export default DarkModeToggle;
