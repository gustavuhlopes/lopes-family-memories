-- Criar tabela para mensagens do mural da família
CREATE TABLE public.family_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE public.family_messages ENABLE ROW LEVEL SECURITY;

-- Permitir que todos possam ler as mensagens
CREATE POLICY "Todos podem ver mensagens" 
ON public.family_messages 
FOR SELECT 
USING (true);

-- Permitir que todos possam criar mensagens
CREATE POLICY "Todos podem criar mensagens" 
ON public.family_messages 
FOR INSERT 
WITH CHECK (true);

-- Habilitar realtime para mensagens
ALTER PUBLICATION supabase_realtime ADD TABLE public.family_messages;