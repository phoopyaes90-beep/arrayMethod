export function totalRevenue(orders) {
    return orders.reduce((acc,n)=> acc+n.total,0);
}