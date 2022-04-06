import { ChangeEvent, FC } from "react";
import Budget from "../../models/Budget";
import Expense from "../../models/Expense";
import ExpenseCategories from "../ExpenseCategories";

interface PropsHeader {
    filter: string
    onChangeFilter: (e: ChangeEvent<HTMLSelectElement>) => void
    budget: Budget
    listExpense: Array<Expense>
    handleOpen: (value: boolean) => void
}

const Main: FC<PropsHeader> = ({ filter, onChangeFilter, budget, listExpense, handleOpen }) => {
    return (
    <>
        {budget.success && 
        <main>
            <div>
                <h1>Filter:</h1>
                <select value={filter} onChange={onChangeFilter}>
                    <ExpenseCategories />
                </select>
            </div>
            <div>
                {listExpense.length > 0 ? <>
                    <h2>List of Expenses:</h2>
                    {listExpense.map(expense => 
                    <div>
                        <p>{expense.name}</p>
                        <p>{expense.quantity}</p>
                        <p>{expense.category}</p>
                    </div>)}
                </> : <div>There aren't Expenses to show</div>}
            </div>
            <button onClick={() => handleOpen(true)}>+</button>
        </main>}
        
    </>);
}

export default Main