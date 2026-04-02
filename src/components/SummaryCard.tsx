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
  const getBorderColor = () => {
    switch (type) {
      case 'balance': 
        return '#22c55e';
      case 'income': 
        return '#3b82f6';
      case 'expense': 
        return '#ef4444';
      case 'savings': 
        return '#a855f7';
      default: 
        return 'transparent';
    }
  };

  const getIconColors = () => {
    switch (type) {
      case 'balance': 
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'income': 
        return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20';
      case 'expense': 
        return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      case 'savings': 
        return 'text-purple-600 bg-purple-50 dark:bg-purple-900/20';
      default: 
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const iconColors = getIconColors();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-[#1e293b]"
      style={{
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderLeft: `4px solid ${getBorderColor()}`,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{title}</h3>
        <div className={`p-2 rounded-lg ${iconColors}`}>

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
