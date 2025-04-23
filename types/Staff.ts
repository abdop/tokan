import { Permission } from './Permission';

export interface Staff {
    grocerId: string;
    role: string;
    permissions: Permission[];
    processSales: () => void;
    recordPayments: () => void;
    viewReports: () => void;
}