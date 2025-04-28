import { ReportType } from './ReportType';

export interface Report {
    grocerId: string;
    type: ReportType;
    startDate: Date;
    endDate: Date;
    parameters: Record<string, any>; // Using Record<string, any> for generic parameters
    generateReport: () => void;
    exportToPDF: () => void;
    exportToCSV: () => void;
    updateParameters: (newParameters: Record<string, any>) => void;
    getReportType: () => ReportType;
}