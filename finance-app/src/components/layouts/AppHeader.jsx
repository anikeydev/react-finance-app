import { Layout, Select, Button } from 'antd'
import AppDrawer from './AppDrawer'
import { useAppContext } from '../../app-context'
import { useState } from 'react'

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  height: 60,
  alignItems: 'center',
  background: '#1d3557',
}

const selectStyles = {
  width: 200,
}

export default function AppHeader() {
  const { level, setLevel } = useAppContext()
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  function handleSelect(value) {
    console.log(value)
    setLevel(value)
  }
  return (
    <Layout.Header style={headerStyles}>
      <Select
        style={selectStyles}
        placeholder="Select level"
        defaultValue="profitAndLose"
        options={[
          { value: 'profitAndLose', label: 'Profit And Lose' },
          { value: 'activeAndPassive', label: 'Active And Passive' },
        ]}
        onSelect={handleSelect}
      />
      <Button type="default" onClick={showDrawer}>
        Добавить
      </Button>

      {level === 'profitAndLose' && (
        <AppDrawer
          drawerTitile="Добавить транзакцию"
          open={open}
          setOpen={setOpen}
        />
      )}
      {level === 'activeAndPassive' && (
        <AppDrawer
          drawerTitile="Добавить капитал"
          open={open}
          setOpen={setOpen}
        />
      )}
    </Layout.Header>
  )
}
