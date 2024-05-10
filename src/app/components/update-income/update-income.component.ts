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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-income',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './update-income.component.html',
  styleUrl: './update-income.component.css'
})
export class UpdateIncomeComponent {

  myForm! : FormGroup;
  constructor(
    private incomeService: IncomeService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}
  i: number = 0;
  submitted: boolean = false
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.i = parseInt(params['id']);
      this.myForm = this.formBuilder.group({
        id: this.i,
        name: [this.incomeService.getIncomeById(this.i)?.name, [Validators.required]],
        amount: [this.incomeService.getIncomeById(this.i)?.amount, [Validators.required]],
        date: new Date(),
        userId: 0,
      });
    });
  }
  updateIncome() {
    if (this.myForm.valid){
      this.submitted=true;
      this.incomeService.updateIncome(this.myForm.value);
    }
  }
}
