const { request, response } = require("express");
const Chance = require('chance');
const db = require("../../conn");

const chance = new Chance();

async function guest_chance(req = request, res = response) {
    try {
        const { name, address, message } = req.body;

        await db.guests.create({
            data: { 
                name, 
                address, 
                message
            }
        });

        const randomGuests = [];
        for (let i = 0; i < 10; i++) {
            randomGuests.push({
                name: chance.name(),
                address: chance.address(),
                message: chance.sentence(),
            });
        }

        await db.guests.createMany({
            data: randomGuests 
        });

        // Kirim response data
        res.status(201).json({
            success: true,
            message: "Berhasil tambah data guest acak",
            data: randomGuests
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
        console.log(error);
    }
}

module.exports = {
    guest_chance
}
