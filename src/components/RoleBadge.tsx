import React from 'react';
import { useRole } from '../context/RoleContext';

export const RoleBadge: React.FC = () => {
  const { role } = useRole();

  const getBadgeColors = () => {
    switch (role) {
      case 'Admin': return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800';
      case 'Editor': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800';
      case 'Viewer': return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getBadgeColors()}`}>
      {role}
    </div>
  );
};
