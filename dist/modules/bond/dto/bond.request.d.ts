import { BOND_CATEGORY } from "@prisma/client";
export declare class CreateBondInput {
    name: string;
    image: string;
    organizationName: string;
    organizationEmail: string;
    phoneNumber: string;
    websiteUrl: string;
    companyRegistrationNumber: string;
    socialMedia: string[];
    organizationIncorporated: boolean;
    organizationLegalEstablishmentDate: string;
    organizationRevenue: string;
    amountToRaise: number;
    reasonForRaisingMoney: string;
    organizationHasLegalDocs: boolean;
    launchDate: string;
    serviceProvider: string;
    amountToBeRaised: string;
    duration: number;
    projectIrr: number;
    maxOutcomePay: number;
    transactionFee: number;
    totalPlatformCost: number;
    policyArea: string;
    targetPopulation: number;
    independentEvaluator: string;
    overallObjectives: string;
    outcomeMetrics: string;
    outcomeTarget: string;
    category: BOND_CATEGORY;
    description: string;
    facebookLink: string;
    linkedinLink: string;
    twitterLink: string;
    instagramLink: string;
    websiteLink: string;
    other: string;
}
export declare class UploadImageDto {
    imageFor: string;
}
