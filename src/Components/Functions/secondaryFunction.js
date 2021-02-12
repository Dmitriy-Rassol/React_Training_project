export function TotalPriceItems (order) {
    const countTopping = order.topping && order.topping.filter(item => item.checked).length;
    const priceTopping = (order.price * 0.1) * countTopping;
    return (order.price + priceTopping) * order.count;
};

export function formatCurrency (item) {
    return item.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})
}