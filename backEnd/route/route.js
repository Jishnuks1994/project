const express=require('express')

const  logic=require('../controller/logic')

const router=new express.Router()

router.post('/store/customer-register',logic.register)
router.post('/store/customer-login',logic.login)
router.post('/store/admin-register',logic.admnRegister)
router.post('/store/admin-login',logic.adminLogin)
router.post('/store/admin-addProduct',logic.addProduct)
router.get('/store/admin-display',logic.display)
router.put('/store/admin-edit',logic.edit)
router.get('/store/admin-delete',logic.itemDelete)

module.exports=router