import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2023, 9, 17), price: 200 },
  ];

  const [ finalData, setExpenses ] = useState(expenses)

  const addExpenseHandler = (expense) => {
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={finalData} />
    </div>
  );
};

export default App;
