import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import IntroAnimation from './components/IntroAnimation.jsx'
import IntroGuide from './components/guide/IntroGuide.jsx'
import IntroGuide2 from './components/guide/IntroGuide2.jsx'
import IntroGuide3 from './components/guide/IntroGuide3.jsx'
import Login from './components/Login.jsx'
import "./style/main.sass"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IntroAnimation />} />
          <Route path="/guide" element={<IntroGuide />} />
          <Route path="/guide2" element={<IntroGuide2 />} />
          <Route path="/guide3" element={<IntroGuide3 />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
