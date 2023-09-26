const { users, admins, items } = require("../model/models");


const register = (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const password = req.body.password


    users.findOne({ email }).then(user => {
        if (user) {
            res.status(401).send("user already exist")
        }
        else {
            var newUser = new users({
                name,
                email,
                phone,
                password
            })
            newUser.save()

            res.status(200).send("user successfully added")
        }
    })

}

const login = (req, res) => {
    const { email, password } = req.body
    users.find({ email, password }).then(user => {
        if (user) {
            res.status(200).json(user)
        }
        else {
            res.status(401).json("incorrect email id or password")
        }
    })
}

const admnRegister = (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const password = req.body.password

    admins.find({ email }).then(admin => {
        if (admin) {
            res.status(401).send("admin already exist")
        }
        else {
            var newAdmin = new admins({
                name,
                email,
                phone,
                password
            })
            newAdmin.save()
            res.status(200).send("admin successfully added")
        }
    })
}

const adminLogin = (req, res) => {
    const { email, password } = req.body
    admins.findOne({ email, password }).then((admin) => {
        if (admin) {
            res.status(200).json(admin)
        }
        else {
            res.status(401).json("incorrect email id or password of admin")
        }
    })
}

const addProduct = (req, res) => {
    const { item, price, quantity } = req.body
    items.findOne({ item }).then(resp => {
        if (resp) {
            res.status(401).json("item already exist")
        }
        else {
            var newItem = new items({
                item,
                price,
                quantity
            })
            newItem.save()
            res.status(200).json("item saved")
        }
    })
}

const display = (req, res) => {
    var { email } = req.body

    admins.find({ email }).then((responce) => {
        if (responce) {
            items.find().then((responce => {
                res.status(200).json(responce)
            }))
        }
        else {
            res.status(401).json("admin not found")
        }
    })



}
const edit = (req, res) => {

    const {id,item, price, quantity } = req.body
    
    

    items.findOne({id}).then((responce => {
        if (responce) {
          
            responce.item=item
            responce.price=price
            responce.quantity=quantity

            responce.save()

            res.status(200).json(responce.item)

        }
        else {
            res.status(401).json('Id not found')
        }

    }))




}

const itemDelete=(req,res)=>{

    const id=req.id

    items.deleteOne({id}).then((responce=>{
        if(responce){
            res.status(200).json(responce)

        }
        else{
            res.status(401).json('Id not found')
        }
    
    }))
}

module.exports = {
    register,
    login,
    admnRegister,
    adminLogin,
    addProduct,
    display,
    edit,
    itemDelete
}