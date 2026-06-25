import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      id="hero"
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/b1e0d670-4557-4a00-b605-73eeee2eae13/files/5c47a69c-5f90-4f5b-8225-fe353702afaf.jpg"
          alt="Аппетитная шаурма"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <span className="inline-block mb-6 text-orange-400 uppercase tracking-[0.3em] text-sm font-bold">
          Шаурмечная РАЙ
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.05]">
          Шаурма в Раю — вкус,<br />от которого не хочется уходить
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10 font-medium">
          Сочное мясо, свежие овощи, авторские соусы. Доставка за 30 минут
        </p>
        <a
          href="#order"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-base font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-xl shadow-orange-500/40"
        >
          Сделать заказ
        </a>
      </div>
    </div>
  );
}
