-- Add policy to allow unauthenticated users to insert their own data during signup
CREATE POLICY "Allow unauthenticated users to insert during signup"
    ON public.users
    FOR INSERT
    WITH CHECK (true);