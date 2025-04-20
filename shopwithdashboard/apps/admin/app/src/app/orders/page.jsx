

export default async function Orders() {

  const res = await fetch("http://localhost:3001/api/orders")
  console.log("res",res)
  const orders = await res.json()


    return(
        <table>
          <thead>
            <tr>
              <th>نام کاربر</th>
              <th>ایمیل</th>
              <th>کشور - شهر - کد پستی</th>
              <th>جمع کل</th>
              <th>وضعیت</th>
              <th>تاریخ</th>
              <th>محصولات</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.user.name}</td>
                  <td>{order.user.email}</td>
                  <td>{order.user.country}-{order.user.city}-{order.user.postalCode}</td>
                  <td>{order.totalPrice} تومان</td>
                  <td>{order.status}</td>
                  <td style={{direction:"rtl"}}>
                    {new Intl.DateTimeFormat("fa-IR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(new Date(Number(order.createAt)))}
                  </td>
                  <td>{order.cart.map(item=>(
                    "  از"+item.title +" = "+ item.quantity + "عدد"
                  ))}</td>
              </tr>
              ))
            }
          </tbody>
        </table>
      )
}