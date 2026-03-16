import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import {Select} from 'primeng/select';

export type TaskStatus = 'aktiv' | 'abgelaufen';
export type SubmissionResult = 'richtig' | 'falsch' | 'offen';

export interface Submission {
  id: number;
  userName: string;
  userAvatar: string;
  submittedAt: string;
  imageUrl: string;
  userNote: string;
  result: SubmissionResult;
  adminNote: string;
  editingNote: boolean;
  isSolutionOfDay: boolean;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  createdAtDate: Date;
  status: TaskStatus;
  submissions: Submission[];
  expanded: boolean;
}

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    TextareaModule,
    TagModule,
    ToastModule,
    TooltipModule,
    InputTextModule,
    Select,
  ],
  providers: [MessageService],
  templateUrl: './admin-tasks-page.html',
  styleUrl: './admin-tasks-page.css',
})
export class AdminTasksPage {

  activeTab = signal<'aktiv' | 'vergangen'>('aktiv');
  showCreateDialog = signal(false);

  // Lightbox
  lightboxUrl  = signal<string | null>(null);
  lightboxName = signal<string>('');

  // Filters
  searchTitle = '';
  searchDate  = '';
  sortOrder: 'desc' | 'asc' = 'desc';
  sortOptions = [
    { label: 'Neueste zuerst', value: 'desc' },
    { label: 'Älteste zuerst', value: 'asc' },
  ];

  // Create form
  newTitle = '';
  newDescription = '';
  newImagePreview: string | null = null;
  newImageFile: File | null = null;
  nextTaskId = 10;

  tasks: Task[] = [
    {
      id: 1, title: 'Wieso Short?',
      description: 'Wieso gehen wir hier Short?',
      imageUrl: 'https://placehold.co/800x450/1a1d27/38bdf8?text=15sec+Chart',
      createdAt: '08.07.2025', createdAtDate: new Date(2025, 6, 8),
      status: 'aktiv', expanded: false,
      submissions: [
        { id: 1, userName: 'Leon Müller',  userAvatar: 'L', submittedAt: '09.07.2025 14:22',
          imageUrl: 'https://placehold.co/800x450/0f1117/22c55e?text=Leon+Lösung',
          userNote: 'Eine Notiz eines Schülers.',
          result: 'richtig', adminNote: 'Das ist Richtig.', editingNote: false, isSolutionOfDay: true },
        { id: 2, userName: 'Sarah Koch',   userAvatar: 'S', submittedAt: '09.07.2025 17:05',
          imageUrl: 'https://placehold.co/800x450/0f1117/f59e0b?text=Sarah+Lösung',
          userNote: 'Eine Notiz eines Schülers.',
          result: 'offen', adminNote: '', editingNote: false, isSolutionOfDay: false },
        { id: 3, userName: 'Tom Wagner',   userAvatar: 'T', submittedAt: '10.07.2025 09:11',
          imageUrl: 'https://placehold.co/800x450/0f1117/ef4444?text=Tom+Lösung',
          userNote: '',
          result: 'falsch', adminNote: 'Keine Ahnung.', editingNote: false, isSolutionOfDay: false },
        { id: 7, userName: 'Maria Huber',  userAvatar: 'M', submittedAt: '10.07.2025 11:00',
          imageUrl: 'https://placehold.co/800x450/0f1117/a78bfa?text=Maria+Lösung',
          userNote: 'Eine Notiz eines Schülers.',
          result: 'offen', adminNote: '', editingNote: false, isSolutionOfDay: false },
      ],
    },
    {
      id: 2, title: 'Trendbestimmung',
      description: 'Wieso ist die BIAS Long?',
      imageUrl: 'https://placehold.co/800x450/1a1d27/a78bfa?text=5min+Chart',
      createdAt: '05.07.2025', createdAtDate: new Date(2025, 6, 5),
      status: 'aktiv', expanded: false,
      submissions: [
        { id: 4, userName: 'Max Becker', userAvatar: 'M', submittedAt: '06.07.2025 11:30',
          imageUrl: 'https://placehold.co/800x450/0f1117/22c55e?text=Max+Lösung',
          userNote: 'Eine Notiz eines Schülers.',
          result: 'offen', adminNote: '', editingNote: false, isSolutionOfDay: false },
      ],
    },
    {
      id: 3, title: '1. Aufgabe',
      description: 'Platzhalter',
      imageUrl: 'https://placehold.co/800x450/1a1d27/fb923c?text=Risk+Aufgabe',
      createdAt: '28.06.2025', createdAtDate: new Date(2025, 5, 28),
      status: 'abgelaufen', expanded: false,
      submissions: [
        { id: 5, userName: 'Julia Schneider', userAvatar: 'J', submittedAt: '29.06.2025 15:00',
          imageUrl: 'https://placehold.co/800x450/0f1117/22c55e?text=Julia+Lösung',
          userNote: 'Eine Notiz eines Schülers.',
          result: 'richtig', adminNote: 'Das ist richtig!!!!!!!!!!!!!!!!', editingNote: false, isSolutionOfDay: true },
        { id: 6, userName: 'Anna Brandt', userAvatar: 'A', submittedAt: '30.06.2025 10:20',
          imageUrl: 'https://placehold.co/800x450/0f1117/ef4444?text=Anna+Lösung',
          userNote: '',
          result: 'falsch', adminNote: '', editingNote: false, isSolutionOfDay: false },
      ],
    },
    {
      id: 4, title: 'Test Aufgabe',
      description: 'Platzhalter.',
      imageUrl: 'https://placehold.co/800x450/1a1d27/f472b6?text=Candlestick+Chart',
      createdAt: '15.06.2025', createdAtDate: new Date(2025, 5, 15),
      status: 'abgelaufen', expanded: false, submissions: [],
    },
  ];

  constructor(private messageService: MessageService) {}

  get activeTasks() { return this.tasks.filter(t => t.status === 'aktiv'); }

  get filteredPastTasks() {
    let list = this.tasks.filter(t => t.status === 'abgelaufen');
    if (this.searchTitle.trim()) {
      const q = this.searchTitle.toLowerCase();
      list = list.filter(t => t.title.toLowerCase().includes(q));
    }
    if (this.searchDate.trim()) {
      list = list.filter(t => t.createdAt.includes(this.searchDate.trim()));
    }
    return [...list].sort((a, b) =>
      this.sortOrder === 'desc'
        ? b.createdAtDate.getTime() - a.createdAtDate.getTime()
        : a.createdAtDate.getTime() - b.createdAtDate.getTime()
    );
  }

  get displayedTasks() {
    return this.activeTab() === 'aktiv' ? this.activeTasks : this.filteredPastTasks;
  }

  submissionLabel(n: number) { return n === 1 ? '1 Einreichung' : `${n} Einreichungen`; }
  pendingCount(task: Task) { return task.submissions.filter(s => s.result === 'offen').length; }

  toggleExpand(task: Task) { task.expanded = !task.expanded; }

  // Lightbox
  openLightbox(url: string, name: string) {
    this.lightboxUrl.set(url);
    this.lightboxName.set(name);
  }
  closeLightbox() { this.lightboxUrl.set(null); }

  // Create
  openCreate() {
    this.newTitle = ''; this.newDescription = '';
    this.newImagePreview = null; this.newImageFile = null;
    this.showCreateDialog.set(true);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      this.newImageFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => this.newImagePreview = e.target?.result as string;
      reader.readAsDataURL(this.newImageFile);
    }
  }

  createTask() {
    if (!this.newTitle.trim() || !this.newDescription.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Hinweis', detail: 'Bitte Titel und Beschreibung angeben.' });
      return;
    }
    const today = new Date();
    const todayStr = today.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    this.tasks = [{
      id: this.nextTaskId++, title: this.newTitle.trim(), description: this.newDescription.trim(),
      imageUrl: this.newImagePreview ?? 'https://placehold.co/800x450/1a1d27/64748b?text=Kein+Bild',
      createdAt: todayStr, createdAtDate: today, status: 'aktiv', submissions: [], expanded: false,
    }, ...this.tasks];
    this.messageService.add({ severity: 'success', summary: 'Erstellt', detail: `"${this.newTitle}" wurde veröffentlicht.` });
    this.showCreateDialog.set(false);
  }

  // Review
  markResult(sub: Submission, result: 'richtig' | 'falsch') {
    sub.result = result;
    this.messageService.add({
      severity: result === 'richtig' ? 'success' : 'error',
      summary: result === 'richtig' ? 'Richtig' : 'Falsch',
      detail: `${sub.userName}s Einreichung bewertet.`,
    });
  }

  toggleSolutionOfDay(task: Task, sub: Submission) {
    task.submissions.forEach(s => s.isSolutionOfDay = false);
    sub.isSolutionOfDay = true;
    this.messageService.add({ severity: 'success', summary: 'Lösung des Tages', detail: `${sub.userName}s Lösung ausgezeichnet.` });
  }

  removeSolutionOfDay(sub: Submission) { sub.isSolutionOfDay = false; }

  saveNote(sub: Submission) {
    sub.editingNote = false;
    this.messageService.add({ severity: 'info', summary: 'Notiz gespeichert', detail: 'Admin-Notiz wurde hinterlegt.' });
  }

  getResultSeverity(r: SubmissionResult): 'success' | 'danger' | 'warn' {
    return r === 'richtig' ? 'success' : r === 'falsch' ? 'danger' : 'warn';
  }
  getResultLabel(r: SubmissionResult) {
    return r === 'richtig' ? 'Richtig' : r === 'falsch' ? 'Falsch' : 'Offen';
  }
}
