"use strict";
var __createBinding, __exportStar, __importDefault;
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const chalk = require("chalk");

console.log(chalk.cyan.bold('\n╔══════════════════════════════════════════════════════════════╗'));
console.log(chalk.cyan.bold('║') + chalk.cyan.bold('                    © QQS SILENCE                         ') + '║');
console.log(chalk.cyan.bold('╚══════════════════════════════════════════════════════════════╝\n'));

console.log(chalk.bold('🔰 Q Q S - S I L E N C E  V 3 . 0 . 0 B A I L S - B Y O M H C  🔰') + '\n');
console.log(chalk.bold('╭────────────────────────────────────────────────────────────╮'));
console.log(chalk.bold('│') + chalk.cyan.bold('        🚀 Bot is now online and ready to serve! 🚀          '));
console.log(chalk.bold('│') + chalk.cyan.bold('        ✨ Powered by OmhcSilence Blazing API ✨                '));
console.log(chalk.bold('╰────────────────────────────────────────────────────────────╯') + '\n');

console.log(chalk.cyan.bold('                      QQS SILENCE v3.0.0                      '));
console.log(chalk.cyan.bold('╭────────────────────────────────────────────────────────────╮'));
console.log(chalk.bold('│') + chalk.green.bold('              ⏰ Start Time: ') + new Date().toLocaleString());
console.log(chalk.bold('│') + chalk.green.bold('              📱 Platform: Node.js'));
console.log(chalk.bold('│') + chalk.green.bold('              ⚡ Status: Active'));
console.log(chalk.bold('│') + chalk.green.bold('              📡 Mode: Public'));
console.log(chalk.bold('│') + chalk.green.bold('              👑 Owner: OmhcSilence'));
console.log(chalk.bold('│') + chalk.green.bold('              👥 Users: Online'));
console.log(chalk.bold('╰────────────────────────────────────────────────────────────╯') + '\n');

console.log(chalk.cyan.bold('╔══════════════════════════════════════════════════════════════╗'));

__createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
__exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
__importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);
exports.default = Socket_1.default;