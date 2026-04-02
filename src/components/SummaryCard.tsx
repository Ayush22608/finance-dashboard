import React from 'react';
import { formatCurrency } from '../utils/formatters';
import { motion } from 'framer-motion';

interface SummaryCardProps {
  title: string;
  amount: number;
  type: 'income' | 'expense' | 'balance' | 'savings';
  icon?: React.ReactNode;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ title, amount, type, icon }) => {
  const getColors = () => {
    switch (type) {
      case 'balance': 
        return { icon: 'text-green-600 bg-green-50 dark:bg-green-900/20', border: 'border-l-green-500' };
      case 'income': 
        return { icon: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20', border: 'border-l-blue-500' };
      case 'expense': 
        return { icon: 'text-red-600 bg-red-50 dark:bg-red-900/20', border: 'border-l-red-500' };
      case 'savings': 
        return { icon: 'text-purple-600 bg-purple-50 dark:bg-purple-900/20', border: 'border-l-purple-500' };
      default: 
        return { icon: 'text-gray-600 bg-gray-50 dark:bg-gray-900/20', border: 'border-l-transparent' };
    }
  };

  const colors = getColors();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border-l-4 ${colors.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{title}</h3>
        <div className={`p-2 rounded-lg ${colors.icon}`}>

          {icon}
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {formatCurrency(amount)}
        </span>
      </div>
    </motion.div>
  );
};
