import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

// Components
import { ProductCardComponent } from '../../../components/product-card-component/product-card-component';
import { AppointmentSlotCardComponent } from '../../../components/cards/appointment-slot-card-component/appointment-slot-card-component';
import { BookingSummaryComponent } from '../../../components/booking-summary-component/booking-summary-component';
import { GlowButtonComponent } from '../../../components/buttons/glow-button-component/glow-button-component';

// Models & Services
import { Appointment, AppointmentType } from '../../../models/appointment.model';
import { AppointmentService } from '../../../services/appointment-service/appointment.service';

@Component({
  selector: 'app-appointment-form-section',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    ProductCardComponent,
    AppointmentSlotCardComponent,
    BookingSummaryComponent,
    GlowButtonComponent,
  ],
  templateUrl: './appointment-form-section.html',
  styleUrls: ['./appointment-form-section.css'],
})
export class AppointmentFormSection implements OnInit {

  /* ── State ──────────────────────────────────────────────── */
  currentStep     = signal<number>(1);
  selectedProduct = signal<AppointmentType | null>(null);
  selectedSlot    = signal<Appointment | undefined>(undefined);
  availableSlots  = signal<Appointment[]>([]);
  loadingSlots    = signal<boolean>(false);

  steps = ['Produkt', 'Kontakt', 'Termin', 'Übersicht'];

  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phone:    ['', [Validators.required, Validators.pattern(/^\+?[\d\s\-()]{7,20}$/)]],
      email:    ['', [Validators.required, Validators.email]],
    });
  }

  /* ── Navigation ─────────────────────────────────────────── */
  nextStep(): void {
    if (this.currentStep() < 5) {
      this.currentStep.update(s => s + 1);

      // Wenn auf Schritt 3 gewechselt wird → Termine laden
      if (this.currentStep() === 3 && this.selectedProduct()) {
        this.loadSlots(this.selectedProduct()!);
      }
    }
  }

  prevStep(): void {
    if (this.currentStep() > 1) {
      this.currentStep.update(s => s - 1);
    }
  }

  /* ── Selections ─────────────────────────────────────────── */
  selectProduct(product: AppointmentType): void {
    // Slot zurücksetzen wenn Produkt wechselt
    if (this.selectedProduct() !== product) {
      this.selectedSlot.set(undefined);
      this.availableSlots.set([]);
    }
    this.selectedProduct.set(product);
  }

  selectSlot(slot: Appointment): void {
    this.selectedSlot.set(slot);
  }

  /* ── Load slots ─────────────────────────────────────────── */
  private async loadSlots(type: AppointmentType): Promise<void> {
    this.loadingSlots.set(true);
    this.selectedSlot.set(undefined);
    try {
      const slots = await this.appointmentService.getAvailableByType(type);
      this.availableSlots.set(slots);
    } catch {
      this.availableSlots.set([]);
    } finally {
      this.loadingSlots.set(false);
    }
  }

  /* ── Submit ─────────────────────────────────────────────── */
  async submitBooking(): Promise<void> {
    if (this.contactForm.invalid || !this.selectedProduct() || !this.selectedSlot()) return;

    // TODO: BookingService aufrufen + Stripe Redirect
    console.log('Booking payload:', {
      product: this.selectedProduct(),
      contact: this.contactForm.value,
      slot:    this.selectedSlot(),
    });

    this.currentStep.set(5);
  }
}
