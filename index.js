"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 8090;
const app = (0, express_1.default)();
app.get('/', (reg, res) => {
    res.json({
        msg: 'ok'
    });
});
app.listen(PORT, () => console.log('Servidor iniciado na porta' + PORT));
