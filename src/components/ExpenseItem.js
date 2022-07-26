import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <Card className="dark:bg-slate-700 min-h-fit h-38 min-w-fit w-36 px-3 py-5 dark:text-white text-center">
      <ExpenseDate expenseDate={props.expenseDate} />
      <div className="mt-2">
        <h2>{props.expenseTitle}</h2>
        <div className="dark:text-slate-300">{props.expenseAmount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
