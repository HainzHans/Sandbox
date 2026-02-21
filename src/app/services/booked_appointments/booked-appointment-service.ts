import { Injectable } from '@angular/core';
import { supabase } from '../../core/supabase.client';
import { BookedAppointment } from '../../models/frontend/booked-appointment.model';
import {BookedAppointmentDB} from '../../models/backend/booked-appointment.model';

@Injectable({ providedIn: 'root' })
export class BookedAppointmentService {

  async getAll(): Promise<BookedAppointment[]> {
    const { data, error } = await supabase
      .from('booked_appointments')
      .select('*, appointments_slots (*)')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return data.map(item => this.mapToFrontend(item));
  }


  async create(appointment: BookedAppointment) {
    const payload = this.mapToDb(appointment);

    const { data, error } = await supabase
      .from('booked_appointments')
      .insert(payload)
      .select()
      .single();

    if (error) throw error;

    await supabase
      .from('appointments_slots')
      .update({ booked_appointment_id: data.id })
      .eq('id', appointment.slotId);

    return this.mapToFrontend(data);
  }


  async update(id: number, appointment: Partial<BookedAppointment>) {
    const payload = this.mapToDb(appointment as BookedAppointment);

    const { data, error } = await supabase
      .from('booked_appointments')
      .update(payload)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return this.mapToFrontend(data);
  }


  async delete(id: number) {
    const { error } = await supabase
      .from('booked_appointments')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }


  private mapToFrontend(item: BookedAppointmentDB): BookedAppointment {
    return {
      id: item.id,
      name: item.name,
      email: item.email,
      telephone: item.telephone,
      slotId: item.slot_id,
      appointmentSlot: item?.appointments_slots
    };
  }

  private mapToDb(item: BookedAppointment): BookedAppointmentDB {
    return {
      id: item.id,
      name: item.name,
      email: item.email,
      telephone: item.telephone,
      slot_id: item.slotId,
    };
  }


}
