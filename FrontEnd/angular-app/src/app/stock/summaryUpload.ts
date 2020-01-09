import { Company } from './company';

export interface SummaryUpload {
    company:Company;
    record:number;
    stockExchange:string;
    startDate:Date;
    endDate:Date;

}