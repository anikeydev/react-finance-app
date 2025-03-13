export function totalCash(data) {
    let current = 0
    data.map((t) => {
    t.typeTransaction === 'profit' && (current += t.amount)
    t.typeTransaction === 'loss' && (current -= t.amount)
    })
    return current
}