"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAIL_MESSAGE = exports.MAIL_SUBJECT = void 0;
exports.MAIL_SUBJECT = {
    VERIFY_ACCOUNT: "Verify your account",
};
exports.MAIL_MESSAGE = {
    VERIFY_ACCOUNT: (token) => `Kindly use click on the token <a href=${token}>${token}</a> to verify your sibx account `,
};
//# sourceMappingURL=mail.constants.js.map