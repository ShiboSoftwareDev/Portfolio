import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage />}>
            <Route index element={<AboutPage />} />
            <Route path={'projects'} element={<ProjectsPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
