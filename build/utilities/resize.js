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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
//A Function to resize Images
const resize = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inputImage = path_1.default.resolve(__dirname, `../assets/images/${filename}.jpg`);
        const outputImage = path_1.default.resolve(__dirname, `../assets/cropped/${filename}x${width}x${height}.jpg`);
        //Cache block (conditional statement) for better performance and optimization
        if (yield fs_1.default.existsSync(outputImage)) {
            console.log("exists");
            return outputImage;
        }
        else {
            console.log("creating...");
            yield (0, sharp_1.default)(inputImage)
                .resize({ height: height, width: width })
                .toFormat("jpeg")
                .toFile(outputImage);
            return outputImage;
        }
    }
    catch (_a) {
        return "error";
    }
});
exports.default = resize;
