import { Component } from '@angular/core';
import { Iincome } from '../../interfaces/iincome';
import { IncomeService } from '../../services/income.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-income',
  standalone: true,
  imports: [],
  templateUrl: './add-income.component.html',
  styleUrl: './add-income.component.css'
})
export class AddIncomeComponent {

  incomes: Iincome[] = [];

  constructor(private incomeService: IncomeService, private router:Router) {}

  ngOnInit() {
    this.incomes = this.incomeService.getIncomes();
    console.log(this.incomes);
  }

  remove(indexRemove: number) {
    console.log(indexRemove);
    this.incomeService.deleteIncome(indexRemove);
    }

  edit(indexUpdate: number) {
    this.router.navigate(["updateArticle/"+indexUpdate])
  }



}
