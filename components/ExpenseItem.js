import './ExpenseItem.css'

function ExpenseItems() {
    return (
        <div className = "expense-item">
            <div>November 17th 2021</div>
            <div className = "expense-item__description">
                <h2>Gaming Laptop</h2>
                <div className = "expense-item__price">$2199</div>
            </div>
        </div>
    );
}
export default ExpenseItems;