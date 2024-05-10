import { Routes } from '@angular/router';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import { UpdateExpenseComponent } from './components/update-expense/update-expense.component';
import { UpdateIncomeComponent } from './components/update-income/update-income.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


  export const routes: Routes = [
  { path:"addexpense",component: AddExpenseComponent},
  { path:"addincome",component: AddIncomeComponent},
  { path:"updateexpense/:id",component:UpdateExpenseComponent},
  { path:"updateincome/:id",component:UpdateIncomeComponent},
  { path: "**", redirectTo: ""},
  {path:"login",component: LoginComponent},
  {path:"",component: LoginComponent},
  {path:"signup",component: SignupComponent},
  {path:"test",component: AddExpenseComponent},
  {path:"test2",component: AddIncomeComponent},


];
