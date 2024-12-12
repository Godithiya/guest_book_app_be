const { request, response } = require("express")
const db = require("../../conn")

async function guest_delete( req = request, res = response ) {
    try {
          // ambil ID dari params
          const { ids } = req.body

          // hapus data berdasarkan ID
          const result = await db.guests.deleteMany({
              where: {
                 id: {
                    in : ids
                 } 
                }
          })
  
          // lempar response berhasil
            return res.status(201).json({
                success: true,
                message : `succes delete ${result.count} data !`
          })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
        console.log(error)
    }
}

module.exports = {
    guest_delete
}