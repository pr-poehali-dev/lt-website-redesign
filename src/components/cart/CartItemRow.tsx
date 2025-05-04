
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem } from '@/types/cart';

interface CartItemRowProps {
  item: CartItem;
  updateQuantity: (id: string, amount: number) => void;
  removeItem: (id: string) => void;
}

const CartItemRow = ({ item, updateQuantity, removeItem }: CartItemRowProps) => {
  return (
    <div className="border-b border-border last:border-0">
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
  );
};

export default CartItemRow;
