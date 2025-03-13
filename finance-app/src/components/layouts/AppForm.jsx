import { Form, InputNumber, Input, Select, Button } from 'antd'
import { useAppContext, Wallet } from '../../app-context'

export default function AppForm({ drawerClose }) {
  const [form] = Form.useForm()
  const {
    transactions,
    setTransactions,
    capitals,
    setCapitals,
    level,
    setWallet,
  } = useAppContext()

  function handleFormTransaction() {
    const transaction = {
      ...form.getFieldValue(),
      date: new Date(),
    }

    const newTransactions = [...transactions, transaction]

    setTransactions(newTransactions)
    setWallet(Wallet(newTransactions))
    drawerClose()
  }

  function handleFormCapital() {
    const capital = {
      ...form.getFieldValue(),
    }
    setCapitals([...capitals, capital])
    drawerClose()
  }

  function formTransaction() {
    return (
      <Form
        form={form}
        style={{
          width: 300,
          textAlign: 'center',
        }}
        variant="underlined"
        initialValues={{ symbol: 'RUB' }}>
        <Form.Item
          label="Тип транзакции:"
          name="typeTransaction"
          rules={[
            {
              required: true,
            },
          ]}>
          <Select
            style={{ width: '100%' }}
            options={[
              { value: 'profit', label: 'Поступление' },
              { value: 'loss', label: 'Спиcание' },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Категория:"
          name="category"
          rules={[
            {
              required: true,
            },
          ]}>
          <Select
            style={{ width: '100%' }}
            options={[
              { value: 'salary', label: 'Зарплата' },
              { value: 'store', label: 'Магазин' },
              { value: 'taxi', label: 'Такси' },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Сумма:"
          name="amount"
          rules={[
            {
              required: true,
            },
          ]}>
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Валюта:" name="symbol">
          <Select
            style={{ width: '100%' }}
            options={[{ value: 'RUB', label: 'RUB' }]}
          />
        </Form.Item>
        <Form.Item label="Описание:" name="description">
          <Input style={{ width: '100%' }} />
        </Form.Item>
        <Button
          type="default"
          htmlType="submit"
          onClick={handleFormTransaction}>
          Добавить
        </Button>
      </Form>
    )
  }

  function formCapital() {
    return (
      <Form
        form={form}
        style={{
          width: 300,
          textAlign: 'center',
        }}
        variant="underlined"
        initialValues={{ symbol: 'RUB' }}>
        <Form.Item
          label="Тип капитала:"
          name="typeCapitals"
          rules={[
            {
              required: true,
            },
          ]}>
          <Select
            style={{ width: '100%' }}
            options={[
              { value: 'active', label: 'Актив' },
              { value: 'passive', label: 'Пассив' },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Тип платежа:"
          name="typePayment"
          rules={[
            {
              required: true,
            },
          ]}>
          <Select
            style={{ width: '100%' }}
            options={[
              { value: 'profit', label: 'Зарплата' },
              { value: 'payment', label: 'Платеж' },
              { value: 'dividends', label: 'Дивиденды' },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Сумма:"
          name="amount"
          rules={[
            {
              required: true,
            },
          ]}>
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Валюта:" name="symbol">
          <Select
            style={{ width: '100%' }}
            options={[{ value: 'RUB', label: 'RUB' }]}
          />
        </Form.Item>
        <Form.Item
          label="Частотность:"
          name="repeat"
          rules={[
            {
              required: true,
            },
          ]}>
          <Select
            style={{ width: '100%' }}
            options={[
              { value: '1Y', label: 'Раз в год' },
              { value: '1M', label: 'Раз в месяц' },
              { value: '1W', label: 'Раз в неделю' },
              { value: '1D', label: 'Раз в день' },
            ]}
          />
        </Form.Item>
        <Form.Item label="Название:" name="name">
          <Input style={{ width: '100%' }} />
        </Form.Item>
        <Button type="default" htmlType="submit" onClick={handleFormCapital}>
          Добавить
        </Button>
      </Form>
    )
  }

  return (
    <>
      {level === 'profitAndLose' && formTransaction()}
      {level === 'activeAndPassive' && formCapital()}
    </>
  )
}
