const dishes = [
  {
    name: "Классическая",
    emoji: "🌯",
    price: "290 ₽",
    desc: "Сочное мясо, свежие овощи и фирменный чесночный соус в тёплом лаваше.",
  },
  {
    name: "С сыром",
    emoji: "🧀",
    price: "330 ₽",
    desc: "Та самая классика с тянущимся расплавленным сыром. Сытно и нежно.",
  },
  {
    name: "Острая",
    emoji: "🌶️",
    price: "320 ₽",
    desc: "Для любителей погорячее: острый соус, перчик халапеньо и пряности.",
  },
  {
    name: "Вегетарианская",
    emoji: "🥗",
    price: "270 ₽",
    desc: "Свежие овощи, гриль и авторский соус. Лёгко, ярко и полезно.",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-secondary/10 py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm font-bold">
            Наше меню
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-4">
            Выбирай свою шаурму
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="bg-white rounded-3xl p-7 shadow-sm border border-orange-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="text-5xl mb-5">{dish.emoji}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{dish.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                {dish.desc}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-orange-500">{dish.price}</span>
                <a
                  href="#order"
                  className="bg-foreground hover:bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors duration-300"
                >
                  Заказать
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
