import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  id: number;
  name: string;
  image: string;
  description: string;
  newPrice: number;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  updateCart: (updatedCart: CartItem[]) => void;
  totalPrice: number
}

interface CartProviderProps {
  children: ReactNode;  
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product: CartItem) => {
    const newCart = [...cart, {...product, quantity: 1}];
    setCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const removeFromCart = (productId: number) => {
    const newCart = cart.filter(item => item.id !== productId);
    setCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    const newCart = cart.map(item => {
        if(item.id === productId){
            return {...item, quantity: Math.max(quantity, 1)}
        }
        return item
    })

    
    
    setCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  }
  
  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  
  const totalPrice = cart.reduce((total, item) => total + item.newPrice * (item.quantity || 1), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, updateCart, totalPrice }}>
      {children} 
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart должен быть внутри CartProvider");
  }
  return context;
};
