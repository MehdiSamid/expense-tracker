import { Component } from '@angular/core';
import { IncomeService } from '../../services/income.service';
import { ExpenseService } from '../../services/expense.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FinanceService } from '../../services/finance.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  constructor(private incomeService: IncomeService, private expenseService : ExpenseService,private financeService : FinanceService){
  }
  allFinances : any;
  ngOnInit(){
    this.allFinances = this.financeService.getFinances();
  }

  deleteFinance(id : number , item : string){
    if (item === 'expense'){
      this.expenseService.deleteExpense(id);
      this.allFinances = this.financeService.getFinances();
     }
    else if (item === 'income'){
      this.incomeService.deleteIncome(id)
      this.allFinances = this.financeService.getFinances();
    }
    else{
      console.log(item)
    }
  }
}
