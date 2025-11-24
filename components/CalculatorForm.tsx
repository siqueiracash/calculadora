import React, { useState } from 'react';
import type { FormData } from '../types';

interface CalculatorFormProps {
  onCalculate: (formData: FormData) => void;
  onClear: () => void;
}

const CurrencyInput = ({ value, onChange, id, label }: { value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, id: string, label: string }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
            <div className="flex items-center rounded-md border border-slate-300 bg-white shadow-sm focus-within:border-[#2C3FA5] focus-within:ring-1 focus-within:ring-[#2C3FA5]">
                <span className="pl-3 pr-2 text-slate-500">R$</span>
                <input
                    type="text"
                    id={id}
                    value={value}
                    onChange={onChange}
                    className="w-full p-2 border-0 bg-transparent focus:ring-0"
                    placeholder="0,00"
                />
            </div>
        </div>
    );
};

export const CalculatorForm: React.FC<CalculatorFormProps> = ({ onCalculate, onClear }) => {
  const [initialValue, setInitialValue] = useState('');
  const [monthlyValue, setMonthlyValue] = useState('');
  const [interestRate, setInterestRate] = useState('8');
  const [rateType, setRateType] = useState<'monthly' | 'yearly'>('yearly');
  const [period, setPeriod] = useState('10');
  const [periodType, setPeriodType] = useState<'months' | 'years'>('years');
  
  const handleCurrencyChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      value = value.replace(/\D/g, '');
      if (value) {
          const numberValue = parseFloat(value) / 100;
          setter(new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(numberValue));
      } else {
          setter('');
      }
  };
  
  const parseCurrency = (value: string): number => {
      if (!value) return 0;
      return parseFloat(value.replace(/\./g, '').replace(',', '.'));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate({
      initialValue: parseCurrency(initialValue),
      monthlyValue: parseCurrency(monthlyValue),
      interestRate: parseFloat(interestRate.replace(',', '.')) || 0,
      rateType,
      period: parseInt(period) || 0,
      periodType,
    });
  };

  const handleClearClick = () => {
    setInitialValue('');
    setMonthlyValue('');
    setInterestRate('8');
    setRateType('yearly');
    setPeriod('10');
    setPeriodType('years');
    onClear();
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-10">
      <h2 className="text-2xl font-bold text-[#2C3FA5] mb-6">Simulador de Juros Compostos</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CurrencyInput 
             id="initialValue"
             label="Valor inicial"
             value={initialValue}
             onChange={handleCurrencyChange(setInitialValue)}
          />
          <CurrencyInput
            id="monthlyValue"
            label="Valor mensal"
            value={monthlyValue}
            onChange={handleCurrencyChange(setMonthlyValue)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="interestRate" className="block text-sm font-medium text-slate-700 mb-1">Taxa de juros</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-300 bg-slate-50 text-slate-500">%</span>
              <input
                type="text"
                id="interestRate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="flex-1 min-w-0 block w-full px-3 py-2 border-t border-b border-slate-300 bg-white focus:outline-none focus:ring-[#2C3FA5] focus:border-[#2C3FA5] sm:text-sm"
                placeholder="8"
              />
              <select
                value={rateType}
                onChange={(e) => setRateType(e.target.value as 'monthly' | 'yearly')}
                className="rounded-r-md border border-l-0 border-slate-300 bg-slate-50 text-slate-700 focus:ring-[#2C3FA5] focus:border-[#2C3FA5]"
              >
                <option value="yearly">anual</option>
                <option value="monthly">mensal</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="period" className="block text-sm font-medium text-slate-700 mb-1">Período</label>
            <div className="flex">
              <input
                type="number"
                id="period"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-slate-300 bg-white focus:outline-none focus:ring-[#2C3FA5] focus:border-[#2C3FA5] sm:text-sm"
                placeholder="10"
              />
              <select
                value={periodType}
                onChange={(e) => setPeriodType(e.target.value as 'months' | 'years')}
                className="rounded-r-md border border-l-0 border-slate-300 bg-slate-50 text-slate-700 focus:ring-[#2C3FA5] focus:border-[#2C3FA5]"
              >
                <option value="years">ano(s)</option>
                <option value="months">mes(es)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#2C3FA5] text-white font-bold py-2 px-8 rounded-md hover:bg-[#243387] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2C3FA5]"
            >
              Calcular
            </button>
            <button type="button" onClick={handleClearClick} className="text-sm text-slate-600 hover:text-[#2C3FA5] transition-colors">Limpar</button>
        </div>
      </form>
    </div>
  );
};