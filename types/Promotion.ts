import { PromotionType } from './PromotionType';

export interface Promotion {
    id: string;
    grocerId: string;
    title: string;
    title_ar: string;
    description: string;
    description_ar: string;
    startDate: Date;
    endDate: Date;
    type: PromotionType;
    productIds: string[];
    discountValue: number;
    isActive: boolean;
    createPromotion: () => void;
    publishPromotion: () => void;
    unpublishPromotion: () => void;
    editPromotion: () => void;
    updateLocalization: () => void;
    getLocalizedTitle: (language: string) => string;
    getLocalizedDescription: (language: string) => string;
}