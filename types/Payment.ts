import { PaymentMethod } from './PaymentMethod';

export interface Payment {
    id: string;
    saleId: string;
    clientId: string;
    method: PaymentMethod;
    amount: number;
    paymentDate: Date;
    reference: string;
    recordPayment: () => void;
    getReceipt: () => void;
}