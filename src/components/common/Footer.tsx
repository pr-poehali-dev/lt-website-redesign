
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">
            Сайт LT - истории, написанные с любовью
          </p>
          <div className="flex justify-center space-x-4 text-sm text-gray-600">
            <Link to="/privacy" className="hover:text-primary-dark transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="hover:text-primary-dark transition-colors">
              Условия использования
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            © L.T. {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
