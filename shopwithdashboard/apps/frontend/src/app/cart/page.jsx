"use client"

import Image from "next/image"
import { enTofa } from "../../../utils/Utilities"
import { useContext } from "react"
import { CartContext } from "../../../contexts/CartCantext"
import TrashIcon from "../../../components/icons/Trash"


export default function Cart() {

    let {cart, removeFromCart, updateQuantity, getTotal} = useContext(CartContext)

    return(
        <div className="cart-grid">
            <div className="cart-box">
                <h2>سبد خرید</h2>

                {cart.length == 0 && <div>سبد خرید خالی است</div>}

                {
                    cart.length > 0 && (
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>کالا</th>
                                    <th>قیمت (تومان)</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    cart.map(
                                        (product) => (
                                            <tr key={product._id}>
                                                <td className="cart-product">
                                                    <Image src={product.image} alt={product.title} width={80} height={50}
                                                    className="cart-product-image"/>
                                                    <input type="number" value={product.quantity} min="1"
                                                    onChange={()=>updateQuantity(product._id, Number(event.target.value))}/>
                                                    <button onClick={()=> removeFromCart(product._id)}><TrashIcon/></button>
                                                    {product.title}
                                                </td>

                                                <td>{enTofa(product.price)}</td>
                                            </tr>
                                        )
                                    )
                                }

                                <tr>
                                    <td>مجموع</td>
                                    <td>{enTofa(getTotal())}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                }
            </div>

            {
                cart.length > 0 && (
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