import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');
  const filterChange = (data) =>{
       setYear(data)
  }
  const filterData =  props.items.filter(filter =>filter.date.getFullYear().toString() === year)
  return (
    <div>  
    <Card className="expenses">
      <ExpenseFilter onSelectedNewYear={filterChange} filterYear={year} />
      <ExpensesChart expenses={filterData} />
      {
     filterData.map(dt =>   (
          <ExpenseItem key={dt.id}
            title={dt.title}
            amount={dt.amount}
            date={dt.date}
          />
        ))
        }
    </Card>
    </div>
  );
}

export default Expenses;