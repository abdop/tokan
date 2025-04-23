export interface CreditPayment {
    id: string;
    clientId: string;
    amount: number;
    paymentDate: Date;
    updateClientBalance: () => void;
    generateReceipt: () => void;
}