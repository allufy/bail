"use strict";
var __createBinding, __exportStar, __importDefault;
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const chalk = require("chalk");

// --- START ENHANCED DASHBOARD ---
console.clear();
console.log(chalk.cyan.bold('\n╔══════════════════════════════════════════════════════════════╗'));
console.log(chalk.cyan.bold('║') + chalk.white.bold('                    © O C H O B O T                         ') + chalk.cyan.bold('║'));
console.log(chalk.cyan.bold('╚══════════════════════════════════════════════════════════════╝\n'));

console.log(chalk.bold('🔰 O C H O B O T  V 6 . 0 B A I L S - B Y  A L  L U F F Y  🔰') + '\n');
console.log(chalk.cyan.bold('╭────────────────────────────────────────────────────────────╮'));
console.log(chalk.cyan.bold('│') + chalk.white.bold('        🚀 Bot is now online and ready to serve! 🚀          '));
console.log(chalk.cyan.bold('│') + chalk.white.bold('        ✨ Powered by Al Luffy Blazing API ✨                '));
console.log(chalk.cyan.bold('│') + chalk.white.bold('        📢 Telegram: t.me/alluffystore                       '));
console.log(chalk.cyan.bold('╰────────────────────────────────────────────────────────────╯') + '\n');

console.log(chalk.cyan.bold('                      O C H O B O T ~ V 6 . 0                      '));
console.log(chalk.cyan.bold('╭────────────────────────────────────────────────────────────╮'));
console.log(chalk.cyan.bold('│') + chalk.white('  ⏰ Start Time : ') + chalk.green.bold(new Date().toLocaleString()));
console.log(chalk.cyan.bold('│') + chalk.white('  📱 Platform   : ') + chalk.green.bold('Node.js'));
console.log(chalk.cyan.bold('│') + chalk.white('  ⚡ Status     : ') + chalk.green.bold('Active'));
console.log(chalk.cyan.bold('│') + chalk.white('  📡 Mode       : ') + chalk.green.bold('Public'));
console.log(chalk.cyan.bold('│') + chalk.white('  👑 Owner      : ') + chalk.green.bold('Al Luffy'));
console.log(chalk.cyan.bold('│') + chalk.white('  📲 Telegram   : ') + chalk.yellow.bold('@alluffystore'));
console.log(chalk.cyan.bold('╰────────────────────────────────────────────────────────────╯') + '\n');

console.log(chalk.cyan.bold('╚══════════════════════════════════════════════════════════════╝'));
// --- END ENHANCED DASHBOARD ---

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
