import { Layout, Card, Typography, Tag, Divider, List } from 'antd'
import { useAppContext } from '../../app-context'

const appCapitalsStyles = {
  width: '100%',
  backgroundColor: '#457b9d',
  minHeight: 'calc(100vh - 60px)',
  height: 'calc(100% - 60px)',
  padding: '1rem',
  display: 'flex',
}

export default function Capitals() {
  const { capitals } = useAppContext()
  const active = capitals.filter((c) => c.typeCapitals === 'active')
  const passive = capitals.filter((c) => c.typeCapitals === 'passive')

  function totalAmount(data) {
    const result = data.reduce((acc, d) => (acc += d.amount), 0)
    return result
  }

  return (
    <Layout.Content style={appCapitalsStyles}>
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '20%',
          marginRight: '1rem',
          height: '50%',
        }}>
        <Typography.Title level={3} style={{ color: '#52b69a' }}>
          Итого поступлений:
        </Typography.Title>
        <Divider
          variant="dashed"
          style={{
            borderColor: '#1d3557',
            marginTop: '.5rem',
            marginBottom: '.5rem',
          }}
        />
        <Typography.Text strong>{totalAmount(active)} RUB</Typography.Text>
        <Typography.Title level={3} style={{ color: '#E63946' }}>
          Итого трат:
        </Typography.Title>
        <Divider
          variant="dashed"
          style={{
            borderColor: '#1d3557',
            marginTop: '.5rem',
            marginBottom: '.5rem',
          }}
        />
        <Typography.Text strong>{totalAmount(passive)} RUB</Typography.Text>
        <Typography.Title level={3}>Остаток:</Typography.Title>
        <Divider
          variant="dashed"
          style={{
            borderColor: '#1d3557',
            marginTop: '.5rem',
            marginBottom: '.5rem',
          }}
        />
        <Typography.Text strong>
          {totalAmount(active) - totalAmount(passive)} RUB
        </Typography.Text>
      </Card>
      <Layout.Content
        style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
        <Card style={{ marginBottom: '1rem' }}>
          <Typography.Title level={3} style={{ margin: 0, color: '#52b69a' }}>
            Все активы
          </Typography.Title>
          <Divider
            variant="dashed"
            style={{
              borderColor: '#1d3557',
              marginTop: '.5rem',
              marginBottom: '.5rem',
            }}
          />
          <Typography.Text strong>
            Все поступления: {totalAmount(active)} RUB
          </Typography.Text>
          <Divider
            variant="dashed"
            style={{
              borderColor: '#1d3557',
              marginTop: '.5rem',
              marginBottom: '1rem',
            }}
          />
          <List
            grid={{
              gutter: 25,
              column: 4,
            }}
            style={{
              width: '100%',
              textAlign: 'center',
            }}
            pagination={{
              onChange: (page) => {
                console.log(page)
              },
              pageSize: 4,
            }}
            dataSource={active}
            renderItem={(item) => (
              <Card
                key={item.index}
                style={{
                  maxWidth: 350,
                  width: '80%',
                  marginBottom: '1rem',
                  background: '#cfe9e0',
                }}>
                <Tag
                  color={'success'}
                  bordered={false}
                  style={{
                    fontSize: '1rem',
                    width: '100%',
                    textAlign: 'center',
                  }}>
                  {'Актив'}
                </Tag>
                <Divider
                  style={{ marginTop: '.5rem', marginBottom: '.5rem' }}
                />
                <Typography.Paragraph>
                  <Typography.Text strong>Название:</Typography.Text>{' '}
                  {item.name}
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <Typography.Text strong>Поступление:</Typography.Text>{' '}
                  {item.amount} {item.symbol}
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <Typography.Text strong>Частотность:</Typography.Text>{' '}
                  {item.repeat}
                </Typography.Paragraph>
              </Card>
            )}
          />
        </Card>
        <Card>
          <Typography.Title level={3} style={{ margin: 0, color: '#E63946' }}>
            Все пассивы
          </Typography.Title>
          <Divider
            variant="dashed"
            style={{
              borderColor: '#1d3557',
              marginTop: '.5rem',
              marginBottom: '.5rem',
            }}
          />
          <Typography.Text strong>
            Все списания: {totalAmount(passive)} RUB
          </Typography.Text>
          <Divider
            variant="dashed"
            style={{
              borderColor: '#1d3557',
              marginTop: '.5rem',
              marginBottom: '1rem',
            }}
          />
          <List
            grid={{
              gutter: 25,
              column: 4,
            }}
            style={{
              width: '100%',
              textAlign: 'center',
            }}
            pagination={{
              onChange: (page) => {
                console.log(page)
              },
              pageSize: 4,
            }}
            dataSource={passive}
            renderItem={(item) => (
              <Card
                key={item.index}
                style={{
                  maxWidth: 350,
                  width: '80%',
                  marginBottom: '1rem',
                  background: '#ffc9c6',
                }}>
                <Tag
                  color={'error'}
                  bordered={false}
                  style={{
                    fontSize: '1rem',
                    width: '100%',
                    textAlign: 'center',
                  }}>
                  {'Пассив'}
                </Tag>
                <Divider
                  style={{ marginTop: '.5rem', marginBottom: '.5rem' }}
                />
                <Typography.Paragraph>
                  <Typography.Text strong>Название:</Typography.Text>{' '}
                  {item.name}
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <Typography.Text strong>Поступление:</Typography.Text>{' '}
                  {item.amount} {item.symbol}
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <Typography.Text strong>Частотность:</Typography.Text>{' '}
                  {item.repeat}
                </Typography.Paragraph>
              </Card>
            )}
          />
        </Card>
      </Layout.Content>
    </Layout.Content>
  )
}
