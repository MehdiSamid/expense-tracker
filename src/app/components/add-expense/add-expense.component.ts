import { Component } from '@angular/core';
import { Category } from '../../shared/enums/category';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent{
  myForm! : FormGroup;
  constructor(private expenseService : ExpenseService, private formBuilder: FormBuilder  ){}
  ngOnInit(): void {
    console.log(this.expenseService.getAllExpenses());
    this.myForm= this.formBuilder.group({ 
      id: 0,
      name: [null,[Validators.required]],
      amount: [null,[Validators.required]],
      category: [null,[Validators.required]],
      date: new Date,
      user: 0
    });
  }
  categories = Object.keys(Category).filter(k => typeof Category[k as any] === "number");
  addExpense() {
    if (this.myForm.valid){
      this.expenseService.addExpense(this.myForm.value);
      this.myForm.reset();
    }
  }
}
