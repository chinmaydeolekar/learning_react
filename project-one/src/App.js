import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: 1, date: new Date(2023, 7, 15), title: 'Insurance', price: '50', city: 'Bangalore' },
    { id: 2, date : new Date(2023, 8, 16), title: 'Book', price: '20', city: 'Delhi' },
    { id: 3, date: new Date(2023, 9, 17), title: 'Pen', price: '10', city: 'Hyderabad' },
    { id: 4, date: new Date(2023, 10, 18), title: 'Laptop', price: '200', city: 'Mumbai' }
  ]
  return (
    <div>
      <h1>Let's get Started</h1>
      {
        expenses.map((expense, index) => {
          return (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              price={expense.price}
              city={expense.city}
            ></ExpenseItem>
          )
        })
      }
    </div>
  );
} 

export default App;
