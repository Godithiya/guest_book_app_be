const { request, response } = require("express")
const db = require("../../conn")

async function all_guest_list( req = request, res = response ){
    try {
        const {page = 1, limit = 10} = req.query

        // pagination
        const take = parseInt(limit);
        const skip = ( parseInt(page) - 1) * take;
        
        const result = await db.guests.findMany({
            take : take,
            skip : skip
        });

        const total_data = await db.guests.count();

        return res.status(201).json({
            succes : true,
            current_page : parseInt(page),
            total_page : Math.ceil(total_data / limit),
            total_data : total_data,    
            query : result
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
    all_guest_list
}