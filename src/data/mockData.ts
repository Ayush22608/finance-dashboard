export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: 'Food' | 'Transport' | 'Shopping' | 'Entertainment' | 'Health' | 'Utilities' | 'Income' | 'Subscription';
  description: string;
  status: 'Completed' | 'Pending' | 'Failed';
  type: 'expense' | 'income';
}

export const mockTransactions: Transaction[] = [
  { id: '1', date: '2026-03-28', amount: 120.50, category: 'Food', description: 'Grocery shopping at Market', status: 'Completed', type: 'expense' },
  { id: '2', date: '2026-03-27', amount: 3500.00, category: 'Income', description: 'Monthly Salary', status: 'Completed', type: 'income' },
  { id: '3', date: '2026-03-26', amount: 45.00, category: 'Transport', description: 'Uber ride', status: 'Completed', type: 'expense' },
  { id: '4', date: '2026-03-25', amount: 15.99, category: 'Subscription', description: 'Netflix subscription', status: 'Completed', type: 'expense' },
  { id: '5', date: '2026-03-24', amount: 200.00, category: 'Health', description: 'Pharmacy visit', status: 'Completed', type: 'expense' },
  { id: '6', date: '2026-03-23', amount: 50.00, category: 'Utilities', description: 'Internet bill', status: 'Completed', type: 'expense' },
  { id: '7', date: '2026-03-22', amount: 85.20, category: 'Shopping', description: 'Amazon purchase', status: 'Completed', type: 'expense' },
  { id: '8', date: '2026-03-21', amount: 35.50, category: 'Entertainment', description: 'Movie tickets', status: 'Completed', type: 'expense' },
  { id: '9', date: '2026-03-20', amount: 1200.00, category: 'Income', description: 'Freelance project payment', status: 'Completed', type: 'income' },
  { id: '10', date: '2026-03-19', amount: 95.00, category: 'Food', description: 'Dinner with friends', status: 'Completed', type: 'expense' },
  { id: '11', date: '2026-03-18', amount: 12.50, category: 'Transport', description: 'Bus pass', status: 'Completed', type: 'expense' },
  { id: '12', date: '2026-03-17', amount: 500.00, category: 'Shopping', description: 'New desk chair', status: 'Completed', type: 'expense' },
  { id: '13', date: '2026-03-16', amount: 40.00, category: 'Health', description: 'Gym membership', status: 'Completed', type: 'expense' },
  { id: '14', date: '2026-03-15', amount: 150.00, category: 'Utilities', description: 'Electricity bill', status: 'Completed', type: 'expense' },
  { id: '15', date: '2026-03-14', amount: 65.00, category: 'Food', description: 'Lunch takeout', status: 'Completed', type: 'expense' },
  { id: '16', date: '2026-03-13', amount: 300.00, category: 'Entertainment', description: 'Concert tickets', status: 'Completed', type: 'expense' },
  { id: '17', date: '2026-03-12', amount: 25.00, category: 'Subscription', description: 'Spotify', status: 'Completed', type: 'expense' },
  { id: '18', date: '2026-03-11', amount: 1000.00, category: 'Income', description: 'Bonus', status: 'Completed', type: 'income' },
  { id: '19', date: '2026-03-10', amount: 15.00, category: 'Food', description: 'Coffee shop', status: 'Completed', type: 'expense' },
  { id: '20', date: '2026-03-09', amount: 60.00, category: 'Transport', description: 'Gas station', status: 'Completed', type: 'expense' },
  { id: '21', date: '2026-03-08', amount: 20.00, category: 'Food', description: 'Pizza delivery', status: 'Completed', type: 'expense' },
  { id: '22', date: '2026-03-07', amount: 45.00, category: 'Shopping', description: 'Clothing store', status: 'Completed', type: 'expense' },
  { id: '23', date: '2026-03-06', amount: 120.00, category: 'Health', description: 'Doctor consultation', status: 'Completed', type: 'expense' },
  { id: '24', date: '2026-03-05', amount: 30.00, category: 'Utilities', description: 'Water bill', status: 'Completed', type: 'expense' },
  { id: '25', date: '2026-03-04', amount: 50.00, category: 'Entertainment', description: 'Museum visit', status: 'Completed', type: 'expense' },
  { id: '26', date: '2026-03-03', amount: 200.00, category: 'Shopping', description: 'Tech gadgets', status: 'Completed', type: 'expense' },
  { id: '27', date: '2026-03-02', amount: 4500.00, category: 'Income', description: 'Dividends', status: 'Completed', type: 'income' },
  { id: '28', date: '2026-03-01', amount: 10.00, category: 'Food', description: 'Snacks', status: 'Completed', type: 'expense' },
  { id: '29', date: '2026-02-28', amount: 80.00, category: 'Transport', description: 'Train tickets', status: 'Completed', type: 'expense' },
  { id: '30', date: '2026-02-27', amount: 55.00, category: 'Food', description: 'Fine dining', status: 'Completed', type: 'expense' },
  { id: '31', date: '2026-02-26', amount: 250.00, category: 'Shopping', description: 'Furniture', status: 'Completed', type: 'expense' },
  { id: '32', date: '2026-02-25', amount: 35.00, category: 'Health', description: 'Supplements', status: 'Completed', type: 'expense' },
  { id: '33', date: '2026-02-24', amount: 15.00, category: 'Subscription', description: 'iCloud Storage', status: 'Completed', type: 'expense' },
  { id: '34', date: '2026-02-23', amount: 120.00, category: 'Utilities', description: 'Gas bill', status: 'Completed', type: 'expense' },
  { id: '35', date: '2026-02-22', amount: 90.00, category: 'Entertainment', description: 'Video games', status: 'Completed', type: 'expense' },
  { id: '36', date: '2026-02-21', amount: 600.00, category: 'Income', description: 'Refund', status: 'Completed', type: 'income' },
  { id: '37', date: '2026-02-20', amount: 45.00, category: 'Food', description: 'Farmers market', status: 'Completed', type: 'expense' },
  { id: '38', date: '2026-02-19', amount: 20.00, category: 'Transport', description: 'Bike rental', status: 'Completed', type: 'expense' },
  { id: '39', date: '2026-02-18', amount: 75.00, category: 'Shopping', description: 'Library book buy', status: 'Completed', type: 'expense' },
  { id: '40', date: '2026-02-17', amount: 110.00, category: 'Health', description: 'Yoga class pack', status: 'Completed', type: 'expense' },
  { id: '41', date: '2026-02-16', amount: 3000.00, category: 'Income', description: 'Consulting fee', status: 'Completed', type: 'income' },
  { id: '42', date: '2026-02-15', amount: 40.00, category: 'Food', description: 'Brewery', status: 'Completed', type: 'expense' },
  { id: '43', date: '2026-02-14', amount: 150.00, category: 'Entertainment', description: 'Valentine dinner', status: 'Completed', type: 'expense' },
  { id: '44', date: '2026-02-13', amount: 50.00, category: 'Subscription', description: 'Adobe Creative Cloud', status: 'Completed', type: 'expense' },
  { id: '45', date: '2026-02-12', amount: 85.00, category: 'Utilities', description: 'Phone bill', status: 'Completed', type: 'expense' },
  { id: '46', date: '2026-02-11', amount: 120.00, category: 'Shopping', description: 'Home decor', status: 'Completed', type: 'expense' },
  { id: '47', date: '2026-02-10', amount: 500.00, category: 'Income', description: 'Gift', status: 'Completed', type: 'income' },
  { id: '48', date: '2026-02-09', amount: 35.00, category: 'Food', description: 'Bakery', status: 'Completed', type: 'expense' },
  { id: '49', date: '2026-02-08', amount: 60.00, category: 'Transport', description: 'Taxi ride', status: 'Completed', type: 'expense' },
  { id: '50', date: '2026-02-07', amount: 200.00, category: 'Health', description: 'Health checkup', status: 'Completed', type: 'expense' },
  { id: '51', date: '2026-02-06', amount: 15.00, category: 'Food', description: 'Ice cream', status: 'Completed', type: 'expense' },
  { id: '52', date: '2026-02-05', amount: 450.00, category: 'Income', description: 'Stock sale', status: 'Completed', type: 'income' },
];
