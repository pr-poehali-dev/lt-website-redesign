
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookProps {
  id: string;
  title: string;
  coverImage: string;
  price: number;
}

const BookCard = ({ id, title, coverImage, price }: BookProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="book-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        
        {/* Overlay on hover */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 flex flex-col justify-end p-4 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-white font-rounded font-bold text-lg mb-2">{title}</h3>
          <div className="flex justify-between items-center">
            <span className="text-white font-rounded">{price} ₽</span>
            <div className="flex space-x-2">
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-white bg-opacity-90 hover:bg-white rounded-full p-2 h-8 w-8"
                title="Добавить в избранное"
              >
                <Heart size={16} className="text-primary-dark" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-white bg-opacity-90 hover:bg-white rounded-full p-2 h-8 w-8"
                title="Добавить в корзину"
              >
                <ShoppingCart size={16} className="text-primary-dark" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <Link to={`/books/${id}`} className="btn-primary text-sm inline-block">
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
