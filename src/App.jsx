import './assets/css/app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* tambahkan Route lainnya di sini */}
        </Routes>
      </Router>
    </>
  )
  
}

export default App
