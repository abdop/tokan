export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    password: string;
    userType: string;
    preferredLanguage: string;
    createdAt: Date;
    authenticate: () => boolean;
    updateProfile: () => void;
    setLanguagePreference: () => void;
}