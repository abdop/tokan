import { User } from './User';
import { BusinessHours } from './BusinessHours';
import { Product } from './Product';
import { Client } from './Client';
import { Staff } from './Staff';
import { Sale } from './Sale';
import { Promotion } from './Promotion';

export interface Grocer extends User {
    storeId: string;
    storeName: string;
    storeName_ar: string;
    storeAddress: string;
    storeAddress_ar: string;
    logo: string;
    businessHours: BusinessHours;
    defaultLanguage: string;
    createStore: () => void;
    updateStore: () => void;
    manageInventory: () => void;
    manageSales: () => void;
    managePromotions: () => void;
    manageClients: () => void;
    updateStoreLocalization: () => void;
}