function Logo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer select-none">

      {/* Icon Badge */}
      <div className="
        w-10 h-10
        bg-gradient-to-r from-cyan-400 to-blue-600
        rounded-xl
        flex items-center justify-center
        text-black font-bold
        shadow-lg shadow-cyan-500/20
      ">
        SW
      </div>

      {/* Text Logo */}
      <div className="
        text-xl md:text-2xl font-bold
        bg-gradient-to-r from-cyan-400 to-blue-500
        text-transparent bg-clip-text
      ">
        Tech Solutions
      </div>

    </div>
  );
}

export default Logo;