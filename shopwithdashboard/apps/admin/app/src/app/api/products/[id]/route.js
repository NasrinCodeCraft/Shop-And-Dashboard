import { NextResponse } from "next/server";
import { connectedToDatabase } from "../../../../../lib/mongodb";
import Product from "../../../../../models/Product";


export async function DELETE(req, {params}){
    try{
        await connectedToDatabase()
        const {id} = params
        const product = await Product.findById(id)
        if(!product){
            return NextResponse.json({status:404})
        }

        await product.deleteOne()
        return NextResponse.json({status:200})
    }
    catch(error){
        return NextResponse.json({status:500})
    }
} 