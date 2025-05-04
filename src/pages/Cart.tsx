
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

// Тип данных для товара в корзине
interface CartItem {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  quantity: number;
  type: 'electronic' | 'paper';
}

// Мок-данные для демонстрации
const initialCartItems: CartItem[] = [
  {
    id: '1',
    title: 'Цветок сакуры',
    coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    price: 399,
    quantity: 1,
    type: 'paper'
  },
  {
    id: '2',
    title: 'Токийский блюз',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    price: 450,
    quantity: 2,
    type: 'electronic'
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  
  // Функция изменения количества товара
  const updateQuantity = (id: string, amount: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };
  
  // Функция удаления товара из корзины
  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  // Расчет итоговой суммы
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Проверка, пуста ли корзина
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="min-h-screen flex flex-col bg-primary-light">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-rounded font-bold text-center mb-8">
          Корзина
        </h1>
        
        {isCartEmpty ? (
          <div className="text-center py-16">
            <div className="mb-6">
              <Icon name="ShoppingCart" size={64} className="mx-auto text-muted-foreground" />
            </div>
            <h3 className="text-xl font-rounded font-medium mb-4">Ваша корзина пуста</h3>
            <p className="text-muted-foreground mb-8">
              Вы пока не добавили ни одной книги в корзину
            </p>
            <Button asChild className="btn-primary">
              <Link to="/books">Вернуться к книгам</Link>
            </Button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Заголовок таблицы корзины (видимый только на desktop) */}
            <div className="hidden md:grid md:grid-cols-12 p-6 text-sm font-medium text-muted-foreground bg-secondary">
              <div className="col-span-6">Товар</div>
              <div className="col-span-2 text-center">Количество</div>
              <div className="col-span-2 text-center">Цена</div>
              <div className="col-span-2 text-center">Всего</div>
            </div>
            
            {/* Элементы корзины */}
            {cartItems.map((item) => (
              <div key={item.id} className="border-b border-border last:border-0">
                <div className="grid md:grid-cols-12 gap-4 p-6">
                  {/* Информация о товаре */}
                  <div className="md:col-span-6 flex gap-4">
                    <div className="w-24 h-32 flex-shrink-0">
                      <img 
                        src={item.coverImage} 
                        alt={item.title} 
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-rounded font-medium">{item.title}</h3>
                      <span className="text-sm text-muted-foreground mb-2">
                        Тип: {item.type === 'electronic' ? 'Электронная книга' : 'Бумажная книга'}
                      </span>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-muted-foreground hover:text-destructive flex items-center gap-1 w-fit mt-auto"
                      >
                        <Trash2 size={14} />
                        <span>Удалить</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Количество (с кнопками + и -) */}
                  <div className="md:col-span-2 flex items-center">
                    <div className="flex items-center border rounded-md">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 hover:bg-muted transition-colors"
                        aria-label="Уменьшить количество"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={16} className={item.quantity <= 1 ? 'text-muted-foreground' : ''} />
                      </button>
                      <span className="px-3 py-1">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 hover:bg-muted transition-colors"
                        aria-label="Увеличить количество"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Цена за единицу */}
                  <div className="md:col-span-2 flex flex-col md:items-center justify-center">
                    <span className="md:hidden text-sm text-muted-foreground">Цена:</span>
                    <span className="font-medium">{item.price} ₽</span>
                  </div>
                  
                  {/* Итоговая цена */}
                  <div className="md:col-span-2 flex flex-col md:items-center justify-center">
                    <span className="md:hidden text-sm text-muted-foreground">Всего:</span>
                    <span className="font-medium">{item.price * item.quantity} ₽</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Итоговая сумма и кнопка оформления заказа */}
            <div className="p-6 bg-secondary">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex justify-between md:justify-start gap-6 mb-2">
                    <span className="font-medium">Итого:</span>
                    <span className="font-rounded font-bold text-lg">{totalPrice} ₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Доставка осуществляется только по почте
                  </p>
                </div>
                <Button asChild className="btn-primary">
                  <Link to="/checkout">Оформить заказ</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Футер */}
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

export default Cart;
