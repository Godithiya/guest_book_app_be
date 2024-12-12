const { request, response } = require("express")
const db = require ("../../conn")

async function update_guest (req = request, res = response) {
    try {
        const { id } = req.params

          const { name, address, message } = req.body;

          const result = await db.guests.update({
              where: { id: Number(id) },
              data: { name, address, message }
          });
  
          res.status(201).json({
              success: true,
              message: "Berhasil mengupdate data guest",
              data: result
          });
    } catch (error) {
        res.status(500).json({
            success: false,
            error : error.message
        })
        console.log(error)
    }
}

// update vers 2
async function guest_update(req = request, res = response){
    try {
        const { id, data } = await req.body
        const result = await db.guests.update({
            where : {
                id : id
            },
            data : data
        })
        res.status(201).json({
            success: true,
            message: "Berhasil mengupdate data guest",
            data : result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error : error.message
        })
        console.log(error)
    }
}

module.exports = {
    update_guest,
    guest_update
}