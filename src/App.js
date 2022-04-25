import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, About, Portfolio } from './pages'
import { Nav, Footer } from "./components"

function App() {
  return (

    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
