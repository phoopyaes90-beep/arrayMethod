export function revenueByCity(orders) {
    return orders.reduce((acc, order) => {
  acc[order.city] = (acc[order.city] || 0) + order.total;
  return acc;
    },{});
}