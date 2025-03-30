import ProductList from "./ProductList"

const products = [
    {id: 1, title: "محصول 1", price: "3000000", image: "/images/1.jpg"},
    {id: 2, title: "محصول 2", price: "550000", image: "/images/2.jpg"},
    {id: 3, title: "محصول 3", price: "1000000", image: "/images/3.jpg"},
    {id: 4, title: "محصول 4", price: "150000", image: "/images/1.jpg"},
]


export default function LatestProducts(){

    return(
        <div className="new-products">
            <h2 className="title">محصولات پر فروش</h2>
            <ProductList products = {products}/>
        </div>
    )
}