import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/enums/category';
import { CommonModule } from '@angular/common';
import { IExpense } from '../../interfaces/iexpense';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent implements OnInit{
  constructor(private expenseService : ExpenseService ){}
  ngOnInit(): void {
    console.log(this.expenseService.getAllExpenses());
    // console.log(this.expenseService.getExpenseById(2));
    // this.expenseService.deleteExpense(10)
    // this.expenseService.updateExpense({
    //   id: 4,
    //   name: '',
    //   amount: 0,
    //   date: new Date,
    //   category: Category.Food,
    //   user: 0
    // });
  }
  categories = Object.keys(Category).filter(k => typeof Category[k as any] === "number");
  expense : IExpense = {
    id: 0,
    name: '',
    amount: 0,
    date: new Date,
    category: Category.Food,
    user: 0
  }
  Clear(){
    this.expense= {
      id: 0,
      name: '',
      amount: 0,
      date: new Date,
      category: Category.Food,
      user: 0
    }
  }
  addExpense() {
    this.expenseService.addExpense(this.expense)
    this.Clear()
  }
}
