
export interface FormData {
  initialValue: number;
  monthlyValue: number;
  interestRate: number;
  rateType: 'monthly' | 'yearly';
  period: number;
  periodType: 'months' | 'years';
}

export interface MonthlyData {
  month: number;
  interest: number;
  totalInvested: number;
  totalInterest: number;
  totalAccumulated: number;
}

export interface CalculationResult {
  finalAmount: number;
  totalInvested: number;
  totalInterest: number;
  monthlyData: MonthlyData[];
}
