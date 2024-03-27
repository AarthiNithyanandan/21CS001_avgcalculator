const express = require('express');
const { NumberModel, calAvg } = require('../models/average');
let numbers = [];
function calculateAvg(req, res) {
    const { number_id } = req.params;
    const { windowSize } = req.body;

    let numbers = [];
        if (!number_id) {
            return res.status(400).json({ error: 'Number id is missing' });
        }
    

    
    
switch (number_id) {
    case 'e': 
        for (let i = 2; numbers.length < windowSize; i += 2) {
            numbers.push(i);
        }
        break;
    case 'p': 
        for (let i = 2; numbers.length < windowSize; i++) {
            if (isPrime(i)) {
                numbers.push(i);
            }
        }
        break;
    case 'r':
        numbers = randomNumbers(windowSize);
        break;
    default:
        return res.status(400).json({ error: 'Invalid number id' });
}


const average = calculateAvg(numbers);

res.json({
    numbers,
    avg: average.toFixed(2) 
});



function isPrime(num) {
if (num <= 1) return false;
if (num <= 3) return true;
if (num % 2 === 0 || num % 3 === 0) return false;
for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
}
return true;
}


function randomNumbers(count) {
const numbers = [];
for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}
return numbers;
}
}

module.exports = {
calculateAvg
};