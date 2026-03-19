import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Appointment} from '../../models/appointment.model';
import {FormatDatePipe} from '../../pipe/formatDatePipe';

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [CommonModule, FormatDatePipe],
  templateUrl: './booking-summary-component.html',
  styleUrls: ['./booking-summary-component.css'],
})
export class BookingSummaryComponent {
  product  = input.required<'livetrading' | 'mentoring' | null>();
  fullName = input.required<string>();
  phone    = input.required<string>();
  email    = input.required<string>();
  slot     = input.required<Appointment | undefined>();

  productLabel = computed(() =>
    this.product() === 'livetrading' ? 'Live Trading' : 'Mentoring'
  );

  priceLabel = computed(() =>
    this.product() === 'livetrading' ? '€ 150 / Session' : '€ 1200 / LifeTime'
  );
}
