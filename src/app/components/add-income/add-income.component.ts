import { Component } from '@angular/core';
import { IncomeService } from '../../services/income.service';
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
  imports: [CommonModule , ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add-income.component.html',
  styleUrl: './add-income.component.css',
})
export class AddIncomeComponent {

  myForm! : FormGroup;
  constructor(
    private incomeService: IncomeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log(this.incomeService.getAllIncomes());
    this.myForm = this.formBuilder.group({
      id: 0,
      name: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      date: new Date(),
      userId: 0,
    });
  }
  addIncome() {
    if (this.myForm.valid){
      this.incomeService.addIncome(this.myForm.value);
      this.myForm.reset();
    }
  }
}
