import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

// To handle the conditioal Content
const ExpensesList = (props) => {
  if (props.items.length == 0)
    return <h2 className="expenses-list__fallback">No Records Found.</h2>;

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          desc={item.title}
          amount={item.amount}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
