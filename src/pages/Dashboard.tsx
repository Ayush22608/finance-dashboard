import React from 'react';
import { motion } from 'framer-motion';
import { useFinance } from '../context/FinanceContext';
import { SummaryCard } from '../components/SummaryCard';
import { Chart } from '../components/Charts';
import { TransactionTable } from '../components/TransactionTable';

export const Dashboard: React.FC = () => {
  const { summary, transactions } = useFinance();

  const chartData = [
    { name: 'Income', amount: summary.totalIncome },
    { name: 'Expenses', amount: summary.totalExpenses },
  ];

  const recentTransactions = transactions.slice(0, 5);

  const categoryData = React.useMemo(() => {
    const categories: Record<string, number> = {};
    transactions.forEach(tx => {
      if (tx.type === 'expense') {
        categories[tx.category] = (categories[tx.category] || 0) + tx.amount;
      }
    });
    return Object.entries(categories).map(([name, amount]) => ({ name, amount }));
  }, [transactions]);

  const savings = summary.totalIncome - summary.totalExpenses;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard 
          title="Total Balance" 
          amount={summary.totalBalance} 
          type="balance" 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>}
        />
        <SummaryCard 
          title="Total Income" 
          amount={summary.totalIncome} 
          type="income" 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"></path></svg>}
        />
        <SummaryCard 
          title="Total Expenses" 
          amount={summary.totalExpenses} 
          type="expense" 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"></path></svg>}
        />
        <SummaryCard 
          title="Monthly Savings" 
          amount={savings} 
          type="savings" 
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h3 className="text-lg font-semibold mb-6 dark:text-white">Income vs Expenses</h3>
          <Chart data={chartData} type="bar" dataKey="amount" nameKey="name" />
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <h3 className="text-lg font-semibold mb-6 dark:text-white">Expenses by Category</h3>
          <Chart data={categoryData} type="pie" dataKey="amount" nameKey="name" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold dark:text-white">Recent Transactions</h3>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">
            View All
          </button>
        </div>
        <TransactionTable transactions={recentTransactions} />
      </div>
    </motion.div>
  );
};
