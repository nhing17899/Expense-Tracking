import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import './Expense.css';

const Expense = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const filterHandler = (year) => {
        console.log('Take the year !');
        console.log(year);
        setSelectedYear(year);
    }

    const expenseFilteredYear = props.items.filter(item => {
        return item.date.getFullYear().toString() === selectedYear
    })

    return (
        <Card className='expense'>
            <ExpenseFilter selected={selectedYear} onFilter={filterHandler} />
            <ExpenseChart expenses={expenseFilteredYear} />
            <ExpenseList items={expenseFilteredYear} />
        </Card>
    )
}


export default Expense; 