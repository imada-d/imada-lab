import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            imada-lab
          </Link>
          <div className="flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              サービス
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
