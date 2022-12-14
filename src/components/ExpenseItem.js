import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
    console.log("CLicked", title);
  };

  return (
    <div className="expense-item">
      <div>
        <ExpenseDate
          date={props.date}
          amount={props.amount}
          title={props.title}
        />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </div>
  );
}

export default ExpenseItem;
