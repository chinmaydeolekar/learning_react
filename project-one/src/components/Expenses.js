import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(expenses) {
    const items = expenses.expenses;
    return (
      <Card className="expenses">
        {items.map((item, index) => {
          return (
            <ExpenseItem
              key={item.id}
              date={item.date}
              title={item.title}
              price={item.price}
              location={item.city}
            ></ExpenseItem>
          )
        })}
        </Card>
    );
}

export default Expenses