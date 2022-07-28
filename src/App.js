import React from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      title: "Car insurance",
      amount: "$295.00",
      date: new Date("2022", "06", "23"),
    },
    { title: "Rent", amount: "$800.00", date: new Date("2021", "07", "11") },
    {
      title: "Mobile payments",
      amount: "$95.00",
      date: new Date("2020", "08", "05"),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div className="dark">
      <main className="dark:bg-black px-6 py-8 overflow-auto scroll-smooth h-screen w-screen">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </main>
    </div>
  );
};

export default App;
