import "./ExpenseItem.css";

function ExpenseItem(props) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const month = months[props.date.getMonth()];
  const year = props.date.getFullYear();
  const day = props.date.getDate();
  return (
    <div className="expense-item">
      {/* <div>{props.date.toISOString()}</div>  */}
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__location">{props.location}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;