// ===== 1. ПЕРЕВОДЫ: все тексты сайта на трёх языках =====
const dict = {
  en: {
    navAbout: 'About', navEdu: 'Education', navSkills: 'Skills', navProjects: 'Projects', navContact: 'Contact',
    hello: "Hello, I'm",
    name: 'Saltanat Karamoldoeva',
    role: 'Aspiring Frontend Developer',
    chipAge: '18 years old', chipCity: 'Bishkek, Kyrgyzstan', chipStudy: '1st-year student',
    scroll: 'Scroll',
    aboutTitle: 'About me',
    aboutText: "I'm a first-year English Philology student and an aspiring frontend developer. What first drew me to frontend was design — giving a page colour, style and character. With the support of my family I completed a 3-month frontend course, and now I build real projects.",
    nowTitle: 'Currently learning',
    goalTitle: 'My goal',
    goalText: 'To grow into a professional frontend developer and create beautiful, useful websites.',
    eduTitle: 'Education',
    uniWhen: '2026 — now',
    uniName: 'Al-Farabi Kazakh National University, Kyrgyz branch',
    uniText: 'Faculty of Foreign Philology · English Philology, 1st year',
    courseName: 'Okurmen — Frontend Development Course',
    courseText: '3-month course · hybrid format · HTML, CSS, JavaScript, React',
    schoolName: 'School No. 40, Bishkek',
    schoolText: 'Graduated in 2026',
    skillsTitle: 'Skills', langsTitle: 'Languages',
    langKg: 'Kyrgyz', langRu: 'Russian', langEn: 'English',
    projectsTitle: 'Projects',
    sakuText: 'A luxury beauty e-commerce website: catalogue, cart, demo payment, 3 languages and a day/night theme.',
    liveSite: 'Live site',
    soonText: "More projects are coming soon — I'm building something new right now.",
    hobbiesTitle: 'Hobbies',
    hobby1: 'Reading books', hobby2: 'Volleyball', hobby3: 'Design and style',
    contactTitle: "Let's connect",
    contactText: "I'm open to internships, study projects and new connections. The fastest way to reach me is email.",
    copy: 'Copy', copied: 'Email copied',
    // главный экран
    firstName: 'Saltanat', lastName: 'Karamoldoeva',
    badge1: '🎓 Student', badge2: '💻 Frontend', badge3: '📍 Bishkek',
    check1: '🎓 English Philology student, 1st year ✔',
    check2: '💻 Frontend: HTML, CSS, JavaScript, React ✔',
    check3: '🌸 I love design, style and beautiful websites ✔',
    statLangs: 'languages', statCourse: 'months of course', statProject: 'live project', statAge: 'years old',
    btnProjects: 'My projects', cvDownload: 'Download CV',
    cvHint: 'Scroll inside the page ↕',
    // лист А4 (резюме)
    cvProfile: 'Profile',
    cvProfileText: 'First-year English Philology student and aspiring frontend developer. I build responsive, multilingual websites with HTML, CSS, JavaScript and React, and I pay attention to clean, stylish design.'
  },
  ru: {
    navAbout: 'Обо мне', navEdu: 'Образование', navSkills: 'Навыки', navProjects: 'Проекты', navContact: 'Контакты',
    hello: 'Привет, я',
    name: 'Салтанат Карамолдоева',
    role: 'Начинающий Frontend-разработчик',
    chipAge: '18 лет', chipCity: 'Бишкек, Кыргызстан', chipStudy: 'Студентка 1 курса',
    scroll: 'Листайте',
    aboutTitle: 'Обо мне',
    aboutText: 'Я студентка первого курса, изучаю английскую филологию, и начинающий frontend-разработчик. Во фронтенде меня в первую очередь привлёк дизайн — возможность дать странице цвет, стиль и характер. При поддержке семьи я прошла 3-месячный курс frontend-разработки и теперь создаю реальные проекты.',
    nowTitle: 'Сейчас изучаю',
    goalTitle: 'Моя цель',
    goalText: 'Стать профессиональным frontend-разработчиком и создавать красивые и полезные сайты.',
    eduTitle: 'Образование',
    uniWhen: '2026 — сейчас',
    uniName: 'Кыргызский филиал КазНУ имени аль-Фараби',
    uniText: 'Факультет иностранной филологии · английская филология, 1 курс',
    courseName: 'Окурмэн — курс frontend-разработки',
    courseText: '3-месячный курс · гибридный формат · HTML, CSS, JavaScript, React',
    schoolName: 'Школа №40, Бишкек',
    schoolText: 'Окончила в 2026 году',
    skillsTitle: 'Навыки', langsTitle: 'Языки',
    langKg: 'Кыргызский', langRu: 'Русский', langEn: 'Английский',
    projectsTitle: 'Проекты',
    sakuText: 'Интернет-магазин премиальной косметики: каталог, корзина, демо-оплата, 3 языка и дневная/ночная тема.',
    liveSite: 'Открыть сайт',
    soonText: 'Скоро здесь появятся новые проекты — я уже работаю над следующим.',
    hobbiesTitle: 'Хобби',
    hobby1: 'Чтение книг', hobby2: 'Волейбол', hobby3: 'Дизайн и стиль',
    contactTitle: 'Давайте общаться',
    contactText: 'Я открыта к стажировкам, учебным проектам и новым знакомствам. Быстрее всего со мной связаться по почте.',
    copy: 'Копировать', copied: 'Почта скопирована',
    firstName: 'Салтанат', lastName: 'Карамолдоева',
    badge1: '🎓 Студентка', badge2: '💻 Frontend', badge3: '📍 Бишкек',
    check1: '🎓 Студентка 1 курса, английская филология ✔',
    check2: '💻 Frontend: HTML, CSS, JavaScript, React ✔',
    check3: '🌸 Люблю дизайн, стиль и красивые сайты ✔',
    statLangs: 'языка', statCourse: 'месяца курса', statProject: 'проект онлайн', statAge: 'лет',
    btnProjects: 'Мои проекты', cvDownload: 'Скачать резюме',
    cvHint: 'Листайте внутри листа ↕',
    cvProfile: 'Профиль',
    cvProfileText: 'Студентка 1 курса английской филологии и начинающий frontend-разработчик. Создаю адаптивные многоязычные сайты на HTML, CSS, JavaScript и React, уделяю внимание чистому и стильному дизайну.'
  },
  kg: {
    navAbout: 'Мен жөнүндө', navEdu: 'Билим', navSkills: 'Көндүмдөр', navProjects: 'Долбоорлор', navContact: 'Байланыш',
    hello: 'Салам, мен',
    name: 'Салтанат Карамолдоева',
    role: 'Жаңы баштаган Frontend-иштеп чыгуучу',
    chipAge: '18 жаш', chipCity: 'Бишкек, Кыргызстан', chipStudy: '1-курстун студенти',
    scroll: 'Ылдый жылдырыңыз',
    aboutTitle: 'Мен жөнүндө',
    aboutText: 'Мен англис филологиясы боюнча биринчи курстун студентимин жана жаңы баштаган frontend-иштеп чыгуучумун. Frontend мени биринчи кезекте дизайны менен кызыктырды — баракчага түс, стиль жана мүнөз берүү. Үй-бүлөмдүн колдоосу менен 3 айлык frontend курсун бүтүрдүм, азыр чыныгы долбоорлорду жасайм.',
    nowTitle: 'Азыр үйрөнүп жатам',
    goalTitle: 'Максатым',
    goalText: 'Кесипкөй frontend-иштеп чыгуучу болуп, кооз жана пайдалуу сайттарды жасоо.',
    eduTitle: 'Билим',
    uniWhen: '2026 — азыр',
    uniName: 'Аль-Фараби атындагы КазУУнун Кыргыз филиалы',
    uniText: 'Чет тил филологиясы факультети · англис филологиясы, 1-курс',
    courseName: 'Окурмэн — Frontend иштеп чыгуу курсу',
    courseText: '3 айлык курс · гибриддик формат · HTML, CSS, JavaScript, React',
    schoolName: 'Бишкек шаарындагы №40 мектеп',
    schoolText: '2026-жылы бүтүргөм',
    skillsTitle: 'Көндүмдөр', langsTitle: 'Тилдер',
    langKg: 'Кыргыз тили', langRu: 'Орус тили', langEn: 'Англис тили',
    projectsTitle: 'Долбоорлор',
    sakuText: 'Премиум косметиканын интернет-дүкөнү: каталог, себет, демо-төлөм, 3 тил жана күндүзгү/түнкү тема.',
    liveSite: 'Сайтты ачуу',
    soonText: 'Жакында жаңы долбоорлор пайда болот — кийинкисинин үстүндө иштеп жатам.',
    hobbiesTitle: 'Хоббилер',
    hobby1: 'Китеп окуу', hobby2: 'Волейбол', hobby3: 'Дизайн жана стиль',
    contactTitle: 'Байланышалы',
    contactText: 'Мен стажировкаларга, окуу долбоорлоруна жана жаңы таанышууларга ачыкмын. Мага эң тез почта аркылуу жазсаңыз болот.',
    copy: 'Көчүрүү', copied: 'Почта көчүрүлдү',
    firstName: 'Салтанат', lastName: 'Карамолдоева',
    badge1: '🎓 Студент', badge2: '💻 Frontend', badge3: '📍 Бишкек',
    check1: '🎓 Англис филологиясы, 1-курстун студенти ✔',
    check2: '💻 Frontend: HTML, CSS, JavaScript, React ✔',
    check3: '🌸 Дизайнды, стилди жана кооз сайттарды жакшы көрөм ✔',
    statLangs: 'тил', statCourse: 'айлык курс', statProject: 'онлайн долбоор', statAge: 'жаш',
    btnProjects: 'Долбоорлорум', cvDownload: 'Резюмени жүктөө',
    cvHint: 'Барактын ичин жылдырыңыз ↕',
    cvProfile: 'Профиль',
    cvProfileText: 'Англис филологиясынын 1-курсунун студенти жана жаңы баштаган frontend-иштеп чыгуучу. HTML, CSS, JavaScript жана React менен адаптивдүү, көп тилдүү сайттарды жасайм, таза жана стилдүү дизайнга көңүл бурам.'
  }
}

// Сохранение в браузере (в режиме инкогнито может не работать — тогда просто не сохраняем)
const read = (key, fallback) => { try { return localStorage.getItem(key) || fallback } catch { return fallback } }
const save = (key, value) => { try { localStorage.setItem(key, value) } catch { /* ничего */ } }

// ===== 2. ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА =====
let lang = read('pf-lang', 'en')

function setLang(next) {
  lang = dict[next] ? next : 'en'
  // каждому элементу с data-i18n ставим текст на выбранном языке
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = dict[lang][el.dataset.i18n]
    if (text) el.textContent = text
  })
  document.documentElement.lang = lang === 'kg' ? 'ky' : lang
  document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === lang))
  save('pf-lang', lang)
}

document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)))
setLang(lang)

// ===== 3. ТЕМА ДЕНЬ/НОЧЬ: как на телефоне или ПК, кнопка меняет временно =====
const darkQuery = matchMedia('(prefers-color-scheme: dark)')
const setTheme = t => {
  document.documentElement.dataset.theme = t
  document.querySelector('meta[name="theme-color"]').content = t === 'dark' ? '#120a0d' : '#fbf3f4'
}
setTheme(darkQuery.matches ? 'dark' : 'light')
darkQuery.addEventListener('change', e => setTheme(e.matches ? 'dark' : 'light'))
document.getElementById('themeBtn').addEventListener('click', () => {
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark')
})

// ===== 4. ЛИСТ А4 УЕЗЖАЕТ ПРИ ПРОКРУТКЕ, В ШАПКЕ ПОЯВЛЯЕТСЯ МАЛЕНЬКОЕ ФОТО =====
const heroCard = document.getElementById('heroCard')
const logoPhoto = document.getElementById('logoPhoto')
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches

function onScroll() {
  // start — с какого места начинаем: когда верх листа дошёл до шапки
  // (на телефоне лист стоит ниже текста, поэтому начинаем позже)
  const start = Math.max(0, heroCard.offsetTop - 80)
  // p — насколько уехал лист: от 0 (на месте) до 1 (уехал)
  const p = Math.min(1, Math.max(0, (window.scrollY - start) / (heroCard.offsetHeight * 0.85)))
  if (!calm) {
    heroCard.style.transform = `translateY(${p * -40}px) scale(${1 - p * 0.12})`
    heroCard.style.opacity = String(1 - p * 0.85)
  }
  logoPhoto.style.opacity = String(p)
  logoPhoto.style.transform = `scale(${0.6 + p * 0.4})`
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

// ===== 5. БЛОКИ ПЛАВНО ПОЯВЛЯЮТСЯ ПРИ ПРОКРУТКЕ =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in')
      observer.unobserve(entry.target) // показали один раз — больше не следим
    }
  })
}, { threshold: 0.15 })
document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

// ===== 6. КНОПКА «КОПИРОВАТЬ ПОЧТУ» =====
const toast = document.getElementById('toast')
document.getElementById('copyBtn').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('karamoldoevas@gmail.com') } catch { /* браузер запретил */ }
  toast.textContent = dict[lang].copied
  toast.classList.add('show')
  setTimeout(() => toast.classList.remove('show'), 1800)
})

// ===== 7. КНОПКА «СКАЧАТЬ РЕЗЮМЕ»: печатает только лист А4 (можно сохранить как PDF) =====
document.getElementById('printBtn').addEventListener('click', () => window.print())

// Год в подвале ставится сам
document.getElementById('year').textContent = new Date().getFullYear()
