import { Injectable } from '@angular/core';
import { IIncome } from '../interfaces/iincome';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  private readonly storageKey = 'incomes';
  incomes: IIncome[] = [    {
    id: 1,
    name: 'Salary',
    amount: 3000,
    date: new Date('2024-05-01'),
    userId: 1
  },
  {
    id: 2,
    name: 'Freelance Work',
    amount: 500,
    date: new Date('2024-05-05'),
    userId: 2
  }];

  constructor() {
    this.loadIncomesFromLocalStorage();
  }

  private loadIncomesFromLocalStorage(): void {
    try {
      const savedIncomes = localStorage.getItem(this.storageKey);
      if (savedIncomes) {
        this.incomes = JSON.parse(savedIncomes);
      }
    } catch (error) {
      console.error('Error loading incomes from localStorage:', error);
    }
  }

  private saveIncomesToLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.incomes));
  }

  private getNextId(): number {
    return this.incomes.length > 0 ? Math.max(...this.incomes.map(income => income.id)) + 1 : 1;
  }

  getAllIncomes(): IIncome[] {
    return this.incomes;
  }

  getIncomeById(id: number): IIncome | undefined {
    return this.incomes.find(income => income.id === id);
  }
   
  getdate() : Date[]{
    return this.incomes.map(income => income.date);
  }

  addIncome(income: IIncome): void {
    income.id = this.getNextId();
    this.incomes.push(income);
    this.saveIncomesToLocalStorage();
  }

  updateIncome(updatedIncome: IIncome): void {
    const index = this.incomes.findIndex(income => income.id === updatedIncome.id);
    if (index !== -1) {
      this.incomes[index] = updatedIncome;
      this.saveIncomesToLocalStorage();
    }
  }

  deleteIncome(id: number): void {
    const index = this.incomes.findIndex(income => income.id === id);
    if (index !== -1) {
      this.incomes.splice(index, 1);
      this.saveIncomesToLocalStorage();
    }
  }
}
