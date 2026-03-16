import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TaskResult {
  date: Date;
  title: string;
  result: 'richtig' | 'falsch';
  isSolutionOfDay: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  streak: number;
  correct: number;
  isCurrentUser: boolean;
}

@Component({
  selector: 'app-user-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-home-page.html',
  styleUrl: './user-home-page.css',
})
export class UserHomePage implements OnInit {

  userName = 'Leon';

  // ── Task history (sorted newest first) ──────────────────
  taskHistory: TaskResult[] = [
    { date: new Date(2025, 6, 10), title: '1. Aufgabe', result: 'richtig', isSolutionOfDay: true  },
    { date: new Date(2025, 6, 9),  title: '2. Aufgabe', result: 'richtig', isSolutionOfDay: false },
    { date: new Date(2025, 6, 8),  title: '3. Aufgabe', result: 'richtig', isSolutionOfDay: false },
    { date: new Date(2025, 6, 7),  title: '4. Aufgabe', result: 'richtig', isSolutionOfDay: false },
    { date: new Date(2025, 6, 6),  title: '5. Aufgabe', result: 'falsch',  isSolutionOfDay: false },
    { date: new Date(2025, 6, 5),  title: '6. Aufgabe', result: 'richtig', isSolutionOfDay: false },
    { date: new Date(2025, 6, 4),  title: '7. Aufgabe', result: 'richtig', isSolutionOfDay: false },
    { date: new Date(2025, 6, 3),  title: '8. Aufgabe', result: 'falsch',  isSolutionOfDay: false },
    { date: new Date(2025, 6, 2),  title: '9. Aufgabe', result: 'richtig', isSolutionOfDay: true  },
    { date: new Date(2025, 6, 1),  title: '10. Aufgabe', result: 'richtig', isSolutionOfDay: false },
  ];

  // ── Computed stats ───────────────────────────────────────
  get totalTasks()   { return this.taskHistory.length; }
  get correctCount() { return this.taskHistory.filter(t => t.result === 'richtig').length; }
  get wrongCount()   { return this.taskHistory.filter(t => t.result === 'falsch').length; }
  get accuracyPct()  { return this.totalTasks > 0 ? Math.round((this.correctCount / this.totalTasks) * 100) : 0; }

  // Streak: count consecutive 'richtig' from most recent, broken on first 'falsch'
  get currentStreak() {
    let streak = 0;
    for (const t of this.taskHistory) {
      if (t.result === 'richtig') streak++;
      else break;
    }
    return streak;
  }

  get maxStreak() {
    let best = 0, current = 0;
    for (const t of [...this.taskHistory].reverse()) {
      if (t.result === 'richtig') { current++; best = Math.max(best, current); }
      else current = 0;
    }
    return best;
  }

  // ── Motivational quote ───────────────────────────────────
  readonly quotes = [
    { text: 'Der Markt belohnt Geduld und bestraft Ungeduld.', author: 'Warren Buffett' },
    { text: 'Risikomanagement ist nicht optional – es ist das Fundament.', author: 'Paul Tudor Jones' },
    { text: 'Jeder Trade ist eine Lektion. Lerne täglich.', author: 'Jesse Livermore' },
    { text: 'Disziplin schlägt Intelligenz im Trading jeden Tag.', author: 'Ed Seykota' },
    { text: 'Der beste Trade ist manchmal kein Trade.', author: 'Bruce Kovner' },
  ];
  todayQuote = this.quotes[new Date().getDay() % this.quotes.length];

  // ── Leaderboard ──────────────────────────────────────────
  leaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'Leon Müller',     avatar: 'L', streak: 4,  correct: 8,  isCurrentUser: true  },
    { rank: 2, name: 'Julia Schneider', avatar: 'J', streak: 3,  correct: 7,  isCurrentUser: false },
    { rank: 3, name: 'Max Becker',      avatar: 'M', streak: 2,  correct: 6,  isCurrentUser: false },
    { rank: 4, name: 'Sarah Koch',      avatar: 'S', streak: 1,  correct: 5,  isCurrentUser: false },
    { rank: 5, name: 'Tom Wagner',      avatar: 'T', streak: 0,  correct: 4,  isCurrentUser: false },
    { rank: 6, name: 'Anna Brandt',     avatar: 'A', streak: 0,  correct: 3,  isCurrentUser: false },
  ];

  // ── Week heatmap (last 7 days) ───────────────────────────
  weekDays: { label: string; result: 'richtig' | 'falsch' | 'offen' | 'future' }[] = [];

  ngOnInit() {
    this.buildWeekDays();
  }

  buildWeekDays() {
    const today = new Date();
    const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    this.weekDays = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - (6 - i));
      d.setHours(0, 0, 0, 0);
      const isToday = i === 6;
      const isFuture = d > today;
      const match = this.taskHistory.find(t => {
        const td = new Date(t.date); td.setHours(0, 0, 0, 0);
        return td.getTime() === d.getTime();
      });
      return {
        label: days[d.getDay() === 0 ? 6 : d.getDay() - 1],
        result: isFuture ? 'future' : match ? match.result : 'offen',
      };
    });
  }

  formatDate(d: Date) {
    return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' });
  }

  getRankMedal(rank: number): string {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `${rank}.`;
  }
}
