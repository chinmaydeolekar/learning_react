// Write your code at relevant places in the code below:

import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
// const initialState = {
//     enteredTitle : "",
//     enteredAmount : "",
//     enteredDate : ""
//   }
  // const [userInput, setUserInput] = useState(initialState)
  const titleChangeHandler = (event) => {
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredTitle : event.target.value
    //     }
    // })
    // setUserInput({
    //     ...userInput,
    //     enteredTitle : event.target.value
    // })
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredAmount : event.target.value
    //     }
    // })
      // setUserInput({
      //       ...userInput,
      //       enteredAmount : event.target.value
      //   })
        setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate : event.target.value
    // })
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredDate : event.target.value
    //     }
    // })
  };

  const submmitChangeHandler = (event) => {
    setIsExpanded(!isExpanded);
    event.preventDefault();
    const infoToUpdate = {
      title: enteredTitle,
      price: +enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(infoToUpdate);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submmitChangeHandler}>
      { isExpanded && ( <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input type="text" value={enteredTitle} id="title" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="price">Price</label>
            <input type="number" value={enteredAmount} id="amount" onChange={amountChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              value={enteredDate}
              id="date"
              min="2023-01-01"
              max="2025-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div> )
      }
      {
        !isExpanded ? ( <button type="submit" onClick={submmitChangeHandler}>Add Expense</button> ) : ( <div className="new-expense__actions">
          <button type="submit">Cancel</button>
          <button type="submit" onSubmit={submmitChangeHandler}>Add Expense</button>
        </div> )
      }
    </form>
  );
};

export default ExpenseForm;