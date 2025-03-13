import { Drawer } from 'antd'
import AppForm from './AppForm'

export default function AppDrawer({ drawerTitile, open, setOpen }) {
  const onClose = () => {
    setOpen(false)
  }

  return (
    <Drawer title={drawerTitile} onClose={onClose} open={open}>
      <AppForm drawerClose={onClose} />
    </Drawer>
  )
}
