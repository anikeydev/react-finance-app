import { Card, Divider, Typography } from 'antd'
import { useAppContext } from '../../app-context'

const walletStyles = {
  width: '100%',
  height: '100%',
  marginLeft: '2rem',
  marginBottom: '.5rem',
  marginRight: '.5rem',
}

export default function AppWallet() {
  const { wallet } = useAppContext()
  return (
    <Card style={walletStyles}>
      <Typography.Title level={3} style={{ margin: 0 }}>
        Кошелёк
      </Typography.Title>
      <Divider />
      <Typography.Paragraph>
        Общее количество доходов: {wallet.totalCash}
      </Typography.Paragraph>
      <Typography.Paragraph>
        Общее количество трат: {wallet.totalLose}
      </Typography.Paragraph>
      <Typography.Paragraph>
        Всего транзакций: {wallet.amountTransactions}
      </Typography.Paragraph>
      <Typography.Paragraph>
        Текущий баланс: {wallet.currentValue}
      </Typography.Paragraph>
    </Card>
  )
}
