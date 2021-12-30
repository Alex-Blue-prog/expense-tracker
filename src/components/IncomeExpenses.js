import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);

    const incomeTotal = transactions.map(item => item.amount)
    .filter(item => item >= 0)
    .reduce((total, num) => total + num, 0);

    const expenseTotal = transactions.map(item => item.amount)
    .filter(item => item < 0)
    .reduce((total, num) => total + num, 0);

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${incomeTotal}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${Math.abs(expenseTotal)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses;
