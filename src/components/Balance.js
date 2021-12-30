import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const balance = transactions.map(item => item.amount).reduce((total, num) => {
        return total + num;
    }, 0)

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id='balance'>${balance.toFixed(2)}</h1>
        </>
    )
}

export default Balance
