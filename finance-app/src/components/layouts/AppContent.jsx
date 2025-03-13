import { useAppContext } from '../../app-context'
import AppProfitAndLose from './AppProfitAndLose'
import AppCapitals from './AppCapitals'

export default function AppContent() {
  const { level } = useAppContext()

  return (
    <>
      {level === 'profitAndLose' && <AppProfitAndLose />}
      {level === 'activeAndPassive' && <AppCapitals />}
    </>
  )
}
