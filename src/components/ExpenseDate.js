const ExpenseDate = (props) => {
  const year = props.expenseDate.toLocaleString("en-US", { year: "numeric" });
  const month = props.expenseDate.toLocaleString("en-US", { month: "long" });
  const day = props.expenseDate.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="dark:text-slate-300 dark:bg-slate-900 rounded-2xl border-2">
      <div className="font-bold text-lg">{year}</div>
      <div>{month}</div>
      <div className="text-2xl">{day}</div>
    </div>
  );
};

export default ExpenseDate;
