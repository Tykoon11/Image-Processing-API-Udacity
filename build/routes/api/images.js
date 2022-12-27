"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image = express_1.default.Router();
const photo = '../../images';
image.get('/', (req, res) => {
    res.send("image");
});
exports.default = image;
