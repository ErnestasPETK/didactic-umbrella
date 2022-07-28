import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2022')
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear() === parseInt(filteredYear)}
  );

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <section className="dark:bg-slate-800 px-6 py-8 h-full w-full flex flex-wrap content-start gap-4 rounded-md">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <div className="dark:bg-slate-800 flex flex-wrap content-start gap-4">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
          key={expense.date.getTime()}
          expenseTitle={expense.title}
          expenseAmount={expense.amount}
          expenseDate={expense.date}
          />
          ))};
        </div>
    </section>
  );
};

export default Expenses;
