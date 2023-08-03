"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const database = require('../database');
/**
 * @description Used to check if API is healthy and running.
 * @param {Request}     req Incoming request
 * @param {Response}    res Outgoing response
 * @returns {Response}      A 200 status indicates the API is healthy and running
 */
router.get('/', (req, res) => {
    return res.status(200).send(database);
});
module.exports = router;
