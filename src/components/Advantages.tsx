import Icon from "@/components/ui/icon";

const items = [
  {
    icon: "Leaf",
    title: "Свежие продукты",
    text: "Каждое утро — свежие овощи и зелень. Никаких полуфабрикатов, только качество.",
  },
  {
    icon: "Truck",
    title: "Собственная доставка",
    text: "Привезём горячую шаурму за 30 минут. Свои курьеры — никаких опозданий.",
  },
  {
    icon: "Flame",
    title: "Готовим при вас",
    text: "Открытая кухня — вы видите весь процесс. Честно, вкусно и аппетитно.",
  },
];

export default function Advantages() {
  return (
    <section className="bg-background py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm font-bold">
            Почему РАЙ
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-4">
            За что нас любят гости
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-500 flex items-center justify-center">
                <Icon name={item.icon} size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#order"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-base font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/30"
          >
            Заказать
          </a>
        </div>
      </div>
    </section>
  );
}
