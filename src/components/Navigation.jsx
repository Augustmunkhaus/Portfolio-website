import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              Home
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`text-lg font-medium transition-colors ${
                isActive('/')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/cv"
              className={`text-lg font-medium transition-colors ${
                isActive('/cv')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              CV
            </Link>
            <Link
              to="/hobbies"
              className={`text-lg font-medium transition-colors ${
                isActive('/hobbies')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Hobbies
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
