import React from 'react';

export const InfoSection: React.FC = () => {
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mt-10 space-y-8 text-slate-700 leading-relaxed">
            <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#2C3FA5] border-b-2 border-indigo-200 pb-2">Guia do Simulador de Juros Compostos</h2>
                <p>Nossa ferramenta foi projetada para ser intuitiva e poderosa, permitindo que você visualize o potencial de crescimento dos seus investimentos de forma clara e objetiva. Siga os passos abaixo para começar:</p>
                <ul className="list-decimal list-inside space-y-2 pl-4">
                    <li><strong>Valor Inicial:</strong> Insira o montante que você já possui para começar a investir. Se estiver começando do zero, pode deixar em branco ou inserir 0.</li>
                    <li><strong>Valor Mensal:</strong> Informe a quantia que você planeja adicionar ao investimento todos os meses. A consistência é a chave para o crescimento a longo prazo.</li>
                    <li><strong>Taxa de Juros:</strong> Defina a rentabilidade esperada do seu investimento. Você pode informar uma taxa anual (a.a.) ou mensal (a.m.).</li>
                    <li><strong>Período:</strong> Determine por quanto tempo você pretende deixar o dinheiro investido, seja em meses ou anos.</li>
                    <li><strong>Calcular:</strong> Com todos os campos preenchidos, clique em "Calcular" e veja a mágica dos juros compostos acontecer!</li>
                </ul>
            </article>

            <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#2C3FA5] border-b-2 border-indigo-200 pb-2">Qual é a fórmula e como se calculam os juros compostos?</h2>
                <p>A fórmula base para os juros compostos é <code className="bg-slate-100 p-1 rounded">M = C * (1 + i)^t</code>, onde:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>M:</strong> Montante final</li>
                    <li><strong>C:</strong> Capital inicial</li>
                    <li><strong>i:</strong> Taxa de juros (no formato decimal)</li>
                    <li><strong>t:</strong> Tempo</li>
                </ul>
                <p>Nossa calculadora expande essa fórmula para incluir aportes mensais, realizando um cálculo iterativo que mostra como seu patrimônio cresce mês a mês. É crucial que a taxa de juros (i) e o tempo (t) estejam na mesma unidade (ambos em meses ou anos).</p>
            </article>

            <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#2C3FA5] border-b-2 border-indigo-200 pb-2">Aplicações dos Juros Compostos</h2>
                <p>Os "juros sobre juros" são um conceito fundamental nas finanças e estão presentes em diversas situações:</p>
                <div className="grid md:grid-cols-2 gap-6 pt-2">
                    <div className="bg-slate-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Investimentos</h3>
                        <p>Nos investimentos, os juros compostos trabalham a seu favor. Ao reinvestir os rendimentos, você acelera exponencialmente o crescimento do seu patrimônio. Produtos como Tesouro Direto, CDBs, e o reinvestimento de dividendos de ações se beneficiam desse efeito.</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                         <h3 className="font-semibold text-lg mb-2">Financiamentos e Dívidas</h3>
                        <p>Por outro lado, em dívidas como empréstimos, financiamentos ou o rotativo do cartão de crédito, os juros compostos atuam contra você, podendo transformar uma pequena dívida em uma bola de neve. Entender seu funcionamento é vital para a saúde financeira.</p>
                    </div>
                </div>
            </article>
            
            <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#2C3FA5] border-b-2 border-indigo-200 pb-2">Juros Simples vs. Juros Compostos</h2>
                <p>A diferença crucial está na base de cálculo. <strong>Juros simples</strong> incidem sempre sobre o valor inicial. <strong>Juros compostos</strong> incidem sobre o valor inicial somado aos juros já acumulados.</p>
                <p>Imagine um investimento de R$ 10.000 a 10% ao ano:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Com juros simples:</strong> Você ganharia R$ 1.000 todos os anos. Em 3 anos, teria R$ 13.000.</li>
                    <li><strong>Com juros compostos:</strong> No ano 1, ganha R$ 1.000 (total R$ 11.000). No ano 2, ganha 10% sobre R$ 11.000, ou seja, R$ 1.100 (total R$ 12.100). No ano 3, ganha 10% sobre R$ 12.100, ou seja, R$ 1.210 (total R$ 13.310).</li>
                </ul>
                <p>Essa diferença, que parece pequena no início, torna-se gigantesca no longo prazo, como disse Albert Einstein: "Os juros compostos são a oitava maravilha do mundo. Aquele que entende, ganha. Aquele que não entende, paga."</p>
            </article>
        </div>
    );
};