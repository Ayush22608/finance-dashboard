import type { Transaction } from '../data/mockData';

export const exportToCSV = (data: Transaction[], filename: string) => {
  const headers = ['ID', 'Date', 'Amount', 'Category', 'Description', 'Status', 'Type'];
  const csvContent = [
    headers.join(','),
    ...data.map(item => [
      item.id,
      item.date,
      item.amount,
      item.category,
      `"${item.description}"`,
      item.status,
      item.type
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const exportToJSON = (data: any[], filename: string) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
