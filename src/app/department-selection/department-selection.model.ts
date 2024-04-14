import { IDepartment } from "../services/department.model";

export interface IDepartmentSelection extends IDepartment {
    isSelected:  boolean;
}