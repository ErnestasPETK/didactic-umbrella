import React from "react";

const ExpensesFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="w-full">
            <div className="flex justify-between w-full">
                <label className="dark:text-white" htmlFor="">Filter by year </label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-1/4" values={props.selected} onChange={dropdownChangeHandler} name="" id="">
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
};

export default ExpensesFilter;