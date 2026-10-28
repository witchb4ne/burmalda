
import { NavLink, Outlet } from 'react-router-dom'
import '../App.css'

function Layout() {
  return (
    <div className="app">
      <header className="header">
        <h1>BURMALDA</h1>
        <nav className="nav">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/games">Игры</NavLink>
          <NavLink to="/play">Играть</NavLink>
          <NavLink to="/history">История</NavLink>
          <NavLink to="/stats">Статистика</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <p>BURMALDA — казино-проект</p>
      </footer>
    </div>
  )
}

export default Layout
