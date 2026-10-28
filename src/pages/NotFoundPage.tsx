import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section>
      <h2>Страница не найдена</h2>
      <p>Такой страницы не существует.</p>
      <Link to="/">Вернуться на главную</Link>
    </section>
  )
}

export default NotFoundPage
