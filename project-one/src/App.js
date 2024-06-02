import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expenses"

function App() {
  const expenses = [
    { id: 1, date: new Date(2023, 7, 15), title: 'Insurance', price: '100', city: 'Bangalore' },
    { id: 2, date : new Date(2023, 3, 25), title: 'Book', price: '10', city: 'Delhi' },
    { id: 3, date: new Date(2023, 10, 11), title: 'Pen', price: '1', city: 'Hyderabad' },
    { id: 4, date: new Date(2023, 1, 14), title: 'Laptop', price: '200', city: 'Mumbai' }
  ]
  return (
    <div>
      <h1>Let's get Started</h1>
      {
        // expenses.map((expense, index) => {
        //   return (
        //     <ExpenseItem
        //       key={expense.id}
        //       date={expense.date}
        //       title={expense.title}
        //       price={expense.price}
        //       location={expense.city}
        //     ></ExpenseItem>
        //   )
        // })
        <Expense expenses = {expenses}></Expense>
      }
    </div>
  );
} 

export default App;