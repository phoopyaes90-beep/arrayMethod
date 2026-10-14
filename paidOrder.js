export function getPaidOrders(orders) {
  return orders.filter(order => order.status === "paid");
}