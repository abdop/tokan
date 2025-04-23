import { PromotionType } from './PromotionType';

export interface Promotion {
    id: string;
    grocerId: string;
    title: string;
    description: string;
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
}