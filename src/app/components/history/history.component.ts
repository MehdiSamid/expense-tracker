import { Component } from '@angular/core';
import { IncomeService } from '../../services/income.service';
import { ExpenseService } from '../../services/expense.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  constructor(private incomeService: IncomeService, private expenseService : ExpenseService){
  }
  allFinances : any
  allExpenses : any;
  allIncomes : any;
  ngOnInit(){
    this.getFinances();
  }

  deleteFinance(id : number , item : string){
    if (item === 'expense'){
      this.expenseService.deleteExpense(id);
      this.getFinances();
    }
    else if (item === 'income'){
      this.incomeService.deleteIncome(id)
      this.getFinances();
    }
    else{
      console.log(item)
    }
  }
  getFinances (){
    this.allExpenses=this.expenseService.getAllExpenses().map(expense => this.addType(expense, true));
    this.allIncomes=this.incomeService.getAllIncomes().map(income=> this.addType(income, false));
    this.allFinances = this.allExpenses.concat(this.allIncomes);
    this.allFinances = this.allFinances.sort((a:any, b:any) => {
      console.log("Comparing dates:", a.date, b.date);
      return a.date - b.date;
  });
    console.log(this.allFinances)
  }
  
  private addType(obj: object, isExpense: boolean): object {
    return {
      ...obj,
      type: isExpense ? "expense" : "income"
    };
  }

}
