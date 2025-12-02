import React from "react";
import { useValoresMetaGoogleSheet } from "@/hooks/useValoresMetaGoogleSheet";
import MetaFinanceira from "@/components/MetaFinanceira";

// Substitua pelos seus dados reais:
const SHEET_ID = "14wXagE6mdJ6B77ts5Fnat88K4aAAUK7OasW1PtPU-j4";
const API_KEY = "AIzaSyAGKolDyM5YJqgLegXiyvJbm3aUCC5O1jw";

const MetaFinanceiraGoogle: React.FC = () => {
  const { valorAtual, meta, loading, error } = useValoresMetaGoogleSheet(SHEET_ID, API_KEY);
  console.log("MetaFinanceiraGoogle - valores:", { valorAtual, meta, loading, error });
  return <MetaFinanceira valorAtual={valorAtual} meta={meta} loading={loading} error={error} />;
};

export default MetaFinanceiraGoogle;
