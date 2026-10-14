export function topCustomers(orders, n = 3) {
  return [...orders]
    .sort((a, b) => b.total - a.total)
    .slice(0, n)
    .map(order => order.customer);
}