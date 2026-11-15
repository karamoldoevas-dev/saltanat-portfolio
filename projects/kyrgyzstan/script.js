// ===== 1. ДАННЫЕ: регионы и культура хранятся в массивах объектов =====
const regions = [
  { name: 'Чуйская область', city: 'Центр — Бишкек', text: 'Самая населённая область, здесь находится столица.', places: ['Национальный парк Ала-Арча', 'Башня Бурана — ей около 1000 лет', 'Ущелье Кегети с водопадом'] },
  { name: 'Иссык-Кульская область', city: 'Центр — Каракол', text: 'Жемчужина Кыргызстана — огромное горное озеро, которое не замерзает зимой.', places: ['Озеро Иссык-Куль', 'Скалы Джети-Огуз («Семь быков»)', 'Ущелье Алтын-Арашан'] },
  { name: 'Нарынская область', city: 'Центр — Нарын', text: 'Самая высокогорная область: просторные джайлоо и юрты пастухов.', places: ['Озеро Сон-Куль', 'Каравансарай Таш-Рабат', 'Перевал Торугарт'] },
  { name: 'Таласская область', city: 'Центр — Талас', text: 'Родина героя эпоса «Манас».', places: ['Комплекс «Манас Ордо»', 'Таласская долина', 'Горы Таласского Алатау'] },
  { name: 'Ошская область', city: 'Центр — Ош', text: 'Ошу больше 3000 лет — это один из самых древних городов Центральной Азии.', places: ['Гора Сулайман-Тоо (объект ЮНЕСКО)', 'Ошский базар', 'Алайская долина'] },
  { name: 'Джалал-Абадская область', city: 'Центр — Джалал-Абад', text: 'Край целебных источников и ореховых лесов.', places: ['Ореховый лес Арсланбоб', 'Озеро Сары-Челек', 'Водопады Арсланбоба'] },
  { name: 'Баткенская область', city: 'Центр — Баткен', text: 'Самый юг страны, знаменит абрикосами и редким цветком айгуль.', places: ['Урочище Айгуль-Таш', 'Абрикосовые сады', 'Горы Туркестанского хребта'] },
]

const culture = [
  { icon: '⛺', title: 'Боз үй — юрта', text: 'Дом кочевников, который собирают за пару часов. Купол юрты — түндүк — изображён на флаге.' },
  { icon: '📜', title: 'Эпос «Манас»', text: 'Один из самых длинных эпосов в мире. Его сказители — манасчы — знают наизусть тысячи строк.' },
  { icon: '🎵', title: 'Комуз', text: 'Трёхструнный национальный инструмент. На нём играют без ладов, «на слух».' },
  { icon: '🎩', title: 'Ак калпак', text: 'Белая войлочная шапка — символ страны. 5 марта отмечают День ак калпака.' },
  { icon: '🐎', title: 'Кок-бору', text: 'Конная командная игра. Кыргызстан трижды принимал Всемирные игры кочевников.' },
  { icon: '🥛', title: 'Кымыз', text: 'Напиток из кобыльего молока — летом им угощают каждого гостя на джайлоо.' },
]

// ===== 2. РЕГИОНЫ: рисуем кнопки и показываем выбранный регион =====
const list = document.getElementById('regionList')
const card = document.getElementById('regionCard')

function showRegion(i) {
  const r = regions[i]
  card.innerHTML = `
    <p class="city">${r.city}</p>
    <h3>${r.name}</h3>
    <p>${r.text}</p>
    <ul>${r.places.map(p => `<li>${p}</li>`).join('')}</ul>`
  // перезапускаем анимацию появления
  card.style.animation = 'none'; card.offsetHeight; card.style.animation = ''
  list.querySelectorAll('button').forEach((b, k) => b.classList.toggle('on', k === i))
}

regions.forEach((r, i) => {
  const b = document.createElement('button')
  b.textContent = r.name.replace(' область', '')
  b.setAttribute('role', 'tab')
  b.addEventListener('click', () => {
    showRegion(i)
    b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' }) // на телефоне кнопка не уезжает за край
  })
  list.append(b)
})
showRegion(0)

// ===== 3. КУЛЬТУРА: карточки из массива через map =====
document.getElementById('cultureCards').innerHTML = culture
  .map(c => `<div class="card"><span>${c.icon}</span><h3>${c.title}</h3><p>${c.text}</p></div>`)
  .join('')

// ===== 4. ФАКТЫ: числа плавно растут, когда блок появляется на экране =====
const counters = document.querySelectorAll('[data-count]')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    const el = entry.target
    const end = Number(el.dataset.count)
    let n = 0
    const step = Math.ceil(end / 40)
    const timer = setInterval(() => {
      n = Math.min(end, n + step)
      el.textContent = n
      if (n === end) clearInterval(timer)
    }, 25)
    observer.unobserve(el)
  })
}, { threshold: 0.6 })
counters.forEach(c => observer.observe(c))
