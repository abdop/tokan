export interface Product {
    id: string;
    grocerId: string;
    name: string;
    name_ar: string;
    description: string;
    description_ar: string;
    barcode: string;
    category: string;
    category_ar: string;
    price: number;
    stock: number;
    image: string;
    isActive: boolean;
    updatePrice: () => void;
    updateStock: () => void;
    toggleActive: () => void;
    updateLocalization: () => void;
    getLocalizedName: (language: string) => string;
    getLocalizedDescription: (language: string) => string;
    getLocalizedCategory: (language: string) => string;
}