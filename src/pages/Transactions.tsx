import React, { useState, useMemo } from 'react';
import { useFinance } from '../context/FinanceContext';
import { TransactionTable } from '../components/TransactionTable';
import { FilterBar } from '../components/FilterBar';
import { useExport } from '../hooks/useExport';
import { motion } from 'framer-motion';

export const Transactions: React.FC = () => {
  const { transactions, deleteTransaction } = useFinance();
  const { exportData } = useExport();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const categories = useMemo(() => {
    return Array.from(new Set(transactions.map(tx => tx.category)));
  }, [transactions]);

  const filteredTransactions = useMemo(() => {
    let result = [...transactions];

    if (searchTerm) {
      result = result.filter(tx => 
        tx.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tx.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter) {
      result = result.filter(tx => tx.category === categoryFilter);
    }

    result.sort((a, b) => {
      if (sortOrder === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortOrder === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortOrder === 'amount-high') return b.amount - a.amount;
      if (sortOrder === 'amount-low') return a.amount - b.amount;
      return 0;
    });

    return result;
  }, [transactions, searchTerm, categoryFilter, sortOrder]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Transactions</h2>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button 
            onClick={() => exportData(filteredTransactions, 'CSV', 'transactions')}
            style={{
              border: '1px solid #4f46e5',
              color: '#4f46e5',
              backgroundColor: 'white',
              padding: '8px 16px',
              borderRadius: '8px'
            }}
          >
            Export CSV
          </button>
          <button 
            style={{
              backgroundColor: '#4f46e5',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Add Transaction
          </button>
        </div>
      </div>

      <FilterBar 
        categories={categories}
        onSearchChange={setSearchTerm}
        onCategoryChange={setCategoryFilter}
        onSortChange={setSortOrder}
      />

      {filteredTransactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
          <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No transactions found</h3>
          <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      ) : (
        <TransactionTable 
          transactions={filteredTransactions} 
          onDelete={deleteTransaction}
        />
      )}
    </motion.div>
  );
};
