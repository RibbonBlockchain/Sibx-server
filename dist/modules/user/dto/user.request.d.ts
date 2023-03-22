import { ACCOUNT_TYPE } from "@prisma/client";
export declare class UserRegisterInput {
    name: string;
    username: string;
    email: string;
    password: string;
    accountType: ACCOUNT_TYPE;
}
export declare class UserProfileInput {
    phoneNumber: string;
    city: string;
    state: string;
    zipCode: string;
    addressOne: string;
    addressTwo: string;
}
