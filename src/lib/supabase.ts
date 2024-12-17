import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://gdqpevalmayduojaglqn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkcXBldmFsbWF5ZHVvamFnbHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0MzA2NDcsImV4cCI6MjA1MDAwNjY0N30.lRw_NSRyjHjHCeuNEmLAWY2dgV59FoiadASVj4RfJeM";

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
}

export const supabase = createClient(supabaseUrl, supabaseKey);