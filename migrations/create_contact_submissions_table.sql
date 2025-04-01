-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    service_interest TEXT[] NOT NULL,
    budget VARCHAR(50),
    timeframe VARCHAR(50),
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add RLS policies
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow insert for all users (including anonymous)
CREATE POLICY "Allow insert for all users" ON public.contact_submissions
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Allow users to view only their own submissions
CREATE POLICY "Users can view own submissions" ON public.contact_submissions
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

-- Grant necessary permissions
GRANT INSERT ON public.contact_submissions TO public;
GRANT SELECT ON public.contact_submissions TO authenticated;