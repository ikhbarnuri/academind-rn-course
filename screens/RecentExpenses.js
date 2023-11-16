import ExpensesOutput from '../components/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expense-context';
import { getDateMinusDays } from '../utils/date';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput expensesPeriod={'Last 7 Days'} expenses={recentExpenses} />
  );
};

export default RecentExpenses;
