
import React, { useState, useRef } from 'react';
import { CalculatorForm } from './components/CalculatorForm';
import { ResultsDisplay } from './components/ResultsDisplay';
import { InfoSection } from './components/InfoSection';
import type { FormData, CalculationResult } from './types';
import { calculateCompoundInterest } from './utils/calculator';

const App: React.FC = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleCalculate = (formData: FormData) => {
    try {
      const calculationResult = calculateCompoundInterest(formData);
      setResult(calculationResult);
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao calcular. Verifique os valores informados.');
    }
  };

  const handleClear = () => {
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans text-slate-800">
      <main className="container mx-auto p-4 md:p-8 max-w-5xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Simulador de Juros Compostos
          </h1>
          <p className="text-slate-600 mt-2">
            Planeje seu futuro financeiro e veja o poder dos juros sobre juros.
          </p>
        </header>

        <CalculatorForm onCalculate={handleCalculate} onClear={handleClear} />

        {result && (
          <div ref={resultsRef}>
            <ResultsDisplay result={result} />
          </div>
        )}
        
        <InfoSection />

        <footer className="text-center mt-12 py-4 border-t border-slate-200">
            <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Simulador de Juros Compostos. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
