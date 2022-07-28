import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const saveExpenseDataHandler = (insertedExpenseData) => {
    const expenseData = {
      ...insertedExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);

  };

  return (
    <Card className="dark:bg-slate-800 mb-4 dark:text-white">
      <ExpenseForm onInsertExpenseData={saveExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
