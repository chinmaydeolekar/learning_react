import ExpenseItem from "./ExpenseItem";

function Expense(expenses) {
    const items = expenses.expenses;
    return (
        items.map((item, index) => {
          return (
            <ExpenseItem
              key={item.id}
              date={item.date}
              title={item.title}
              price={item.price}
              location={item.city}
            ></ExpenseItem>
          )
        })
    );
}

export default Expense