import { Component } from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {DatePipe, NgClass} from '@angular/common';
import {MatProgressBar} from '@angular/material/progress-bar';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

export interface User {
  name: string;
  startDate: Date;
  payed: boolean;
  group: boolean;
  lastActivity: Date;
  status: 'aktiv' | 'inaktiv' | 'ausstehend';
  progress: number;
}

@Component({
  selector: 'app-app-table-component',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    DatePipe,
    NgClass,
    MatProgressBar,
    MatIcon,
    MatIconButton,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './app-table-component.html',
  styleUrl: './app-table-component.css',
})
export class AppTableComponent {

  displayedColumns = [
    'name',
    'startDate',
    'payed',
    'group',
    'lastActivity',
    'status',
    'progress',
    'actions'
  ];

  dataSource = new MatTableDataSource<User>([
    {
      name: 'Max Mustermann',
      startDate: new Date('2024-01-10'),
      payed: true,
      group: true,
      lastActivity: new Date(),
      status: 'aktiv',
      progress: 72,
    },
    {
      name: 'Lisa Beispiel',
      startDate: new Date('2024-02-01'),
      payed: false,
      group: false,
      lastActivity: new Date('2024-02-10'),
      status: 'ausstehend',
      progress: 10,
    }
  ]);
}
