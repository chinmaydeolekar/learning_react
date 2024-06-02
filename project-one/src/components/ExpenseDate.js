import "./ExpenseDate.css";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function ExpenseDate(props) {
  const month = months[props.calenderDate.getMonth()];
  const year = props.calenderDate.getFullYear();
  const day = props.calenderDate.getDate();
  return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
  );
}

export default ExpenseDate;