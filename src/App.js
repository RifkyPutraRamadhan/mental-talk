import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lifestyle from './pages/Lifestyle';
import SelfCare from './pages/SelfCare';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/selfcare" element={<SelfCare />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;