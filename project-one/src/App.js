import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h1>Let's get Started</h1>
      <ExpenseItem date = {new Date(2023, 7, 15)} title = 'Insurance' price = '50' city = 'Bangalore'></ExpenseItem>
      <ExpenseItem date = {new Date(2023, 8, 16)} title = 'Book' price = '20' city = 'Delhi'></ExpenseItem>
      <ExpenseItem date = {new Date(2023, 9, 17)} title = 'Pen' price = '10' city = 'Hyderabad'></ExpenseItem>
      <ExpenseItem date = {new Date(2023, 10, 18)} title = 'Laptop' price = '200' city = 'Mumbai'></ExpenseItem>
    </div>
  );
}

export default App;
