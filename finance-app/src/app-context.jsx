import { createContext, useState, useEffect, useContext } from 'react'
import { transactionsData, capitalsData } from './data'
import { totalCash } from './utils'

const AppContext = createContext({
  transactions: [],
  capitals: [],
  level: null,
  wallet: {},
})

export function Wallet(data) {
  return {
    symbol: 'RUB',
    totalCash: data
      .filter((t) => t.typeTransaction === 'profit')
      .reduce((acc, t) => (acc += t.amount), 0),
    totalLose: data
      .filter((t) => t.typeTransaction === 'loss')
      .reduce((acc, t) => (acc += t.amount), 0),
    amountTransactions: data.length,
    currentValue: totalCash(data),
  }
}

export function AppContextProvider({ children }) {
  const [transactions, setTransactions] = useState([])
  const [capitals, setCapitals] = useState([])
  const [level, setLevel] = useState('profitAndLose') // activeAndPassive profitAndLose
  const [wallet, setWallet] = useState({})

  useEffect(() => {
    setTransactions(transactionsData)
    setCapitals(capitalsData)
    setWallet(Wallet(transactionsData))
  }, [])

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        capitals,
        setCapitals,
        level,
        setLevel,
        wallet,
        setWallet,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext

export function useAppContext() {
  return useContext(AppContext)
}
