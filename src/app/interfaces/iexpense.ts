import { Category } from "../shared/enums/category";

export interface IExpense {
    id: number,
    name : string,
    amount : number,
    date : Date,
    category : Category,
    user : number,
}
