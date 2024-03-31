import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2023, 3, 30).toISOString();
    const expenseItem = "Book";
    const expenseCost = "$10";
    const expenseCity = "Bangalore"
  return (
    <div className="expense-item">
      <div>{expenseDate}</div> 
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">{expenseCost}</div>
        <div className="expense-item__location">{expenseCity}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;