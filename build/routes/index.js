"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize_1 = __importDefault(require("../utilities/resize"));
//Routing with request queries
const routes = express_1.default.Router();
//localhost:3001/api/images?filename=icelandwaterfall&width=600&height=600
routes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query);
        const filename = req.query.filename;
        const width = Number(req.query.width);
        const height = Number(req.query.height);
        const photo = yield (0, resize_1.default)(filename, width, height);
        console.log("Rendering file");
        res.sendFile(photo);
    }
    catch (_a) {
        console.log("Unable to Resize - Please check URL filename, height and width values!!");
        res.send("Unable to Resize - Please check URL filename, height and width values!!");
    }
}));
exports.default = routes;
