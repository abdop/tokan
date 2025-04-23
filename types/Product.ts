export interface Product {
    id: string;
    grocerId: string;
    name: string;
    description: string;
    barcode: string;
    category: string;
    price: number;
    stock: number;
    image: string;
    isActive: boolean;
    updatePrice: () => void;
    updateStock: () => void;
    toggleActive: () => void;
}