const { Schema, model } = require("mongoose");

const exampleSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    example: {
        type: String,
        required: true
    },
});

module.exports = { exampleModel: model("example", exampleSchema) };