Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const output=[3, 7, 9].myFilter((n) => n > 2)
console.log(output)


const orders = [
  { id: 1, customer: "Aung", city: "Yangon", total: 25000, status: "paid" },
  { id: 2, customer: "Su", city: "Mandalay", total: 12000, status: "pending" },
  { id: 3, customer: "Kyaw", city: "Yangon", total: 40000, status: "paid" },
  {
    id: 4,
    customer: "Mya",
    city: "Mandalay",
    total: 8000,
    status: "cancelled",
  },
];

const cusName=orders.map(name => name.customer)
console.log(cusName)


const order=orders.filter(s => s.status==="pending")
console.log(order)

 
 const oName=orders.filter(stp => stp.status==="paid").map(name => name.customer)
 console.log(oName)

 const oId=orders.find(o => o.id===2)
 console.log(oId)

 const torder=orders.reduce((a,order) => a+order.total,0);
 console.log(torder)

 const cityTotals = orders.reduce((acc, order) => {
  acc[order.city] = (acc[order.city] || 0) + order.total;
  return acc;
}, {});

console.log(cityTotals);

const sortOrder=orders.sort((n1,n2) => n1.total-n2.total)
console.log(sortOrder)
