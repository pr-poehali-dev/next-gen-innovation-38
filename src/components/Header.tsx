interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 px-6 py-5 ${className ?? ""}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-3xl font-black tracking-tight text-white">РАЙ</span>
          <span className="text-2xl">🌯</span>
        </a>
        <nav className="hidden md:flex gap-8 items-center">
          <a
            href="#menu"
            className="text-white/90 hover:text-orange-400 transition-colors duration-300 uppercase text-sm font-semibold tracking-wide"
          >
            Меню
          </a>
          <a
            href="#about"
            className="text-white/90 hover:text-orange-400 transition-colors duration-300 uppercase text-sm font-semibold tracking-wide"
          >
            О нас
          </a>
          <a
            href="#contact"
            className="text-white/90 hover:text-orange-400 transition-colors duration-300 uppercase text-sm font-semibold tracking-wide"
          >
            Контакты
          </a>
        </nav>
        <a
          href="#order"
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/30"
        >
          Заказать
        </a>
      </div>
    </header>
  );
}
