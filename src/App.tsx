import './App.css'
import Slots from './Slots'
import Roulette from './Roulette'
import Blackjack from './Blackjack'
import { getGamesMock } from './mocks/games'
import { useEffect, useState } from 'react'

function App() {
  const [balance, setBalance] = useState(1000)
  const [games, setGames] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showSlots, setShowSlots] = useState(false)
  const [showRoulette, setShowRoulette] = useState(false)
  const [showBlackjack, setShowBlackjack] = useState(false)

  useEffect(() => {
    getGamesMock().then((data) => {
      setGames(data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Загрузка...</h2>
  }
  if (showSlots) {
  return <Slots />
}
if (showRoulette) {
  return <Roulette />
}
if (showBlackjack) {
  return <Blackjack />
}
  return (
    <div className="app">
      <header className="header">
        <h1>BURMALDA</h1>

        <div className="balance">
          Баланс: {balance} ₽
        </div>
      </header>

      <main>
        <section className="hero">
          <h2>Добро пожаловать в Burmalda</h2>
          <p>Выбери игру</p>
        </section>

        <section className="games">
  {games.map((game: any) => (
    <div className="game-card" key={game.id}>
      <h3>{game.icon} {game.name}</h3>
      <p>{game.description}</p>

      <button
        onClick={() => {
          if (game.id === 1) setShowSlots(true)
          if (game.id === 2) setShowRoulette(true)
          if (game.id === 3) setShowBlackjack(true)
        }}
      >
        Играть
      </button>
    </div>
  ))}
</section>
      </main>
    </div>
  )
}

export default App