import { SaleItem } from './SaleItem';
import { Payment } from './Payment';
import { Invoice } from './Invoice';
import { PaymentMethod } from './PaymentMethod';
import { PaymentStatus } from './PaymentStatus';

export interface Sale {
    id: string;
    grocerId: string;
    clientId: string;
    items: SaleItem[];
    subtotal: number;
    tax: number;
    total: number;
    saleDate: Date;
    paymentMethod: PaymentMethod;
    status: PaymentStatus;
    calculateTotal: () => void;
    generateReceipt: () => void;
    completeTransaction: () => void;
    voidTransaction: () => void;
    invoice?: Invoice;
    payments: Payment[];
}