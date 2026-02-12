import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function App() {
  return (
    <Router>
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
