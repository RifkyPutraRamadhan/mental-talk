import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#4a6fa5', color: 'white' }}>
      <h1>MentalTalk</h1>
      <nav>
        <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
        <Link to="/lifestyle" style={{ color: 'white', marginRight: '10px' }}>Lifestyle</Link>
        <Link to="/selfcare" style={{ color: 'white' }}>Self-Care</Link>
      </nav>
    </header>
  );
}

export default Header;