export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    password: string;
    userType: string;
    createdAt: Date;
    authenticate: () => boolean;
    updateProfile: () => void;
}