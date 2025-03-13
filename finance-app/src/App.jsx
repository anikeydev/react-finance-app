import { AppContextProvider } from './app-context'
import AppContent from './components/layouts/AppContent'
import AppHeader from './components/layouts/AppHeader'

export default function App() {
  return (
    <AppContextProvider>
      <AppHeader />
      <AppContent />
    </AppContextProvider>
  )
}
