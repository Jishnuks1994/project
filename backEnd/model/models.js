const mongoose=require('mongoose')

const users=new mongoose.model("users",{
    name:String,
    email:String,
    phone:Number,
    password:String
})

const admins=new mongoose.model("admins",{
    name:String,
    email:String,
    phone:Number,
    password:String
})

const items=new mongoose.model("items",{
    item:String,
    price:Number,
    quantity:String
})



module.exports={
    users,
    admins,
    items
}
