
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getGamesMock } from '../mocks/games'

type Game = {
  id: number
  name: string
  icon: string
  description: string
}

function HomePage() {
  const [games, setGames] = useState<Game[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getGamesMock()
      .then((data) => {
        setGames(data as Game[])
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <h2>Загрузка...</h2>
  }

  return (
    <>
      <section className="hero">
        <h2>Добро пожаловать в Burmalda</h2>
        <p>Выбери игру</p>
      </section>

      <section className="games">
        {games.map((game) => (
          <div className="game-card" key={game.id}>
            <h3>{game.icon} {game.name}</h3>
            <p>{game.description}</p>
            <Link to={`/games/${game.id}`}>Подробнее</Link>
            <br />
            <Link to={`/games/${game.id}/play`}>Играть</Link>
          </div>
        ))}
      </section>
    </>
  )
}

export default HomePage
