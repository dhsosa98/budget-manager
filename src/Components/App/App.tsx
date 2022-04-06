import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { FC } from 'react'
import Budget from '../../models/Budget'
import Expense from '../../models/Expense'
import Header from '../Header'
import Main from '../Main'
import ModalForm from '../ModalForm'
import styled from 'styled-components'
import { GlobalStyle } from './styles'

const App: FC = () => {

  const [budget, setBudget] = useState<Budget>({ success: false, value: 0, avariable: 0, expensed: 0, percentage: 100 })
  const [listExpense, setListExpense] = useState<Array<Expense>>([])
  const [expense, setExpense] = useState<Expense>({ id: '', name: '', quantity: 0, category: '' })
  const [filter, setFilter] = useState<string>('')
  const [cacheExpense, setCacheExpense] = useState<Array<Expense>>([])
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const resetExpenses = () => {
    setListExpense([])
  }

  useEffect(() => {
    if (listExpense.length > 0) {
      let totalExpensed: number = 0
      listExpense.map((expense) => {
        totalExpensed += expense.quantity
      })
      setBudget({ ...budget, avariable: budget.value - totalExpensed, expensed: totalExpensed, percentage: (totalExpensed / (budget.value)) * 100 })
    }
  }, [listExpense])

  useEffect(() => {
    if (!filter) {
      return setListExpense([...cacheExpense])
    }
    return setListExpense(listExpense.filter((expense) => expense.category === filter))
  }, [filter])

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    if (!expense.name) {
      return
    }
    setListExpense([...listExpense, expense])
    setCacheExpense([...listExpense])
  }

  const onChangeBudget = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget({ ...budget, value: Number(e.currentTarget.value), avariable: Number(e.currentTarget.value) })
  }

  const handleBudget = () => {
    if (budget.value !== 0) {
      return setBudget({ ...budget, success: true })
    }
    return setErrorMessage('Not is a valid budget')
  }

  const onChangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value)
  }

  const handleOpen = (value: boolean)=>{
    setIsOpen(value)
  }

  return (
    <>
      <GlobalStyle />
      <StyledDiv />
      <div style={{"display": "grid"}}>
        <Header onChangeBudget={onChangeBudget} handleBudget={handleBudget} errorMessage={errorMessage} resetExpenses={resetExpenses} budget={budget} />
        <Main filter={filter} onChangeFilter={onChangeFilter} listExpense={listExpense} budget={budget} handleOpen={handleOpen} />
        <ModalForm handleSubmit={handleSubmit} setExpense={setExpense} expense={expense} handleOpen={handleOpen} isOpen={isOpen} />
      </div>
    </>
  )
}

export default App

const StyledDiv = styled.div`
  min-height: 60vh;
  width: 100%;
  background-color: #5a3a72;
  position: fixed;
  z-index: -1;
`


