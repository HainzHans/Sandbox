import { Component } from '@angular/core';

interface CalendarDay {
  date: Date;
  otherMonth: boolean;
  isToday: boolean;
}


@Component({
  selector: 'app-king-size-calendar-component',
  imports: [],
  templateUrl: './king-size-calendar-component.html',
  styleUrl: './king-size-calendar-component.css',
})
export class KingSizeCalendarComponent {

  currentDate = new Date();
  selectedDate: Date | null = null;

  monthYear = '';
  days: CalendarDay[] = [];

  constructor() {
    this.renderCalendar();
  }

  renderCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const firstWeekday = (firstDayOfMonth.getDay() + 6) % 7; // Mo=0
    const daysInMonth = lastDayOfMonth.getDate();

    const prevMonthLastDay = new Date(year, month, 0).getDate();

    this.monthYear = this.currentDate.toLocaleDateString('de-DE', {
      month: 'long',
      year: 'numeric'
    });

    const today = new Date();
    this.days = [];

    // Tage aus Vormonat
    for (let i = firstWeekday - 1; i >= 0; i--) {
      this.days.push({
        date: new Date(year, month - 1, prevMonthLastDay - i),
        otherMonth: true,
        isToday: false
      });
    }

    // Tage im aktuellen Monat
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);

      this.days.push({
        date,
        otherMonth: false,
        isToday:
          date.getDate() === today.getDate() &&
          date.getMonth() === today.getMonth() &&
          date.getFullYear() === today.getFullYear()
      });
    }

    // Tage aus nächstem Monat
    const remaining = this.days.length % 7 === 0 ? 0 : 7 - (this.days.length % 7);

    for (let i = 1; i <= remaining; i++) {
      this.days.push({
        date: new Date(year, month + 1, i),
        otherMonth: true,
        isToday: false
      });
    }
  }

  prevMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
    this.renderCalendar();
  }

  nextMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
    this.renderCalendar();
  }

  selectDay(day: CalendarDay) {
    this.selectedDate = day.date;
    console.log('Selected date:', this.selectedDate);
  }

  isSelected(day: CalendarDay) {
    return (
      this.selectedDate &&
      day.date.getDate() === this.selectedDate.getDate() &&
      day.date.getMonth() === this.selectedDate.getMonth() &&
      day.date.getFullYear() === this.selectedDate.getFullYear()
    );
  }
}

