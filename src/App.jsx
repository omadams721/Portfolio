import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <Home />
          </>
        } />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  )
}

export default App
