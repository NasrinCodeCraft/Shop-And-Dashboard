import { FiEdit, FiTrash2 } from "react-icons/fi"
import Product from "../../../models/Product"


export default async function Products(){

  const res = await fetch("http://localhost:3001/api/products")
  const products = await res.json()
  
    return(
      <div>
        <h1>This is products page</h1>
        <button>Add new product</button>

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
                <tr>
                  <td>{product.title}</td>
                  <td>
                    <FiEdit />
                    <FiTrash2 />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
}

