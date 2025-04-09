"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function EditProduct(){

    const {id} = useParams()
    const router = useRouter()

    const [formData, setFormData] = useState({
        title: "",
        price: "",
        image: "",
        description: "",
        category: ""
    })

    useEffect(
        ()=>{
            async function fetchProduct(){
                const res = await fetch(`http://localhost:3001/api/products/${id}`)
                const data = await res.json()
                console.log("data",data)
                setFormData(data.product)
            }
            fetchProduct()
        }
        ,[])

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()
        const res = await fetch(`http://localhost:3001/api/products/${id}`,{
            method: "PUT",
            header: {"content-type": "application/json"},
            body: JSON.stringify(formData)
        })
        
        console.log("res", res)

        if(res.ok){
            router.push("/products")
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={formData.title} onChange={handleChange} type="text" name="title" placeholder="title" />
                <input value={formData.image} onChange={handleChange} type="text" name="image" placeholder="image url" />
                <textarea value={formData.description} onChange={handleChange} name="description" placeholder="description"></textarea>
                <select value={formData.category} onChange={handleChange} name="category">
                    <option value="لپتاب"></option>
                    <option value="موبایل"></option>
                    <option value="تبلت"></option>
                </select>
                <button type="submit">save new info</button>
            </form>
        </div>
    )
}