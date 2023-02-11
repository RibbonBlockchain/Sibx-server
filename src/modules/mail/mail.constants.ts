export const MAIL_SUBJECT = {
  VERIFY_ACCOUNT: "Verify your account",
};

export const MAIL_MESSAGE = {
  VERIFY_ACCOUNT: (token: string) =>
    `Kindly use click on the token <a href=${token}>${token}</a> to verify your sibx account `,
};
