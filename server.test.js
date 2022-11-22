const request = require("supertest");
const app = require ('./routes/User');
const mongoose = require('mongoose');



describe("Test the root path", () => {
    test("It should response the POST method", () => {
    const response = request(app).post("http://localhost:8000/User/add&quot"
    ).send ({
    "Name": "Faizan",
    "Email": "faizanjavid71@gmail.com",
    "Age": 12,
    "Contact": 123
    })
    expect(response.statusCode).toBe(200);
    })
    })