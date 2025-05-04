
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const EmptyCart = () => {
  return (
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
  );
};

export default EmptyCart;
