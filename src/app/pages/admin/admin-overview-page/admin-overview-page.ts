import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule, TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

export interface Purchase {
  type: string;
  date: string;
  time: string;
  status: 'Abgeschlossen' | 'Ausstehend' | 'Storniert';
  price: number;
}

export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  status: 'Aktiv' | 'Inaktiv' | 'Gesperrt';
  purchases: Purchase[];
}

@Component({
  selector: 'app-admin-overview-page',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, ButtonModule, RippleModule],
  templateUrl: './admin-overview-page.html',
  styleUrl: './admin-overview-page.css',
})
export class AdminOverviewPage {

  // ── expandedRows: any = {} — exakt wie PrimeNG Doku ─────
  expandedRows: any = {};

  users: User[] = [
    {
      id: 1, name: 'Leon Müller', phone: '+49 151 1234567',
      email: 'leon@example.com', status: 'Aktiv',
      purchases: [
        { type: 'Mentoring',    date: '05.03.2025', time: '10:00', status: 'Abgeschlossen', price: 1200 },
      ]
    },
    {
      id: 2, name: 'Sarah Koch', phone: '+49 160 9876543',
      email: 'sarah@example.com', status: 'Aktiv',
      purchases: [
        { type: 'Mentoring',    date: '05.07.2025', time: '10:00', status: 'Abgeschlossen', price: 1200 },
        { type: 'LiveTrading', date: '08.07.2025', time: '15:00', status: 'Abgeschlossen',    price: 150 },
        { type: 'LiveTrading', date: '9.07.2025', time: '15:00', status: 'Abgeschlossen',    price: 150 },
        { type: 'LiveTrading', date: '10.07.2025', time: '15:00', status: 'Abgeschlossen',    price: 150 },
      ]
    },
    {
      id: 3, name: 'Max Becker', phone: '+49 172 5551234',
      email: 'max@example.com', status: 'Aktiv',
      purchases: [
        { type: 'Mentoring',    date: '01.07.2025', time: '10:00', status: 'Abgeschlossen', price: 1200 },
        { type: 'LiveTrading', date: '02.07.2025', time: '15:00', status: 'Abgeschlossen',    price: 150 },
      ]
    },
    {
      id: 4, name: 'Julia Schneider', phone: '+49 176 3334455',
      email: 'julia@example.com', status: 'Aktiv',
      purchases: [
        { type: 'Mentoring',    date: '05.05.2025', time: '10:00', status: 'Abgeschlossen', price: 1200 },
        { type: 'LiveTrading', date: '08.06.2025', time: '15:00', status: 'Abgeschlossen',    price: 150 },
      ]
    },
    {
      id: 5, name: 'Tom Wagner', phone: '+49 179 8887766',
      email: 'tom@example.com', status: 'Aktiv',
      purchases: [
        { type: 'Mentoring',    date: '05.07.2025', time: '10:00', status: 'Abgeschlossen', price: 1200 },
        { type: 'LiveTrading', date: '08.07.2025', time: '15:00', status: 'Ausstehend',    price: 150 },
        { type: 'LiveTrading', date: '18.07.2025', time: '15:00', status: 'Ausstehend',    price: 150 },
      ]
    },
    {
      id: 6, name: 'Anna Brandt', phone: '+49 152 6667788',
      email: 'anna@example.com', status: 'Aktiv',
      purchases: []
    },
  ];

  // ── Stats ────────────────────────────────────────────────
  get totalUsers()     { return this.users.length; }
  get activeUsers()    { return this.users.filter(u => u.status === 'Aktiv').length; }
  get totalRevenue()   { return this.users.flatMap(u => u.purchases).filter(p => p.status === 'Abgeschlossen').reduce((s, p) => s + p.price, 0); }
  get pendingOrders()  { return this.users.flatMap(u => u.purchases).filter(p => p.status === 'Ausstehend').length; }
  get totalPurchases() { return this.users.flatMap(u => u.purchases).length; }

  // ── Expand / Collapse — exakt wie PrimeNG Doku ──────────
  expandAll() {
    this.expandedRows = this.users.reduce((acc: any, u) => (acc[u.id] = true) && acc, {});
  }

  collapseAll() {
    this.expandedRows = {};
  }

  onRowExpand(event: TableRowExpandEvent) {}
  onRowCollapse(event: TableRowCollapseEvent) {}

  // ── Severity Helpers ─────────────────────────────────────
  getUserSeverity(status: string): 'success' | 'warn' | 'danger' {
    switch (status) {
      case 'Aktiv':    return 'success';
      case 'Inaktiv':  return 'warn';
      case 'Gesperrt': return 'danger';
      default:         return 'warn';
    }
  }

  getPurchaseSeverity(status: string): 'success' | 'warn' | 'danger' {
    switch (status) {
      case 'Abgeschlossen': return 'success';
      case 'Ausstehend':    return 'warn';
      case 'Storniert':     return 'danger';
      default:              return 'warn';
    }
  }

  getUserRevenue(user: User): number {
    return user.purchases
      .filter(p => p.status === 'Abgeschlossen')
      .reduce((s, p) => s + p.price, 0);
  }
}
