import React, {useState} from "react";

const ExpenseForm = (props) => {
  
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: ""
  });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle : event.target.value
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value
      }
    }
  );
  };

  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount : event.target.value
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value
      }
    }
  );
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate : event.target.value
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value
      }
    }
  );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onInsertExpenseData(userInput);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: ""
    });

  };
  return (
    <form className='px-4' action="" onSubmit={submitHandler}>
      <div className="w-1/2">
        <div className="flex flex-col justify-between">
          <label htmlFor="">Title</label>
          <input
            className="dark:text-black rounded-sm"
            type="text"
            value={userInput.enteredTitle}
            name=""
            id=""
            onChange={titleChangeHandler}
          />
        </div>
        <div className="flex flex-col justify-between">
          <label htmlFor="">Amount</label>
          <input
            className="dark:text-black rounded-sm"
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            name=""
            id=""
            onChange={amountChangeHandler}
          />
        </div>
        <div className="flex flex-col justify-between">
          <label htmlFor="">Date</label>
          <input
            className="dark:text-black rounded-sm"
            type="date"
            pattern="yyyy-mm-dd"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            name=""
            id=""
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div>
        <button
          className="border-2 rounded-lg px-2 mt-4 hover:bg-slate-600 active:bg-emerald-700"
          type="submit"
        >
          Add expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
