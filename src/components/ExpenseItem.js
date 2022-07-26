const ExpenseItem = () => {
  return (
    <div className="dark:bg-slate-700 h-fit w-fit px-3 py-5 rounded-lg shadow-xl dark:text-white text-center">
      <div className="dark:text-slate-500">2021-09-24</div>
      <div className="mt-2">
        <h2>Car insurance</h2>
        <div className="dark:text-slate-300">295e</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
