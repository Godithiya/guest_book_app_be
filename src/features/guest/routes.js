const { Router } = require("express")
const { guest_create, guest_create_params } = require("./create")
const { all_guest_list } = require("./list")
const { guest_delete } = require("./delete")
const { update_guest, guest_update } = require("./update")
const { guest_chance } = require("./guestChance")

const guest_routes = Router()

// Create Route //
// create with body
guest_routes.post("/api/guest/create", guest_create)
// create with params
guest_routes.post("/api/guest/create/params/:name/:address/:message", guest_create_params)

// List Route //
// get all list guest
guest_routes.get("/api/guest/list", all_guest_list)

// Delete Route
guest_routes.delete("/api/guest/delete", guest_delete)

// Update Route
guest_routes.patch("/api/guest/update/params/:id", update_guest)
// update vers 2
guest_routes.put (`/api/guest/update`, guest_update)

// create random data use chance.js
guest_routes.post(`/api/guest/create/random`, guest_chance)

module.exports = guest_routes