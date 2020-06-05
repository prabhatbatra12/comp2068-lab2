'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    /**
     * Function calculates the value with the method option
     * @param {any} x
     * @param {any} y
     * @param {any} method
     */
    function parseUrl(x, y, method) {
        if (method === "add") {
            console.log(x + "+" + y + " = " + (parseInt(x) + parseInt(y)))
        } else if (method === "subtract") {
            console.log(x + "-" + y + " = " + (parseInt(x) - parseInt(y)))
        } else if (method === "multiply") {
            console.log(x + "*" + y + " = " + (parseInt(x) * parseInt(y)))
        } else if (method === "divide") {
            console.log(x + "/" + y + " = " + (parseInt(x) / parseInt(y)))
        } else {
            console.log("Wrong Method input. Please try again.")
        }
    }
        
        if (Object.keys(req.query).length != 0) {
            parseUrl(req.query.x, req.query.y, req.query.method)
        }
        res.render('index', { title: 'Express' });
});

module.exports = router;
