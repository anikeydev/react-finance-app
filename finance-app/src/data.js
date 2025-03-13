export const transactionsData = [
    {
        date: new Date(),
        typeTransaction: 'profit', // loss
        symbol: 'RUB',
        amount: 90000,
        category: 'salary',
        description: 'Зарплата'
    },
    {
        date: new Date(),
        typeTransaction: 'loss', // loss
        symbol: 'RUB',
        amount: 2500,
        category: 'store',
        description: 'Покупка продуктов'
    },
    {
        date: new Date(),
        typeTransaction: 'loss', // loss
        symbol: 'RUB',
        amount: 500,
        category: 'taxi',
        description: 'Оплата такси'
    },
    {
        date: new Date(),
        typeTransaction: 'profit', // loss
        symbol: 'RUB',
        amount: 20000,
        category: 'work',
        description: 'Подработка'
    },
    {
        date: new Date(),
        typeTransaction: 'loss', // loss
        symbol: 'RUB',
        amount: 5000,
        category: 'restaurant',
        description: 'Оплата ресторана'
    }
]

export const capitalsData = [
    {
        typeCapitals: 'active', // passive Capitals ошибка надо исправить название
        name: 'Работа',
        typePayment: 'profit',
        amount: 90000,
        symbol: 'RUB',
        repeat: '1M'
    },
    {
        typeCapitals: 'passive', // passive
        name: 'Домашние платежи',
        typePayment: 'payment',
        amount: 10000,
        symbol: 'RUB',
        repeat: '1M'
    },
    {
        typeCapitals: 'passive', // passive
        name: 'Платежи по кредитам',
        typePayment: 'payment',
        amount: 7000,
        symbol: 'RUB',
        repeat: '1M'
    },
    {
        typeCapitals: 'active', // passive
        name: 'Дивиденды',
        typePayment: 'dividends',
        amount: 5000,
        symbol: 'RUB',
        repeat: '1M'
    },
    {
        typeCapitals: 'passive', // passive
        name: 'Платеж по ипотеке',
        typePayment: 'payment',
        amount: 40000,
        symbol: 'RUB',
        repeat: '1M'
    },
]