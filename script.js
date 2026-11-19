// ===== 1. ПЕРЕВОДЫ: все тексты сайта на трёх языках =====
const dict = {
  ru: {
    navAbout: 'Обо мне', navWork: 'Работы', navEdu: 'Образование', navContact: 'Контакты',
    name: 'Салтанат Карамолдоева', firstName: 'Салтанат', role: 'Frontend-разработчик',
    heroDesign: 'Дизайн', heroCode: 'и код.', heroText: 'Создаю адаптивные сайты на HTML, CSS, JavaScript и React.',
    btnWork: 'Смотреть работы', cvView: 'Посмотреть резюме', cvDownload: 'Скачать PDF ↓',

    skillsTitle: 'Навыки', eduTitle: 'Образование', finished: 'окончила', grades: '1–11 классы',
    schoolName: 'Школа №40, Бишкек', achTitle: 'Достижения',
    langsTitle: 'Языки', langsLine: 'Кыргызский — родной · Русский — C1 · Английский — B2',
    letter3: 'Буду рада присоединиться к вашей команде и расти вместе с вами.', sign: '— Салтанат',

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

    formTitle: 'Или напишите мне здесь', formName: 'Имя', formNamePh: 'Как вас зовут?',
    formContact: 'Телефон или Gmail', formContactPh: '+996 … или name@gmail.com',
    formMsg: 'Сообщение', formMsgPh: 'Здравствуйте! Давайте свяжемся…', formSend: 'Отправить',
    formSending: 'Отправляю…', formSlow: 'Отправляю… это может занять до минуты, не закрывайте страницу.',formOk: 'Спасибо! Сообщение отправлено — скоро свяжусь с вами.',
    formErr: 'Не получилось отправить. Напишите, пожалуйста, в WhatsApp или на почту.',
    formFill: 'Заполните все поля.', formBadContact: 'Укажите номер телефона или e-mail.',
    cvContacts: 'Контакты', cityFull: 'Бишкек, Кыргызстан', lastName: 'Карамолдоева',
    skLayout: 'Вёрстка', skTools: 'Инструменты', chipResp: 'Адаптив', chipAnim: 'Анимации', chipForms: 'Формы', chipComp: 'Компоненты',
    langKg: 'Кыргызский', langRu: 'Русский', langEn: 'Английский', native: 'родной',
    ach1: '2 место по волейболу — диплом', ach2: 'Грамота школы за учёбу и активность',
    hob1: 'Книги', hob2: 'Волейбол', hob3: 'Дизайн и стиль',
    cvAbout: 'Создаю адаптивные многоязычные сайты на HTML, CSS, JavaScript и React. Окончила курс frontend-разработки в Окурмэн, сейчас учусь на английской филологии. Внимательна к дизайну и деталям: проверяю каждый сайт на телефоне и компьютере, слежу за чистотой кода. Каждый проект публикую сама — через GitHub и Vercel.',
    p1Cv: 'Интернет-магазин косметики: каталог, корзина, оформление заказа, демо-оплата, профиль, 3 языка.',
    p2Cv: 'Сайт о стране: 7 регионов на интерактивной карте, юрта, эпос «Манас».',
    p3Cv: 'Список дел с фильтрами; данные сохраняются в браузере.',
    courseShort: 'HTML, CSS, JavaScript, React, Redux. Итоговый проект — SAKU BEAUTY.',
    strengthsTitle: 'Сильные стороны',
    q1: 'Внимание к деталям', q1t: 'Аккуратная вёрстка до пикселя', q2: 'Быстро учусь', q2t: 'Осваиваю новые технологии сама',
    q3: 'Командная работа', q3t: 'Всегда рада помочь команде', q4: 'Ответственность', q4t: 'Довожу проекты до публикации',
    cvZoom: 'Нажмите на лист, чтобы открыть крупно',
    contactTitle: 'Контакты.', contactText: 'Всегда рада помочь и поработать в команде. Удобнее всего писать в WhatsApp — отвечаю быстро.',
  },

  kg: {
    navAbout: 'Мен жөнүндө', navWork: 'Иштерим', navEdu: 'Билим', navContact: 'Байланыш',
    name: 'Салтанат Карамолдоева', firstName: 'Салтанат', role: 'Frontend-иштеп чыгуучу',
    heroDesign: 'Дизайн', heroCode: 'жана код.', heroText: 'HTML, CSS, JavaScript жана React менен адаптивдүү сайттарды жасайм.',
    btnWork: 'Иштеримди көрүү', cvView: 'Резюмени көрүү', cvDownload: 'PDF жүктөө ↓',

    skillsTitle: 'Көндүмдөр', eduTitle: 'Билим', finished: 'бүтүрдүм', grades: '1–11-класстар',
    schoolName: 'Бишкек шаарындагы №40 мектеп', achTitle: 'Жетишкендиктер',
    langsTitle: 'Тилдер', langsLine: 'Кыргыз тили — эне тил · Орус тили — C1 · Англис тили — B2',
    letter3: 'Сиздердин командага кошулуп, чогуу өсүүгө кубанычта болом.', sign: '— Салтанат',

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

    formTitle: 'Же бул жерге жазыңыз', formName: 'Атыңыз', formNamePh: 'Атыңыз ким?',
    formContact: 'Телефон же Gmail', formContactPh: '+996 … же name@gmail.com',
    formMsg: 'Билдирүү', formMsgPh: 'Саламатсызбы! Байланышалы…', formSend: 'Жөнөтүү',
    formSending: 'Жөнөтүлүүдө…', formSlow: 'Жөнөтүлүүдө… бир мүнөткө чейин созулушу мүмкүн, баракты жаппаңыз.',formOk: 'Рахмат! Билдирүү жөнөтүлдү — жакында байланышам.',
    formErr: 'Жөнөтүлгөн жок. WhatsAppка же почтага жазыңыз.',
    formFill: 'Бардык талааларды толтуруңуз.', formBadContact: 'Телефон номерин же e-mail жазыңыз.',
    cvContacts: 'Байланыш', cityFull: 'Бишкек, Кыргызстан', lastName: 'Карамолдоева',
    skLayout: 'Верстка', skTools: 'Куралдар', chipResp: 'Адаптив', chipAnim: 'Анимациялар', chipForms: 'Формалар', chipComp: 'Компоненттер',
    langKg: 'Кыргыз тили', langRu: 'Орус тили', langEn: 'Англис тили', native: 'эне тил',
    ach1: 'Волейболдон 2-орун — диплом', ach2: 'Окуу жана активдүүлүк үчүн мектептин грамотасы',
    hob1: 'Китептер', hob2: 'Волейбол', hob3: 'Дизайн жана стиль',
    cvAbout: 'HTML, CSS, JavaScript жана React менен адаптивдүү, көп тилдүү сайттарды жасайм. Окурмэнде frontend курсун бүтүрдүм, азыр англис филологиясында окуйм. Дизайнга жана деталдарга көңүл бурам: ар бир сайтты телефондо жана компьютерде текшерем, коддун тазалыгын карайм. Ар бир долбоорду өзүм GitHub жана Vercel аркылуу жарыялайм.',
    p1Cv: 'Косметика интернет-дүкөнү: каталог, себет, буйрутма, демо-төлөм, профиль, 3 тил.',
    p2Cv: 'Өлкө жөнүндө сайт: интерактивдүү картада 7 аймак, боз үй, «Манас» эпосу.',
    p3Cv: 'Чыпкалары бар иштер тизмеси; маалымат браузерде сакталат.',
    courseShort: 'HTML, CSS, JavaScript, React, Redux. Жыйынтык долбоор — SAKU BEAUTY.',
    strengthsTitle: 'Күчтүү жактарым',
    q1: 'Деталдарга көңүл', q1t: 'Пикселге чейин так верстка', q2: 'Тез үйрөнөм', q2t: 'Жаңы технологияларды өзүм өздөштүрөм',
    q3: 'Командада иштөө', q3t: 'Командага дайыма жардам берем', q4: 'Жоопкерчилик', q4t: 'Долбоорду жарыялоого чейин жеткирем',
    cvZoom: 'Чоң ачуу үчүн баракты басыңыз',
    contactTitle: 'Байланыш.', contactText: 'Дайыма жардам берүүгө жана командада иштөөгө даярмын. WhatsAppка жазсаңыз ыңгайлуу — тез жооп берем.',
  },

  en: {
    navAbout: 'About', navWork: 'Work', navEdu: 'Education', navContact: 'Contact',
    name: 'Saltanat Karamoldoeva', firstName: 'Saltanat', role: 'Frontend Developer',
    heroDesign: 'Design', heroCode: 'and code.', heroText: 'I build responsive websites with HTML, CSS, JavaScript and React.',
    btnWork: 'See my work', cvView: 'View CV', cvDownload: 'Download PDF ↓',

    skillsTitle: 'Skills', eduTitle: 'Education', finished: 'completed', grades: 'Grades 1–11',
    schoolName: 'School No. 40, Bishkek', achTitle: 'Achievements',
    langsTitle: 'Languages', langsLine: 'Kyrgyz — native · Russian — C1 · English — B2',
    letter3: "I'd be glad to join your team and grow together with you.", sign: '— Saltanat',

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

    formTitle: 'Or write to me here', formName: 'Name', formNamePh: 'What is your name?',
    formContact: 'Phone or Gmail', formContactPh: '+996 … or name@gmail.com',
    formMsg: 'Message', formMsgPh: "Hi! Let's get in touch…", formSend: 'Send',
    formSending: 'Sending…', formSlow: 'Sending… this can take up to a minute, please keep the page open.',formOk: "Thank you! Your message was sent — I'll get back to you soon.",
    formErr: "Couldn't send. Please message me on WhatsApp or by email.",
    formFill: 'Please fill in all fields.', formBadContact: 'Enter a phone number or an e-mail.',
    cvContacts: 'Contacts', cityFull: 'Bishkek, Kyrgyzstan', lastName: 'Karamoldoeva',
    skLayout: 'Layout', skTools: 'Tools', chipResp: 'Responsive', chipAnim: 'Animations', chipForms: 'Forms', chipComp: 'Components',
    langKg: 'Kyrgyz', langRu: 'Russian', langEn: 'English', native: 'native',
    ach1: '2nd place in volleyball — diploma', ach2: 'School certificate for studies and activity',
    hob1: 'Books', hob2: 'Volleyball', hob3: 'Design and style',
    cvAbout: 'I build responsive, multilingual websites with HTML, CSS, JavaScript and React. I completed the frontend development course at Okurmen and now study English Philology. I pay attention to design and detail: I test every site on phones and computers and keep the code clean. I publish every project myself via GitHub and Vercel.',
    p1Cv: 'Cosmetics online shop: catalogue, cart, checkout, demo payment, profile, 3 languages.',
    p2Cv: 'A site about the country: 7 regions on an interactive map, the yurt, the “Manas” epic.',
    p3Cv: 'A to-do list with filters; data is saved in the browser.',
    courseShort: 'HTML, CSS, JavaScript, React, Redux. Final project — SAKU BEAUTY.',
    strengthsTitle: 'Strengths',
    q1: 'Attention to detail', q1t: 'Pixel-accurate layouts', q2: 'Fast learner', q2t: 'I pick up new technologies on my own',
    q3: 'Teamwork', q3t: 'Always happy to help the team', q4: 'Responsibility', q4t: 'I take projects all the way to launch',
    cvZoom: 'Tap the sheet to open it full size',
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
  document.querySelectorAll('[data-ph]').forEach(el => el.placeholder = t[el.dataset.ph] || '')
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

// ===== 7. ЛИСТ РЕЗЮМЕ: уменьшается под ширину экрана, по нажатию открывается крупно =====
const sheet = document.getElementById('cvSheet')
const A4 = 794 // ширина листа в пикселях (как у настоящего А4)
const fit = (paper, width) => paper.style.setProperty('--k', Math.min(1.25, width / A4))
const sheetBox = document.querySelector('.cv-3d')
new ResizeObserver(() => fit(sheet, sheetBox.clientWidth)).observe(sheetBox)

const big = document.getElementById('cvBig')
const bigIn = document.getElementById('cvBigIn')
const fitBig = () => { const p = bigIn.firstChild; if (p) fit(p, Math.min(innerWidth - 32, 900)) }
function openCv() {
  const copy = sheet.cloneNode(true)
  copy.removeAttribute('id'); copy.removeAttribute('role'); copy.tabIndex = -1
  bigIn.replaceChildren(copy)
  fitBig()
  big.showModal()
  big.scrollTop = 0
}
sheet.addEventListener('click', openCv)
sheet.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCv() } })
document.getElementById('cvClose').addEventListener('click', () => big.close())
big.addEventListener('click', e => { if (e.target === big || e.target === bigIn) big.close() }) // нажали мимо листа — закрываем
addEventListener('resize', fitBig)

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

// ===== 9. ФОРМА «ДАВАЙТЕ СВЯЖЕМСЯ»: письмо приходит на почту =====
// сервис FormSubmit пересылает заявку на Gmail.
// Для каждого нового адреса сайта он один раз присылает письмо «Activate Form» — нужно нажать кнопку в САМОМ НОВОМ письме
const FORM_URL = 'https://formsubmit.co/ajax/karamoldoevas@gmail.com'
const cform = document.getElementById('cform')
const note = document.getElementById('cformNote')
const sendBtn = document.getElementById('cformBtn')
const say = (key, cls) => { note.textContent = dict[lang][key]; note.className = 'cform-note ' + (cls || '') }
// телефон: хотя бы 7 цифр; почта: что-то@что-то.что-то
const okContact = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || v.replace(/\D/g, '').length >= 7

cform.addEventListener('input', e => e.target.classList.remove('bad'))
cform.addEventListener('submit', async e => {
  e.preventDefault()
  const f = cform.elements
  const name = f.name.value.trim(), contact = f.contact.value.trim(), message = f.message.value.trim()
  ;[f.name, f.contact, f.message].forEach(el => el.classList.toggle('bad', !el.value.trim()))
  if (!name || !contact || !message) return say('formFill', 'err')
  if (!okContact(contact)) { f.contact.classList.add('bad'); return say('formBadContact', 'err') }
  if (f._honey.value) return say('formOk', 'ok') // это бот — делаем вид, что всё хорошо

  sendBtn.disabled = true; say('formSending')
  // сервис иногда отвечает медленно: через 5 секунд просим подождать, через 90 — сдаёмся
  const slow = setTimeout(() => say('formSlow'), 5000)
  const stop = new AbortController()
  const giveUp = setTimeout(() => stop.abort(), 90000)
  try {
    const res = await fetch(FORM_URL, {
      signal: stop.signal,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name, contact, message,
        _subject: `Портфолио: сообщение от ${name}`, _template: 'table', _captcha: 'false',
        // если человек оставил почту — на письмо можно будет просто нажать «Ответить»
        ...(contact.includes('@') ? { _replyto: contact } : {}),
      }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || res.status)
    cform.reset(); say('formOk', 'ok')
  } catch {
    say('formErr', 'err')
  } finally {
    clearTimeout(slow); clearTimeout(giveUp)
    sendBtn.disabled = false
  }
})

// год в подвале ставится сам
document.getElementById('year').textContent = new Date().getFullYear()
