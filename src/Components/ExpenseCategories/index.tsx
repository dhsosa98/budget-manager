import { FC } from "react";

const ExpenseCategories: FC = () => {
    return (
        <>
            <option value="">--- Select ---</option>
            <option value="food">Food</option>
            <option value="save">Save</option>
            <option value="health">Health</option>
            <option value="home">Home</option>
            <option value="leisure">Leisure</option>
            <option value="expense">Other Expense</option>
            <option value="suscriptions">Suscriptions</option>
        </>
    );
}

export default ExpenseCategories;