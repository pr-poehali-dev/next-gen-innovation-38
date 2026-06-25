import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Order() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-background py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm font-bold">
            Контакты
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-4 mb-8">
            Приходите в гости
          </h2>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center shrink-0">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Адрес</p>
                <p className="text-lg font-bold text-foreground">ул. Центральная, 10</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center shrink-0">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Телефон</p>
                <p className="text-lg font-bold text-foreground">+7 (900) 123-45-67</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center shrink-0">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Часы работы</p>
                <p className="text-lg font-bold text-foreground">Ежедневно 10:00 — 23:00</p>
              </div>
            </div>
          </div>
          <a
            href="tel:+79001234567"
            className="inline-flex items-center gap-2 mt-8 bg-foreground hover:bg-orange-500 text-white px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide transition-colors duration-300"
          >
            <Icon name="Phone" size={20} />
            Позвонить
          </a>
        </div>

        <div id="order" className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 scroll-mt-24">
          <h3 className="text-2xl font-black text-foreground mb-2">Оформить заказ</h3>
          <p className="text-muted-foreground mb-6">Заполните форму — и мы перезвоним вам в течение нескольких минут.</p>
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">🎉</div>
              <p className="text-xl font-bold text-foreground mb-2">Спасибо за заказ!</p>
              <p className="text-muted-foreground">Мы скоро свяжемся с вами.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Ваше имя"
                className="w-full px-5 py-3.5 rounded-2xl border border-orange-200 bg-orange-50/40 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
              <input
                type="tel"
                required
                placeholder="Телефон"
                className="w-full px-5 py-3.5 rounded-2xl border border-orange-200 bg-orange-50/40 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
              <textarea
                rows={3}
                placeholder="Комментарий к заказу (что и сколько хотите)"
                className="w-full px-5 py-3.5 rounded-2xl border border-orange-200 bg-orange-50/40 focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full text-base font-bold uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-orange-500/30"
              >
                Отправить заказ
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
