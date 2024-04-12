import { IDepartment } from "./department.model";

export interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    department: IDepartment
}