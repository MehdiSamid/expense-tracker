import { Category } from "../shared/enums/category";

export interface IExpense {
    name : string,
    amount : number,
    date : Date,
    category : Category,
    user : number,
}
