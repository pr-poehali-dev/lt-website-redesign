
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CartSummaryProps {
  totalPrice: number;
}

const CartSummary = ({ totalPrice }: CartSummaryProps) => {
  return (
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
  );
};

export default CartSummary;
