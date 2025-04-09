import { FiEdit, FiTrash2 } from "react-icons/fi"
import Product from "../../../models/Product"
import Link from "next/link"


export default async function Products(){

  const res = await fetch("http://localhost:3001/api/products")
  const products = await res.json()
  
    return(
      <div>
        <h1>This is products page</h1>
        <Link href={"/products/new"}>
          <button>Add new product</button>
        </Link>

        <table>
          <thead>
            <tr>
              <th>Product name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product=>(
                <tr key={product._id}>
                  <td>{product.title}</td>
                  <td>
                    <FiEdit />
                    <Link href={`products/delete/${product._id}`}>
                      <FiTrash2 />
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
}

