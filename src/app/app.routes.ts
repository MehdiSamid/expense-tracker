import { Routes } from '@angular/router';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { AddIncomeComponent } from './components/add-income/add-income.component';

export const routes: Routes = [
    {path:"test",component: AddExpenseComponent},
    {path:"test2",component: AddIncomeComponent},
];
