const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

router.post('/', async (req, res) => {
    let user= await User.findOne({
        where:{email:req.body.email}
    })
    console.log(user)
})

___
router.get('/profile', async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                userId: __
            }
        })
        res.json(user)
    } catch {
        res.json(null)
    }
})


module.exports = router
