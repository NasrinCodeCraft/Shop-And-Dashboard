const { default: mongoose } = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    image: String,
    description: String
})

export default mongoose.model.Product || mongoose.model("Product", ProductSchema)