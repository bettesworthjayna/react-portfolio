"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const app = (0, express_1.default)();
const healthCheck = require('./routes/healthCheck');
const gcpRunGet = require('./routes/gcp-run-get');
const gcpRunCreate = require('./routes/gcp-run-create');
app.use(express_1.default.json());
app.use(cors());
app.use("/api/healthcheck", healthCheck);
app.use("/api/gcp/get", gcpRunGet);
app.use('/api/gcp/create', gcpRunCreate);
exports.default = app;