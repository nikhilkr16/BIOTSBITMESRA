import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import './App.css'
import AboutUs from './pages/AboutUs'
import EventCard from './pages/Events'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Team from './pages/Team'

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/home"
            element={<Navigate to="/" />}
          />
          <Route
            path="/gallery"
            element={<Gallery />}
          />
          <Route
            path="/events"
            element={<EventCard />}
          />
          <Route
            path="/team"
            element={<Team />}
          />
          <Route
            path="/aboutus"
            element={<AboutUs />}
          />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
