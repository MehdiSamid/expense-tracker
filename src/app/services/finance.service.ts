import { Injectable } from '@angular/core';
import { IncomeService } from './income.service';
import { ExpenseService } from './expense.service';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private incomeService: IncomeService, private expenseService : ExpenseService){
  }
  private allFinances : any;
  private allExpenses : any;
  private allIncomes : any;

  getFinances (){
    this.allExpenses=this.expenseService.getAllExpenses().map(expense => this.addType(expense, true));
    this.allIncomes=this.incomeService.getAllIncomes().map(income=> this.addType(income, false));
    this.allFinances = this.allExpenses.concat(this.allIncomes);

    //Todo : Sort by date
    this.allFinances = this.allFinances.sort((a:any, b:any) => {
      console.log("Comparing dates:", a.date, b.date);
      return a.date - b.date;
  });
  
    return this.allFinances
  }

  private addType(obj: object, isExpense: boolean): object {
    return {
      ...obj,
      type: isExpense ? "expense" : "income"
    };
  }
}
