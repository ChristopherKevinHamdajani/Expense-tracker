import './ExpenseItem.css'

function ExpenseItems() {
    const expenseName = 'Macbook Laptop';
    const expenseDate = new Date(2021,10,17);
    const expensePrice = 2199;
    return (
        <div className = "expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className = "expense-item__description">
                <h2>{expenseName}</h2>
                <div className = "expense-item__price">${expensePrice}</div>
            </div>
        </div>
    );
}
export default ExpenseItems;