import { Injectable } from '@angular/core';
import { Iincome } from '../interfaces/iincome';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private readonly storageKey = 'incomes'; 

  constructor() {
    const savedIncomes = localStorage.getItem(this.storageKey);
    if (savedIncomes) {
      this.incomes = JSON.parse(savedIncomes);
    }
  }

  incomes: Iincome[] = [
    {
      id: 1,
      name: 'Salary',
      amount: 5000,
      date: new Date('2024-05-09'),
      userId: 1
    },
    {
      id: 2,
      name: 'Freelance Project',
      amount: 1000,
      date: new Date('2024-05-08'),
      userId: 2
    },
  ];

  addIncome(income: Iincome) {
    this.incomes.push(income);
    this.saveIncomesToLocalStorage();
  }

  getIncomes(): Iincome[] {
    return this.incomes;
  }


  
  getOneIncome(idIncome:number): Iincome {
    if (idIncome >= 0 && idIncome < this.incomes.length) {
      return this.incomes[idIncome];
    }
    else{
      return {
        id: 0,
        name: "",
        amount: 0,
        date: new Date(),
        userId: 0
      }
  }
}

  updateIncome(idIncome: number, updatedIncome: Iincome) {
    if (idIncome >= 0 && idIncome < this.incomes.length) {
      this.incomes[idIncome] = updatedIncome;
      this.saveIncomesToLocalStorage();
    }
  }

  deleteIncome(idIncome: number) {
    if (idIncome >= 0 && idIncome < this.incomes.length) {
      this.incomes.splice(idIncome, 1);
      this.saveIncomesToLocalStorage();
    }
  }

  private saveIncomesToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.incomes));
  }
}
