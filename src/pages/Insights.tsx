import React, { useMemo } from 'react';
import { useFinance } from '../context/FinanceContext';
import { Chart } from '../components/Charts';
import { formatCurrency } from '../utils/formatters';
import { motion } from 'framer-motion';

export const Insights: React.FC = () => {
  const { transactions } = useFinance();

  const categoryData = useMemo(() => {
    const categories: Record<string, number> = {};
    transactions.forEach(tx => {
      if (tx.type === 'expense') {
        categories[tx.category] = (categories[tx.category] || 0) + tx.amount;
      }
    });
    return Object.entries(categories).map(([name, value]) => ({ name, value }));
  }, [transactions]);

  const monthlyTrend = useMemo(() => {
    const months: { name: string; monthNum: number; year: number; income: number; expense: number }[] = [];
    const now = new Date();
    
    // Generate last 6 months
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      months.push({
        name: d.toLocaleString('default', { month: 'short' }),
        monthNum: d.getMonth(),
        year: d.getFullYear(),
        income: 0,
        expense: 0
      });
    }

    transactions.forEach(tx => {
      const txDate = new Date(tx.date);
      const monthMatch = months.find(m => 
        m.monthNum === txDate.getMonth() && m.year === txDate.getFullYear()
      );
      
      if (monthMatch) {
        if (tx.type === 'income') monthMatch.income += tx.amount;
        else monthMatch.expense += tx.amount;
      }
    });

    return months;
  }, [transactions]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold dark:text-white">Financial Insights</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold mb-6 dark:text-white">Monthly Spending Trend</h3>
          <Chart data={monthlyTrend} type="area" dataKey="expense" nameKey="name" />
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold mb-6 dark:text-white">Expense Distribution</h3>
          <Chart data={categoryData} type="pie" dataKey="value" nameKey="name" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categoryData.slice(0, 3).map(cat => (
          <div key={cat.name} className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{cat.name}</p>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(cat.value)}</h4>
            <div className="mt-2 text-sm text-red-600 font-medium">Spending high this month</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
