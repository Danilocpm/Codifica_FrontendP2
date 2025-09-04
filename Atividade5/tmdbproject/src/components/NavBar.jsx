import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-custom-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">TMDB</Link>
        <div>
          <Link to="/favorites" className="text-white hover:text-custom-red">Favorites</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
