import { NextResponse } from "next/server";
import Product from "../../../../models/Product";
import { connectedToDatabase } from "../../../../lib/mongodb";

export async function GET(){
    try{
        await connectedToDatabase()
        const products = await Product.find({})
        return NextResponse.json(products, {status:200})
    }catch(error){
        return NextResponse.json({error:error}, {status:500})
    }
}