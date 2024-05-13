import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IncomeService } from '../../services/income.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  isClicked? : boolean;
  incomesDate?: Date;
  @Input() selectedDate: Date = new Date();

  constructor(private incomeService : IncomeService) {
    
  }
  ngOnInit(){
    console.log(this.incomeService.getdate());
    if (!this.selectedDate) {
      this.selectedDate = new Date(); // Default to current date if not provided
    }
    this.isClicked= false;
    console.log(this.incomeService.getAllIncomes());
  }

  toggleMenu() {
    this.isClicked = !this.isClicked; // Toggle the value of isClicked
  }



  goToPreviousMonth() {
    this.selectedDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() - 1, 1);
  }

  goToNextMonth() {
    this.selectedDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1, 1);
  }

  isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this.selectedDate.getMonth() && date.getFullYear() === this.selectedDate.getFullYear();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  }

  get daysInMonth(): { day: number, date: Date }[] {
    const year = this.selectedDate.getFullYear();
    const month = this.selectedDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days: { day: number, date: Date }[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, date: new Date(year, month, i) });
    }
    return days;
  }

  getEventsForDay(date: Date): string[] {
    return ['Event 1', 'Event 2']; 
  }
}

/*
  
*/