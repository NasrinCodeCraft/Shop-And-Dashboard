import { enTofa } from "../../../../utils/Utilities";

const products = [
    {id: 1, title: "محصول 1", price: "3000000", image: "/images/1.jpg"},
    {id: 2, title: "محصول 2", price: "550000", image: "/images/2.jpg"},
    {id: 3, title: "محصول 3", price: "1000000", image: "/images/3.jpg"},
    {id: 4, title: "محصول 4", price: "150000", image: "/images/1.jpg"},
]

export default function ProductDetail({params}) {

    const {id} = params;
    const mainProduct = products.find(
        (item)=> item.id == id
    )

    return(
        <div className="product-detail">
            <div className="product-detail-content">
                <div className="new-product-image">
                    <img src={mainProduct.image} alt={mainProduct.title} />
                </div>

                <div className="new-product-info">
                    <h1 className="new-product-title">{mainProduct.title}</h1>
                    <p className="new-product-description">{mainProduct.description}</p>
                    <div className="product-price-row">
                        <div className="product-price">{enTofa(mainProduct.price)}</div>
                        <button className="product-button">افزودن به سبد خرید</button>
                    </div>
                </div>
            </div>
        </div>
    )
}