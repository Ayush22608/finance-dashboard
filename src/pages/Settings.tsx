import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useRole } from '../context/RoleContext';
import { motion } from 'framer-motion';

export const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { role, setRole } = useRole();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto space-y-12"
    >
      <h2 className="text-2xl font-bold dark:text-white">Settings</h2>

      <section className="space-y-6">
        <h3 className="text-lg font-semibold dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">Appearance</h3>
        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
          <div>
            <p className="font-medium dark:text-white">Dark Mode</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Toggle dark and light themes</p>
          </div>
          <button 
            role="switch"
            aria-checked={theme === 'dark'}
            onClick={toggleTheme}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
              theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-200'
            }`}
          >
            <span 
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
              }`} 
            />
          </button>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-lg font-semibold dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">User Role</h3>
        <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl space-y-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Set your account role to see how the dashboard UI adapts.</p>
          <div style={{ display: 'flex' }}>
            {(['Admin', 'Editor', 'Viewer'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '8px',
                  marginRight: '8px',
                  border: role === r ? '1px solid #4f46e5' : '1px solid #d1d5db',
                  backgroundColor: role === r ? '#4f46e5' : 'white',
                  color: role === r ? 'white' : '#374151'
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-lg font-semibold dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">Data Management</h3>
        <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl space-y-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Clear all transactions and reset the dashboard to its initial state.</p>
          <button 
            className="px-6 py-2 bg-red-50 text-red-600 border border-red-100 rounded-lg font-medium hover:bg-red-100 dark:bg-red-900/10 dark:border-red-900/20 transition-all"
            onClick={() => {
              if (confirm('Are you sure you want to clear all data?')) {
                localStorage.clear();
                window.location.reload();
              }
            }}
          >
            Reset All Data
          </button>
        </div>
      </section>
    </motion.div>
  );
};
