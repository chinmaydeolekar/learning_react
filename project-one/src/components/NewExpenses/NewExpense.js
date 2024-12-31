import React from "react";
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (expenseData) => {
        console.log(expenseData, "heyyy");
        props.onUpdateExpenses(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;
