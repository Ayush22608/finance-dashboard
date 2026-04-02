import React from 'react';
import type { Transaction } from '../data/mockData';
import { formatCurrency, formatDate } from '../utils/formatters';
import { useRole } from '../context/RoleContext';

interface TransactionTableProps {
  transactions: Transaction[];
  onDelete?: (id: string) => void;
}

export const TransactionTable: React.FC<TransactionTableProps> = ({ transactions, onDelete }) => {
  const { role } = useRole();
  const isAdmin = role === 'Admin';

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Description</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4">Status</th>
            {onDelete && isAdmin && <th className="px-6 py-4 text-right">Actions</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          {transactions.map((tx) => (
            <tr key={tx.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/20 even:bg-gray-50/50 dark:even:bg-gray-800/10 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {formatDate(tx.date)}
              </td>
              <td className="px-6 py-4">
                <span className="text-sm font-medium text-gray-900 dark:text-white">{tx.description}</span>
              </td>
              <td className="px-6 py-4">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                  {tx.category}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className={`text-sm font-semibold ${tx.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {tx.type === 'income' ? '+' : '-'}{formatCurrency(tx.amount)}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold text-white shadow-sm ${
                  tx.status === 'Completed' ? 'bg-green-500' : 
                  tx.status === 'Pending' ? 'bg-yellow-500' : 
                  'bg-red-500'
                }`}>
                  {tx.status}
                </span>
              </td>
              {onDelete && isAdmin && (
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={() => onDelete(tx.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
