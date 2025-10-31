import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import IntroAnimation from './components/IntroAnimation.jsx'
import IntroGuide from './components/guide/IntroGuide.jsx'
import IntroGuide2 from './components/guide/IntroGuide2.jsx'
import IntroGuide3 from './components/guide/IntroGuide3.jsx'
import NewsHome from "./components/news/NewsHome.jsx"
import NewsAchive from "./components/news/NewsAchive.jsx"
import NewsPopular from "./components/news/NewsPopular.jsx"
import Login from './components/Login.jsx'
import Settings from "./components/Settings.jsx"
import "./style/main.sass"

function applyAllSwitchStates() {
  try {
    const raw = localStorage.getItem("switchStates");
    const states = raw ? JSON.parse(raw) : {};
    if (!states || typeof states !== "object") return;
    Object.keys(states).forEach((k) => {
      const els = document.querySelectorAll(`[data-title="${k}"]`);
      els.forEach((el) => {
        if (states[k]) {
          el.style.removeProperty("display");
        } else {
          el.style.setProperty("display", "none", "important");
        }
      });
    });
  } catch (err) {
    console.error("applyAllSwitchStates error:", err);
  }
}

function App() {

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const darkMode = savedMode ? JSON.parse(savedMode) : false;
    document.body.classList.toggle("dark", darkMode);
  }, []);

  useEffect(() => {
  applyAllSwitchStates();

  const timer = setTimeout(applyAllSwitchStates, 300);

  const onStorage = (e) => {
    if (e.key === "switchStates") applyAllSwitchStates();
  };
  window.addEventListener("storage", onStorage);

  return () => {
    clearTimeout(timer);
    window.removeEventListener("storage", onStorage);
  };
}, []);


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IntroAnimation />} />
          <Route path="/guide" element={<IntroGuide />} />
          <Route path="/guide2" element={<IntroGuide2 />} />
          <Route path="/guide3" element={<IntroGuide3 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<NewsHome />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/achive" element={<NewsAchive />} />
          <Route path="/popular" element={<NewsPopular />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
