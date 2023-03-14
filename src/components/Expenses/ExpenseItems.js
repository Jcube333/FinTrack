import React, { useState } from "react";
import "./ExpenseItems.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ChartHolder from "./ChartHolder.js";

const ExpenseItems = (props) => {
  const [year, setYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredArray = props.expenses.filter((item) => {
    return item.date.getFullYear() == year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onFilterYear={filterChangeHandler} />
        <ChartHolder items={filteredArray} />
        <ExpensesList items={filteredArray}></ExpensesList>
      </Card>
    </div>
  );
};

export default ExpenseItems;
