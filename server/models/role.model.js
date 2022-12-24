const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    roleName: String
})

module.exports = mongoose.model('Role', RoleSchema);