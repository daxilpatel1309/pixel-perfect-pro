import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Only create client if both env vars are present
let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    "Supabase not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable database features."
  );
}

export { supabase };

export type LeadInsert = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  page: string;
};

/**
 * Inserts a single lead row into public.leads.
 * Security:
 * - Uses only anon key
 * - INSERT only, no SELECT/UPDATE/DELETE
 * - Relies on RLS policies configured in Supabase
 */
export async function submitLeadToSupabase(payload: LeadInsert): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase is not configured. Please set up environment variables.");
  }
  const { error } = await supabase.from("leads").insert(payload);
  if (error) {
    throw new Error(error.message || "Unable to submit lead.");
  }
}


