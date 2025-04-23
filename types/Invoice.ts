import { InvoiceStatus } from './InvoiceStatus';

export interface Invoice {
    id: string;
    saleId: string;
    clientId: string;
    issueDate: Date;
    dueDate: Date;
    status: InvoiceStatus;
    generatePDF: () => void;
    sendViaWhatsApp: () => void;
    markAsPaid: () => void;
}