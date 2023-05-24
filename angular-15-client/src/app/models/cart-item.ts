import {ShoppingCart} from './shopping-cart';
import {Book} from './Book';

export class CartItem {
  public id: number = -1;
  public quantity: number = -1;
  public subtotal: number | undefined;
  public book: Book = new Book;
  public shoppingCart: ShoppingCart | undefined
  public toUpdate: boolean | undefined;
}
