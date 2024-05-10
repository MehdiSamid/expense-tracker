import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../shared/enums/category';

@Component({
  selector: 'app-update-expense',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './update-expense.component.html',
  styleUrl: './update-expense.component.css'
})
export class UpdateExpenseComponent {
  myForm! : FormGroup;
  constructor(
    private expenseService: ExpenseService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}
  i: number = 0;
  submitted: boolean = false;
  categories = Object.keys(Category).filter(k => typeof Category[k as any] === "number");
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.i = parseInt(params['id']);
      this.myForm = this.formBuilder.group({
        id: this.i,
        name: [this.expenseService.getExpenseById(this.i)?.name, [Validators.required]],
        amount: [this.expenseService.getExpenseById(this.i)?.amount, [Validators.required]],
        category :[this.expenseService.getExpenseById(this.i)?.category, [Validators.required]],
        date: new Date(),
        userId: 0,
      });
    });
  }
  updatExpense() {
    if (this.myForm.valid){
      this.submitted=true;
      this.expenseService.updateExpense(this.myForm.value);
    }
  }
}
