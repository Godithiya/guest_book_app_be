const { request, response } = require("express")
const db = require("../../conn")

async function guest_create( req = request, res = response ){
    try {
        // ambil data dari request body
        const {name, address, message} =  req.body 
        // masukan data ke database
        const result = await db.guests.create({
            data : {name, address, message}
        })

        // lempar response data
        res.status(201).json({
            succes : true,
            message : "Berhasil tambah data guest"
        })
    } catch (error) {
        res.status(500).json({
            succes : false,
            error : error
        }) 
        console.log(error)
    }
}

async function guest_create_params( req = request, res = response ){
    try {
        const {name, address, message} = req.params

        const result = await db.guests.create ({
            data : {name, address, message}
        })

        res.status(201).json({
            succes : true,
            message : "Berhasil tambah data guest"
        })

    } catch (error) {
        res.status(500).json({
            succes : false,
            error : error
        })
        console.log(error)
    }
}

module.exports = {
    guest_create,
    guest_create_params
}