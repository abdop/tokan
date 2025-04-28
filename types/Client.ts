import { PaymentFrequency } from './PaymentFrequency';
import { Payment } from './Payment';
import { CreditPayment } from './CreditPayment';

export interface Client {
    grocerId: string;
    name: string;
    name_ar: string;
    creditLimit: number;
    creditBalance: number;
    warningThreshold: number;
    paymentDueDate: Date;
    paymentFrequency: PaymentFrequency;
    isActive: boolean;
    updateCreditInfo: () => void;
    recordPurchase: () => void;
    recordPayment: () => void;
    viewBalance: () => void;
    viewPurchaseHistory: () => void;
    payments: Payment[];
    creditPayments: CreditPayment[];
}