import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = () => {
    const [item, setItem] = useState("");
    const changeHandler = (event) => {
      console.log(event.target.value);
      setItem(event.target.value)
    }
    return (
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label className="">Title</label>
                <input type="text" onChange={changeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label className="">Amount</label>
                <input type="number" onChange={changeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label className="">Date</label>
                <input type="date" onChange={changeHandler}></input>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>             
        </div>
    );
}

export default ExpenseForm;