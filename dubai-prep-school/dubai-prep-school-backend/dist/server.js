"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
try {
    mongoose_1.default.connect(config_1.default.DB_URI);
    app_1.default.listen(config_1.default.SERVER_PORT, () => {
        console.log(`Server is running on ${config_1.default.SERVER_PORT}`);
    });
}
catch (error) {
    console.log(error);
}
