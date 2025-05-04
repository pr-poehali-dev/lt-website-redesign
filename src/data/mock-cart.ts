
import { CartItem } from '@/types/cart';

// Мок-данные для демонстрации корзины
export const mockCartItems: CartItem[] = [
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
