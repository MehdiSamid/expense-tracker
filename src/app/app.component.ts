import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , AddExpenseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Expense-Tracker';
}
