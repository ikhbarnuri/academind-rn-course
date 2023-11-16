import ExpensesOutput from '../components/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expense-context';

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput expensesPeriod={'Total'} expenses={expensesCtx.expenses} />
  );
};

export default AllExpenses;
