import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm">
            Copyright &copy; 2025 imada-lab
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              to="/terms"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
