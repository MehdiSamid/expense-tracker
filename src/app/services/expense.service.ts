import { Injectable } from '@angular/core';
import { IExpense } from '../interfaces/iexpense';
import { Category } from '../shared/enums/category';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private readonly storageKey = 'expenses';

  constructor() {
    const savedExpenses = localStorage.getItem(this.storageKey);
    if (savedExpenses) {
      this.expenses = JSON.parse(savedExpenses);
    }
  }
  expenses: IExpense[] = [
    {
      id: 1,
      name: 'Groceries',
      amount: 50,
      date: new Date('2024-05-09'),
      category: Category.Food,
      user: 1
    },
    {
      id:2,
      name: 'Gasoline',
      amount: 40,
      date: new Date('2024-05-08'),
      category: Category.Transportation,
      user: 2
    },
  ];
  private saveExpensesToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.expenses));
  }
  private getNextId(): number {
    return this.expenses.length > 0 ? Math.max(...this.expenses.map(expense => expense.id)) + 1 : 1;
  }
  getAllExpenses(): IExpense[] {
    return this.expenses;
  }
  getExpenseById(id: number): IExpense | undefined{
    return this.expenses.find(expense => expense.id === id);
  }
  addExpense(expense: IExpense): void {
    expense.id = this.getNextId();
    this.expenses.push(expense);
    this.saveExpensesToLocalStorage();
  }
  updateExpense(updatedExpense: IExpense): void {
    const index = this.expenses.findIndex(expense => expense.id === updatedExpense.id);
    if (index !== -1) {
      this.expenses[index] = updatedExpense;
      this.saveExpensesToLocalStorage();
    }
  }
  deleteExpense(id: number): void {
    const index = this.expenses.findIndex(expense => expense.id === id);
    if (index !== -1) {
      this.expenses.splice(index, 1);
      this.saveExpensesToLocalStorage();
    }
  }
}
