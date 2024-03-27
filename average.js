// models/averageCalculator.js

const mongoose = require('mongoose');

// Define schema for number data
const NumberSchema = new mongoose.Schema({
    number_id: {
        type: String,
        required: true
    },
    numbers: {
        type: [Number],
        required: true
    }
});
const NumberModel = mongoose.model('Number', NumberSchema);

function calculateAvg(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
module.exports = {
    NumberModel,
    calculateAvg
};
