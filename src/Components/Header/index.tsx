import { ChangeEvent, FC } from "react";
import Budget from "../../models/Budget";

interface HeaderProps {
    onChangeBudget: (e: ChangeEvent<HTMLInputElement>) => void
    handleBudget: () => void
    errorMessage: string
    resetExpenses: () => void
    budget: Budget
}

const Header: FC<HeaderProps> = ({ onChangeBudget, handleBudget, errorMessage, resetExpenses, budget }) => {
    return (
        <header>
            <h1>Budget Manager</h1>
            {!budget.success ? <>
                <input placeholder='Insert your budget' value={budget.value === 0 ? '' : budget.value} onChange={onChangeBudget} />
                <button onClick={handleBudget}>Add</button>
                {errorMessage && <p>{errorMessage}</p>}
            </> : <>
                <button onClick={resetExpenses}>Reset Expenses</button>
                <h1>Budget: {budget.value}</h1>
                <h2>Avariable: {budget.avariable}</h2>
                <h3>Expensed: {budget.expensed}</h3>
                <h4>Percentage: {budget.percentage}</h4>
            </>}
        </header>);
}
export default Header;