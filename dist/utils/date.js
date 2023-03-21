"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unixToDaysLeft = exports.daysToUnix = void 0;
const daysToUnix = (days) => {
    return new Date().setDate(new Date().getDate() + days);
};
exports.daysToUnix = daysToUnix;
const unixToDaysLeft = (unix) => {
    const unixDaysLeft = new Date(unix).getTime() - new Date().getTime();
    return Math.ceil(unixDaysLeft / (1000 * 3600 * 24));
};
exports.unixToDaysLeft = unixToDaysLeft;
//# sourceMappingURL=date.js.map