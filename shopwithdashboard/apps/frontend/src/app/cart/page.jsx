"use client"

import Image from "next/image"
import { enTofa } from "../../../utils/Utilities"
import { useContext, useState } from "react"
import { CartContext } from "../../../contexts/CartCantext"
import TrashIcon from "../../../components/icons/Trash"


export default function Cart() {

    let {cart, removeFromCart, updateQuantity, getTotal, clearCart} = useContext(CartContext)

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        country: "",
        city: "",
        address: "",
        postalCode: ""
    })

    function handleChange(e){
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()

        const orderData = {
            user: userInfo,
            cart,
            totalPrice: getTotal()
        } 

        try{
            const res = await fetch("http://localhost:3000/api/orders", {
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(orderData) 
            })

            if(res.ok){
                alert("سفارش شما ثبت شد")
                clearCart()
                setUserInfo({name:"", email:"", address:"", country:"", city:"", postalCode:""})
            }
            else {
                alert("خطا در ثبت سفارش")
            }
        } catch(error){
            alert("مشکل پیش اومده")
        }
    }

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
                        <form className="cart-form" onSubmit={handleSubmit}>
                            <input value={userInfo.name} onChange={handleChange} name="name" type="text" className="cart-input" placeholder="نام"/>
                            <input value={userInfo.email} onChange={handleChange} name="email" type="text" className="cart-input" placeholder="ایمیل"/>
                            <input value={userInfo.country} onChange={handleChange} name="country" type="text" className="cart-input" placeholder="کشور"/>
                            <input value={userInfo.city} onChange={handleChange} name="city" type="text" className="cart-input" placeholder="شهر"/>
                            <input value={userInfo.address} onChange={handleChange} name="address" type="text" className="cart-input" placeholder="آدرس"/>
                            <input value={userInfo.postalCode} onChange={handleChange} name="postalCode" type="text" className="cart-input" placeholder="کد پستی"/>
                            <button className="cart-button">پرداخت انلاین</button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}