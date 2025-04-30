import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Order {
  id: number;
  name: string;
  image: string;
  description: string;
  newPrice: number;
  price: number;
  quantity: number;
}

interface OrdersContextType {
  orders: Order[];
  addOrder: (order: Order[] | Order[]) => void;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

interface OrdersProviderProps {
    children: ReactNode; 
  }
export const OrdersProvider: React.FC<OrdersProviderProps> = ({ children }) => {
    const [orders, setOrders] = useState<Order[]>(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const addOrder = (order: Order | Order[]) => {
    setOrders((prevOrders) => {
      const newOrders = Array.isArray(order) ? order : [order]
      const updatedOrders = [...prevOrders, ...newOrders];
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      return updatedOrders;
    });
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
};


