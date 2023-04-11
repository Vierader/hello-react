import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://abxjpvfkqrpphlgaiosn.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFieGpwdmZrcXJwcGhsZ2Fpb3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkzNjAzNDYsImV4cCI6MTk5NDkzNjM0Nn0.0ldX3JshduFq6ccqMOD7w3SgBH4h4kTRdk0yHxgbFvI'

export const supabase = createClient(supabaseUrl, supabaseKey)