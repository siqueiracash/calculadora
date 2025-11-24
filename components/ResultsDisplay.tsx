import React from 'react';
import type { CalculationResult } from '../types';
import { formatCurrency } from '../utils/formatters';
import { EvolutionChart } from './EvolutionChart';
import { EvolutionTable } from './EvolutionTable';

interface ResultCardProps {
  label: string;
  value: number;
  highlight?: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ label, value, highlight = false }) => (
  <div className={`p-4 rounded-lg flex-1 text-center ${highlight ? 'bg-[#2C3FA5] text-white' : 'bg-slate-100 text-slate-800'}`}>
    <p className={`text-sm ${highlight ? 'text-indigo-100' : 'text-slate-600'}`}>{label}</p>
    <p className={`text-2xl font-bold ${highlight ? 'text-white' : 'text-[#2C3FA5]'}`}>{formatCurrency(value)}</p>
  </div>
);

interface ResultsDisplayProps {
  result: CalculationResult;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mt-10 space-y-8">
      <h2 className="text-2xl font-bold text-[#2C3FA5]">Resultado</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <ResultCard label="Valor total final" value={result.finalAmount} highlight />
        <ResultCard label="Valor total investido" value={result.totalInvested} />
        <ResultCard label="Total em juros" value={result.totalInterest} />
      </div>

      <div>
          <h3 className="text-xl font-bold mb-4 text-slate-700">Gráfico:</h3>
          <div className="flex items-center justify-center gap-6 mb-4 text-sm">
            <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-[#2C3FA5] mr-2"></span>
                <span>Total Acumulado</span>
            </div>
            <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-slate-900 mr-2"></span>
                <span>Valor Investido</span>
            </div>
          </div>
          <EvolutionChart data={result.monthlyData} />
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4 text-slate-700">Tabela:</h3>
        <EvolutionTable data={result.monthlyData} />
      </div>
    </div>
  );
};