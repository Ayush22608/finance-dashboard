import { useCallback } from 'react';
import { exportToCSV, exportToJSON } from '../utils/exportUtils';
import type { Transaction } from '../data/mockData';

export function useExport() {
  const exportData = useCallback((data: Transaction[], type: 'CSV' | 'JSON', filename: string) => {
    if (type === 'CSV') {
      exportToCSV(data, filename);
    } else {
      exportToJSON(data, filename);
    }
  }, []);

  return { exportData };
}
