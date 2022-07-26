import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
  const expenses = [
    {
      title: "Car insurance",
      amount: "$295.00",
      date: new Date("2022", "06", "23"),
    },
    { title: "Rent", amount: "$800.00", date: new Date("2022", "07", "11") },
    {
      title: "Mobile payments",
      amount: "$95.00",
      date: new Date("2022", "08", "05"),
    },
  ];
  return (
    <section className="dark:bg-slate-800 px-6 py-8 h-full w-full flex flex-wrap content-start gap-4 rounded-md">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.date.getTime()}
          expenseTitle={expense.title}
          expenseAmount={expense.amount}
          expenseDate={expense.date}
        />
      ))}
    </section>
  );
};

export default Expenses;
