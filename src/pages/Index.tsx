
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';

// Mock data for books
const booksData = [
  {
    id: '1',
    title: 'Цветок сакуры',
    coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    price: 399
  },
  {
    id: '2',
    title: 'Токийский блюз',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    price: 450
  },
  {
    id: '3',
    title: 'Ночные огни',
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    price: 350
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-sakura bg-cover bg-center py-28">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-white font-rounded text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-float">
            桜は永遠に咲く
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Добро пожаловать в мир LT - истории, написанные с любовью
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link to="/books">Смотреть книги</Link>
          </Button>
        </div>
      </section>
      
      {/* Books Section */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-rounded font-bold text-center mb-12">
            Книги Лолиты Тоуч
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {booksData.map((book) => (
              <BookCard 
                key={book.id}
                id={book.id}
                title={book.title}
                coverImage={book.coverImage}
                price={book.price}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/books">Все книги</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
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
    </div>
  );
};

export default Index;
