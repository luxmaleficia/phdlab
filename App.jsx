import { useState } from "react";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#experts", label: "Эксперты" },
  { href: "#cases", label: "Кейсы" },
  { href: "#comparison", label: "Сравнение" },
  { href: "#faq", label: "FAQ" },
];

const services = [
  {
    badge: "СТАРТ",
    title: "Дизайн исследования",
    price: "от 15 000 ₽",
    description:
      "Идеальный старт для магистрантов. Готовый НИР с дизайном, который одобрит научный руководитель.",
    features: [
      "Тема и гипотезы",
      "Дизайн и методики",
      "Обзор литературы",
      "Готовый проспектус",
    ],
  },
  {
    badge: "ПОПУЛЯРНОЕ",
    title: "ВКР под ключ",
    price: "от 120 000 ₽",
    description:
      "Для магистрантов, которым нужна готовая ВКР с реальным исследованием. Ваш фокус на учёбе, мы делаем остальное.",
    features: [
      "Статистический анализ",
      "Филологическая рецензия",
      "Подготовка к защите",
      "Публикация в РИНЦ/ВАК",
    ],
    featured: true,
  },
  {
    badge: "МАКСИМУМ",
    title: "Кандидатская диссертация",
    price: "от 200 000 ₽",
    description:
      "Для аспирантов, которым нужен полный цикл: от дизайна до защиты в диссертационном совете.",
    features: [
      "Дизайн исследования",
      "Сбор и анализ данных",
      "Текст диссертации",
      "Публикации ВАК/Scopus",
    ],
  },
];

const experts = [
  {
    role: "Главный методолог",
    title: "Доктор психологических наук",
    spec: "Когнитивная психология, цифровое поведение",
    metrics: "Scopus h-index: 15 · 42 публикации · 18 лет в науке",
  },
  {
    role: "Академический рецензент",
    title: "Доктор филологических наук",
    spec: "Научный стиль, академическое письмо, редактура",
    metrics: "WoS h-index: 12 · 38 публикаций · 15 лет в науке",
  },
  {
    role: "Статистический аналитик",
    title: "Кандидат математических наук",
    spec: "Многомерный анализ, SPSS, R, структурное моделирование",
    metrics: "25 публикаций · 10 лет в науке",
  },
  {
    role: "Экспериментальный программист",
    title: "Кандидат технических наук",
    spec: "Разработка экспериментальных сред, VR, веб-приложения",
    metrics: "Python, R, Unity · 8 лет в науке",
  },
  {
    role: "Рекрутинг-менеджер",
    title: "Специалист по подбору респондентов",
    spec: "Таргетированный рекрутинг, управление панелями, контроль качества",
    metrics: "15 000+ респондентов · 6 лет практики",
  },
  {
    role: "Юрист-консультант",
    title: "Кандидат юридических наук",
    spec: "Этика исследований, 152-ФЗ, информированное согласие, NDA",
    metrics: "8 лет сопровождения научных проектов",
  },
];

const technology = [
  {
    title: "Статистический анализ данных",
    text: "Мы не используем Excel для расчётов. Только программные методы проверки гипотез.",
    tags: ["Python", "R", "SPSS", "Jamovi"],
  },
  {
    title: "Разработка экспериментов",
    text: "Пишем софт под ваш эксперимент: от VR-симуляций до трекинга поведения пользователей в сети.",
    tags: ["Unity", "WebGL", "Eye-tracking"],
  },
  {
    title: "Очистка данных",
    text: "Автоматизированная очистка выборки от шума и недобросовестных респондентов.",
    tags: ["Machine Learning", "Data Validation"],
  },
];

const achievements = [
  { value: "45 000+", label: "обработанных анкет" },
  { value: "230+", label: "завершённых проектов" },
  { value: "10 лет", label: "средний опыт экспертов" },
];

const cases = [
  {
    title: "Кейс 1 · ВКР под ключ",
    facts: [
      "Тема: связь алекситимии и пищевого поведения у пациентов с расстройствами ЖКТ",
      "Выборка: 186 респондентов",
      "Методы: TAS-20, EAT-26, SCL-90-R, регрессионный и медиаторный анализ",
      "Результат: защита на «отлично», публикация в журнале ВАК",
      "Срок: 8 недель",
    ],
  },
  {
    title: "Кейс 2 · Кандидатская диссертация",
    facts: [
      "Тема: эмоциональное выгорание врачей скорой помощи",
      "Выборка: 412 респондентов, 3 региона РФ",
      "Методы: MBI, HLM, конфирматорный факторный анализ",
      "Результат: защита в диссертационном совете, 3 публикации (2 ВАК + 1 Scopus Q2)",
      "Срок: 5 месяцев",
    ],
  },
  {
    title: "Кейс 3 · Исследование под грант",
    facts: [
      "Тема: влияние цифровой среды на исполнительные функции подростков 14-17 лет",
      "Выборка: 280 подростков, лонгитюд 2 волны",
      "Методы: Stroop task, BRIEF-2, латентный анализ роста",
      "Результат: грант одобрен, 2 публикации (Scopus Q1 + Q2)",
      "Срок: 7 месяцев",
    ],
  },
  {
    title: "Кейс 4 · Клиническая психология",
    facts: [
      "Выборка: 324 респондента, многоступенчатая стратифицированная выборка",
      "Методы: корреляционный анализ, регрессия, EFA/CFA, SEM",
      "Результат: успешная защита, 3 публикации ВАК, 1 статья Scopus Q2",
      "Команда: методолог, статистик, программист, академический рецензент",
      "Отзыв: «...объясняли, помогали и сопровождали до защиты».",
    ],
  },
];

const comparisonRows = [
  {
    param: "Сбор данных",
    mass: "Рисованные анкеты",
    phd: "Верифицированные панели",
    note: "Фальсифицированную выборку видно при первой же проверке.",
  },
  {
    param: "Статистика",
    mass: "Среднее значение",
    phd: "Многомерный анализ",
    note: "Диссертационный совет ожидает факторный анализ, регрессию и SEM.",
  },
  {
    param: "Текст работы",
    mass: "Рерайт из интернета",
    phd: "Академическая рецензия",
    note: "Закрываем риски и по логике текста, и по оригинальности.",
  },
  {
    param: "Экспертиза",
    mass: "Студенты и магистры",
    phd: "Доктора и кандидаты наук",
    note: "Вашу работу проверяет доктор наук, уровень должен соответствовать.",
  },
  {
    param: "Программные методы",
    mass: "Excel и онлайн-калькуляторы",
    phd: "Python, R, SPSS",
    note: "Код анализа воспроизводим и передаётся вам.",
  },
  {
    param: "Публикации",
    mass: "Не предусмотрены",
    phd: "РИНЦ, ВАК, Scopus",
    note: "Публикация часто является обязательным допуском к защите.",
  },
];

const faqs = [
  {
    q: "Какие сроки выполнения работы?",
    a: "Сроки зависят от сложности проекта. ВКР - от 2 месяцев, кандидатская диссертация - от 6 месяцев. Точные сроки определяются после диагностики объёма работ.",
  },
  {
    q: "Как гарантируется конфиденциальность?",
    a: "С каждым клиентом заключается NDA. Переписка ведётся через защищённые каналы, информация о проекте не передаётся третьим лицам.",
  },
  {
    q: "Что если работа не пройдёт защиту?",
    a: "За 12 лет у команды не было случаев несостоявшейся защиты. Сопровождение продолжается до результата, включая доработки по замечаниям комиссии.",
  },
  {
    q: "Как происходит оплата?",
    a: "На сайте указана работа по 100% предоплате: это фиксирует состав команды и обеспечивает непрерывный цикл исследования.",
  },
  {
    q: "Какие данные вы собираете для исследования?",
    a: "Только верифицированные респонденты через проверенные панели и организованный полевой сбор. Никаких «нарисованных» данных.",
  },
  {
    q: "Нужно ли мне участвовать в процессе?",
    a: "Да. В среднем 2-3 часа в неделю: утверждение дизайна, проверка промежуточных результатов и согласование текста.",
  },
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="logo" onClick={() => setMenuOpen(false)}>
            <span>PhD</span>Lab
          </a>
          <nav className="desktop-nav">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn btn-primary btn-small">
            Оставить заявку
          </a>
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            type="button"
            aria-label="Открыть меню"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Оставить заявку
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="reveal">
              <p className="eyebrow">Научный консалтинг по психологии</p>
              <h1>Научный консалтинг уровня PhD</h1>
              <p className="hero-text">
                Сопровождение ВКР и диссертаций: методология, статистика, сбор данных,
                публикации ВАК и Scopus.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Обсудить проект
                </a>
                <a href="#services" className="btn btn-ghost">
                  Посмотреть услуги
                </a>
              </div>
              <div className="hero-pills">
                <span>12 лет в исследованиях</span>
                <span>0 провалов на защите</span>
                <span>NDA с каждым клиентом</span>
              </div>
            </div>
            <aside className="hero-card reveal delay-1">
              <p className="card-badge">Как это работает</p>
              <h3>Понятный маршрут без перегруза</h3>
              <ol>
                <li>Диагностика задачи и формулировка цели.</li>
                <li>План с этапами, сроками и зоной ответственности.</li>
                <li>Сопровождение до защиты и публикаций.</li>
              </ol>
            </aside>
          </div>
        </section>

        <section className="founder">
          <div className="container founder-card reveal">
            <p className="eyebrow">Основатель</p>
            <h2>Евгений Грин</h2>
            <p className="founder-subtitle">PhD, Universite de Nantes · Основатель PhDLab</p>
            <p>
              12 лет в исследованиях. Собрал команду из кандидатов и докторов наук,
              которая закрывает то, что не может дать кафедра: методологию, статистику,
              текст и сопровождение до защиты.
            </p>
            <div className="founder-metrics">
              <div>
                <strong>12</strong>
                <span>лет в науке</span>
              </div>
              <div>
                <strong>0</strong>
                <span>провалов на защите</span>
              </div>
              <div>
                <strong>NDA</strong>
                <span>с каждым клиентом</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <SectionHeading
              eyebrow="Услуги и цены"
              title="Опережаем графики, сохраняя академическое качество"
              text="Форматы с реальными этапами и прозрачным объёмом работ."
            />
            <div className="cards-grid services-grid">
              {services.map((item, index) => (
                <article
                  key={item.title}
                  className={`service-card reveal delay-${(index % 3) + 1} ${
                    item.featured ? "featured" : ""
                  }`}
                >
                  <p className="service-badge">{item.badge}</p>
                  <h3>{item.title}</h3>
                  <p className="price">{item.price}</p>
                  <p className="description">{item.description}</p>
                  <ul>
                    {item.features.map((feature) => (
                      <li key={feature}>✓ {feature}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn btn-ghost">
                    Оставить заявку
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <SectionHeading
              eyebrow="Технологический стек"
              title="Математическое сопровождение диссертаций любой сложности"
            />
            <div className="cards-grid tech-grid">
              {technology.map((item, index) => (
                <article key={item.title} className={`panel reveal delay-${index + 1}`}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="stats-grid">
              {achievements.map((item) => (
                <div key={item.label} className="panel stat">
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experts">
          <div className="container">
            <SectionHeading
              eyebrow="Совет экспертов"
              title="Команда, где каждый учёный с международным признанием"
            />
            <div className="cards-grid experts-grid">
              {experts.map((expert, index) => (
                <article key={expert.role} className={`panel reveal delay-${(index % 3) + 1}`}>
                  <h3>{expert.role}</h3>
                  <p className="expert-title">{expert.title}</p>
                  <p>{expert.spec}</p>
                  <p className="expert-metric">{expert.metrics}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="cases">
          <div className="container">
            <SectionHeading
              eyebrow="Реальные кейсы"
              title="Работы, за которые не придётся краснеть на защите"
              text="Что было на входе, какие методы использовали, и какой результат получили."
            />
            <div className="cards-grid cases-grid">
              {cases.map((item, index) => (
                <article key={item.title} className={`panel reveal delay-${(index % 3) + 1}`}>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="comparison">
          <div className="container">
            <SectionHeading
              eyebrow="Проверка реальностью"
              title="Почему академический стандарт недостижим для типовых исполнителей"
            />
            <div className="comparison">
              {comparisonRows.map((item) => (
                <article key={item.param} className="panel comparison-row reveal">
                  <h3>{item.param}</h3>
                  <div className="comparison-cols">
                    <p>
                      <span>Масс-маркет</span>
                      {item.mass}
                    </p>
                    <p>
                      <span>PhDLab</span>
                      {item.phd}
                    </p>
                  </div>
                  <p className="comparison-note">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="faq">
          <div className="container">
            <SectionHeading
              eyebrow="FAQ"
              title="Снимаем барьеры на пути к защите"
            />
            <div className="faq-grid">
              {faqs.map((item) => (
                <details key={item.q} className="panel faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div className="reveal">
              <p className="eyebrow">Финальный шаг</p>
              <h2>Готовы начать научный проект?</h2>
              <p className="section-text">
                Оставьте заявку и получите детальную оценку вашего исследования от наших
                экспертов в течение 24 часов.
              </p>
              <ul className="contact-list">
                <li>Конфиденциальность гарантирована</li>
                <li>NDA с каждым клиентом</li>
                <li>г. Москва, ул. Воздвиженка, 4/7с2</li>
              </ul>
            </div>
            <form className="panel contact-form reveal delay-1">
              <label htmlFor="name">Имя *</label>
              <input id="name" name="name" type="text" placeholder="Введите ваше имя" />

              <label htmlFor="service">Интересующая услуга *</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>
                  Выберите услугу
                </option>
                <option>Дизайн исследования - от 15 000 ₽</option>
                <option>ВКР под ключ - от 120 000 ₽</option>
                <option>Кандидатская диссертация - от 200 000 ₽</option>
                <option>Консультация</option>
              </select>

              <label htmlFor="contactText">Email или Telegram *</label>
              <input
                id="contactText"
                name="contactText"
                type="text"
                placeholder="example@mail.com или @telegram"
              />

              <button type="button" className="btn btn-primary">
                Отправить заявку
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© 2026 PhDLab. Все права защищены.</p>
          <a href="https://t.me/phd_lab" target="_blank" rel="noreferrer">
            Написать в Telegram
          </a>
        </div>
      </footer>
    </div>
  );
}

