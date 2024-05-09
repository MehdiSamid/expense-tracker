import { Component } from '@angular/core';
import { Iincome } from '../../interfaces/iincome';
import { IncomeService } from '../../services/income.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-income',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add-income.component.html',
  styleUrl: './add-income.component.css',
})
export class AddIncomeComponent {
 

  incomes: Iincome[] = [];
  myForm!: FormGroup;

  constructor(
    private incomeService: IncomeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log(this.incomeService.getIncomes());
    this.myForm = this.formBuilder.group({
      id: 0,
      name: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      date: new Date(),
      userId: 0,
    });
  }

  remove(indexRemove: number) {
    console.log(indexRemove);
    this.incomeService.deleteIncome(indexRemove);
  }

  edit(indexUpdate: number) {
    // this.router.navigate(["updateArticle/"+indexUpdate])
  }

  add() {
    if (this.myForm.valid) {
      this.incomeService.addIncome(this.myForm.value);
      this.myForm.reset();
    }
  }
}
