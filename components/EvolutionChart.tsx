import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { MonthlyData } from '../types';
import { formatCurrency } from '../utils/formatters';

interface EvolutionChartProps {
  data: MonthlyData[];
}

export const EvolutionChart: React.FC<EvolutionChartProps> = ({ data }) => {
    // We can show years on the X-axis for better readability if the period is long
    const chartData = data.filter(d => d.month % 12 === 0 || d.month === data.length - 1).map(d => ({
        name: `Ano ${Math.floor(d.month / 12)}`,
        'Total Acumulado': d.totalAccumulated,
        'Valor Investido': d.totalInvested,
    }));
    
    if (data.length <= 13) { // Show monthly data if period is 1 year or less
       const monthlyChartData = data.map(d => ({
         name: `Mês ${d.month}`,
        'Total Acumulado': d.totalAccumulated,
        'Valor Investido': d.totalInvested,
       }));
       return <BaseChart data={monthlyChartData} />;
    }

    return <BaseChart data={chartData} />;
};


const BaseChart = ({ data }: { data: any[] }) => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" stroke="#555" />
                    <YAxis
                        stroke="#555"
                        tickFormatter={(value: number) => new Intl.NumberFormat('pt-BR', { notation: 'compact', compactDisplay: 'short' }).format(value)}
                    />
                    <Tooltip
                        formatter={(value: number) => formatCurrency(value)}
                        contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            border: '1px solid #ccc',
                            borderRadius: '0.5rem',
                        }}
                    />
                    <Legend wrapperStyle={{ display: 'none' }}/>
                    <Line type="monotone" dataKey="Valor Investido" stroke="#1e293b" strokeWidth={2} dot={{ r: 4, fill: '#1e293b', stroke: 'white', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="Total Acumulado" stroke="#2C3FA5" strokeWidth={2} dot={{ r: 4, fill: '#2C3FA5', stroke: 'white', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}