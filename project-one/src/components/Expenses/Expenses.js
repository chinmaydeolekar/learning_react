// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseLists";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No expenses found</p>
  // let extraText = "";
  
  // if (filteredExpenses.length == 1) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       date={expense.date}
  //       price={expense.price}
  //     />
  //   ))
  //   extraText =  <p>Only one expense here. Please add more</p>
  //   console.log(extraText)
  // }

  // if(filteredExpenses.length > 1) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       date={expense.date}
  //       price={expense.price}
  //     />
  //   ))
  // }
  // console.log(filteredExpenses, "filteredExpenses");
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpenseList items={filteredExpenses}/>
      {/* {expensesContent}
      {extraText} */}
    </Card>
  );
}

export default Expenses;
