import "./ExpenseItems.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.expenses[0].date}
        desc={props.expenses[0].title}
        amount={props.expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[1].date}
        desc={props.expenses[1].title}
        amount={props.expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[2].date}
        desc={props.expenses[2].title}
        amount={props.expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[3].date}
        desc={props.expenses[3].title}
        amount={props.expenses[3].amount}
      ></ExpenseItem>
    </Card>
  );
};

export default ExpenseItems;
