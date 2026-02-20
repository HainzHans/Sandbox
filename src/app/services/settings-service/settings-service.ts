import { Injectable } from '@angular/core';
import {supabase} from '../../core/supabase.client';

@Injectable({ providedIn: 'root' })
export class SettingsService {

  async get(key: string): Promise<string | null> {
    const { data } = await supabase
      .from('settings')
      .select('value')
      .eq('key', key)
      .single();

    return data?.value ?? null;
  }

  async set(key: string, value: string) {
    const { error } = await supabase
      .from('settings')
      .upsert(
        { key, value },
        { onConflict: 'key' }
      );

    if (error) throw error;
  }


}
