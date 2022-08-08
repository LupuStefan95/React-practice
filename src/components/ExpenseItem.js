function ExpenseItem(props) {
  return (
    <div>
      <div>{props.date.toISOString()}</div>
      <div>
        <h2>{props.title}</h2>
        <div>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
