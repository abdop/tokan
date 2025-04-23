export interface SaleItem {
    productId: string;
    productName: string;
    unitPrice: number;
    quantity: number;
    discount: number;
    total: number;
    calculateTotal: () => void;
}