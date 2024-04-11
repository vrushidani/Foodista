import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/model/Food';
import { CartItem } from '../shared/model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cart : Cart = new Cart();
  private cartSubject : BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  // Add to cart method
  addToCart(food : Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if(cartItem)
    return;
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage()
  }

  //Remove from Cart
  removeFromCart(foodId: string){
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId:string, quantity:number){
    let cartItem = this.cart.items.find(item=> item.food.id === foodId);
    if(!cartItem)
    return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  //get cart observable
  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  //now set localstorage data
  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem)=>prevSum + currentItem.price , 0)
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem)=>prevSum + currentItem.quantity , 0)
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('cart',cartJson)
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('cart');
    return cartJson?JSON.parse(cartJson):new Cart();
  }
}


