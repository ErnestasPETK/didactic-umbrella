import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className="dark dark:bg-slate-800">
      <main className="dark:bg-slate-800 px-6 py-8 h-screen w-screen">
        <ExpenseItem />
      </main>
    </div>
  );
}

export default App;
