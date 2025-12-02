import { useEffect, useState } from "react";

interface ValoresMeta {
  valorAtual: number | null;
  meta: number | null;
  loading: boolean;
  error: string | null;
}

/**
 * Hook para buscar valores de uma planilha Google Sheets pública.
 * @param sheetId ID da planilha (Google Sheets)
 * @param apiKey Chave de API do Google Cloud
 * @param range Intervalo de células (ex: "A2:B2")
 */
export function useValoresMetaGoogleSheet(sheetId: string, apiKey: string, range = "A2:B2"): ValoresMeta {
  const [valorAtual, setValorAtual] = useState<number | null>(null);
  const [meta, setMeta] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchValores() {
      setLoading(true);
      setError(null);
      try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Erro ao buscar dados da planilha");
        const data = await res.json();
        const values = data.values?.[0];
        if (!values || values.length < 2) throw new Error("Dados insuficientes na planilha");
        setValorAtual(Number(values[0]));
        setMeta(Number(values[1]));
      } catch (err: any) {
        setError(err.message || "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }
    fetchValores();
  }, [sheetId, apiKey, range]);

  return { valorAtual, meta, loading, error };
}
