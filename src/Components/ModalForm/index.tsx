import { ChangeEvent, ComponentState, FC, SyntheticEvent } from "react";
import Expense from "../../models/Expense";
import ExpenseCategories from "../ExpenseCategories";
import styled from "styled-components";
import ReactDOM from 'react-dom'

interface ModalFormProps {
    handleSubmit: (e: SyntheticEvent) => void
    setExpense: ComponentState,
    expense: Expense
    isOpen?: boolean
    handleOpen: (value: boolean) => void
}

const ModalForm: FC<ModalFormProps> = ({ handleSubmit, setExpense, expense, isOpen, handleOpen }) => {
    if (!isOpen) {
        return null
    }
    return (
        ReactDOM.createPortal(
            <StyledModal>
                {isOpen &&
                    <StyledForm onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <StyledInput value={expense.name} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setExpense({
                                ...expense,
                                name: e.target.value
                            });
                        }} />
                        <label>Quantity: </label>
                        <StyledInput type={"number"} value={expense.quantity} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setExpense({
                                ...expense,
                                quantity: Number(e.target.value)
                            });
                        }} />
                        <label>Category: </label>
                        <StyledSelect value={expense.category} onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                            setExpense({
                                ...expense,
                                category: e.target.value
                            });
                        }}>
                            <ExpenseCategories />
                        </StyledSelect>
                        <button type="submit">Add</button>
                        <button onClick={() => handleOpen(false)}>Close</button>
                    </StyledForm>}
            </StyledModal>,
            document.getElementById('modal') as HTMLElement)
    )
}
export default ModalForm;

const StyledForm = styled.form`
        display: flex;
        flex-direction: column;
        max-width: fit-content;
        position: absolute;
        padding: 10px;
        background-color: white;
    `

const StyledInput = styled.input`
        padding: 10px;
    `

const StyledModal = styled.div`
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: rgb();
        opacity: 0.7;
    `

const StyledSelect = styled.select`
padding: 10px;
`