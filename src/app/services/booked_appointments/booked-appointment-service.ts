import { Injectable } from '@angular/core';
import { supabase } from '../../core/supabase.client';
import { BookedAppointment } from '../../models/booked-appointment.model';

@Injectable({ providedIn: 'root' })
export class BookedAppointmentService {

  async getAll() {
    const { data, error } = await supabase
      .from('booked_appointments')
      .select(`
        *,
        appointments_slots (*)
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }

  async create(appointment: BookedAppointment) {
    // 1. Buchung anlegen
    const { data, error } = await supabase
      .from('booked_appointments')
      .insert(appointment)
      .select()
      .single();

    if (error) throw error;

    // 2. Slot mit Buchung verknüpfen
    await supabase
      .from('appointments_slots')
      .update({ booked_appointment_id: data.id })
      .eq('id', appointment.slot_id);

    return data;
  }

  async update(id: number, appointment: Partial<BookedAppointment>) {
    const { data, error } = await supabase
      .from('booked_appointments')
      .update(appointment)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async delete(id: number) {
    // Buchung löschen → Slot wird automatisch gelöscht (Trigger)
    const { error } = await supabase
      .from('booked_appointments')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
}
