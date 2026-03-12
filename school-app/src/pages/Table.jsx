import {react, useEffect, useState} from "react";
export default function Table () {
    const[orders,setOrders] = useState([]);
    const[filtered,setFiltered] = useState([]);
    
  useEffect(()=>{
setOrders(fetchData);
setFiltered(orders.filter(order=>order.status === 'Approved'))

  },[])

    const fetchData =  
    
   [   { id: 1001, date: "2026-02-20T10:30:00Z", status: "Approved", amount: 2500 },
      { id: 1002, date: "2026-02-22T14:15:00Z", status: "Pending", amount: 1800 },
      { id: 1003, date: "2026-02-18T09:00:00Z", status: "Rejected", amount: 3200 },
      { id: 1004, date: "2026-02-25T16:45:00Z", status: "Pending", amount: 1500 },
      { id: 1005, date: "2026-02-21T11:20:00Z", status: "Approved", amount: 2750 },
      { id: 1006, date: "2026-02-19T13:10:00Z", status: "Rejected", amount: 2100 }];
    
  const filteredstatus=orders.filter(order=>order.status === "Approved").length;
   const pnding=orders.filter(order=>order.status === "Pending").length;
    const Rejectd=orders.filter(order=>order.status === "Rejected").length;
    return(
        <>
<h1>Table</h1>
<div>approved:{filteredstatus}</div>
<Table>
    <thead>
        <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>
                Status
            </th>
            <th>
                amount
            </th>
        </tr>
    </thead>
    <tbody>
        {filtered.map(order=>

     
        <tr key={order.id} >

            <td>
{order.id}
            </td>
            <td>
                {order.status}
            </td>
            <td>
                {order.amount}
            </td>   

        </tr>
        )}
    </tbody>
</Table>
            </>
    )
}
