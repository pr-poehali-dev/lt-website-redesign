
// Тип данных для товара в корзине
export interface CartItem {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  quantity: number;
  type: 'electronic' | 'paper';
}
