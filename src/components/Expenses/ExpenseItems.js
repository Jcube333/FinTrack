import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const ExpenseItems = (props) => {
  const [year, setYear] = useState("2019");
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onFilterYear={filterChangeHandler} />
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
    </div>
  );
};

export default ExpenseItems;
