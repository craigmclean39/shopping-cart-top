import React from 'react';
import { Order } from '../types';

export type OrderContextType = {
  order: Order;
  updateOrder: (updatedOrder: Order) => void;
};

export const OrderContext = React.createContext<OrderContextType | null>(null);
