import { Layout, Card, Tag, Divider, Typography, List } from 'antd'
import { useAppContext } from '../../app-context'
import AppWallet from './AppWallet'

const appProfitAndLoseStyles = {
  width: '100%',
  display: 'flex',
  backgroundColor: '#457b9d',
  minHeight: 'calc(100vh - 60px)',
  height: 'calc(100% - 60px)',
  padding: '1rem',
}

export default function AppProfitAndLose() {
  const { transactions } = useAppContext()

  return (
    <Layout.Content style={appProfitAndLoseStyles}>
      <List
        itemLayout="vertical"
        size="small"
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        pagination={{
          onChange: (page) => {
            console.log(page)
          },
          pageSize: 4,
        }}
        dataSource={transactions}
        renderItem={(item) => (
          <Card
            key={item.index}
            size="small"
            style={{ width: 300, marginBottom: '.5rem' }}>
            <Tag
              color={item.typeTransaction === 'profit' ? 'success' : 'error'}
              bordered={false}
              style={{
                fontSize: '1rem',
                width: '100%',
                textAlign: 'center',
              }}>
              {item.typeTransaction === 'profit' ? 'Доход' : 'Расход'}
            </Tag>
            <Divider style={{ marginTop: '.5rem', marginBottom: '.5rem' }} />
            <Typography.Paragraph>
              <Typography.Text strong>Количество:</Typography.Text>{' '}
              {item.amount} {item.symbol}
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong>Категория:</Typography.Text>{' '}
              {item.category}
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong>Описание:</Typography.Text>{' '}
              {item.description}
            </Typography.Paragraph>
          </Card>
        )}
      />
      <AppWallet />
    </Layout.Content>
  )
}
