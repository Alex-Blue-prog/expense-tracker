export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION': 
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':

            let array1 = [...state.transactions];
            array1.unshift(action.payload);

            return {
                ...state, 
                transactions: array1
            }
        default: 
            return state;
    }
}