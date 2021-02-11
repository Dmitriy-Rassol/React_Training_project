export function TotalPriceItems (order) {
    return order.price * order.count;
};

export function formatCurrency (item) {
    return item.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})
}