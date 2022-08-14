import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

import "./ExpensesRender.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [yearSelected, setYearSelected] = useState("");

  const onSaveExpenseFilterHandler = (event) => {
    setYearSelected(event);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearSelected;
  });

  console.log("Expenses.js", yearSelected);

/*Another way of diplsying filtered data
  let expensesContent = alert("No Items Found");
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      ></ExpenseItem>
  ))}
*/

  return (
    <div className="expenses">
      <ExpensesFilter
        onSaveExpenseFilter={onSaveExpenseFilterHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={ filteredExpenses}></ExpensesChart>
      <ExpensesList items={ filteredExpenses}></ExpensesList>
    </div>
  );
}
/* Alternative way with ternary expression
{filteredExpenses.length === 0
  ? alert("No Items Found")
  : filteredExpenses.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      ></ExpenseItem>
    ))}*/

export default Expenses;
