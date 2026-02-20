import { Injectable } from '@angular/core';
import { supabase } from '../../core/supabase.client';
import { AppointmentSlot } from '../../models/appointment-slot.model';

@Injectable({ providedIn: 'root' })
export class AppointmentSlotsService {

  async getAll() {
    const { data, error } = await supabase
      .from('appointments_slots')
      .select('*')
      .order('date', { ascending: true });

    if (error) throw error;
    return data;
  }

  async getFreeSlots() {
    const { data, error } = await supabase
      .from('appointments_slots')
      .select('*')
      .is('booked_appointment_id', null)
      .order('date', { ascending: true });

    if (error) throw error;
    return data;
  }

  async create(slot: AppointmentSlot) {
    const { data, error } = await supabase
      .from('appointments_slots')
      .insert(slot)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async update(id: number, slot: Partial<AppointmentSlot>) {
    const { data, error } = await supabase
      .from('appointments_slots')
      .update(slot)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async delete(id: number) {
    const { error } = await supabase
      .from('appointments_slots')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
}
