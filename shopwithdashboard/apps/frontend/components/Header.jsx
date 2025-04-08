"use client"

import Link from "next/link";
import { useContext, useState } from "react";
import BarsIcon from "./icons/Bars";
import { enTofa } from "../utils/Utilities";
import { CartContext } from "../contexts/CartCantext";


export default function Header() {

    const [isactivemobile, setIsactivemobile] = useState(false);
    const {cart} = useContext(CartContext)

    return(
        <header className="header">
            <div className="header-wrapper">
                <Link className="logo" href={"/"}>
                    <img src="/images/logo.jpg" alt="logo"/>
                </Link>

                <nav className={`nav ${isactivemobile ? "active" : ""}`}>
                    <Link className="nav-link" href={"/"}>صفحه اصلی</Link>
                    <Link className="nav-link" href={"/products"}>محصولات</Link>
                    <Link className="nav-link" href={"/cart"}>سبد خرید</Link>
                    {cart.length>0 ? <span className="nav-link">{enTofa(cart.length)}</span> : ""}
                </nav>

                <button onClick={()=>setIsactivemobile((prev)=>!prev)} className="nav-button">
                    <BarsIcon />
                </button>
            </div>
        </header>
    )
}