import {AppointmentSlot} from '../appointment-slot.model';

export interface BookedAppointment {
  id?: number;
  name: string;
  email: string;
  telephone: string;

  slotId: number;
  appointmentSlot: AppointmentSlot | undefined;
}
