import Image from "next/image"
import { enTofa } from "../../../utils/Utilities"

const products = [
    {id: 1, title: "محصول 1", price: "3000000", image: "/images/1.jpg"},
    {id: 2, title: "محصول 2", price: "550000", image: "/images/2.jpg"},
    {id: 3, title: "محصول 3", price: "1000000", image: "/images/3.jpg"},
    {id: 4, title: "محصول 4", price: "150000", image: "/images/1.jpg"},
]

export default function Cart() {

    let totalPrice = 0
    products.forEach(
        (product) => totalPrice += Number(product.price)
    )

    return(
        <div className="cart-grid">
            <div className="cart-box">
                <h2>سبد خرید</h2>

                {products.length == 0 && <div>سبد خرید خالی است</div>}

                {
                    products.length > 0 && (
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>کالا</th>
                                    <th>قیمت (تومان)</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    products.map(
                                        (product) => (
                                            <tr key={product.id}>
                                                <td className="cart-product">
                                                    <Image src={product.image} alt={product.title} width={80} height={50}
                                                    className="cart-product-image"/>
                                                    {product.title}
                                                </td>

                                                <td>{enTofa(product.price)}</td>
                                            </tr>
                                        )
                                    )
                                }

                                <tr>
                                    <td>مجموع</td>
                                    <td>{enTofa(totalPrice)}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                }
            </div>

            {
                products.length > 0 && (
                    <div className="cart-box">
                        <h2 className="cart-title">اطلاعات شما</h2>
                        <form className="cart-form">
                            <input type="text" className="cart-input" placeholder="نام"/>
                            <input type="text" className="cart-input" placeholder="ایمیل"/>
                            <input type="text" className="cart-input" placeholder="شهر"/>
                            <input type="text" className="cart-input" placeholder="کشور"/>
                            <input type="text" className="cart-input" placeholder="آدرس"/>
                            <input type="text" className="cart-input" placeholder="کد پستی"/>
                            <button className="cart-button">پرداخت انلاین</button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}