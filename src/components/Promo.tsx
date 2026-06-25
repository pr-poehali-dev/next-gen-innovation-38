import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      id="about"
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/b1e0d670-4557-4a00-b605-73eeee2eae13/files/e21411bb-80ff-469f-b715-6e9590d71c81.jpg"
            alt="Уютный интерьер шаурмечной РАЙ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-3xl px-6 text-center text-white">
        <span className="inline-block mb-6 text-orange-400 uppercase tracking-[0.3em] text-sm font-bold">
          О нас
        </span>
        <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
          Готовим с любовью к каждому гостю
        </h3>
        <p className="text-lg md:text-2xl opacity-90 leading-relaxed mb-10">
          В «РАЮ» мы используем только фермерское мясо и свежие продукты. Здесь по-домашнему
          уютно, а каждая шаурма — как для своих. Заходите — и оставайтесь надолго.
        </p>
        <a
          href="#order"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-base font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-xl shadow-orange-500/40"
        >
          Заказать
        </a>
      </div>
    </div>
  );
}
