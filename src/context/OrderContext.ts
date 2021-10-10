import React from 'react';
import { Order } from '../types';
export const userOrder: Order = { items: [] };
export const OrderContext = React.createContext(userOrder);
