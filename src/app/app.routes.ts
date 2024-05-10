import { Routes } from '@angular/router';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import { UpdateExpenseComponent } from './components/update-expense/update-expense.component';
import { UpdateIncomeComponent } from './components/update-income/update-income.component';

export const routes: Routes = [
    { path:"addexpense",component: AddExpenseComponent},
    { path:"addincome",component: AddIncomeComponent},
    { path:"updateexpense/:id",component:UpdateExpenseComponent},
    { path:"updateincome/:id",component:UpdateIncomeComponent},
    { path: "**", redirectTo: ""}
];
