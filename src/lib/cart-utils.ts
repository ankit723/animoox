import CryptoJS from 'crypto-js';
import { toast } from 'sonner';

const CART_KEY = 'cart';
const SECRET_KEY = 'your-secret-key'; 

const getCart = (): string[] => {
  if (typeof window === 'undefined') return [];
  const storedCart = localStorage.getItem(CART_KEY);
  return storedCart ? JSON.parse(storedCart) : [];
};

const saveCart = (cart: string[]): void => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const encryptProductId = (productId: string): string => {
  return CryptoJS.AES.encrypt(productId, SECRET_KEY).toString();
};

const decryptProductId = (encryptedId: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedId, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

const isProductInCart = (cart: string[], encryptedId: string): boolean => {
  return cart.some((id) => decryptProductId(id) === decryptProductId(encryptedId));
};

export const addToCart = (productId: string): void => {
  const cart = getCart();

  const encryptedId = encryptProductId(productId);

  if (!isProductInCart(cart, encryptedId)) {
    cart.push(encryptedId);
    saveCart(cart);
    toast.success("Product added to cart");
  } else {
    toast.error("Product is already in the cart");
  }
};

export const getCartItems = (): string[] => {
  const cart = getCart();
  return cart.map((id) => decryptProductId(id));
};

export const removeFromCart = (productId: string): void => {
  const cart = getCart();

  const encryptedId = encryptProductId(productId);

  const updatedCart = cart.filter((id) => id !== encryptedId);
  saveCart(updatedCart);
};

export const clearCart = (): void => {
  localStorage.removeItem(CART_KEY);
};

export const isInCart = (productId: string): boolean => {
  const cart = getCart();
  const encryptedId = encryptProductId(productId);
  return cart.includes(encryptedId);
};
