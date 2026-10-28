import { Link } from 'react-router-dom'

function PlayPage() {
  return (
    <section>
      <h2>Игровой зал</h2>
      <p>Выбери игру:</p>
      <ul>
        <li><Link to="/games/slots">🎰 Слоты</Link></li>
        <li><Link to="/games/roulette">🎡 Рулетка</Link></li>
        <li><Link to="/games/blackjack">🃏 Блэкджек</Link></li>
      </ul>
    </section>
  )
}

export default PlayPage
