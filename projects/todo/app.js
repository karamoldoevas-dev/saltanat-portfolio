// ===== TODO: добавить, отметить, удалить, фильтр, сохранение в localStorage =====
const form = document.getElementById('form')
const input = document.getElementById('input')
const list = document.getElementById('list')
const error = document.getElementById('error')
const count = document.getElementById('count')

// 1. Загружаем дела из браузера (если их нет — стартовые примеры)
let todos = JSON.parse(localStorage.getItem('todos')) || [
  { id: 1, text: 'Повторить map, filter, reduce', done: true },
  { id: 2, text: 'Сделать карточки товаров на React', done: false },
  { id: 3, text: 'Подготовиться к экзамену', done: false },
]
let filter = 'all'

const save = () => localStorage.setItem('todos', JSON.stringify(todos))

// 2. Рисуем список на странице
function render() {
  const visible = todos.filter(t => filter === 'all' ? true : filter === 'done' ? t.done : !t.done)
  list.innerHTML = ''
  if (visible.length === 0) {
    list.innerHTML = '<li class="empty">Здесь пока пусто ✨</li>'
  }
  visible.forEach(todo => {
    const li = document.createElement('li')
    li.className = 'item' + (todo.done ? ' done' : '')

    const check = document.createElement('input')
    check.type = 'checkbox'
    check.checked = todo.done
    check.addEventListener('change', () => toggle(todo.id))

    const span = document.createElement('span')
    span.textContent = todo.text // textContent — безопасно, HTML не выполнится

    const del = document.createElement('button')
    del.className = 'del'
    del.textContent = '✕'
    del.setAttribute('aria-label', 'Удалить')
    del.addEventListener('click', () => remove(todo.id))

    li.append(check, span, del)
    list.append(li)
  })
  const left = todos.filter(t => !t.done).length
  count.textContent = `Осталось: ${left} из ${todos.length}`
  save()
}

// 3. Действия
function add(text) {
  todos.push({ id: Date.now(), text, done: false })
  render()
}
function toggle(id) {
  todos = todos.map(t => t.id === id ? { ...t, done: !t.done } : t)
  render()
}
function remove(id) {
  todos = todos.filter(t => t.id !== id)
  render()
}

// 4. События
form.addEventListener('submit', e => {
  e.preventDefault() // чтобы страница не перезагружалась
  const text = input.value.trim()
  if (!text) { error.textContent = 'Напишите, что нужно сделать'; return }
  error.textContent = ''
  add(text)
  input.value = ''
  input.focus()
})

document.getElementById('filters').addEventListener('click', e => {
  if (!e.target.dataset.filter) return
  filter = e.target.dataset.filter
  document.querySelectorAll('#filters button').forEach(b => b.classList.toggle('on', b === e.target))
  render()
})

document.getElementById('clear').addEventListener('click', () => {
  todos = todos.filter(t => !t.done)
  render()
})

// сегодняшняя дата
document.getElementById('today').textContent = new Date().toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })

render()
