"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Creating a Server
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3001;
// Routing the server to the route endpoint
app.use("/api/images", index_1.default);
app.listen(port, () => {
    console.log("listening on port");
});
exports.default = app;
