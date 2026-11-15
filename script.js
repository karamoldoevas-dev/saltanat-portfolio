// ===== 1. ПЕРЕВОДЫ: все тексты сайта на трёх языках =====
const dict = {
  ru: {
    navAbout: 'Обо мне', navWork: 'Работы', navEdu: 'Образование', navContact: 'Контакты',
    name: 'Салтанат Карамолдоева', firstName: 'Салтанат', role: 'Frontend-разработчик',
    heroDesign: 'Дизайн', heroCode: 'и код.', heroText: 'Создаю адаптивные сайты на HTML, CSS, JavaScript и React.',
    btnWork: 'Смотреть работы', cvView: 'Посмотреть резюме', cvDownload: 'Скачать PDF ↓',

    cvProfile: 'Профиль', cvProfileText: 'Создаю адаптивные многоязычные сайты на HTML, CSS, JavaScript и React. Внимательна к дизайну и деталям.',
    p1Short: 'Интернет-магазин на React: каталог, корзина, демо-оплата, профиль, 3 языка.',
    p2Short: '7 регионов, юрта, «Манас». SVG и JavaScript.', p3Short: 'Дела, фильтры, localStorage.',
    skillsTitle: 'Навыки', eduTitle: 'Образование', finished: 'окончила', year1: '1 курс', grades: '1–11 классы',
    schoolName: 'Школа №40, Бишкек', achTitle: 'Достижения', achShort: '2 место по волейболу (диплом) · школьная грамота',
    langsTitle: 'Языки', langsLine: 'Кыргызский — родной · Русский — C1 · Английский — B2',
    page2Sub: 'Лист 2 — письмо и проекты', whyTitle: 'Почему я',
    letter1: 'Здравствуйте! Меня зовут Салтанат, я frontend-разработчик. Делаю сайты на HTML, CSS, JavaScript и React и всегда проверяю, как они выглядят и на телефоне, и на компьютере.',
    letter2: 'Мой главный проект — интернет-магазин SAKU BEAUTY: каталог, корзина, оформление заказа, оплата и профиль. Я внимательна к деталям, быстро учусь новому и всегда рада помочь команде.',
    letter3: 'Буду рада присоединиться к вашей команде и расти вместе с вами.', sign: '— Салтанат',
    p1Tiny: 'Интернет-магазин на React', p2Tiny: 'Регионы и традиции', p3Tiny: 'Дела на JavaScript', hover: 'наведите',

    aboutTitle: 'Обо мне.',
    about1: 'Создаю адаптивные сайты на <b>HTML, CSS, JavaScript и React</b>. Окончила курс frontend-разработки в Окурмэн. Главный проект — интернет-магазин <b>SAKU BEAUTY</b>, ещё 2 учебных проекта. Говорю на кыргызском, русском и английском (B2).',
    about2: 'Работаю с вёрсткой по макету: семантичный <b>HTML</b>, адаптивный <b>CSS</b> (Flexbox, Grid, медиазапросы) и анимации. На <b>JavaScript</b> делаю интерактив: формы с проверкой данных, фильтры, корзину, работу с данными через fetch и localStorage.',
    about3: 'В <b>React</b> собираю интерфейс из компонентов, управляю состоянием через useState и useEffect, знаю основы Redux. Каждый проект публикую сама — через GitHub и Vercel.',
    about4: 'К работе отношусь ответственно: проверяю сайт на разных экранах, слежу за чистотой кода и аккуратностью каждой детали.',
    does1: 'Вёрстка по макету', does2: 'Адаптив: телефон и ПК', does3: 'Интерактив на JavaScript', does4: 'Интерфейсы на React',
    goalTitle: 'Моя цель', goalText: 'Расти во frontend-разработке, браться за новые челленджи и каждый день узнавать новое — новые элементы, функции и технологии',
    teamTitle: 'В команде', teamText: 'Всегда рада помочь и с удовольствием участвую в командных проектах',
    hobbiesTitle: 'Хобби', hobbiesLine: '📚 Книги · 🏐 Волейбол · 🎨 Дизайн и стиль',
    statProjects: 'проекта', statRepos: 'репозиториев на GitHub', statLangs: 'языка знаю', statVolley: 'место, волейбол',

    workTitle: 'Проекты', workTitleDot: 'Работы.', kindMain: 'Главный проект', kindStudy: 'Учебный проект', openSite: 'Открыть сайт ↗',
    p1Text: 'Интернет-магазин на React: корзина, оплата, профиль, 3 языка.',
    p2Title: 'Кыргызстан', p2Text: '7 регионов, юрта, «Манас». SVG и JavaScript.',
    p3Title: 'TODO-список', p3Text: 'Дела, фильтры, localStorage.',
    allCode: 'Весь код — на моём GitHub ↗',

    eduTitleDot: 'Образование.', schoolTitle: 'Школа №40',
    schoolText: 'Окончила школу. Получила грамоту за успешную учёбу, ответственность и активное участие в жизни школы.',
    courseWhen: 'Курс · окончила', courseName: 'Окурмэн — Frontend-разработка',
    courseText: 'HTML, CSS, JavaScript, React и Redux. Итоговый проект — интернет-магазин SAKU BEAUTY.',
    uniWhen: 'Сейчас · 1 курс', uniName: 'Университет — английская филология',
    uniText: 'Факультет иностранной филологии. Английский помогает читать документацию и работать с англоязычными сайтами.',
    city: 'Бишкек', sport: 'Спорт', volleyRow: '<b>2 место по волейболу</b> — диплом, 2 года в команде',

    contactTitle: 'Контакты.', contactText: 'Всегда рада помочь и поработать в команде. Удобнее всего писать в WhatsApp — отвечаю быстро.',
  },

  kg: {
    navAbout: 'Мен жөнүндө', navWork: 'Иштерим', navEdu: 'Билим', navContact: 'Байланыш',
    name: 'Салтанат Карамолдоева', firstName: 'Салтанат', role: 'Frontend-иштеп чыгуучу',
    heroDesign: 'Дизайн', heroCode: 'жана код.', heroText: 'HTML, CSS, JavaScript жана React менен адаптивдүү сайттарды жасайм.',
    btnWork: 'Иштеримди көрүү', cvView: 'Резюмени көрүү', cvDownload: 'PDF жүктөө ↓',

    cvProfile: 'Профиль', cvProfileText: 'HTML, CSS, JavaScript жана React менен адаптивдүү, көп тилдүү сайттарды жасайм. Дизайнга жана деталдарга көңүл бурам.',
    p1Short: 'React менен интернет-дүкөн: каталог, себет, демо-төлөм, профиль, 3 тил.',
    p2Short: '7 аймак, боз үй, «Манас». SVG жана JavaScript.', p3Short: 'Иштер, чыпкалар, localStorage.',
    skillsTitle: 'Көндүмдөр', eduTitle: 'Билим', finished: 'бүтүрдүм', year1: '1-курс', grades: '1–11-класстар',
    schoolName: 'Бишкек шаарындагы №40 мектеп', achTitle: 'Жетишкендиктер', achShort: 'Волейболдон 2-орун (диплом) · мектептин ардак грамотасы',
    langsTitle: 'Тилдер', langsLine: 'Кыргыз тили — эне тил · Орус тили — C1 · Англис тили — B2',
    page2Sub: '2-барак — кат жана долбоорлор', whyTitle: 'Эмне үчүн мен',
    letter1: 'Саламатсызбы! Менин атым Салтанат, мен frontend-иштеп чыгуучумун. HTML, CSS, JavaScript жана React менен сайттарды жасайм жана алардын телефондо да, компьютерде да кандай көрүнөрүн дайыма текшерем.',
    letter2: 'Негизги долбоорум — SAKU BEAUTY интернет-дүкөнү: каталог, себет, буйрутма, төлөм жана профиль. Деталдарга көңүл бурам, жаңы нерселерди тез үйрөнөм жана командага жардам берүүгө дайыма даярмын.',
    letter3: 'Сиздердин командага кошулуп, чогуу өсүүгө кубанычта болом.', sign: '— Салтанат',
    p1Tiny: 'React менен интернет-дүкөн', p2Tiny: 'Аймактар жана салттар', p3Tiny: 'JavaScript менен иштер', hover: 'басыңыз',

    aboutTitle: 'Мен жөнүндө.',
    about1: '<b>HTML, CSS, JavaScript жана React</b> менен адаптивдүү сайттарды жасайм. Окурмэнде frontend курсун бүтүрдүм. Негизги долбоорум — <b>SAKU BEAUTY</b> интернет-дүкөнү, дагы 2 окуу долбоору бар. Кыргызча, орусча жана англисче (B2) сүйлөйм.',
    about2: 'Макет боюнча верстка жасайм: семантикалык <b>HTML</b>, адаптивдүү <b>CSS</b> (Flexbox, Grid, медиа-суроолор) жана анимациялар. <b>JavaScript</b> менен интерактив жасайм: текшерүүсү бар формалар, чыпкалар, себет, fetch жана localStorage аркылуу маалымат менен иштөө.',
    about3: '<b>React</b>те интерфейсти компоненттерден курайм, абалды useState жана useEffect менен башкарам, Reduxтун негиздерин билем. Ар бир долбоорду өзүм GitHub жана Vercel аркылуу жарыялайм.',
    about4: 'Ишке жоопкерчилик менен мамиле кылам: сайтты ар кандай экрандарда текшерем, коддун тазалыгына жана ар бир деталдын тактыгына көңүл бурам.',
    does1: 'Макет боюнча верстка', does2: 'Адаптив: телефон жана ПК', does3: 'JavaScript менен интерактив', does4: 'React менен интерфейстер',
    goalTitle: 'Максатым', goalText: 'Frontend-иштеп чыгууда өсүү, жаңы челленджлерди алуу жана күн сайын жаңы нерсени үйрөнүү — жаңы элементтер, функциялар жана технологиялар',
    teamTitle: 'Командада', teamText: 'Дайыма жардам берүүгө даярмын жана командалык долбоорлорго кубануу менен катышам',
    hobbiesTitle: 'Хоббилер', hobbiesLine: '📚 Китептер · 🏐 Волейбол · 🎨 Дизайн жана стиль',
    statProjects: 'долбоор', statRepos: 'GitHubдагы репозиторий', statLangs: 'тил билем', statVolley: 'орун, волейбол',

    workTitle: 'Долбоорлор', workTitleDot: 'Иштерим.', kindMain: 'Негизги долбоор', kindStudy: 'Окуу долбоору', openSite: 'Сайтты ачуу ↗',
    p1Text: 'React менен интернет-дүкөн: себет, төлөм, профиль, 3 тил.',
    p2Title: 'Кыргызстан', p2Text: '7 аймак, боз үй, «Манас». SVG жана JavaScript.',
    p3Title: 'TODO-тизме', p3Text: 'Иштер, чыпкалар, localStorage.',
    allCode: 'Бардык код — менин GitHubумда ↗',

    eduTitleDot: 'Билим.', schoolTitle: '№40 мектеп',
    schoolText: 'Мектепти бүтүрдүм. Ийгиликтүү окуу, жоопкерчилик жана мектеп жашоосуна активдүү катышуу үчүн ардак грамота алдым.',
    courseWhen: 'Курс · бүтүрдүм', courseName: 'Окурмэн — Frontend иштеп чыгуу',
    courseText: 'HTML, CSS, JavaScript, React жана Redux. Жыйынтык долбоор — SAKU BEAUTY интернет-дүкөнү.',
    uniWhen: 'Азыр · 1-курс', uniName: 'Университет — англис филологиясы',
    uniText: 'Чет тил филологиясы факультети. Англис тили документацияны окууга жана англис тилдүү сайттар менен иштөөгө жардам берет.',
    city: 'Бишкек', sport: 'Спорт', volleyRow: '<b>Волейболдон 2-орун</b> — диплом, командада 2 жыл',

    contactTitle: 'Байланыш.', contactText: 'Дайыма жардам берүүгө жана командада иштөөгө даярмын. WhatsAppка жазсаңыз ыңгайлуу — тез жооп берем.',
  },

  en: {
    navAbout: 'About', navWork: 'Work', navEdu: 'Education', navContact: 'Contact',
    name: 'Saltanat Karamoldoeva', firstName: 'Saltanat', role: 'Frontend Developer',
    heroDesign: 'Design', heroCode: 'and code.', heroText: 'I build responsive websites with HTML, CSS, JavaScript and React.',
    btnWork: 'See my work', cvView: 'View CV', cvDownload: 'Download PDF ↓',

    cvProfile: 'Profile', cvProfileText: 'I build responsive, multilingual websites with HTML, CSS, JavaScript and React. Attentive to design and details.',
    p1Short: 'React online shop: catalogue, cart, demo payment, profile, 3 languages.',
    p2Short: '7 regions, yurt, “Manas”. SVG and JavaScript.', p3Short: 'Tasks, filters, localStorage.',
    skillsTitle: 'Skills', eduTitle: 'Education', finished: 'completed', year1: '1st year', grades: 'Grades 1–11',
    schoolName: 'School No. 40, Bishkek', achTitle: 'Achievements', achShort: '2nd place in volleyball (diploma) · school certificate of merit',
    langsTitle: 'Languages', langsLine: 'Kyrgyz — native · Russian — C1 · English — B2',
    page2Sub: 'Page 2 — letter and projects', whyTitle: 'Why me',
    letter1: "Hello! My name is Saltanat and I'm a frontend developer. I build websites with HTML, CSS, JavaScript and React and always check how they look on both phones and computers.",
    letter2: 'My main project is SAKU BEAUTY, an online shop with a catalogue, cart, checkout, payment and user profile. I pay attention to detail, learn new things quickly and am always happy to help my team.',
    letter3: "I'd be glad to join your team and grow together with you.", sign: '— Saltanat',
    p1Tiny: 'React online shop', p2Tiny: 'Regions and traditions', p3Tiny: 'Tasks in JavaScript', hover: 'hover',

    aboutTitle: 'About me.',
    about1: 'I build responsive websites with <b>HTML, CSS, JavaScript and React</b>. I completed the frontend development course at Okurmen. My main project is the <b>SAKU BEAUTY</b> online shop, plus 2 study projects. I speak Kyrgyz, Russian and English (B2).',
    about2: 'I turn designs into layouts: semantic <b>HTML</b>, responsive <b>CSS</b> (Flexbox, Grid, media queries) and animations. With <b>JavaScript</b> I build interactivity: forms with validation, filters, a shopping cart, working with data via fetch and localStorage.',
    about3: 'In <b>React</b> I build interfaces from components, manage state with useState and useEffect, and know the basics of Redux. I publish every project myself via GitHub and Vercel.',
    about4: 'I take my work seriously: I test sites on different screens and keep the code clean and every detail neat.',
    does1: 'Layouts from designs', does2: 'Responsive: phone and PC', does3: 'Interactivity in JavaScript', does4: 'Interfaces in React',
    goalTitle: 'My goal', goalText: 'To grow in frontend development, take on new challenges and learn something new every day — new elements, features and technologies',
    teamTitle: 'In a team', teamText: 'Always happy to help and glad to take part in team projects',
    hobbiesTitle: 'Hobbies', hobbiesLine: '📚 Books · 🏐 Volleyball · 🎨 Design and style',
    statProjects: 'projects', statRepos: 'GitHub repositories', statLangs: 'languages I speak', statVolley: 'place, volleyball',

    workTitle: 'Projects', workTitleDot: 'Work.', kindMain: 'Main project', kindStudy: 'Study project', openSite: 'Open site ↗',
    p1Text: 'React online shop: cart, payment, profile, 3 languages.',
    p2Title: 'Kyrgyzstan', p2Text: '7 regions, yurt, “Manas”. SVG and JavaScript.',
    p3Title: 'TODO list', p3Text: 'Tasks, filters, localStorage.',
    allCode: 'All my code is on GitHub ↗',

    eduTitleDot: 'Education.', schoolTitle: 'School No. 40',
    schoolText: 'Graduated from school with a certificate of merit for good studies, responsibility and active part in school life.',
    courseWhen: 'Course · completed', courseName: 'Okurmen — Frontend Development',
    courseText: 'HTML, CSS, JavaScript, React and Redux. Final project — the SAKU BEAUTY online shop.',
    uniWhen: 'Now · 1st year', uniName: 'University — English Philology',
    uniText: 'Faculty of Foreign Philology. English helps me read documentation and work with English-language websites.',
    city: 'Bishkek', sport: 'Sport', volleyRow: '<b>2nd place in volleyball</b> — diploma, 2 years in the team',

    contactTitle: 'Contact.', contactText: 'Always happy to help and work in a team. WhatsApp is the easiest way to reach me — I reply quickly.',
  },
}

// сохранение в браузере (в режиме инкогнито может не работать — тогда просто не сохраняем)
const read = (k, d) => { try { return localStorage.getItem(k) || d } catch { return d } }
const save = (k, v) => { try { localStorage.setItem(k, v) } catch { /* ничего */ } }

// ===== 2. ЯЗЫК =====
// язык можно передать в адресе: ?lang=en (так сделаны PDF-резюме на трёх языках)
const urlLang = new URLSearchParams(location.search).get('lang')
let lang = urlLang || read('pf-lang', 'ru')

function setLang(next) {
  lang = dict[next] ? next : 'ru'
  const t = dict[lang]
  // тексты наши, поэтому можно innerHTML (в некоторых есть <b>)
  document.querySelectorAll('[data-i18n]').forEach(el => { const v = t[el.dataset.i18n]; if (v) el.innerHTML = v })
  document.querySelectorAll('.pic').forEach(p => p.dataset.hint = t.hover)
  document.documentElement.lang = lang === 'kg' ? 'ky' : lang
  document.title = `${t.name} — ${t.role}`
  document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === lang))
  // кнопки резюме открывают PDF на выбранном языке
  const pdf = `cv/Saltanat-Karamoldoeva-CV-${lang.toUpperCase()}.pdf`
  document.getElementById('cvView').href = pdf
  document.getElementById('cvLink').href = pdf
  if (!urlLang) save('pf-lang', lang)
}
document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)))
setLang(lang)

// ===== 3. ТЕМА ДЕНЬ/НОЧЬ: меняется кругом от кнопки =====
const root = document.documentElement
const setTheme = t => {
  root.dataset.theme = t
  document.querySelector('meta[name="theme-color"]').content = t === 'dark' ? '#000000' : '#ffffff'
  document.getElementById('theme').setAttribute('aria-checked', t === 'light') // включён = день
}
const darkQuery = matchMedia('(prefers-color-scheme: dark)')
setTheme(darkQuery.matches ? 'dark' : 'light')
darkQuery.addEventListener('change', e => setTheme(e.matches ? 'dark' : 'light'))
document.getElementById('theme').addEventListener('click', e => {
  const flip = () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark')
  if (!document.startViewTransition) return flip()
  const x = e.clientX, y = e.clientY
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  document.startViewTransition(flip).ready.then(() => {
    root.animate({ clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 650, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' })
  })
})

// ===== 4. ПОЯВЛЕНИЕ ПРИ ПРОКРУТКЕ + СЧЁТЧИКИ =====
const seen = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return
  const el = e.target
  el.classList.add('in')
  if (el.dataset.to) { // цифры «набегают»: 0 → 3
    const end = +el.dataset.to, plus = el.dataset.plus || ''
    let n = 0
    const timer = setInterval(() => { n++; el.textContent = n + (n === end ? plus : ''); if (n >= end) clearInterval(timer) }, 1000 / end)
  }
  seen.unobserve(el)
}), { threshold: 0.15 })
document.querySelectorAll('.from-left, .from-right, [data-to]').forEach(el => seen.observe(el))

// ===== 5. БЕГУЩАЯ СТРОКА: дублируем навыки, чтобы шли без разрыва =====
document.querySelectorAll('.track').forEach(t => { t.innerHTML += t.innerHTML })

// ===== 6. КАРТОЧКИ ПРОЕКТОВ НАКЛОНЯЮТСЯ ЗА КУРСОРОМ =====
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    card.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`
  })
  card.addEventListener('mouseleave', () => { card.style.transform = '' })
})

// ===== 7. ЛИСТЫ РЕЗЮМЕ: прокручиваются сами и перелистываются =====
const pages = [...document.querySelectorAll('.page')]
const dots = [...document.querySelectorAll('#dots i')]
let current = 0, pos = 0, wait = 150, paused = false

function showPage(i) {
  pages[current].classList.remove('on')
  current = (i + pages.length) % pages.length
  pages[current].classList.add('on')
  pages[current].scrollTop = 0
  pos = 0; wait = 150
  document.getElementById('pageNum').textContent = `${current + 1} / ${pages.length}`
  dots.forEach((d, k) => d.classList.toggle('on', k === current))
}
document.getElementById('nextPage').onclick = () => showPage(current + 1)
document.getElementById('prevPage').onclick = () => showPage(current - 1)

const stack = document.getElementById('stack')
stack.addEventListener('mouseenter', () => paused = true)
stack.addEventListener('mouseleave', () => { paused = false; pos = pages[current].scrollTop })
stack.addEventListener('touchstart', () => { paused = true; setTimeout(() => paused = false, 8000) }, { passive: true })

function tick() {
  if (!paused && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const page = pages[current]
    const end = page.scrollHeight - page.clientHeight
    if (wait > 0) wait--
    else if (pos < end) { pos = Math.min(end, pos + 0.6); page.scrollTop = pos; if (pos >= end) wait = 150 }
    else showPage(current + 1) // дочитали лист — перелистываем
  }
  requestAnimationFrame(tick)
}
if (!urlLang) setTimeout(tick, 1600) // для PDF (?lang=…) листы не двигаем

// ===== 8. КАРТОЧКИ «ЦЕЛЬ / КОМАНДА / ЯЗЫКИ / ХОББИ»: по нажатию выделяются =====
document.querySelectorAll('.about-side div').forEach(card => {
  const toggle = () => {
    const wasOn = card.classList.contains('on')
    document.querySelectorAll('.about-side div').forEach(x => x.classList.remove('on'))
    if (!wasOn) card.classList.add('on')
  }
  card.addEventListener('click', toggle)
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle() } })
})

// год в подвале ставится сам
document.getElementById('year').textContent = new Date().getFullYear()
