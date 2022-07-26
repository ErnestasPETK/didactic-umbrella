import "./App.css";
import Expenses from "./components/Expenses";
function App() {
  return (
    <div className="dark">
      <main className="dark:bg-black px-6 py-8 h-screen w-screen">
        <Expenses />
      </main>
    </div>
  );
}

export default App;
