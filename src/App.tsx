
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PlayPage from './pages/PlayPage'
import HistoryPage from './pages/HistoryPage'
import StatsPage from './pages/StatsPage'
import NotFoundPage from './pages/NotFoundPage'
import Slots from './Slots'
import Roulette from './Roulette'
import Blackjack from './Blackjack'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="games" element={<HomePage />} />

          <Route path="games/1" element={<Slots />} />
          <Route path="games/2" element={<Roulette />} />
          <Route path="games/3" element={<Blackjack />} />

          <Route path="games/1/play" element={<Slots />} />
          <Route path="games/2/play" element={<Roulette />} />
          <Route path="games/3/play" element={<Blackjack />} />

          <Route path="play" element={<PlayPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="stats" element={<StatsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
