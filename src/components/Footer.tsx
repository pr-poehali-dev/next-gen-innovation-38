import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[550px] lg:h-[700px] max-h-[700px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+550px)] lg:h-[calc(100vh+700px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[550px] lg:h-[700px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-550px)] lg:top-[calc(100vh-700px)]">
          <div className="bg-neutral-900 py-8 sm:py-10 lg:py-12 px-6 sm:px-10 h-full w-full flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row justify-between gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-orange-400 text-xs sm:text-sm font-bold tracking-wide">
                  Навигация
                </h3>
                <a href="#menu" className="text-white hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Меню</a>
                <a href="#about" className="text-white hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">О нас</a>
                <a href="#contact" className="text-white hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Контакты</a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-orange-400 text-xs sm:text-sm font-bold tracking-wide">
                  Контакты
                </h3>
                <p className="text-white text-sm sm:text-base">ул. Центральная, 10</p>
                <p className="text-white text-sm sm:text-base">+7 (900) 123-45-67</p>
                <p className="text-white text-sm sm:text-base">10:00 — 23:00</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-orange-400 text-xs sm:text-sm font-bold tracking-wide">
                  Мы в соцсетях
                </h3>
                <div className="flex gap-3">
                  <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors duration-300">
                    <Icon name="Instagram" size={20} className="text-white" />
                  </a>
                  <a href="#" aria-label="Telegram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors duration-300">
                    <Icon name="Send" size={20} className="text-white" />
                  </a>
                  <a href="#" aria-label="VK" className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors duration-300">
                    <Icon name="MessageCircle" size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[24vw] sm:text-[18vw] lg:text-[16vw] leading-[0.8] mt-4 text-white font-black tracking-tight">
                РАЙ
              </h1>
              <p className="text-white/70 text-sm sm:text-base">© {new Date().getFullYear()} Шаурмечная РАЙ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
