
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/common/Footer';
import EmptyCart from '@/components/cart/EmptyCart';
import CartItemRow from '@/components/cart/CartItemRow';
import CartSummary from '@/components/cart/CartSummary';
import { CartItem } from '@/types/cart';
import { mockCartItems } from '@/data/mock-cart';

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);
  
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
          <EmptyCart />
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
              <CartItemRow 
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
            
            {/* Итоговая сумма и кнопка оформления заказа */}
            <CartSummary totalPrice={totalPrice} />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
